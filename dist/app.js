"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }//const {getData }= require('./lib/service.js');
var _service = require('./lib/service'); var _service2 = _interopRequireDefault(_service);

/*let data = x.getData(1);

data.then(function(result){
  console.log(result);
});*/

let data = _service2.default.call(void 0, 1);
data.then(function(result){
    console.log(result);
  });
  