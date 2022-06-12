import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'tf-horiz-rect',
  template:
    '<div id="tf-horiz-rect-{{index}}" class="tf-horiz-rect board-piece"></div>',
  styleUrls: ['./tf-horiz-rect.component.scss'],
})
export class TfHorizRectComponent implements OnInit {
  @Input() index = 1;

  ngOnInit(): void {
    console.log('TfHorizRectComponent init');
  }
}
