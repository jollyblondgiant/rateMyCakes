import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CakeService } from '../cake.service';



@Component({
  selector: 'app-view-cake',
  templateUrl: './view-cake.component.html',
  styleUrls: ['./view-cake.component.css']
})
export class ViewCakeComponent implements OnInit {
  @Input() cake: any
 
  cakes: object
  newCake:any
  thisCake: any
  seeCakes: boolean
  showCake: boolean
  comment:any
  constructor(private _cakeService: CakeService) { }

  ngOnInit(){

    this.comment = {
      comment: "",
      
    }
    this.newCake = {
      baker : "",
      name: "",
      description: "",
      image: "",
      
    }
    this.showCakes()
  }
  getCakes(){
    let observable = this._cakeService.getCakes()
    observable.subscribe(data => this.cakes = data)
  }
  showCakes(){
    this.getCakes()
 
  }
  addComment(cake){

    let observable = this._cakeService.editCake(cake._id, this.comment)
    observable.subscribe(data => console.log("UPCAKED", data))
  }
  
  getCakebyID(id){
    let observable = this._cakeService.getCakebyID(id)
    observable.subscribe(data =>{console.log("GOT CAKE HERE: "), data})
  }
  
}