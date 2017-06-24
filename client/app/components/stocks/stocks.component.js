"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var stock_service_1 = require("../../services/stock.service");
var StocksComponent = (function () {
    function StocksComponent(stockService) {
        this.stockService = stockService;
        console.log("calling get stocks..");
        var symbols = ['AAPL'];
        this.getStocks(symbols);
    }
    StocksComponent.prototype.getStocks = function (symbols) {
        var _this = this;
        this.stockService.getStocks(symbols)
            .subscribe(function (stocks) {
            _this.stocksResponse = stocks;
        });
    };
    return StocksComponent;
}());
StocksComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'stocks',
        templateUrl: './stocks.component.html'
    }),
    __metadata("design:paramtypes", [stock_service_1.StockService])
], StocksComponent);
exports.StocksComponent = StocksComponent;
//# sourceMappingURL=stocks.component.js.map