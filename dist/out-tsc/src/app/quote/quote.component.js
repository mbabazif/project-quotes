import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
import { Quote } from "../quote";
var QuoteComponent = /** @class */ (function () {
    function QuoteComponent() {
        this.quotes = [
            new Quote(1, "Success is not final;failure is not fatal:it is the courage to continue that counts", new Date(2018, 3, 14)),
            new Quote(2, "It is better to fail inoriginality than to succesd in imitation", "t8iigftig", new Date(2018, 6, 9), "),
            new Quote(3, "The road to success and the road to failure are almost exactly the same "),
            new Quote(4, "success usually comes to those who rae too busy to be looking for it"),
            new Quote(5, "success is not accident its the result of of pefection,hard work and leaning from failur")
        ];
    }
    QuoteComponent.prototype.toogleDetails = function (index) {
        this.quotes[index].showAuthor = !this.quotes[index].showAuthor;
    };
    QuoteComponent.prototype.ngOnInit = function () { };
    QuoteComponent = tslib_1.__decorate([
        Component({
            selector: "app-quote",
            templateUrl: "./quote.component.html",
            styleUrls: ["./quote.component.css"]
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], QuoteComponent);
    return QuoteComponent;
}());
export { QuoteComponent };
//# sourceMappingURL=quote.component.js.map