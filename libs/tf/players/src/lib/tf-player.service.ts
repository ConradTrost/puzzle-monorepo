import { Injectable } from '@angular/core';
import { Block, Blocks } from './tf-player.model';

@Injectable()
export class TfPlayerService {
  moveBlock(
    axis: 0 | 1, // 0 = x, 1 = y
    direction: 'negative' | 'positive',
    activeBlock: Block
  ): Block {
    // create a deep copy of the active block
    const movedCoords = activeBlock.coords.map((coord) => ({ ...coord }));

    if (direction == 'positive') {
      movedCoords.map((coord) => (coord[axis] = coord[axis] + 1));
    } else {
      movedCoords.map((coord) => (coord[axis] = coord[axis] - 1));
    }

    const isValid = this.isMoveValid(movedCoords);

    if (!isValid) return activeBlock;

    activeBlock.coords = movedCoords;
    return activeBlock;
  }

  isMoveValid(coords: number[][]) {
    let isValid = true;

    for (const coord of coords) {
      if (coord[0] < 0 || coord[1] < 0 || coord[0] > 3 || coord[1] > 4) {
        console.log('invalid move');
        isValid = false;
        break;
      } else {
        isValid = true;
      }
    }
    return isValid;
  }

  handleKeyPress(key: string, activeBlock: Block) {
    switch (key) {
      case 'ArrowDown':
        return this.moveBlock(1, 'positive', activeBlock);
      case 'ArrowUp':
        return this.moveBlock(1, 'negative', activeBlock);
      case 'ArrowRight':
        return this.moveBlock(0, 'positive', activeBlock);
      case 'ArrowLeft':
        return this.moveBlock(0, 'negative', activeBlock);
    }
    return activeBlock;
  }

  handleMouseMove(diff: [number, number], activeBlock: Block): Block {
    // Get distance of mouse movement
    const greaterDiff = diff[0] >= diff[1] ? diff[0] : diff[1];

    if (Math.abs(greaterDiff) < 4) {
      return activeBlock;
    }

    if (Math.abs(diff[0]) > Math.abs(diff[1])) {
      const direction = diff[0] > 0 ? 'positive' : 'negative';
      return this.moveBlock(0, direction, activeBlock);
    } else {
      const direction = diff[1] > 0 ? 'positive' : 'negative';
      return this.moveBlock(1, direction, activeBlock);
    }
  }
}
