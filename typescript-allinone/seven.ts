interface Z { a: string }
const obj2 = {a: 'hello', b: 'world'};
//const obj1: A = { a: 'hello', b: 'world'}
//잉여 속성 검사 
// 타입 붙인 변수에 직접 객체 리터럴을 넣으면 잉여속성검사로 인해  에러가 나오지만
// 변수를 붙이면 에러가 사라진다 

function l(callback: () => void) : void {
    //return 값이 없는 함수 
}

//함수 반환 void는 리턴값 x == 에러 

interface Human {
    talk: () => void
}

//매개변수 void 는 리턴 값이 있어도 에러가 나지 않는다 

const human: Human = {
    talk() {return 'abc'}
}

const m2: unknown = human.talk();
(m2 as Human).talk()
//any를 쓸바엔 unknown을 쓰자 any는 타입추론을 포기해버린다 unknown은 타입 추론을 뒤로 미루는 것
// 대신 그뒤에 사용자가 타입 추론을 해줘야 한다 unknown일때, 남이 만든 타입이 틀렸을때 빼고는  as(타입 단언) 쓰지 않는다.

/*
declare function forEach<T>(arr: T[], callback: (el: T) => undefined): void;
// declare function forEach<T>(arr: T[], callback: (el: T) => void): void;
let target: number[] = [];
forEach([1, 2, 3], el => target.push(el));

interface A {
    talk: () => void;
}
const a: A = {
    talk() { return 3; }
}
*/

//void 타입은 return값을 사용하지 안 겠다는 뜻(메서드나 매개변수에서는 리턴값 사용 가능, but 조심해야 함)

/*
declare const a: string;
declare function a(x: number): number;
declare class A {}
*/
//타입만 선언하고 싶을 때 declare(구현은 다른 파일에 있어야 함)


