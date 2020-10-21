// 布尔类型 boolean
let bool: boolean;
bool = true;
// bool = 123

// 数值类型 number
let num: number;
// num = 'abc'
num = 0b1111011;
num = 0o173;
num = 0x7b;

// 字符串类型 string
let str: string;
str = "abc";
str = `数值是${num}`;

// 数组类型 Array | []
// 场景   [ 1, 2, 3 ]
// 写法1
let arr: number[];
arr = [1, 2];
// 写法2
let arr2: Array<number>;
// 联合类型 (string | number)
let arr3: (string | number)[];
arr3 = [1, "2"];

// 元祖类型 (是已知数组中每一个位置上的元素的类型)
let tuple: [string, number, boolean];
tuple = ["12", 7, true];

// 枚举类型 (一般大写开头)
// enum Roles { // 默认是0开始
//   SUPER_ADMIN,
//   ADMIN,
//   USER
// }

// enum Roles { // 可以自定义
//   SUPER_ADMIN = 1,
//   ADMIN = 3,
//   USER = 8
// }
// enum Roles { // 如果只指定了第一个后面的回以此追加
//   SUPER_ADMIN = 1,
//   ADMIN,
//   USER
// }
enum Roles { // 如果只指定某一个，第一个还是0开始，它后面的会以此追加
  SUPER_ADMIN,
  ADMIN = 4,
  USER,
}

// 任意类型  any类型
let value: any;
value = 90;
value = "123";
value = true;
const arr4: any[] = [1, "q"];

// 没有返回值  void类型
const fn = (text: string): void => {
  console.log(text);
};
// fn('123')
let v: void;
v = undefined;
v = null;
// null 和  undefined
let u: undefined;
// u = 123
let n: null;
// n = 123

// never 类型 (抛错误或则死循环用到)
const errorFn = (msg: string): never => {
  throw new Error(msg);
};
// errorFn('abc')
const initFn = (): never => {
  while (true) {}
};

// object
let obj = { name: "Lison" };
function objfn(params: object): void {
  console.log(params);
}
// objfn(obj);

// 类型断言
// (<string>target)
// (target as string)
const getLength = (target: string | number): number => {
  if ((<string>target).length || (target as string).length === 0) {
    return (target as string).length;
  } else {
    return target.toString().length;
  }
};
// getLength(123)
