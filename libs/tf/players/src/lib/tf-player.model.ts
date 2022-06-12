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
  x: number;
  y: number;
  width: number;
  height: number;
  active: boolean;
};

export const blocks: Block[] = [
  {
    type: VERTICAL_RECTANGLE,
    x: 0,
    y: 0,
    width: 1,
    height: 2,
    active: false,
  },
  {
    type: VERTICAL_RECTANGLE,
    x: 0,
    y: 3,
    width: 1,
    height: 2,
    active: false,
  },
  {
    type: VERTICAL_RECTANGLE,
    x: 3,
    y: 0,
    width: 1,
    height: 2,
    active: false,
  },
  {
    type: VERTICAL_RECTANGLE,
    x: 3,
    y: 3,
    width: 1,
    height: 2,
    active: false,
  },
  {
    type: HORIZONTAL_RECTANGLE,
    x: 1,
    y: 2,
    width: 2,
    height: 1,
    active: false,
  },
  {
    type: SMALL_SQAURE,
    x: 1,
    y: 3,
    width: 1,
    height: 1,
    active: false,
  },
  {
    type: SMALL_SQAURE,
    x: 2,
    y: 3,
    width: 1,
    height: 1,
    active: false,
  },
  {
    type: SMALL_SQAURE,
    x: 1,
    y: 4,
    width: 1,
    height: 1,
    active: false,
  },
  {
    type: SMALL_SQAURE,
    x: 2,
    y: 3,
    width: 1,
    height: 1,
    active: false,
  },
  {
    type: LARGE_SQAURE,
    x: 1,
    y: 0,
    width: 2,
    height: 2,
    active: false,
  },
];
