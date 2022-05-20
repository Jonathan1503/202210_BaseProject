import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaravillaListComponent } from './maravilla-list/maravilla-list.component';


@NgModule({
  imports: [
    CommonModule],
    exports:[MaravillaListComponent],
  declarations: [MaravillaListComponent]
})
export class MaravillaModule { }
