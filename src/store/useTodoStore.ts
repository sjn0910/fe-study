import { create } from 'zustand';
import { TodoProps, TodoState } from '@/models/todos';

const useTodoStore = create<TodoState>(set => ({
  todos: [],
  updateTodos: (todoArray: TodoProps[]) => set(state => ({ ...state, todos: todoArray })),
}));

export default useTodoStore;
