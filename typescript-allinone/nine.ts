const x: {} = true;
const y: Object = "hi"; // {}, Object 모든 타입(null과 undefined 제외)
const l1: object = { 1: "hello" };


interface Z1 {
   readonly a9: string;
   b: string
}

const aa2a: Z1 = {a9: 'hello', b: 'world'};

type A = {[key: string] : string} // 인덱스드 시그니처

type B = 'Human '| 'Mamal' | 'Animal';

type C = {[key in B] : B} // 맵드 타입스 
const aaaa : B = {Human: 'Animal'};

