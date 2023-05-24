import { Checkbox, Chip, Stack, TextField, Typography } from '@mui/material';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckIcon from '@mui/icons-material/Check';

import { TodoItemProps } from '@/models/todos';

const TodoItem: React.FC<TodoItemProps> = (todoItemProps: TodoItemProps) => {
  const { todo, isAnyEditing, completeTodo, deleteTodo, setEdit, editTodo, handleChangeEditValue } = todoItemProps;

  return (
    <Stack direction="row" alignItems="center">
      <Checkbox checked={todo.isDone} onChange={() => completeTodo(todo.id)} />
      <Chip label={todo.category} size="small" variant="outlined" style={{ width: '68px', marginRight: 8 }} />
      {todo.isEditing ? (
        <>
          <TextField
            id="standard-basic"
            size="small"
            variant="standard"
            onChange={e => {
              handleChangeEditValue(e.target.value);
            }}
            onKeyDown={e => {
              if (e.key === 'Enter') {
                editTodo(todo.id);
              }
            }}
          />
          <CheckIcon onClick={() => editTodo(todo.id)} />
        </>
      ) : (
        <>
          <Typography
            color="black"
            style={{
              textDecorationLine: todo.isDone ? 'line-through' : 'none',
              width: '200px',
              textAlign: 'right',
              marginRight: 16,
            }}
          >
            {todo.value}
          </Typography>
          <ModeEditIcon
            onClick={() => {
              if (!isAnyEditing) setEdit(todo.id);
            }}
          />
        </>
      )}
      <DeleteIcon onClick={() => deleteTodo(todo.id)} />
    </Stack>
  );
};

export default TodoItem;
