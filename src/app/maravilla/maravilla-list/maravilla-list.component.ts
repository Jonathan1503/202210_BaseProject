import { Component, OnInit } from '@angular/core';
import { Maravilla } from '../maravilla';
import { MaravillaService } from '../maravilla.service';

@Component({
  selector: 'app-maravilla-list',
  templateUrl: './maravilla-list.component.html',
  styleUrls: ['./maravilla-list.component.css']
})
export class MaravillaListComponent implements OnInit {

  maravillas: Array<Maravilla>= [];
  selectedMaravilla!: Maravilla;
  selected = false;

  constructor(private maravillaService: MaravillaService) { }

  getMaravillas(): void {
    this.maravillaService.getMaravillas().subscribe((maravillas) => {
      this.maravillas = maravillas;
      this.maravillas= this.maravillas.sort((a, b) => a.country.localeCompare(b.country));
      let newid= 1;
      for (let m of this.maravillas){
        m.id= newid;
        newid += 1;
      }
    });
  }

  onSelected(maravilla: Maravilla): void {
    this.selected = true;
    this.selectedMaravilla = maravilla;
  }

  ngOnInit() {
    this.getMaravillas();

  }

}
