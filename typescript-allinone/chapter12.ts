function aK(x: string | number): number {
    return 0;
}

type BZ = (x: string) => number | string;
let b9: BZ = aK;
//리턴값은 넓은 타입에 대입되고 매개변수는 좁은 타입에 대입된다
//as 는 unknown일때 쓴다 