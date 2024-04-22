import {
  Box,
  Button,
  ListItem,
  ListItemText,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { addTodo } from "../utils/data";
import { useData } from "../hooks/use-data";
import { useState } from "react";

export const AllTodos = () => {
  const allTodos = useData();

  const [addTodoName, setAddTodoName] = useState("");
  const [addTodoDesc, setAddTodoDesc] = useState("");

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "start",
      }}
    >
      <Stack sx={{ minWidth: 600 }}>
        {allTodos.map((todo, index) => (
          <ListItem key={index}>
            <ListItemText primary={todo.name} secondary={todo.details} />
          </ListItem>
        ))}
      </Stack>
      <Paper elevation={2}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            addTodo({ name: addTodoName, details: addTodoDesc });
          }}
        >
          <Stack
            sx={{
              width: 200,
              margin: 2,
              gap: 1,
            }}
          >
            <Typography fontSize={20}>Add a todo</Typography>
            <TextField
              id="name"
              label="Name"
              value={addTodoName}
              onChange={(e) => setAddTodoName(e.target.value)}
            />
            <TextField
              id="desc"
              label="Description"
              value={addTodoDesc}
              onChange={(e) => setAddTodoDesc(e.target.value)}
            />
            <Button type="submit">Add</Button>
          </Stack>
        </form>
      </Paper>
    </Box>
  );
};
