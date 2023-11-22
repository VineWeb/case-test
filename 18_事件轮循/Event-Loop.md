## 浏览器和主引擎
### 我们的浏览器是`多线程`，但是我们的JS是`异步单线程的`
- GUI渲染线程(给浏览器画画用的DOM/BOM)
- JS引擎线程(web worker)
- 浏览器事件线程(onclick)
- 定时器触发线程
- http异步线程
- EventLoop(事件循环)处理线程


#### 宏任务队列  微任务队列

### 主线程就是一个宏任务
## 除此主线程外就是先微后宏--- 

##### 常见的宏任务有: (macro-task)
1. 主线程代码(script中的代码)
2. setTimeout
3. setInterval
4. setImmediate
5. requestAnimationFrame
6. I/O流 (上传文件)
7. UI render(UI页面渲染)
8. ajax请求

##### 常见的微任务有: (micro-task)
1. Promise 准确来说是Promise.reslove().then()中的回调
2. Process.nextTick
3. Async/Await (实际上就是promise)
4. MutationObserver(Html5新特性)