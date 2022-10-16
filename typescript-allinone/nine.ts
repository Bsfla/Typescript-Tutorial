const x: {} = true;
const y: Object = "hi"; // {}, Object 모든 타입(null과 undefined 제외)
const l1: object = { 1: "hello" };


interface Z1 {
   readonly a9: string;
   b: string
}

const aa2a: Z1 = {a9: 'hello', b: 'world'};

type Az = {[key: string] : string} // 인덱스드 시그니처

type B10 = 'Hu'| 'Mamal' | 'Animal';

type C = { [K in B10]: string }; // 맵드 타입스 
const aaaa : C = {Hu: 'Animal', Mamal: 'ss', Animal: 'DD'};

