function add(x: string | number, y: string | number): string | number {
  return x + y;
}
//const result: string
add(1, 2);
add("1", "2");
add(1, "2");

type A = {
  a: string;
};
type B = {
  b: string;
};

const aa: A | B = { a: "hello", b: "world" };
const bb: A & B = { a: "hello", b: "world" };

type Animal = { breath: true };
type Poyuryu = Animal & { breed: true };
