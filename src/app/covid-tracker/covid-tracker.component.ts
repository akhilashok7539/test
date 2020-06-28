import { Component, OnInit } from '@angular/core';
import { CovidService } from '../covid.service';

@Component({
  selector: 'app-covid-tracker',
  templateUrl: './covid-tracker.component.html',
  styleUrls: ['./covid-tracker.component.css']
})
export class CovidTrackerComponent implements OnInit {
  results: any;

  constructor(private coividsersvice:CovidService) { }

  ngOnInit() {
      this.coividsersvice.getalldata().subscribe(
        data =>{
          this.results = data;
          console.log(this.results)
        },
        error =>{

        }
      )
  }

}
