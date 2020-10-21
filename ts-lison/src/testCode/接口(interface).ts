// 1、一般写法
//#region
interface NameInfo {
  firstName: string,
  lastName: string
}
const getFullName = ({ firstName, lastName }: NameInfo) => {
  return `${firstName} ${lastName}`
}
getFullName({
  // firstName: 123
  firstName: '123',
  lastName: '111'
})
//#endregion

// 2、可选属性  color?: string,
// #region
interface Vegetable {
  color?: string,
  readonly type: string,
}
const getVegetable = ({ color, type }: Vegetable) => {
  return `${color ? color : ''} ${type}`
}
// console.log(getVegetable({
//   color: '11',
//   type: '2'
// }));
// console.log(getVegetable({
//   type: '2',
// }));
//#endregion

// 3、多余参数
// #region
// （1） 类型断言
// console.log(getVegetable({
//   type: '2',
//   size: '3',
// } as Vegetable ));
// （2） [prop: string]: any
// interface Vegetable {
//   color?: string,
//   type: string,
//   [prop: string]: any // 多余参数处理
// }
// console.log(getVegetable({
//   type: '2',
//   size: '3',
//   sss: 'sss'
// }));
//  (3) 字面量
const VegetableInfo = {
  type: '1',
  color: '2',
  size: '3'
}
// console.log(getVegetable(VegetableInfo));
//#endregion

// 4 参数只读  readonly
// interface NameInfo {
//   firstName: string,
//   readonly lastName: string
// }
let VegetableObj: Vegetable = {
  color: '1223',
  type: '1223'
}
// VegetableObj.type = '222'

interface ArrInter {
  0: number,
  readonly 1: string
}
let list: ArrInter = [1, '2'];
// list[1] = '11'
type AddFunc = (num1: number, num2: number) => number;
const add: AddFunc = (n1, n2) => n1 + n2;

// interface RoleDic {
//   [id: number]: string
// }
// const role: RoleDic = {
//   1: 's',
// }
interface RoleDic {
  [id: string]: string
}
const role: RoleDic = {
  1: 's',
}

// 5 接口继承
interface Vegetables {
  color: string
}
interface Tomato extends Vegetables {
  radius: string
}
interface Carrot {
  length: number
}
const tomato: Tomato = {
  radius: '1',
  color: '2'
}
const carrot: Carrot = {
  length: 1
}

interface Counter {
  (): void,
  count: number
}
const getCounter = (): Counter => {
  const c = () => { c.count++ }
  c.count = 0
  return c
}
const counter: Counter = getCounter()
counter()
console.log(counter.count);


