interface IUSer {
  nickName: string;
  name: string;
  age: number;
  email: string;
}

// Partial makes all properties optional
// type Partial<T> = {
//   [P in keyof T]?: T[P];
// };
export function createAnonimusUser(user: Partial<IUSer>): Partial<IUSer> {
  return {
    name: 'Anonimus',
    ...user,
  };
}
