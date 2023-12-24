import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ApiServiceService } from '../common/api-service.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { CartService } from '../common/cart.service';
import { SeoService } from '../common/seo.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})


export class ShopComponent {
  products: any;
  isLoading: boolean = true;
  config: Config = {
    showDescription: false,
    showCategory: false,
    showDetails: true
  }
  error: boolean = false;

  constructor(private apiService: ApiServiceService,
    private spinner: NgxSpinnerService,
    private cartService: CartService,
    private seoService:SeoService) {

  }

  ngOnInit() {
    this.spinner.show();
    this.getProducts();
    this.seoService.setSeoDetails('Products','Have a look from the wide range of products')
  }

  getProducts() {
    this.apiService.getProducts().subscribe((response) => {
      this.products = response.products;
      this.isLoading = false;
      // console.log('Products: ', this.products)
    }, (err) => {
      this.isLoading = false;
      this.error = true;
      console.error('Error while fetching the response: ', err)
    })

  }

  addToCart(product: ResponseConfig) {
    this.cartService.addToCart(product);
  }
}


export interface ResponseConfig {
  category?: string;
  description?: string;
  id?: number;
  image?: string;
  price?: number;
  rating?: any;
  title?: string;
}


export interface Config {
  showDescription: boolean,
  showCategory: boolean,
  showDetails: boolean
}