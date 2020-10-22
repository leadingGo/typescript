function Food() {
  this.type = "food";
}
Food.prototype.getType = function () {
  return this.type;
};
function Vegetables(name) {
  this.name = name;
}
Vegetables.prototype = new Food();
const tomato = new Vegetables("tomato");
// console.log(tomato.getType());
// class Parent {
//   constructor(str) {
//     this.str = str
//   }
//   getName () {
//     return this.str
//   }
//   static getNames () {
//     return this.name
//   }
// }
// class Child extends Parent {
//   constructor(str, age) {
//     super(str)
//     this.age = age
//   }
// }
// const c = new Child('lison', 18)
// console.log(c);
// console.log(c.getName());
// console.log(c instanceof Child)
// console.log(c instanceof Parent)
// console.log(Child.getNames())
// console.log(Object.getPrototypeOf(Child) === Parent);

// super 作为函数使用代表父类构造函数 constructor
// super 作为对象使用
// 在普通方法中 -> 父类的原型对象
// 在静态方法中 -> 父类

class Parent {
  constructor() {
    this.type = "Parent";
  }
  getName () {
    console.log(this)
    return this.type;
  }
}
Parent.getType = () => {
  return "is Parent";
};
class Child extends Parent {
  constructor() {
    super()
    console.log('constructor: ' + super.getName());
  }
  getParentName () {
    console.log('getParentName ' + super.getName())
  }
  static getParentType () {
    console.log('getParentType ' + super.getType())
  }
}
// const c = new Child()
// c.getParentName()
// Child.getParentType()

// prototype
// __proto__
var objs = new Object()
// console.log(objs.__proto__ === Object.prototype);

// 子类的__proto__指向父类本身
// 子类的prototype属性的__proto__指向父类的prototype属性
// 实例的__proto__属性的__proto__指向父类实例的__proto__

// 基本的原生构造函数
  // Boolean  Number  String  Array  Date
  // Function  RegExp  Error  Object 
// es6 可以继承原生的构造函数
class CustomArray extends Array {
  constructor(...arg) {
    super(...arg)
  }
}
const arr = new CustomArray(3);
arr.fill('+')
console.log(arr);


