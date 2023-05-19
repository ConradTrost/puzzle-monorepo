import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Block, blocks, Blocks } from './tf-player.model';

@Injectable()
export class TfPlayerService implements OnDestroy {
  private blocksStateSubject = new BehaviorSubject<Blocks>(blocks);

  blocksState$ = this.blocksStateSubject.asObservable();

  getValue() {
    return this.blocksStateSubject.value;
  }

  ngOnDestroy() {
    this.blocksStateSubject.complete();
  }

  moveBlock(
    axis: 0 | 1, // 0 = x, 1 = y
    direction: 'negative' | 'positive',
    activeBlockId: string
  ): void {
    const currentBlockState = this.getValue();
    const activeBlock = currentBlockState[activeBlockId];

    // Create a deep copy of the active block - having issues using directly
    const movedCoords = activeBlock.coords.map((subArr) =>
      subArr.map((coord) => coord)
    );

    if (direction === 'positive') {
      movedCoords.forEach((coord) => (coord[axis] = coord[axis] + 1));
    } else {
      movedCoords.forEach((coord) => (coord[axis] = coord[axis] - 1));
    }

    const isValid = this.isMoveValid(movedCoords, activeBlockId);

    if (!isValid) return;

    activeBlock.coords = movedCoords;

    this.blocksStateSubject.next(currentBlockState);
  }

  isMoveValid(movedCoords: number[][], activeBlockId: string) {
    const set = new Set<string>();
    const currentBlockState = this.getValue();

    // Convert each sub-array in the movedCoords to a string and add it to the set
    for (const coords of movedCoords) {
      const [x, y] = coords;

      // Check if the new coordinates violate the x and y value constraints
      if (x < 0 || x > 3 || y < 0 || y > 4) {
        return false;
      }

      set.add(JSON.stringify(coords));
    }

    // Check if any sub-array in the object's coords field matches a sub-array in the set
    // Also, check if any sub-array violates the x and y value constraints
    for (const [blockId, block] of Object.entries(currentBlockState)) {
      for (const coords of block.coords) {
        const coordsString = JSON.stringify(coords);

        // Check if the sub-array matches a sub-array in the set
        if (set.has(coordsString) && blockId !== activeBlockId) {
          console.log('path blocked');
          return false;
        }
      }
    }

    return true;
  }

  handleKeyPress(key: string, activeBlockId: string): void {
    switch (key) {
      case 'ArrowDown':
        return this.moveBlock(1, 'positive', activeBlockId);
      case 'ArrowUp':
        return this.moveBlock(1, 'negative', activeBlockId);
      case 'ArrowRight':
        return this.moveBlock(0, 'positive', activeBlockId);
      case 'ArrowLeft':
        return this.moveBlock(0, 'negative', activeBlockId);
    }
  }

  handleMouseMove(diff: [number, number], activeBlockId: string): void {
    if (Math.abs(diff[0]) > Math.abs(diff[1])) {
      const direction = diff[0] > 0 ? 'positive' : 'negative';
      this.moveBlock(0, direction, activeBlockId);
    } else {
      const direction = diff[1] > 0 ? 'positive' : 'negative';
      this.moveBlock(1, direction, activeBlockId);
    }
  }
}
