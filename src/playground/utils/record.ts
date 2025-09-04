interface CatInfo {
  age: number;
  breed: string;
}

type CatName = 'miffy' | 'boris' | 'mordred';

const cats: Record<CatName, CatInfo> = {
  miffy: { age: 10, breed: 'Persian' },
  boris: { age: 5, breed: 'Main Coon' },
};

const withoutTypeDef: Record<string, CatInfo> = {
  other: { age: 8, breed: 'Some' },
};
