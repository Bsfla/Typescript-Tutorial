//타입 가드(타입 좁히기) 기법
function numOrStr(a: number | string) {
  if (typeof a === "string") {
    a.split(",");
  } else {
    a.toFixed(1);
  }
}

function numOrStr2(a: number | string) {
  if (typeof a === "string") {
    a.split(",");
  } else {
    a.toFixed(1);
  }
}

class A1 {
    aaa() {

    }
}

class B1 {
    bbb() {

    }
}

function aOrB(param: A1 | B1) {
  if (param instanceof A1) {
    param.aaa();
  }
}

aOrB(new A1())

//클래스는 그 자체로 타입이 될 수 있다
// 인스턴스 타이핑은 클래스 이름으로 한다.  

type B2 = { type: 'b', bbb: string };
type C2 = { type: 'c', ccc: string };
type D2 = { type: 'd', ddd: string };
type A2 = B2 | C2 | D2;
function typeCheck(a: A2) {
  if (a.type === 'b') {
    a.bbb;
  } else if (a.type === 'c') {
    a.ccc;
  } else {
    a.ddd;
  }
}
// 객체는 안에 속성 또는 값으로 타입 추론이 가능하다 
/*
type B2 = { type: 'b', bbb: string };
type C2 = { type: 'c', ccc: string };
type D2 = { type: 'd', ddd: string };
type A2 = B2 | C2 | D2;
function typeCheck(a: A2) {
  if ('bbb' in a) {
    a.bbb;
  } else if (a.type === 'c') {
    a.ccc;
  } else {
    a.ddd;
  }
}
*/ 
// in 연산자를 이용해서 객체의 속성으로 타입 추론 가능 

/*
interface Cat { meow: number }
interface Dog { bow: number }
function catOrDog(a: Cat | Dog): a is Dog {
  if ((a as Cat).meow) { return false }
  return true;
}

// 타입을 구분해주는 커스텀 함수를 만들 수 있다 

const cat: Cat | Dog = { meow: 3 }
if (catOrDog(cat)) {
    console.log(cat.meow);
}
if ('meow' in cat) {
    console.log(cat.meow);
}

const isRejected = (input: PromiseSettledResult<unknown>): input is PromiseRejectedResult => input.status === 'rejected';
const isFulfilled = <T>(input: PromiseSettledResult<T>): input is PromiseFulfilledResult<T> => input.status === 'fulfilled';

const promises = await Promise.allSettled([Promise.resolve('a'), Promise.resolve('b')]);
const errors = promises.filter(isRejected);
*/