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

type P<T> = {
    [k in keyof T]? : T[k]
}
*/

type P<T, S extends keyof T> = {
  [k in S]: T[k];
};

interface Profile {
  name: string;
  age: number;
  married: boolean;
}

const zeroCho: P<Profile, "name" | "age"> = {
  name: "zerocho",
  age: 29,
};
