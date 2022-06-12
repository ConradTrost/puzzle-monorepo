import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TfPlayerComponent } from './tf-player.component';
import { TfVertRectModule } from './tf-vert-rect/tf-vert-rect.module';
import { TfHorizRectModule } from './tf-horiz-rect/tf-horiz-rect.module';
import { TfLgSqModule } from './tf-lg-sq/tf-lg-sq.module';
import { TfSmSqModule } from './tf-sm-sq/tf-sm-sq.module';
import { TfPlayerService } from './tf-player.service';

@NgModule({
  imports: [
    CommonModule,
    TfVertRectModule,
    TfHorizRectModule,
    TfLgSqModule,
    TfSmSqModule,
  ],
  declarations: [TfPlayerComponent],
  providers: [TfPlayerService],
  exports: [TfPlayerComponent],
})
export class TfPlayerModule {}
