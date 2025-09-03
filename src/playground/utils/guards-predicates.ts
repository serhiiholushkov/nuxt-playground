export function isString(value: unknown): value is string {
  return typeof value === 'string';
}

export function isNumber(value: unknown): value is number {
  return typeof value === 'number' && !isNaN(value);
}

export function isBoolean(value: unknown): value is boolean {
  return typeof value === 'boolean';
}

// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
export function isFunction(value: unknown): value is Function {
  return typeof value === 'function';
}

export function isObject(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

export function isArray(value: unknown): value is Array<unknown> {
  return Array.isArray(value);
}

export function isUndefined(value: unknown): value is undefined {
  return typeof value === 'undefined';
}

export function isNull(value: unknown): value is null {
  return value === null;
}

export function exampleSimpleTypes(x: unknown) {
  if (isString(x)) {
    // x is string here
    console.log(x.toUpperCase());
  } else if (isNumber(x)) {
    // x is number here
    console.log(x.toFixed(2));
  } else if (isBoolean(x)) {
    // x is boolean here
    console.log(x ? 'true' : 'false');
  } else if (isFunction(x)) {
    // x is Function here
    console.log(x());
  } else if (isArray(x)) {
    // x is Array here
    console.log(x.length);
  } else if (isObject(x)) {
    // x is Object here
    console.log(Object.keys(x).length);
  } else if (isUndefined(x)) {
    // x is undefined here
    console.log('undefined');
  } else if (isNull(x)) {
    // x is null here
    console.log('null');
  } else {
    // x is never here
    console.log('unknown type');
  }
}

export type Fish = { swim: () => void };
export type Bird = { fly: () => void };

export function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}
export function petAction(pet: Fish | Bird) {
  if (isFish(pet)) {
    pet.swim();
  } else {
    pet.fly();
  }
}

// another narrowing example
export function move(animal: Fish | Bird) {
  if ('swim' in animal) {
    return animal.swim();
  }
  return animal.fly();
}
