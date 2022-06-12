import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'tf-lg-sq',
  template: '<div  id="tf-lg-sq-{{index}}" class="tf-lg-sq board-piece"></div>',
  styleUrls: ['./tf-lg-sq.component.scss'],
})
export class TfLgSqComponent implements OnInit {
  @Input() index = 1;

  ngOnInit(): void {
    console.log('TfLgSqComponent init');
  }
}
