const a: number = 1;
const b: string = "1";
const c: boolean = true;
const d: undefined = undefined;
const e: null = null;
const f: true = true;

function add(x: number, y: number) : number

function add(x: number, y: number): number {
 return x + y;
}

//const add : (x: number, y: number) => number = (x, y) => x + y;

type Add = (x: number, y: number) => number;
//const add: Add = (x, y) => x + y;

const obj: { one: number; two: string } = { one: 1, two: "1" };

const arr: number[] = [1, 2];
const arr2: string[] = ["1", "2"];
const arr3: [number, string] = [1, "2"];
const arr4: Array<number> = [1, 2];
