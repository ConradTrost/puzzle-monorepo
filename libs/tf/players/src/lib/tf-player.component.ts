import { Component, HostListener } from '@angular/core';
import { Blocks, blocks } from './tf-player.model';
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
  blocks: Blocks;
  activePlayerId: string | null = null;
  initDrag: null | [number, number] = null;

  constructor(private playerService: TfPlayerService) {
    this.blocks = blocks;
    console.log(blocks);
  }

  updateActiveElement(playerId: string) {
    const activeEls = document.querySelectorAll('[active]');
    activeEls.forEach((el) => el.removeAttribute('active'));
    const el = document.getElementById(`block-${playerId}`);
    if (!el) return;
    el.toggleAttribute('active');

    this.activePlayerId = playerId;
    return el;
  }

  @HostListener('document:keyup', ['$event'])
  handleKeyboardEvent(e: KeyboardEvent) {
    const el = document.getElementById(`block-${this.activePlayerId}`);
    if (!el || !this.activePlayerId) return;

    this.blocks[this.activePlayerId] = this.playerService.handleKeyPress(
      e.key,
      this.blocks[this.activePlayerId]
    );
  }

  @HostListener('document:mouseup', ['$event'])
  handleMouseUp(e: MouseEvent) {
    if (this.activePlayerId == null || !this.initDrag) return;

    const xDiff = e.clientX - this.initDrag[0];
    const yDiff = e.clientY - this.initDrag[1];

    const dragDiff: [number, number] = [xDiff, yDiff];

    this.blocks[this.activePlayerId] = this.playerService.handleMouseMove(
      dragDiff,
      this.blocks[this.activePlayerId]
    );
  }

  handleMouseDown(e: MouseEvent, playerId: string) {
    this.updateActiveElement(playerId);
    this.initDrag = [e.clientX, e.clientY];
  }
}
