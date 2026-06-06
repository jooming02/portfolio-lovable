import * as THREE from "three";
import type { CardInfo } from "./types";
import {
  CARD_DEFAULTS,
  CARD_LAYOUT,
  CARD_THEME,
  CARD_UV,
} from "./constants";
import { drawCircularProfile, fitFontSize } from "./drawProfile";

/** Builds the 2D badge image that maps onto the 3D card mesh */
export function createCardTexture(
  cardInfo: CardInfo | undefined,
  profileImage?: HTMLImageElement | null
): THREE.CanvasTexture {
  const w = CARD_UV.texWidth;
  const h = CARD_UV.texHeight;
  const faceW = w * CARD_UV.uMax;
  const faceH = h * CARD_UV.vMax;
  const padX = faceW * CARD_LAYOUT.padX;
  const maxTextW = faceW - padX * 2;
  const centerX = faceW / 2;

  const canvas = document.createElement("canvas");
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext("2d")!;

  drawBackground(ctx, faceW, faceH);
  drawBorder(ctx, faceW, faceH);

  const name = cardInfo?.name ?? CARD_DEFAULTS.name;
  const title = (cardInfo?.title ?? CARD_DEFAULTS.title).toUpperCase();
  const site = cardInfo?.website ?? CARD_DEFAULTS.website;

  drawHeader(ctx, faceW, faceH, padX);

  const profileRadius = faceW * CARD_LAYOUT.profileRadius;
  const profileY = faceH * CARD_LAYOUT.profileY;
  if (profileImage?.naturalWidth) {
    drawCircularProfile(
      ctx,
      profileImage,
      centerX,
      profileY,
      profileRadius,
      CARD_THEME.profileBase
    );
  }

  const nameY = profileY + profileRadius + faceH * CARD_LAYOUT.nameGap;
  drawTextContent(ctx, {
    centerX,
    faceH,
    maxTextW,
    name,
    title,
    site,
    nameY,
  });

  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 16;
  tex.flipY = false;
  tex.needsUpdate = true;
  return tex;
}

function drawBackground(
  ctx: CanvasRenderingContext2D,
  faceW: number,
  faceH: number
) {
  const [top, mid, bottom] = CARD_THEME.background;
  const grad = ctx.createLinearGradient(0, 0, faceW, faceH);
  grad.addColorStop(0, top);
  grad.addColorStop(0.5, mid);
  grad.addColorStop(1, bottom);
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, faceW, faceH);

  const blob = ctx.createRadialGradient(
    faceW * 0.88,
    faceH * 0.1,
    10,
    faceW * 0.88,
    faceH * 0.1,
    faceW * 0.32
  );
  blob.addColorStop(0, CARD_THEME.blobPrimary);
  blob.addColorStop(1, "rgba(157, 5, 245, 0)");
  ctx.fillStyle = blob;
  ctx.fillRect(0, 0, faceW, faceH);

  const blob2 = ctx.createRadialGradient(
    faceW * 0.08,
    faceH * 0.92,
    10,
    faceW * 0.08,
    faceH * 0.92,
    faceW * 0.28
  );
  blob2.addColorStop(0, CARD_THEME.blobSecondary);
  blob2.addColorStop(1, "rgba(245, 5, 225, 0)");
  ctx.fillStyle = blob2;
  ctx.fillRect(0, 0, faceW, faceH);
}

function drawBorder(
  ctx: CanvasRenderingContext2D,
  faceW: number,
  faceH: number
) {
  const inset = CARD_LAYOUT.borderInset;
  const w = faceW - inset * 2;
  const h = faceH - inset * 2;

  ctx.strokeStyle = CARD_THEME.borderGlow;
  ctx.lineWidth = 8;
  ctx.strokeRect(inset - 2, inset - 2, w + 4, h + 4);

  ctx.strokeStyle = CARD_THEME.border;
  ctx.lineWidth = 3;
  ctx.strokeRect(inset, inset, w, h);
}

function drawHeader(
  ctx: CanvasRenderingContext2D,
  faceW: number,
  faceH: number,
  padX: number
) {
  ctx.fillStyle = CARD_THEME.label;
  ctx.font = `600 ${Math.round(faceH * 0.028)}px ${CARD_THEME.fontBody}`;
  ctx.textAlign = "left";
  ctx.letterSpacing = CARD_THEME.labelLetterSpacing;
  ctx.fillText(CARD_DEFAULTS.label, padX, faceH * CARD_LAYOUT.labelY);
  ctx.letterSpacing = "0px";

  ctx.fillStyle = CARD_THEME.accent;
  ctx.beginPath();
  ctx.arc(faceW - padX, faceH * CARD_LAYOUT.accentDotY, 12, 0, Math.PI * 2);
  ctx.fill();
}

function drawTextContent(
  ctx: CanvasRenderingContext2D,
  opts: {
    centerX: number;
    faceH: number;
    maxTextW: number;
    name: string;
    title: string;
    site: string;
    nameY: number;
  }
) {
  const { centerX, faceH, maxTextW, name, title, site, nameY } = opts;

  ctx.textAlign = "center";

  const nameSize = fitFontSize(
    ctx,
    name,
    maxTextW,
    700,
    CARD_THEME.fontDisplay,
    Math.round(faceH * 0.085)
  );
  ctx.font = `700 ${nameSize}px ${CARD_THEME.fontDisplay}`;
  ctx.fillStyle = CARD_THEME.name;
  const nameMetrics = ctx.measureText(name);
  ctx.fillText(name, centerX, nameY);
  const nameBottom = nameY + nameMetrics.actualBoundingBoxDescent;

  ctx.letterSpacing = CARD_THEME.titleLetterSpacing;
  const titleSize = fitFontSize(
    ctx,
    title,
    maxTextW,
    500,
    CARD_THEME.fontBody,
    Math.round(faceH * 0.034)
  );
  ctx.font = `500 ${titleSize}px ${CARD_THEME.fontBody}`;
  const titleMetrics = ctx.measureText(title);
  const titleY =
    nameBottom +
    faceH * CARD_LAYOUT.titleGap +
    titleMetrics.actualBoundingBoxAscent;

  ctx.fillStyle = CARD_THEME.title;
  ctx.fillText(title, centerX, titleY);
  ctx.letterSpacing = "0px";

  const siteSize = fitFontSize(
    ctx,
    site,
    maxTextW,
    500,
    CARD_THEME.fontMono,
    Math.round(faceH * 0.026)
  );
  ctx.font = `500 ${siteSize}px ${CARD_THEME.fontMono}`;
  ctx.fillStyle = CARD_THEME.site;
  ctx.fillText(site, centerX, faceH * CARD_LAYOUT.siteY);
}
