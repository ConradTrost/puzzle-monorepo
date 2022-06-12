import { Injectable } from '@angular/core';

export type PlayerType = 'vert' | 'horiz' | 'lgSq' | 'smSq';

@Injectable()
export class TfPlayerService {
  coords = {
    vert: [
      [0, 0],
      [0, 30],
      [30, 0],
      [30, 30],
    ],
    horiz: [[10, 20]],
    lgSq: [[10, 0]],
    smSq: [
      [10, 30],
      [20, 30],
      [10, 40],
      [20, 40],
    ],
  };

  validateMove(
    axis: 0 | 1,
    direction: 'negative' | 'positive',
    playerType: PlayerType,
    index: number
  ) {
    let result: number;

    const coordinates = this.coords[playerType][index];

    if (direction == 'positive') {
      result = coordinates[axis] + 10;
    } else {
      result = coordinates[axis] - 10;
    }

    // todo:: validate square collision
    // if (
    //   coordinates[axis] == this.coords.lgSq[axis] &&
    //   coordinates[axis_untouched] == this.coords.lgSq[axis_untouched]
    // ) {
    //   return;
    // }

    console.log(result);

    if (axis == 0) {
      if (result < 0 || result > 39) return;
    } else {
      if (result < 0 || result > 49) return;
    }

    this.coords[playerType][index][axis] = result;
  }

  handleMove(e: { key: string; playerType: PlayerType; index: number }) {
    switch (e.key) {
      case 'ArrowDown':
        this.validateMove(1, 'positive', e.playerType, e.index);
        break;
      case 'ArrowUp':
        this.validateMove(1, 'negative', e.playerType, e.index);
        break;
      case 'ArrowRight':
        this.validateMove(0, 'positive', e.playerType, e.index);
        break;
      case 'ArrowLeft':
        this.validateMove(0, 'negative', e.playerType, e.index);
        break;
    }
  }
}
