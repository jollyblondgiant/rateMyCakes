import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-spot-cake',
  templateUrl: './spot-cake.component.html',
  styleUrls: ['./spot-cake.component.css']
})
export class SpotCakeComponent implements OnInit {
  @Input() cake: any
  seeComments: boolean
  constructor() { }

  ngOnInit() {
    this.getCake(this.cake)

  }
  getCake(cake){
    console.log(cake)
  }
  
}
