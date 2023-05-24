import { Box, Stack, Typography } from '@mui/material';
import Link from 'next/link';
import useTodoStore from '@/store/useTodoStore';
import { TodoCategory } from '@/models/todos';

const TodoMain: React.FC = () => {
  const { todos } = useTodoStore();
  return (
    <Box margin={2}>
      <Link href={'/todos'}>Go To Todo Lists</Link>
      <Stack>
        <Typography>Total ({todos.length})</Typography>
        {TodoCategory.map(category => (
          <Typography>
            {category} ({todos.filter(todo => todo.category === category).length})
          </Typography>
        ))}
      </Stack>
    </Box>
  );
};

export default TodoMain;
