import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { TfLayoutComponent } from '@puzzles-monorepo/towards-freedom/layout';

@Component({
  selector: 'tf-root',
  template: `<tf-layout></tf-layout> `,
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [TfLayoutComponent, CommonModule],
})
export class AppComponent {
  title = 'tf';
}
