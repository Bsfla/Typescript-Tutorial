//Utility types

/* Partial type
interface Profile {
    name: string,
    age: number,
    married: boolean
}

const zeroCho: P<Profile> ={
    name: 'zeroCho',
    age: 29
}
*/
/*
type P<T> = {
    [k in keyof T]? : T[k]
}
*/

type P<T, S extends keyof T> = {
  [k in S]: T[k];
};

type O<T, S extends keyof any> = Pick<T, Exclude<keyof T, S>>;

interface Profile {
  name: string;
  age: number;
  married: boolean;
}

const zeroCho: Omit<Profile, "name"> = {
  age: 12,
  married: false,
};

type E<T, U> = T extends U ? never : U;

type Animal1 = "Cat" | "Dog" | "Human";
type Mamal = E<Animal1, "Human">;

type R<T extends keyof any, S> = {
  [key in T]: S;
};

const test: R<string, number> = { a: 3, b: 5, c: 7 };

type A0 = string | null | undefined | boolean | number;
