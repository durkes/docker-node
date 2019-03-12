'use strict';

const HTTP = require('http');
const ROUTER = require('node-router')();

const ROUTE = ROUTER.push;
const PORT = 8080;

ROUTE('*', function (req, res, next) {
  var date = new Date();
  var ts = date.getTime();

  /*send json timestamp*/
  res.send({ts: ts});
});

const SERVER = HTTP.createServer(ROUTER).listen(PORT);
console.log(`Running on :${PORT}`);
