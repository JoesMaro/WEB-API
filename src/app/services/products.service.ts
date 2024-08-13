import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }
  private API_PRODUCTO="http://localhost:3000/productos"
  postProducto(item:any):Observable<any>{
    return this.http.post(this.API_PRODUCTO, item)
  }
}