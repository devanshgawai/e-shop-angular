import { Component } from '@angular/core';
import { SeoService } from '../common/seo.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  slideConfig = {
    slidesToShow: 1, 
    slidesToScroll: 1, 
    arrows:true,
    autoplay: true,
    
  }

  images = ['https://img.freepik.com/premium-photo/interior-shot-racks-with-shirts-undershirts-jeans_88135-5869.jpg?w=740',
    'https://images.pexels.com/photos/1050244/pexels-photo-1050244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1']

    constructor(private seoService:SeoService, private router:Router){}

    ngOnInit(){
      this.seoService.setSeoDetails('E-Shop','E-Shop allows you to shop on a click of a button.')
    }

    
}
