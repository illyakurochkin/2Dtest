import React, {useEffect, useState} from 'react';
import World from "./components/World";
import {Item, ItemType} from "./model";
import config from "./config";
import {createGravity, createWind} from "./objects/forces";
import {createPerson} from "./objects/person";
import {createTree} from "./objects/tree";

const INITIAL_ITEMS = [
  createTree({x: 150, y: 200, key: 'tree1'}),
  createTree({x: 40, y: 300, key: 'tree2'}),
  createGravity(),
  createWind(),
  createPerson(),
];

const normalize = (item: Item) => ({
  ...item,
  x: item.x > config.width ? config.width : item.x < 0 ? 0 : item.x,
  y: item.y > config.height ? config.height : item.y < 0 ? 0 : item.y,
})

function App() {
  const [items, setItems] = useState<Item[]>(INITIAL_ITEMS);
  const [iterator, setIterator] = useState<number>(0);

  useEffect(() => {
    setIterator(iterator + 1);
  }, [items]);

  useEffect(() => {
    setInterval(() => {
      setItems((items: Item[]) => {
        let currentItems = [...items];

        for(let i = 0; i < items.length; i++) {
          currentItems = items[i].move(currentItems)
            .map(normalize);
        }

        return currentItems;
      });
    }, 5);
  }, []);

  console.log('items', items);
  return (
    <div>
      <div>Iterator: {iterator}</div>
      <World items={items} />
    </div>
  )
}

export default App;
