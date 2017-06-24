var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var request = require('request');
var appConfigurations = require("../appConfigurations.json");

// Get All Tasks
module.exports.getStockBySymbol = function(req,res,next)
{
        // var _url = "http://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=AAPL&interval=1min&apikey=61GQ";
    var _url = prepareRequestUrl(req.params.symbol);
    console.log('acessing route via ' + _url);
    request.get({ url: _url} , function(error,response, body) 
    { 
        if (!error && response.statusCode == 200) 
        { 
            res.json(body); 
        } 
    }); 
}

var prepareRequestUrl = function(symbol)
{
    if(!symbol)
    {
        console.log("No symbol provided");
        return null;
    }
    var _url = appConfigurations.alphaVantageBaseUrl;
    var _function = "TIME_SERIES_INTRADAY";
    var _symbol = symbol;
    var _interval = "1min";
    var _apiKey = appConfigurations.alphaVantageApiKey;

    _url += "function=" + _function;
    _url += "&symbol=" + _symbol;
    _url += "&interval=" + _interval;
    _url += "&apikey=" + _apiKey
    return _url;
}
