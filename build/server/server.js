'use strict';

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _cookieParser = require('cookie-parser');

var _cookieParser2 = _interopRequireDefault(_cookieParser);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)(); //Dependencies


var publicPath = _express2.default.static(_path2.default.join(__dirname, '../'));
var indexPath = _path2.default.join(__dirname, '../index.html');
var port = process.env.PORT || 4444;

//Configure Body Pareser and Cookie Parser
app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded());
app.use((0, _cookieParser2.default)());
app.use(publicPath);

app.get('/', function (req, res) {
  res.sendFile(indexPath);
});

app.listen(port, function () {
  console.log('Listening at http://localhost:' + port);
});