interface Arr<T> {
  forEach: (callbackfn: (item: T, index: number, array: T[]) => void) => void;
  map<S>(callbackfn: (item: T) => S): S[];
  filter<S extends T>(callbackfn: (item: T) => item is S): S[];
  reduce<U extends T>(callbackfn: (prev: U, curr: T) => U): U;
}

const a9: Arr<number> = [1, 2, 3];

a9.reduce((acc, bcc) => acc + bcc);
