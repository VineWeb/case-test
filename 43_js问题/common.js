// module.exports = { name: 'zhangsan', age: 18 }

exports.fn = () => { console.log('导出成员fn') }
exports.fn1 = () => { console.log('导出成员fn1') }
module.exports.name = 'commonjs'
module.exports = exports

// module.exports 默认导出
