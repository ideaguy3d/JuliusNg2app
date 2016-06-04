/**
 * Created by Julius Hernandez on 6/3/2016.
 */
System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var JProductClass;
    return {
        setters:[],
        execute: function() {
            //Example of class implementing IProduct
            JProductClass = (function () {
                function JProductClass(productId, productName, productCode, releaseDate, price, description, starRating, imageUrl) {
                    this.productId = productId;
                    this.productName = productName;
                    this.productCode = productCode;
                    this.releaseDate = releaseDate;
                    this.price = price;
                    this.description = description;
                    this.starRating = starRating;
                    this.imageUrl = imageUrl;
                }
                JProductClass.prototype.calculateDiscount = function (percent) {
                    return this.price - (this.price * percent / 100);
                };
                return JProductClass;
            }());
            exports_1("JProductClass", JProductClass);
        }
    }
});
// 
//# sourceMappingURL=product.js.map