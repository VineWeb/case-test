// 浏览器不兼容CommonJS的根本原因，在于缺少四个Node.js环境的变量。

/**
module
exports
require
global
 */
// const comname = require('./com');
// const myModule  = require('./common')
// // console.log(common, 'common')
// console.log(myModule .e(), 'function')
// console.log(myModule, 'function')
// myModule.a = 6666
// console.log(myModule, 'commonjs after')
import name from './es.js';
import esmodules, {e} from './esmodules.mjs';

console.log(esmodules, 'esmodules')
console.log(e(), 'e')

esmodules.a = 66


console.log(esmodules, 'esmodules after')