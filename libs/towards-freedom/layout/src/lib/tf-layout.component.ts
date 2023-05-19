import { Component, OnInit } from '@angular/core';
import { TfBoardComponent } from '@puzzles-monorepo/towards-freedom/board';

@Component({
  selector: 'tf-layout',
  templateUrl: './tf-layout.component.html',
  styleUrls: ['./tf-layout.component.scss'],
  standalone: true,
  exportAs: 'tfLayout',
  imports: [TfBoardComponent],
})
export class TfLayoutComponent {}
