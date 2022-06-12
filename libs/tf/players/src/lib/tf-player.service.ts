import { Injectable } from '@angular/core';
import { Block } from './tf-player.model';

@Injectable()
export class TfPlayerService {
  validateMove(
    axis: 'y' | 'x',
    direction: 'negative' | 'positive',
    blockState: Block[],
    index: number
  ) {
    let result: number;

    const coords = {
      x: blockState[index].x,
      y: blockState[index].y,
    };

    if (direction == 'positive') {
      result = coords[axis] + 1;
    } else {
      result = coords[axis] - 1;
    }
    // todo:: validate square collision
    // if (
    //   coordinates[axis] == this.coords.lgSq[axis] &&
    //   coordinates[axis_untouched] == this.coords.lgSq[axis_untouched]
    // ) {
    //   return;
    // }

    if (axis == 'x') {
      if (result < 0 || result >= 4) return;
      return {
        ...blockState[index],
        x: result,
      };
    } else {
      if (result < 0 || result >= 5) return;
      return { ...blockState[index], y: result };
    }
  }

  handleKeyPress(key: string, blockState: Block[], index: number) {
    switch (key) {
      case 'ArrowDown':
        this.validateMove('y', 'positive', blockState, index);
        break;
      case 'ArrowUp':
        this.validateMove('y', 'negative', blockState, index);
        break;
      case 'ArrowRight':
        this.validateMove('x', 'positive', blockState, index);
        break;
      case 'ArrowLeft':
        this.validateMove('x', 'negative', blockState, index);
        break;
    }
  }

  handleMouseMove(
    diff: { x: number; y: number },
    blockState: Block[],
    index: number
  ) {
    // Get distance of mouse movement
    const greaterDiff = diff.x > diff.y ? diff.x : diff.y;

    if (Math.abs(greaterDiff) < 12) {
      return;
    }

    if (Math.abs(diff.x) > Math.abs(diff.y)) {
      const direction = diff.x > 0 ? 'positive' : 'negative';
      return this.validateMove('x', direction, blockState, index);
    } else {
      const direction = diff.y > 0 ? 'positive' : 'negative';
      return this.validateMove('y', direction, blockState, index);
    }
  }
}
