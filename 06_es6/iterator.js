// 模拟获取  用户数据 订单数据 商品数据
function  getUsers () {
  setTimeout(() => {
    let data = '用户数据'
    iterator.next(data)
  }, 1000)
}
function  getOrders () {
  setTimeout(() => {
    let data = '订单数据'
    iterator.next(data)
  }, 1000)
}
function getShops () {
  setTimeout(() => {
    let data = '商品数据'
    iterator.next(data) 
  }, 1000)
}

function * gen() {
  const users = yield getUsers()
  console.log(users)
  const oders = yield getOrders()
  console.log(oders)
  const shops = yield getShops()
  console.log(shops)
}

const iterator = gen()
iterator.next()