/**
 * Created by Julius Hernandez on 6/3/2016.
 */

export interface IProduct {
    productId: number;
    productName: string;
    productCode: string;
    releaseDate: string;
    price: number;
    description: string;
    starRating: number;
    imageUrl: string;
}

//Example of class implementing IProduct
export class JProductClass implements IProduct {

    constructor(public productId: number,
    public productName: string,
    public productCode: string,
    public releaseDate: string,
    public price: number,
    public description: string,
    public starRating: number,
    public imageUrl: string){}

    calculateDiscount(percent: number): number {
        return this.price - (this.price*percent / 100);
    }
}

//