export function add(n1: number,n2: number): number{
    return n1+ n2;
}

export function isTeenAger(age: number): boolean {
    return age < 18;
}

export type Person = {
    name: string;
    age: number,
    isTeen: boolean;
}