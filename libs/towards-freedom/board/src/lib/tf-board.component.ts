import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tf-board',
  templateUrl: './tf-board.component.html',
  styleUrls: ['./tf-board.component.scss'],
})
export class TfBoardComponent implements OnInit {
  constructor() {
    console.log('TfBoardComponent constructor');
  }

  ngOnInit(): void {
    console.log('TfBoardComponent init!');
  }
}
