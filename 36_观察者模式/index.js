class Subject {
  constructor() {
    this.observerList = []
  }
  addObserver(observer) {
    this.observerList.push(observer)
  }
  removeObserver(observer) {
    const index = this.observerList.findIndex(o => o.name === observer.name)
    this.observerList.splice(index, 1)
  }
  notifyObservers(message) {
    const observers = this.observerList
    observers.forEach(observer => observer.notified(message))
  }
}


class Observer {
  constructor(name, subject) {
    this.name = name
    if (subject) {
      subject.addObserver(this)
    }
  }
  notified(message) {
    console.log(this.name, 'got message', message)
  }
}




// 3 使用
const subject = new Subject()
const observer1 = new Observer('observer1', subject)
const observer2 = new Observer('observer2')

subject.addObserver(observer2)
subject.notifyObservers('Hello form subject')

subject.removeObserver(observer1)
subject.notifyObservers('Heloo again')