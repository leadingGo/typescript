// const getFullName = ({ firstName, lastName }) => {
//   return `${firstName} ${lastName}`
// }
// getFullName({
//   firstName: 'haha',
//   lastName: 'lili'
// })

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