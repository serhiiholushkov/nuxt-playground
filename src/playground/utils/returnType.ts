// ReturnType constructs a type consisting of the return type of function T

export type T0 = ReturnType<() => string>; // string
export type T1 = ReturnType<(s: string) => void>; // void

export function f1() {
  return { x: 10, y: 3 };
}
export type T2 = ReturnType<typeof f1>; // { x: number; y: number; }

type Car = {
  name: string;
  year: number;
  broken: boolean;
  summary(): string;
};

export function makeCar(name: string, year: number, broken: boolean): Car {
  return {
    name,
    year,
    broken,
    summary() {
      return `Name: ${name}`;
    },
  };
}

export type T3 = ReturnType<typeof makeCar>; // Car
