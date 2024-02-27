import esmodules, {e} from './esmodules.mjs';

console.log(esmodules, 'es modules')
console.log(e(), 'es function')

esmodules.a = 66


console.log(esmodules, 'es  modules after')

export default {
  a: 90
}