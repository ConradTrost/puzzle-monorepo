import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { PlayerType } from '../tf-player.service';

@Component({
  selector: 'tf-vert-rect',
  template: `<div
    [ngStyle]="{ left: coords[0] + 'rem', top: coords[1] + 'rem' }"
    class="tf-vert-rect board-piece {{ active ? 'active' : '' }}"
    (click)="onClick()"
  ></div>`,
  styleUrls: ['./tf-vert-rect.component.scss'],
})
export class TfVertRectComponent implements OnInit {
  active: boolean | null = null;

  @Input() coords = [0, 0];
  @Input() index!: number;
  @Output() handleMove = new EventEmitter<{
    key: string;
    playerType: PlayerType;
    index: number;
  }>();

  ngOnInit(): void {
    console.log('TfVertRectComponent init');
  }

  onClick() {
    this.active = true;
  }

  @HostListener('document:keyup', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (!this.active) return;
    this.handleMove.emit({
      key: event.key,
      playerType: 'vert',
      index: this.index,
    });
    this.active = null;
  }
}
