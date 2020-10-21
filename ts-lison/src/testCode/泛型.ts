// const getArray = <T>(value: T, times = 5): T[] => {
//   return new Array(times).fill(value)
// }
// // console.log(getArray(2));
// console.log(getArray<number>(123).map(item => item));

// const getArray = <T, U>(arg1: T, arg2: U, times: number): [T, U][] => {
//   return new Array(times).fill([arg1, arg2])
// }
// console.log(getArray(1, 'a', 3));

// 泛型约束
// #region
// 泛型函数
// let getArray: <T>(arg: T, times: number) => T[];
// getArray = (arg: any, times: number) => {
//   return new Array(times).fill(arg)
// }
// console.log(getArray(1, 3));

// 类型别名
// type GetArray = <T>(arg: T, times: number) => T[];
// let getArray: GetArray = (arg: any, times: number) => {
//   return new Array(times).fill(arg)
// }

// 接口
// interface GetArray {
//   <T>(arg: T, times: number): T[]
// }
// interface GetArray<T> {
//   (arg: T, times: number): T[],
//   array: T[]
// }

// interface ValueWidthLength {
//   length: number
// }
// const getArray = <T extends ValueWidthLength>(arg: T, times: number): T[] => {
//   return new Array(times).fill(arg)
// }
// // console.log(getArray(123, 3));
// console.log(getArray('123', 3));

const getProps = <T, U extends keyof T>(object: T, propName: U) => {
  return object[propName]
}
const objs = {
  a: 'a',
  b: 'b'
}
console.log(getProps(objs, 'a'));
// console.log(getProps(objs, 'c'));

//#endregion



