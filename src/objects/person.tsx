import {Item, ItemType} from "../model";
import config from "../config";
import React from "react";

export const createPerson = (person: any = {}) => ({
  x: 100,
  y: 100,
  key: 'person1',
  type: ItemType.OBJECT,

  vector: {x: 0.5, y: 0},

  move(items: Item[]) {
    return items.map((item: any) => {
      if(item.key === this.key) {

        const newItem = {...item};

        newItem.x = newItem.x + newItem.vector.x;
        newItem.y = newItem.y + newItem.vector.y;

        newItem.vector.y = newItem.vector.y - 0.1 + Math.random() / 10;
        newItem.vector.x = newItem.vector.y > 0 ? (newItem.vector.x + 0.1) : newItem.vector.x;



        if(newItem.x > config.width || newItem.x < 0) {
          newItem.vector.x = - newItem.vector.x;
          newItem.x = this.x + newItem.vector.x;
        }

        if(newItem.y > config.height || newItem.y < 0) {
          newItem.vector.y = - (newItem.vector.y - 1);
          newItem.y = this.y + newItem.vector.y;
        }

        return {
          ...newItem,
        }
      }

      return item;
    });
  },

  render() {
    return (
      <>
        <div>{Math.atan(this.vector.x / this.vector.y)}</div>
        <div>{JSON.stringify(this.vector)}</div>
        <div style={{
          width: 10,
          height: 40,
          borderRadius: 4,
          border: '1px solid gray',
          borderTop: '4px solid blue',
          transform: `rotate(${Math.atan(this.vector.x / this.vector.y) - Math.PI}rad)`,
          transition: 'all 100ms'
        }}/>
      </>
    )
  },
  ...person,
});
