import { AfterViewInit, Component, HostListener, OnInit } from '@angular/core';
import { Block, blocks } from './tf-player.model';
import { TfPlayerService } from './tf-player.service';

export type Coordinates = {
  vert: number[][];
  horiz: number[][];
  lgSq: number[][];
  smSq: number[][];
};
@Component({
  selector: 'tf-players',
  templateUrl: './tf-player.component.html',
  styleUrls: ['./tf-player.component.scss'],
})
export class TfPlayerComponent {
  blocks: Block[] = [];
  activeIndex: number | null = null;
  initDrag: null | {
    x: number;
    y: number;
  } = null;

  constructor(private playerService: TfPlayerService) {
    this.blocks = blocks;
  }

  updateActiveElement(i: number) {
    const activeEls = document.querySelectorAll('[active]');
    activeEls.forEach((el) => el.removeAttribute('active'));
    const el = document.getElementById(`block-${i}`);
    if (!el) return;
    el.toggleAttribute('active');

    this.activeIndex = i;
    return el;
  }

  @HostListener('document:keyup', ['$event'])
  handleKeyboardEvent(e: KeyboardEvent) {
    const el = document.getElementById(`block-${this.activeIndex}`);
    if (!el || !this.activeIndex) return;

    const newCoords = this.playerService.handleKeyPress(
      e.key,
      this.blocks,
      this.activeIndex
    );
  }

  @HostListener('document:mouseup', ['$event'])
  handleMouseUp(e: MouseEvent) {
    if (!this.activeIndex || !this.initDrag) return;

    const dragDiff = {
      x: e.clientX - this.initDrag.x,
      y: e.clientY - this.initDrag.y,
    };

    const updatedBlock = this.playerService.handleMouseMove(
      dragDiff,
      this.blocks,
      this.activeIndex
    );

    if (!updatedBlock || (!updatedBlock.x && !updatedBlock.y)) return;

    this.blocks[this.activeIndex] = updatedBlock;
  }

  handleMouseDown(e: MouseEvent, i: number) {
    this.updateActiveElement(i);
    this.initDrag = {
      x: e.clientX,
      y: e.clientY,
    };
  }
}
