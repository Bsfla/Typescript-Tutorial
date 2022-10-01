 const enum EDirection {
  UP,
  Down,
  Left,
  Right
}

const ODirection = {
  Up: 0,
  Down: 1,
  Left: 2,
  Right: 3
} as const 



const one = EDirection.UP

const object = {a: '123', b: 'hello', c: 'world'} as const;

type Key = keyof typeof object

type key2 = typeof object[keyof typeof object]

function walk(dir: EDirection) {}
 
// It requires an extra line to pull out the keys
type Direction = typeof ODirection[keyof typeof ODirection];
function run(dir: Direction) {}
 
walk(EDirection.Left);
run(ODirection.Right);