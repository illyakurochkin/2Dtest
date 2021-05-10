
export enum ItemType {
  FORCE = 'FORCE',
  OBJECT = 'OBJECT',
};

export interface Item {
  key: string,
  type: ItemType,
  x: number,
  y: number,
  weight: number,
  move: (items: Item[]) => Item[],

  render: () => any,
}
