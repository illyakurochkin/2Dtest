import {Item, ItemType} from "../model";
import config from "../config";

export const createWind = (wind: any = {}) => (  {
  key: 'wind',
  type: ItemType.FORCE,
  x: 0,
  y: config.height / 2,

  vector: {
    x: 0.01,
    y: 0,
  },

  move(items: Item[]) {
    return items.map((item: Item) => {
      if(item.key === this.key) {
        return item;
      }

      const newItem = {...item};

      const vector = {
        x: newItem.x - this.x,
        y: newItem.y - this.y,
      }

      const length = Math.sqrt(vector.x * vector.x + vector.y * vector.y);
      const force = 1.1;

      const finalVector = {
        x: vector.x * force / length,
        y: vector.y * force / length,
      }

      return {
        ...newItem,
        x: newItem.x + finalVector.x,
        y: newItem.y + finalVector.y,
      }
    })
  },

  render() {
    return null;
  },
  ...wind,
})

export const createGravity = (gravity: any = {}) => ({
  key: 'gravity',
  type: ItemType.FORCE,
  x: 0,
  y: 0,

  move(items: Item[]) {
    return items.map((item: Item) => ({
      ...item,
      y: item.y - 10,
    }));
  },

  render() {
    return null;
  },
  ...gravity,
});
