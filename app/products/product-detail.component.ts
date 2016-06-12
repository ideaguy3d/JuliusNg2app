/**
 * Created by Julius Hernandez on 6/11/2016.
 */

import {Component} from 'angular2/core';
import {RouteParams, Router} from 'angular2/router';

@Component({
    templateUrl: 'app/products/product-detail.component.html'
})
export class ProductDetailComponent {
    pageTitle: string = "jProduct Details";

    //both 'RouteParams' and 'Router' are services
    constructor(private _routeParams: RouteParams, private _router: Router){
        // the + is a js shortcut to convert the parameter string to a numeric ID
        //so a string to an int... i think
        let id = +this._routeParams.get('id');
        this.pageTitle += `: ${id}`;
    }

    onBack(): void {
        this._router.navigate(['Products']);
    }
}

//