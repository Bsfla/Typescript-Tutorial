type World = "world" | 'hell';
const w: World = "world";

const k = `hello ${w}`;

type Greeting = `hello ${World}`;
