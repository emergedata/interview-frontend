import { ListItem, ListItemText } from "@mui/material";
import { Todo } from "../models/todo";

export const TodoListItem = ({ todo }: { todo: Todo }) => (
  <ListItem>
    <ListItemText primary={todo.name} secondary={todo.details} />
  </ListItem>
);
