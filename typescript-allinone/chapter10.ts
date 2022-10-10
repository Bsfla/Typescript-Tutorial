//function add<T extends number>(x: T, y: T): T {
// return x + y
//}

//add<number>(1, 2)

//function add<T extends number, K extends string>(x: T, y: K): T {
//    return x
//}

//add<number>(1, 2)

//function add<T extends {a: string}>(x: T): T { return x}

//function add<T extends (a: string) => number>(x: T): T { return x}
// <T extends {...}> // 특정 객체
// <T extends any[]> // 모든 배열
// <T extends (...args: any) => any> // 모든 함수
// <T extends abstract new (...args: any) => any> // 생성자 타입
// <T extends keyof any> // string | number | symbol

//function abc(...args: number[]) {}

// forEach, map 제네릭 분석

interface Array<T> {
  forEach(
    callbackfn: (value: T, index: number, array: T[]) => void,
    thisArg?: any
  ): void;
  map<U>(
    callbackfn: (value: T, index: number, array: T[]) => U,
    thisArg?: any
  ): U[];
  filter<S extends T>(
    predicate: (value: T, index: number, array: T[]) => value is S,
    thisArg?: any
  ): S[];
  
}

["1", 2, 3].forEach((value) => {
  console.log(value);
});
