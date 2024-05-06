import { Stack } from "@mui/material";
import { Todo } from "../models/todo";
import { TodoListItem } from "./TodoListItem";


export const TodoStack = ({ todos }: { todos: Todo[]; }) => (
  <Stack sx={{ minWidth: 600 }}>
    {todos.map((todo, index) => (
      <TodoListItem key={index} todo={todo} />
    ))}
  </Stack>
);
