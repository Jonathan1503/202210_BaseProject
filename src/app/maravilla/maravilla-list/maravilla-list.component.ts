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

  constructor(private maravillaService: MaravillaService) { }

  getMaravillas(): void {
    this.maravillaService.getMaravillas().subscribe((maravillas) => {
      this.maravillas = maravillas;
    });
  }

  ngOnInit() {
    this.getMaravillas();
  }

}
