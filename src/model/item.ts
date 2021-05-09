import {config} from "./config";
import {Point} from "./point";
import {Kinematic} from "./kinematic";

export const normalizeBounds = <P extends Point, T extends Kinematic<P>>(item: T) => {
  const normalizeX = () => item.x > config.width ? config.width : item.x < 0 ? 0 : item.x;
  const normalizeY = () => item.y > config.height ? config.height : item.y < 0 ? 0 : item.y;
  return ({
    ...item,
    x: normalizeX(),
    y: normalizeY(),
  });
};
