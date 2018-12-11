import { Component, OnInit } from '@angular/core';
import { CakeService } from './cake.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  cakes: object
  newCake:any
  thisCake: any
  seeCakes: boolean
  
  comment:any
  // //////////////////////////////////////////////
  constructor(private _cakeService: CakeService) {
    
  }
  dataFromChild(data){
    console.log(data)
  }
// ///////////////////////////////////////////
  ngOnInit(){
    
    this.seeCakes = false
    this.comment = {
      comment: "",
      stars: null
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


  onSubmit(){
    console.log(this.newCake)
    let observable = this._cakeService.addCake(this.newCake)
    observable.subscribe(data => console.log("NEW CAEK!", data))
    this.newCake = {
      baker : "",
      name: "",
      description: "",
      image: "",
    }
    this.showCakes()
  } 
  printCake(cake){
    console.log(cake)
  }
  clickCake(cake){
    console.log("CAKE CLICK", cake)
    this.seeCakes = true
  var sum = 0
   
  for(let idx in cake.comments){
    sum += cake.comments[idx].stars
  }
  sum = Math.round((sum/cake.comments.length)*10)/10  
  
    

  this.thisCake = {
    name: cake.name,
    baker: cake.baker,
    rating: sum,
    comments: cake.comments,
    image : cake.image
  }
  
  }








}
