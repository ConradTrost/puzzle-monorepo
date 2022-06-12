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
  selector: 'tf-sm-sq',
  template: `<div
    [ngStyle]="{ left: coords[0] + 'rem', top: coords[1] + 'rem' }"
    class="tf-sm-sq board-piece  {{ active ? 'active' : '' }}"
    (click)="onClick()"
  ></div>`,
  styleUrls: ['./tf-sm-sq.component.scss'],
})
export class TfSmSqComponent implements OnInit {
  active: boolean | null = null;

  @Input() coords = [0, 0];
  @Input() index!: number;
  @Output() handleMove = new EventEmitter<{
    key: string;
    playerType: PlayerType;
    index: number;
  }>();

  ngOnInit(): void {
    console.log('TfSmSqComponent init');
  }

  onClick() {
    this.active = true;
  }

  @HostListener('document:keyup', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (!this.active) return;
    this.handleMove.emit({
      key: event.key,
      playerType: 'smSq',
      index: this.index,
    });
    this.active = null;
  }
}
