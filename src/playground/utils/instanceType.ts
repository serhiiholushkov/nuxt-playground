// InstanceType to construct a type from constructor function

export class C {
  constructor(
    public name: string,
    public some: number
  ) {}
  /**
   * method
   */
  public method() {
    console.log('method');
  }
}

export type I0 = InstanceType<typeof C>; // C
