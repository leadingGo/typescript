// Symbol 类型  
//   1.第一无二
//   2.不可参与计算
const s = Symbol();
const s2 = Symbol();
// console.log(s == s2); // false

let prop = 'name';
const info = {
  age: 12,
  [prop]: 'bcc'
}
// console.log(info);

const s5 = Symbol('name');
const info2 = {
  [s5]: 'abc',
  age: 18,
  sex: 'man'
}
// console.log(info2)
// info2[s5] = 'haha'
// console.log(info2)
// info2.s5 = 'haha'  // 错误写法

// 以下写法获取不到  Symbol 值
for (const key in info2) {
  // console.log(key);
}
// console.log(Object.keys(info2))
// console.log(Object.getOwnPropertyNames(info2))
// console.log(JSON.stringify(info2))

// 获取 Symbol 值  
//    1、Object.getOwnPropertySymbols
//    2、Reflect.ownKeys(info2) 
// console.log(Object.getOwnPropertySymbols(info2))
// console.log(Reflect.ownKeys(info2))

// Symbol.for   
//   例子：Symbol.for('Lison')
//   说明：缓存中如果有 Lison 的Symbol值则返回没有则创建一个新的
// Symbol.keyFor
//   说明：返回Symbol值标识
const s6 = Symbol('Lison');
const s7 = Symbol('Lison');

const s8 = Symbol.for('Lison');
// const s9 = Symbol.for('Lison');
// console.log(s8 == s9);
// console.log(Symbol.keyFor(s8))







