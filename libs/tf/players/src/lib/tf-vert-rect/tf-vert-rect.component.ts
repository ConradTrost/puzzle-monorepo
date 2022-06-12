import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'tf-vert-rect',
  template:
    '<div id="tf-vert-rect-{{index}}" class="tf-vert-rect board-piece"></div>',
  styleUrls: ['./tf-vert-rect.component.scss'],
})
export class TfVertRectComponent implements OnInit {
  @Input() index = 1;

  ngOnInit(): void {
    console.log('TfVertRectComponent init');
  }
}
