import { Component, Input } from "@angular/core";
import { CartService } from "./cart.service";
import { Config, ResponseConfig } from "../shop/shop.component";

@Component({
    selector: 'app-card',
    template: `
    <mat-card class="card">
        <img mat-card-image [src]="product.images[0]" [alt]="product.title">
        <mat-card-content>
            <p>
                <strong>{{product.title}}</strong>
            </p>
            <p>{{product.price}}</p>
            <p *ngIf="config.showCategory"><strong>{{product.category | uppercase}}</strong></p>
            <p *ngIf="config.showDescription">{{product.description}}</p>
            
        </mat-card-content>
        <mat-card-actions>
            <div class="card_button">
                <button mat-raised-button (click)="addToCart(product)">Add to Cart</button>
                <a role="button" mat-raised-button [routerLink]="['/shop',product.id]" *ngIf="config.showDetails">
                    <mat-icon>arrow_forward_ios</mat-icon>
                </a>
            </div>
            
        </mat-card-actions>
    </mat-card>
        `,
    styles: [`
        
    `]
})
export class CardComponent {
    @Input() product: any;
    @Input() config! : Config;

    constructor(private cartService: CartService) {

    }


    addToCart(product: ResponseConfig) {
        this.cartService.addToCart(product);
    }

}