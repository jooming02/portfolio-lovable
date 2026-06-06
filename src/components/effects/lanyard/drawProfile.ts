function fitFontSize(
  ctx: CanvasRenderingContext2D,
  text: string,
  maxWidth: number,
  fontWeight: string | number,
  fontFamily: string,
  startSize: number
) {
  let size = startSize;
  while (size > 16) {
    ctx.font = `${fontWeight} ${size}px ${fontFamily}`;
    if (ctx.measureText(text).width <= maxWidth) return size;
    size -= 2;
  }
  return size;
}

/** Draw circular profile with ring glow outside the photo (not under it). */
export function drawCircularProfile(
  ctx: CanvasRenderingContext2D,
  img: HTMLImageElement,
  x: number,
  y: number,
  radius: number,
  baseColor: string
) {
  const glow = ctx.createRadialGradient(x, y, radius + 4, x, y, radius + 16);
  glow.addColorStop(0, "rgba(157, 5, 245, 0.45)");
  glow.addColorStop(1, "rgba(157, 5, 245, 0)");
  ctx.save();
  ctx.beginPath();
  ctx.arc(x, y, radius + 16, 0, Math.PI * 2);
  ctx.arc(x, y, radius, 0, Math.PI * 2, true);
  ctx.fillStyle = glow;
  ctx.fill("evenodd");
  ctx.restore();

  ctx.beginPath();
  ctx.arc(x, y, radius + 5, 0, Math.PI * 2);
  ctx.strokeStyle = "rgba(157, 5, 245, 0.85)";
  ctx.lineWidth = 5;
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(x, y, radius + 1, 0, Math.PI * 2);
  ctx.strokeStyle = "rgba(255, 255, 255, 0.3)";
  ctx.lineWidth = 2;
  ctx.stroke();

  ctx.save();
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.closePath();
  ctx.clip();

  ctx.fillStyle = baseColor;
  ctx.fillRect(x - radius, y - radius, radius * 2, radius * 2);

  const aspect = img.naturalWidth / img.naturalHeight;
  let drawW = radius * 2;
  let drawH = radius * 2;
  if (aspect > 1) drawW = drawH * aspect;
  else drawH = drawW / aspect;

  ctx.filter = "brightness(1) contrast(1.12) saturate(0.88)";
  ctx.drawImage(img, x - drawW / 2, y - drawH / 2, drawW, drawH);
  ctx.filter = "none";

  ctx.globalCompositeOperation = "multiply";
  ctx.fillStyle = "rgba(145, 110, 185, 0.42)";
  ctx.fillRect(x - radius, y - radius, radius * 2, radius * 2);
  ctx.globalCompositeOperation = "source-over";

  ctx.fillStyle = "rgba(8, 3, 20, 0.28)";
  ctx.fillRect(x - radius, y - radius, radius * 2, radius * 2);
  ctx.restore();
}

export { fitFontSize };
