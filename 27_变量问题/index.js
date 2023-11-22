const a = {
  value: 1,
  valueof () {
    return this.value ++
  },
  toString(){
    return this.value ++
  }
}
// @ts-ignore
if (a == 1 && a == 2 && a == 3) {
  console.log('你真是一个小可爱')
}