import { PointData } from '../entities';

function calc(
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  x3: number,
  y3: number,
  x4: number,
  y4: number
) {
  const denominator = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);
  const t = ((x1 - x3) * (y3 - y4) - (y1 - y3) * (x3 - x4)) / denominator;
  const u = ((x1 - x3) * (y1 - y2) - (y1 - y3) * (x1 - x2)) / denominator;

  return {
    t,
    u,
  };
}

export function haveIntersectionPoint(
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  x3: number,
  y3: number,
  x4: number,
  y4: number
): boolean {
  const { t, u } = calc(x1, y1, x2, y2, x3, y3, x4, y4);

  if (t >= 0 && t <= 1 && u >= 0 && u <= 1) return true;
  return false;
}

export function getIntersectionPoint(
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  x3: number,
  y3: number,
  x4: number,
  y4: number
): PointData {
  const { t } = calc(x1, y1, x2, y2, x3, y3, x4, y4);

  const intersectionPointX = x1 + t * (x2 - x1);
  const intersectionPointY = y1 + t * (y2 - y1);

  return {
    x: intersectionPointX,
    y: intersectionPointY,
  };
}
