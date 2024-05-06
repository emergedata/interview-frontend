import { useData } from "../hooks/use-data";
import { Todo } from "../models/todo";
import { TodoListAndFrom } from "../components/TodoListAndForm";

export const AllTodos = () => {
  // Fetch all todos
  const allTodos : Todo[] = useData();

  return (
    <TodoListAndFrom todos={allTodos} />
  );
};
