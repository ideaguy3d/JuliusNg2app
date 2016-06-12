/**
 * Created by Julius Hernandez on 6/3/2016.
 */

import {Component, OnInit} from 'angular2/core';
import {IProduct} from './product';
import {ProductFilterPipe} from './product-filter.pipe';
import {StarComponent} from '../shared/star.component';
import {ProductService} from './product.service';

//here is the HTTP stuff.
import {Http, Response} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import {ROUTER_DIRECTIVES} from "angular2/router";

@Component({
    templateUrl: 'app/products/product-list.component.html',
    styleUrls: ['app/products/product-list.component.css'],
    pipes: [ProductFilterPipe],
    directives: [StarComponent, ROUTER_DIRECTIVES]
})
export class ProductListComponent implements OnInit {
    pageTitle:string = 'Products from Julius';
    imageWidth:number = 50;
    imageMargin:number = 2;
    showImage:boolean = false;
    listFilter:string = '';
    products:IProduct[];
    errorMessage:string;

    constructor(private _productService:ProductService) {}

    toggleImage():void {
        this.showImage = !this.showImage;
    }

    ngOnInit():void {
        //the component has been initialized by ng2
        this._productService.getProducts()
            .subscribe(
                products => this.products = products,
                err => this.errorMessage = <any>err);
    }

    onRatingClicked(message:string):void {
        this.pageTitle = 'zProduct List: ' + message;
    }
} //end of classProductListComponent