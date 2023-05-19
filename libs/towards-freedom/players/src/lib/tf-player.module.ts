import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TfPlayerComponent } from './tf-player.component';
import { TfPlayerService } from './tf-player.service';

@NgModule({
  imports: [CommonModule],
  declarations: [TfPlayerComponent],
  providers: [TfPlayerService],
  exports: [TfPlayerComponent],
})
export class TfPlayerModule {}
