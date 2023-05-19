import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TfBoardComponent } from './tf-board.component';
import { TfPlayerModule } from '@puzzles-monorepo/towards-freedom/players';

@NgModule({
  imports: [CommonModule, TfPlayerModule],
  declarations: [TfBoardComponent],
  exports: [TfBoardComponent],
})
export class TfBoardModule {}
