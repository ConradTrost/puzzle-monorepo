import { Component, OnInit } from '@angular/core';
import { PlayerType, TfPlayerService } from './tf-player.service';

@Component({
  selector: 'tf-players',
  templateUrl: './tf-player.component.html',
  styleUrls: ['./tf-player.component.scss'],
})
export class TfPlayerComponent implements OnInit {
  coords: any;

  constructor(private playerService: TfPlayerService) {
    this.coords = this.playerService.coords;
  }

  ngOnInit(): void {
    console.log('TfPlayerComponent init');
  }

  handleMove(e: { key: string; playerType: PlayerType; index: number }) {
    this.playerService.handleMove(e);
    // this.coords = this.playerService.coords;
  }
}
