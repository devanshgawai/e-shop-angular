import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

@Injectable({
    providedIn:'root'
})
export class AuthGuard implements CanActivate {
    constructor(private router: Router, private _snackbar : MatSnackBar) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        if (sessionStorage.getItem('authUser')) return true;
        else {
            this._snackbar.open('Login to Continue', 'Okay', {
                duration:2000,
                verticalPosition:'top'
            })
            this.router.navigate(['/login'])
        }
        return false;
    }
}