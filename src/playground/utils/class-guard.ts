class FileSystemObject {
  constructor(
    public path: string,
    public networked: boolean
  ) {}

  // Type guard methods
  // Predicate also narrows `this` type within the method body
  // it means that if it's true then `this` is of the specified type
  // and if it's false then `this` is NOT of the specified type
  // so we can use it for type narrowing in conditional statements
  isFile(): this is FileRepository {
    return this instanceof FileRepository;
  }

  isDirectory(): this is Directory {
    return this instanceof Directory;
  }
}

class FileRepository extends FileSystemObject {
  constructor(
    path: string,
    public content: string
  ) {
    super(path, false);
  }
}

class Directory extends FileSystemObject {
  children: FileSystemObject[] = [];
}
