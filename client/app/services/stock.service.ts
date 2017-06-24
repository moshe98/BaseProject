import {Injectable} from '@angular/core';
import {Http, Headers, URLSearchParams} from '@angular/http';
import 'rxjs/add/operator/map';
import {Stock} from '../../classes/Stock';


@Injectable()
export class StockService
{
    constructor(private http :Http)
    {
        console.log('Stock service Initiated...');
    }

    getStocks(symbols : string[])
    {
        let params: URLSearchParams = new URLSearchParams();
        params.set('symbols', symbols.toString());
        console.log("stock service :  getStocks" + params.toString() )
        return this.http.get('http://localhost:3000/api/stocks',{search: params}).map(res => 
        res.json()
        );
    }

    addTask(task)
    {
        var headers = new Headers();
        headers.append('Content-Type','application/json');
        return this.http.post('http://localhost:3000/api/task', JSON.stringify(task), {headers: headers})
            .map(res => res.json());
    }

    deleteTask(id)
    {
        return this.http.delete('http://localhost:3000/api/task/' + id)
        .map(res => res.json());
    }
}  