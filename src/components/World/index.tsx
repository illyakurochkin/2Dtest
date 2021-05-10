import React from 'react';
import {Item} from "../../model";
import config from "../../config";

interface Props {
  items: Item[],
}

const World = ({items}: Props) => {
  const renderItems = () => items.map((item: Item) => (
    <div key={item.key} style={{
      position: 'absolute',
      bottom: item.y,
      left: item.x,
    }}>
      {item.render()}
    </div>
  ))

  return (
    <div style={{
      width: config.width,
      height: config.height,
      position: 'relative',
      border: '1px solid red',
    }}>
      {renderItems()}
    </div>
  );
};

export default World;
