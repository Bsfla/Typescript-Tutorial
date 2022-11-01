function zip(x: number, y: string, z: boolean) : {x: number, y: string, z: boolean} {
    return {x, y, z}
}

type Pa<T extends (...args: any) => any> =  T extends (...args: infer R) => any ? R : never 

type Params = Pa<typeof zip>