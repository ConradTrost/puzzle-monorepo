export const VERTICAL_RECTANGLE = 'VERT';
export const HORIZONTAL_RECTANGLE = 'HORIZ';
export const SMALL_SQAURE = 'SMSQ';
export const LARGE_SQAURE = 'LGSQ';

export type PlayerType =
  | typeof VERTICAL_RECTANGLE
  | typeof HORIZONTAL_RECTANGLE
  | typeof SMALL_SQAURE
  | typeof LARGE_SQAURE;

export type Block = {
  type: PlayerType;
  coords: number[][]; // [[x, y], [x, y]]
  active: boolean;
};

export type Blocks = {
  [key: string]: Block;
};

export const blocks: Blocks = {
  '0': {
    type: VERTICAL_RECTANGLE,
    coords: [
      [0, 0],
      [0, 1],
    ],
    active: false,
  },
  '1': {
    type: VERTICAL_RECTANGLE,
    coords: [
      [0, 3],
      [0, 4],
    ],
    active: false,
  },
  '2': {
    type: VERTICAL_RECTANGLE,
    coords: [
      [3, 0],
      [3, 1],
    ],
    active: false,
  },
  '3': {
    type: VERTICAL_RECTANGLE,
    coords: [
      [3, 3],
      [3, 4],
    ],
    active: false,
  },
  '4': {
    type: HORIZONTAL_RECTANGLE,
    coords: [
      [1, 2],
      [2, 2],
    ],
    active: false,
  },
  '5': {
    type: SMALL_SQAURE,
    coords: [[1, 3]],
    active: false,
  },
  '6': {
    type: SMALL_SQAURE,
    coords: [[2, 3]],
    active: false,
  },
  '7': {
    type: SMALL_SQAURE,
    coords: [[1, 4]],
    active: false,
  },
  '8': {
    type: SMALL_SQAURE,
    coords: [[2, 4]],
    active: false,
  },
  '9': {
    type: LARGE_SQAURE,
    coords: [
      [1, 0],
      [1, 1],
      [2, 0],
      [2, 1],
    ],
    active: false,
  },
};
