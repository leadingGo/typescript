// function addFn(arg1: number, arg2: number): number {
//   return arg1 + arg2
// }
// const addFn2 = (arg1: number, arg2: number): number => arg1 + arg2
// 变量申明函数
let addData: (x: number, y: number) => number;
addData = (arg1: number, arg2: number) => arg2 + arg2;

// 类型别名
type Add = (x: number, y: number) => number
let addFunc: Add;
addFunc = (arg1, arg2) => arg1 + arg2;
// console.log(addFunc(1, 1));

type AddFunction = (arg1: number, arg2: number, arg3?: number | string) => number;
// let addFunction: AddFunction;
// addFunction = (x, y) => x + y;
// console.log(addFunction(1, 2, 3));
// addFunction = (x, y, z) => x + y + (z || 0);
// console.log(addFunction(1, 2, 3));

// 参数使用拓展运算符
// const handleData = (arg1: number, ...args: number[]) => {
  // ...
// }

// 函数重载
//    注意：只能使用关键字 function 定义
function handleData(x: string): string[];
function handleData(x: number): number[];
function handleData(x: any): any {
  if (typeof x === 'string') {
    return x.split('')
  } else {
    return x.toString().split('').map(item => Number(item))
  }
}
console.log(handleData('1234'));
console.log(handleData(1234));
