import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tf-players',
  templateUrl: './tf-player.component.html',
  styleUrls: ['./tf-player.component.scss'],
})
export class TfPlayerComponent implements OnInit {
  ngOnInit(): void {
    console.log('TfPlayerComponent init');
  }
}
