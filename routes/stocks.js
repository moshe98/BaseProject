
var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var request = require('request');
var controller = require('../controllers/stocksController.js');
var appConfigurations = require("../appConfigurations.json");

// Get All Tasks
router.get('/stocks', function(req,res,next)
{
    controller.getStockBySymbol(req,res,next);
});

router.get('/stocks/:symbol', function(req,res,next)
{
    console.log('the param is' + req.params.symbol);
    controller.getStockBySymbol(req,res,next);
});
module.exports = router;