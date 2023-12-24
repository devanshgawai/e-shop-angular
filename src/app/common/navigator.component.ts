import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-navigator',
    template: `
    <button mat-raised-button [matMenuTriggerFor]="menu">
        <mat-icon fontIcon="menu"></mat-icon>
    </button>
    <mat-menu #menu="matMenu">
        <button mat-menu-item *ngFor="let menu of menuItems" [routerLink]="['/'+menu.path]">{{menu.label}}</button>
    </mat-menu>
    `
})
export class NavigatorComponent {
    @Input() menuItems: any;

    ngOnInit() {
        console.log(this.menuItems)
    }
}