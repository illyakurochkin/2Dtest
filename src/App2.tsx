import React, {useEffect, useRef, useState} from 'react';
import {normalizeBounds} from "./model/item";
import {config} from "./model/config";
import {Point} from "./model/point";
import {functionAngle, Kinematic, moveKinematic, randomAngle} from "./model/kinematic";
import {move} from "./model/functional";

const INITIAL_ITEM = {
  x: 100,
  y: 0,
  initialX: 100,
  initialY: 0,
  direction: 1,
  funcX: 0,
  speed: 10,
  size: 2,
  angle: 0,
  func: (x: number) => x * x / 100,
};

type Circle = Kinematic<Point> & { size: number };

function App() {
  const [item, setItem] = useState<any>(INITIAL_ITEM);

  const canvas = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const context = canvas.current!.getContext("2d");

    context!.fillStyle = 'white';
    context!.fillRect(0, 0, 500, 500);
    context!.fillStyle = 'black';
    context!.strokeStyle = 'black';
    context!.ellipse(item.x, config.height - item.y, item.size, item.size, 0, 0, Math.PI * 2);
    context!.stroke();
  }, [item]);

  useEffect(() => {
    setTimeout(() => {
      setItem(move(item, 50));
      // setItem(normalizeBounds(moveKinematic(functionAngle(item, (x: number) => x * x / 100))));
    }, 10);
  }, [item]);

  return (
    <>
      <div>{item.direction % 4}</div>
      <div style={{border: '1px solid red', width: config.width, height: config.height}}>
        <canvas ref={canvas} width={config.width} height={config.height}/>
      </div>
    </>
  );
}

export default App;
