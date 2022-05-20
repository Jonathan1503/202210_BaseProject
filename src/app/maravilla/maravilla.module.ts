import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaravillaListComponent } from './maravilla-list/maravilla-list.component';
import { MaravillaDetailComponent } from './maravilla-detail/maravilla-detail.component';


@NgModule({
  imports: [
    CommonModule],
    exports:[MaravillaListComponent],
  declarations: [MaravillaListComponent,MaravillaDetailComponent]
})
export class MaravillaModule { }
