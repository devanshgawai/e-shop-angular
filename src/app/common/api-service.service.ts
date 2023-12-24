import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Subscription, catchError, of, tap } from 'rxjs';
import { ResponseConfig } from '../shop/shop.component';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  private baseUrl = 'https://dummyjson.com/products';
  errorMsg: any = '';
  products : any;
 
  constructor(private http: HttpClient) { }


  public getProducts() {
    return this.http.get(this.baseUrl).pipe(tap((response:any) => {
      this.products = response.products;
      // console.log('Products: ',this.products)
    }), catchError(this.handleError))
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent)
      this.errorMsg = `Error: ${error.error.message}`;
    else {
      this.errorMsg = `Error : ${error.message}`
    }
    return of([]);
  }
}
