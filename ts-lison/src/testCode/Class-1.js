var info = {
  _age: 18,
  set age (newValue) {
    if (newValue > 18) {
      console.log('哈哈变老了');
    } else {
      console.log('我还年轻');
    }
    this._age = newValue
  },
  get age () {
    console.log('你问我年龄干嘛');
    return this._age
  }
}
// console.log(info.age);
// info.age = 17
// info.age = 19
// console.log(info._age);
class Infos {
  constructor(age) {
    this._age = age
  }
  set age (newAge) {
    console.log('设置');
    this._age = newAge
  }
  get age () {
    console.log('获取');
    return this._age
  }
}
// const infos = new Infos(18);
// infos.age
class Parent {
  constructor() {
    if (new.target === Parent) {
      throw new Error('不能实例化')
    }
  }
}
class Child extends Parent {
  constructor() {
    super()
  }
}
// const p1 = new Parent()
const p1 = new Child()