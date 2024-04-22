import { useEffect, useState } from "react";
import { Todo } from "../models/todo";
import { getTodos, addListener } from "../utils/data";

export const useData = () => {
  const [data, setData] = useState<Todo[]>(getTodos);

  useEffect(() => {
    const unsub = addListener((newData) => {
      setData(newData);
    });
    return unsub;
  }, []);

  return data;
};
