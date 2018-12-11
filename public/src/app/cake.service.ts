import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CakeService {

  constructor(private _http: HttpClient) {
  }
  getCakes(){
    return this._http.get('/cakes')
  }

  getCakebyID(id:string){
    return this._http.get(`/cakes/${id}`)
  }

  addCake(newCake){
    return this._http.post('/cakes', newCake)
  }
  destroyCake(cake){
    return this._http.delete(`/cakes/${cake}`)
  }
  editCake(cake, updateCake){
    console.log("UPDATECAKE", updateCake)
    return this._http.put(`/cakes/${cake}`, updateCake)
  }
}
