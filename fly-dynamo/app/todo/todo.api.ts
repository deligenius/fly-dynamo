import { fetcher } from "@fly-dynamo/config/fetcher/fetcher.config";
import { Todo } from "./todo.type";

export const fetchTodo = (id: number) => {
  return fetcher<Todo>(`https://jsonplaceholder.typicode.com/todos/${id}`);
};
