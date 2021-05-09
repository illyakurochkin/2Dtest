import {Point} from "./point";
import _ from "lodash";

export type Kinematic<T extends Point> = T & {
  angle: number,
  speed: number,
};

export const moveKinematic = <P extends Point, T extends Kinematic<P>>(item: T) => {
  console.log('moveKinematic', item);
  return ({
    ...item,
    x: item.x + Math.sin(item.angle) * item.speed,
    y: item.y + Math.cos(item.angle) * item.speed,
  });
};

export const randomAngle = <P extends Point, T extends Kinematic<P>>(item: T) => ({
  ...item,
  angle: _.sample([1, 2, 3, 4])! * Math.PI / 2
});

export const functionAngle = <P extends Point, T extends Kinematic<P>>(
  item: T, func: (x: number) => number
) => {
  const newX = item.x + item.speed;
  const newY = func(newX);

  const newAngle = Math.atan2(Math.abs(newX - item.x), Math.abs(newY - item.y));
  return ({
    ...item,
    x: newX,
    y: newY,
    angle: newAngle,
  });
};
