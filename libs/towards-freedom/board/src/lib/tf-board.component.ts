import { Component, OnInit } from '@angular/core';
import { TfPlayerComponent } from '@puzzles-monorepo/towards-freedom/players';

@Component({
  selector: 'tf-board',
  templateUrl: './tf-board.component.html',
  styleUrls: ['./tf-board.component.scss'],
  standalone: true,
  imports: [TfPlayerComponent],
})
export class TfBoardComponent implements OnInit {
  constructor() {
    console.log('TfBoardComponent constructor');
  }

  ngOnInit(): void {
    console.log('TfBoardComponent init!');
  }
}
