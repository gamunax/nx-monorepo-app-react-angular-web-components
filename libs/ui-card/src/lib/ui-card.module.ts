import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [CardComponent],
  exports: [CardComponent]
})
export class UiCardModule {}
