// 队列是一个先进先出的结构
const queue = []
queue.push(1)
queue.push(2)
const shift1 = queue.shift()
const shift2 = queue.shift()

// 场景  
// 食堂排队打饭,  JS异步中的任务队列, 计算最近请求次数  广度优先遍历


// 最近的请求次数
// leetcode 933
//时间复杂度：均摊 O(1)O(1)O(1)，每个元素至多入队出队各一次。

//空间复杂度：O(L)O(L)O(L)，其中 LLL 为队列的最大元素个数。


var RecentCounter = function() {
  this.queue = []
};

/** 
* @param {number} t
* @return {number}
*/
RecentCounter.prototype.ping = function(t) {
  this.queue.push(t)
  while (this.queue[0] < t - 3000) {
    this.queue.shift()
  }
  return this.queue.length
};

/**
* Your RecentCounter object will be instantiated and called as such:
* var obj = new RecentCounter()
* var param_1 = obj.ping(t)
*/