import { Component, HostListener } from '@angular/core';
import { KeyValuePipe, NgFor } from '@angular/common';

import { Blocks } from './tf-player.model';
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
  standalone: true,
  imports: [NgFor, KeyValuePipe],
  providers: [TfPlayerService],
})
export class TfPlayerComponent {
  blocks!: Blocks;
  activePlayerId: string | null = null;
  initDrag: null | [number, number] = null;

  constructor(private playerService: TfPlayerService) {
    this.playerService.blocksState$.subscribe((blocks) => {
      this.blocks = blocks;
    });
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
    e.preventDefault();
    const el = document.getElementById(`block-${this.activePlayerId}`);
    if (!el || !this.activePlayerId) return;

    this.playerService.handleKeyPress(e.key, this.activePlayerId);
  }

  @HostListener('document:mouseup', ['$event'])
  handleMouseUp(e: MouseEvent) {
    e.preventDefault();
    if (this.activePlayerId == null || !this.initDrag) return;

    const xDiff = e.clientX - this.initDrag[0];
    const yDiff = e.clientY - this.initDrag[1];

    const dragDiff: [number, number] = [xDiff, yDiff];
    console.log(dragDiff);

    this.playerService.handleMouseMove(dragDiff, this.activePlayerId);
  }

  // todo: update to use drag events for smoother dragging
  handleMouseDown(e: MouseEvent, playerId: string) {
    e.preventDefault();
    this.updateActiveElement(playerId);
    this.initDrag = [e.clientX, e.clientY];
    console.log(this.initDrag);
  }
}
