import { Component } from '@angular/core';
import { ApiServiceService } from 'src/app/common/api-service.service';
import { Config, ResponseConfig } from '../shop.component';
import { ActivatedRoute } from '@angular/router';
import { SeoService } from 'src/app/common/seo.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {
  product: any;
  config: Config = {
    showDescription: true,
    showCategory: true,
    showDetails:false
  }

  constructor(private apiService: ApiServiceService, 
    private router: ActivatedRoute,
    private seoService:SeoService
    ) { }

  ngOnInit() {
    this.setProduct();
  }

  private setProduct() {
    let id: number;
    this.router.params.subscribe((params: any) => {
      id = parseInt(params['id']);
    })
    this.product = this.apiService.products?.find((product: ResponseConfig) => {
      return product.id === id;
    });
    this.seoService.setSeoDetails('Products', this.product.description);

  }
}
