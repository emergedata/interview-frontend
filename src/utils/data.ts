import todos from "../data/todos.json";
import { Todo } from "../models/todo";

type ListenerFn = (todos: Todo[]) => void;

let listeners: ListenerFn[] = [];
let current = [...todos];

export function addListener(cbFn: ListenerFn) {
  listeners.push(cbFn);

  return () => {
    listeners = listeners.filter((cb) => cb != cbFn);
  };
}

export function addTodo(todo: Todo) {
  current = [...current, todo];
  listeners.forEach((cb) => cb && cb(current));
}

export function getTodos() {
  return current;
}
