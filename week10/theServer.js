// making a webserver w/ Node.js + windows (i hope)
//
// this is from here: http://blog.gvm-it.eu/post/20404719601/getting-started-with-nodejs-on-windows
//
//
// include the http module
var http = require('http');
//
//
// var express = require('express');
// var app = express.createServer();
//// --- --- --- { theServer } --- --- --- ///
var theExpress = require('express');
var theApp = theExpress();
//
//
// you may have to put in the ip number of your computer after the port# as he did in the documentation... but maybe not.
//.listen(1337, '127.0.0.1');
theApp.listen(12345);
theApp.use(theExpress.static('viewerSide/'));
//
console.log('Server running at localhost:12345');
