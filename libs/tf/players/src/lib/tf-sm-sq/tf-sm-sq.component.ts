import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'tf-sm-sq',
  template: '<div id="tf-sm-sq-{{index}}" class="tf-sm-sq board-piece"></div>',
  styleUrls: ['./tf-sm-sq.component.scss'],
})
export class TfSmSqComponent implements OnInit {
  @Input() index = 1;

  ngOnInit(): void {
    console.log('TfSmSqComponent init');
  }
}
