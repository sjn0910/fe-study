import React, { useRef, useState } from 'react';
import { TodoCategory } from '@/models/todos';
import { Button, Container, FormControl, InputLabel, MenuItem, Select, Stack, TextField } from '@mui/material';
import TodoItem from '@/components/TodoItem';
import useTodoStore from '@/store/useTodoStore';

export const TodoList: React.FC = () => {
  const id = useRef(0);
  const [value, setValue] = useState<string>('');
  const [category, setCategory] = useState<string>('Medium');
  const [isAnyEditing, setIsAnyEditing] = useState<boolean>(false);
  const [editValue, setEditValue] = useState<string>('');
  const { todos, updateTodos } = useTodoStore();

  const addTodo = (value: string) => {
    const newTodos = [
      ...todos,
      { id: (id.current += 1), value: value, category: category, isDone: false, isEditing: false },
    ];
    updateTodos(newTodos);
    setValue('');
    setCategory('Medium');
  };

  const completeTodo = (id: number) => {
    const newTodos = todos.map(todo => (todo.id === id ? { ...todo, isDone: !todo.isDone } : todo));
    updateTodos(newTodos);
  };

  const deleteTodo = (id: number) => {
    const newTodos = todos.filter(todo => todo.id !== id);
    updateTodos(newTodos);
  };

  const setEdit = (id: number) => {
    const newTodos = todos.map(todo => (todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo));
    updateTodos(newTodos);
    setIsAnyEditing(true);
  };

  const editTodo = (id: number) => {
    const newTodos = todos.map(todo =>
      todo.id === id ? { ...todo, value: editValue, isEditing: !todo.isEditing } : todo
    );
    updateTodos(newTodos);
    setIsAnyEditing(false);
    setEditValue('');
  };

  const handleChangeEditValue = (value: string) => {
    setEditValue(value);
  };

  return (
    <Container style={{ margin: 10 }}>
      <Stack direction="row">
        <TextField
          id="filled-basic"
          label="todo"
          value={value}
          variant="filled"
          onChange={e => {
            setValue(e.target.value);
          }}
          onKeyDown={e => {
            if (e.key === 'Enter') {
              addTodo(value);
            }
          }}
          style={{ marginRight: 5 }}
        />
        <FormControl style={{ marginRight: 5 }}>
          <InputLabel id="demo-simple-select-label">category</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={category}
            label="Category"
            onChange={e => {
              setCategory(e.target.value);
            }}
          >
            {TodoCategory.map(category => (
              <MenuItem value={category}>{category}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <Button
          variant="outlined"
          onClick={() => {
            addTodo(value);
          }}
        >
          add
        </Button>
      </Stack>
      <Stack>
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            isAnyEditing={isAnyEditing}
            completeTodo={completeTodo}
            deleteTodo={deleteTodo}
            setEdit={setEdit}
            editTodo={editTodo}
            handleChangeEditValue={handleChangeEditValue}
          />
        ))}
      </Stack>
    </Container>
  );
};

export default TodoList;
