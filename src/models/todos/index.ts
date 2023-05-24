export const TodoCategory = ['Highest', 'High', 'Medium', 'Low', 'Lowest'];

export interface TodoProps {
  id: number;
  value: string;
  category: string;
  isDone: boolean;
  isEditing: boolean;
}

export interface TodoItemProps {
  todo: TodoProps;
  isAnyEditing: boolean;
  completeTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
  setEdit: (id: number) => void;
  editTodo: (id: number) => void;
  handleChangeEditValue: (value: string) => void;
}

export interface TodoState {
  todos: TodoProps[];
  updateTodos: (todoArray: TodoProps[]) => void;
}
