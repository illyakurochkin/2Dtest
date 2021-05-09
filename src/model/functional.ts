import _ from 'lodash';
import {Point} from "./point";
import {config} from "./config";

export type FunctionalPoint<T = {}> = T & Point & {
  initialX: number;
  initialY: number,
  funcX: number,
  func: (x: number) => number,
  direction: number,
}

export const move = <T extends FunctionalPoint>(point: T, step = 1): T => {
  const newPoint = {...point, funcX: point.funcX + step};

  if(point.y < 0) {
    newPoint.funcX = 0;
    newPoint.initialX = point.x;
    newPoint.initialY = 0;
    newPoint.direction = _.sample([0,1,2,3]) || 0;
  }

  if(point.y > config.height) {
    newPoint.funcX = 0;
    newPoint.initialX = point.x;
    newPoint.initialY = config.height;
    newPoint.direction = _.sample([0,1,2,3]) || 0;
  }

  if(point.x > config.width) {
    newPoint.funcX = 0;
    newPoint.initialX = config.width;
    newPoint.initialY = point.y;
    newPoint.direction = _.sample([0,1,2,3]) || 0;
  }

  if(point.x < 0) {
    newPoint.funcX = 0;
    newPoint.initialX = 0;
    newPoint.initialY = point.y;
    newPoint.direction = _.sample([0,1,2,3]) || 0;
  }

  // if(newPoint.initialY === 0) {
  if(newPoint.direction % 4 === 0) {
    console.log('here newPoint', newPoint);
    return {
      ...newPoint,
      x: newPoint.initialX + newPoint.funcX,
      y: newPoint.initialY + newPoint.func(newPoint.funcX),//
    }
  }



  // if(newPoint.initialY === 0) {
  if(newPoint.direction % 4 === 1) {
    return {
      ...newPoint,
      x: newPoint.initialX - newPoint.funcX,
      y: newPoint.initialY + newPoint.func(newPoint.funcX),
    }
  }

  // if(newPoint.initialX === config.width) {
  if(newPoint.direction % 4 === 3) {
    return {
      ...newPoint,
      x: newPoint.initialX - newPoint.func(newPoint.funcX),
      y: newPoint.initialY - newPoint.funcX,
    }
  }

  // if(newPoint.initialX === 0) {
  if(newPoint.direction % 4 === 2) {
    return {
      ...newPoint,
      x: newPoint.initialX + newPoint.func(newPoint.funcX),
      y: newPoint.initialY + newPoint.funcX,
    }
  }

  return ({
    ...point,
    // x: point.x,
    // y: point.func(point.x)
  });
}
