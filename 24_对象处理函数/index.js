"use strict";
exports.__esModule = true;
exports.decimalToPercentage = exports.addCommas = void 0;
// 处理超过一万的数值
var addCommas = function (number) {
    // 将数值转为字符串
    var str = number.toString();
    // 匹配数值的整数部分和小数部分
    var parts = str.split('.');
    var integerPart = parts[0];
    var decimalPart = parts.length > 1 ? '.' + parts[1] : '';
    // 在整数部分添加逗号分隔符
    var pattern = /(\d)(?=(\d{3})+$)/g;
    integerPart = integerPart.replace(pattern, '$1,');
    // 返回处理后的数值
    return integerPart + decimalPart;
};
exports.addCommas = addCommas;
// 将小数转换为百分比，保留两位小数
var decimalToPercentage = function (number, len) {
    if (len === void 0) { len = 2; }
    var num = Number(number);
    return (num * 100).toFixed(len);
};
exports.decimalToPercentage = decimalToPercentage;
var originObj = {
    xgs: {
        age: 18,
        radio: 0.512345
    },
    hubei: '湖北',
    name: 'zhangsan',
    num: 1210809211111111,
    money: 123101231231,
    xbg: {
        q: {
            ger: '好又多',
            len: 890,
            radxe: 0.9843
        }
    }
};
var addCommasFn = function (obj, keys) {
    if (keys === void 0) { keys = []; }
    var fitlerKeys = [];
    var _loop_1 = function (key) {
        if (keys.some(function (itemKey) { return itemKey === key; })) {
            obj[key] = (0, exports.addCommas)(obj[key]);
            fitlerKeys = keys.filter(function (item) { return item !== key; });
        }
        if (obj[key] === 'object' && !Array.isArray(obj)) {
            obj[key] = addCommasFn(obj[key], fitlerKeys);
        }
    };
    for (var key in obj) {
        _loop_1(key);
    }
    return obj;
};
var decimalToPerFn = function (obj, keys) {
    if (keys === void 0) { keys = []; }
    var fitlerKeys = [];
    var _loop_2 = function (key) {
        if (keys.some(function (itemKey) { return itemKey === key; })) {
            obj[key] = (0, exports.decimalToPercentage)(obj[key]);
            fitlerKeys = keys.filter(function (item) { return item !== key; });
        }
        if (obj[key] === 'object' && !Array.isArray(obj)) {
            obj[key] = decimalToPerFn(obj[key], fitlerKeys);
        }
    };
    for (var key in obj) {
        _loop_2(key);
    }
    return obj;
};
var data = addCommasFn(originObj, ['num', 'money']);
var dataPer = decimalToPerFn(originObj, ['radio', 'radxe']);
console.log(data, 'data');
console.log(dataPer, 'dataPer');
