import {Component} from '@angular/core';
import {StockService} from '../../services/stock.service'
import {Stock} from '../../../classes/Stock'
@Component(
    {
        moduleId : module.id,
        selector : 'stocks',
        templateUrl : './stocks.component.html'
    }
)

export class StocksComponent{
    stocksResponse  : object;
    stocks : Stock[];

    constructor(private stockService : StockService )
    {
        console.log("calling get stocks..");
        var symbols = ['AAPL']; 
        this.getStocks(symbols);
    }

    public getStocks(symbols: string[])
    {
        this.stockService.getStocks(symbols)
        .subscribe(stocks => {
            this.stocksResponse = stocks;
        });
    }
 }  