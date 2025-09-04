interface Todo {
  title: string;
  description: string;
  completed: boolean;
  createdAt: number;
}

// Pick allows to select some properties
type TodoPreview = Pick<Todo, 'title' | 'completed'>;

// Omit allows to exclude some properties
type TodoInfo = Omit<Todo, 'description'>;

export function getTodoPreview(todo: Todo): TodoPreview {
  const { title, completed } = todo;
  return { title, completed };
}

export function getTodoInfo(todo: Todo): TodoInfo {
  const { description, ...info } = todo;
  return info;
}
