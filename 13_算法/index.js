class NodeDish {
  constructor(dish) {
    this.dish = dish
    this.next = null
  }
}

class Queue {
  constructor() {
    this.head = null
    this.tail = null
  }

  enqueue (dish) {
    const newDish = new NodeDish(dish)
    if (this.tail === null) {
      this.head = newDish
      this.tail = newDish
    } else {
      this.tail.next = newDish
      this.tail = newDish
    }
  }

  dequeue () {
    if (this.head === null) {
      return null
    }
    const dish = this.head.dish
    this.head = this.head.next
    if (this.head === null) {
      this.tail = null
    }
    return dish
  }
}

const queue = new Queue()

queue.enqueue('宫保鸡丁')
queue.enqueue('辣子鸡')
queue.enqueue('鱼香肉丝')


console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.dequeue())