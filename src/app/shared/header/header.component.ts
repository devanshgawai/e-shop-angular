import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { CartService } from 'src/app/common/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  numberOfItems!: number;

  constructor(private cartService: CartService, private http: HttpClient, private router:Router) {

  }



  ngDoCheck() {
    this.numberOfItems = this.cartService.totalNumberOfItems;
  }

  downloadExcel() {


    this.http.post(`http://localhost:8080/v1/convertToExcel`, {
      "products": [
        {
          "id": 1,
          "title": "iPhone 9",
          "description": "An apple mobile which is nothing like apple",
          "price": 549,
          "discountPercentage": 12.96,
          "rating": 4.69,
          "stock": 94,
          "brand": "Apple",
          "category": "smartphones",
          "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
          "images": [
            "https://i.dummyjson.com/data/products/1/1.jpg",
            "https://i.dummyjson.com/data/products/1/2.jpg",
            "https://i.dummyjson.com/data/products/1/3.jpg",
            "https://i.dummyjson.com/data/products/1/4.jpg",
            "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
          ]
        },

      ]
    }).subscribe((response:any) => {
      console.log('Response: ',response)
    })

  }

  navigate(url : string){ 
    console.log('Navigate to: ',url)
    this.router.navigate([url])
  }
}
