import {Item, ItemType} from "../model";
import React from "react";

export const createTree = (tree: any = {}) => ({
  key: 'tree1',
  type: ItemType.OBJECT,
  weight: 1000,

  move(items: Item[]) {
    return items;
  },

  render() {
    return (
      <div style={{
      width: 20,
        height: 100,
        border: 'green',
        borderRadius: 60,
        backgroundColor: 'green',
        borderBottom: '10px solid brown',
    }}/>
  )
  },
  ...tree,
});
