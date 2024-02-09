import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CartsService {

  constructor(private http:HttpClient) { }

  public cartData = new Subject();

  createNewCart(model:any) {
    return this.http.post(environment.baseApi + 'carts' , model )
  }
}
