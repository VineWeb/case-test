/**
 * 实现函数节流
 * @param callback 需要节流的函数
 * @param delay 节流的时间间隔
 * @param options 节流的选项
 * @returns 返回一个新的函数，内部调用了需要节流的函数
 */
function throttle(callback, delay, options) {
    if (delay === void 0) { delay = 1000; }
    if (options === void 0) { options = {}; }
    var timer;
    var previous = 0;
    var _a = options.leading, leading = _a === void 0 ? false : _a, _b = options.trailing, trailing = _b === void 0 ? true : _b;
    return function () {
        var _this = this;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var now = +new Date();
        if (!previous && !leading) {
            previous = now;
        }
        var remaining = delay - (now - previous);
        if (remaining <= 0 || remaining > delay) {
            if (timer) {
                clearTimeout(timer);
                timer = undefined;
            }
            previous = now;
            callback.apply(this, args);
        }
        else if (trailing && !timer) {
            timer = setTimeout(function () {
                previous = +new Date();
                timer = undefined;
                callback.apply(_this, args);
            }, remaining);
        }
    };
}
// 使用节流技术包装一个函数
var throttledLogger = throttle(function (message) { return console.log(message); }, 2000);
// 调用需要节流的函数
throttledLogger('Hello, Throttle');
