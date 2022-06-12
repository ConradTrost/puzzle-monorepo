import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TfLayoutComponent } from './tf-layout.component';
import { TfBoardModule } from '@puzzles-monorepo/tf-board';

@NgModule({
  imports: [CommonModule, TfBoardModule],
  declarations: [TfLayoutComponent],
  exports: [TfLayoutComponent],
})
export class TfLayoutModule {}
