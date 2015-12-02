import express from 'express';
import pjson from '../package.json';
import HelloController from './HelloController';

var isWin = /^win/.test(process.platform);

//console.log(new hello().greeting);

let app = express();
let controller = new HelloController();

app.get("/hello", controller.hello);

var port = isWin ? 3000 : 80;
var server = app.listen(port, function() {
  console.log("%s v%s: %s", pjson.name, pjson.version, pjson.description);
  var host = server.address().host;
  console.log(`Listening on ${host}:${port}`);
});
