import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-points',
  templateUrl: './add-points.component.html',
  styleUrls: ['./add-points.component.css']
})
export class AddPointsComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  cancel(){
    this.router.navigate(['/Home'])
  }
}
