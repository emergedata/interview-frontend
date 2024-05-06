import { Button, Paper, Stack, TextField, Typography } from "@mui/material";
import { addTodo } from "../utils/data";
import { useState } from "react";

export const NewTodoForm = () => {
  const [addTodoName, setAddTodoName] = useState("");
  const [addTodoDesc, setAddTodoDesc] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTodo({ name: addTodoName, details: addTodoDesc });
    setAddTodoName(""); // added to clear form
    setAddTodoDesc(""); // added to clear form
  };

  return (
    <Paper elevation={2}>
      <form onSubmit={handleSubmit}>
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
  );
};
