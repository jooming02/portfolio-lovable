export interface CardInfo {
  name?: string;
  title?: string;
  website?: string;
}

export interface LanyardProps {
  position?: [number, number, number];
  gravity?: [number, number, number];
  fov?: number;
  transparent?: boolean;
  cardInfo?: CardInfo;
}

export interface BandProps {
  maxSpeed?: number;
  minSpeed?: number;
  isMobile?: boolean;
  cardInfo?: CardInfo;
}
