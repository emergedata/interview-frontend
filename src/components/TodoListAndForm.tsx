import { Box } from "@mui/material";
import { Todo } from "../models/todo";
import { NewTodoForm } from "./NewTodoForm";
import { TodoStack } from "./TodoStack";

export const TodoListAndFrom = ({ todos }: { todos: Todo[]; }) => (
  <Box
    sx={{
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "start",
    }}
  >
    <TodoStack todos={todos} />
    <NewTodoForm />
  </Box>
);
