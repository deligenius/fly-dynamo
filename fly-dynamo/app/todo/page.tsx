import { fetcher } from "@fly-dynamo/config/fetcher/fetcher.config";
import { fetchTodo } from "./todo.api";
import { Todo } from "./todo.type";

export const preload = (id: number) => {
  void fetchTodo(id);
};

function Todo({ todo }: { todo: Todo }) {
  console.log("load todo", todo);
  return (
    <div>
      <h1>{todo.title}</h1>
      <p>{todo.body}</p>
    </div>
  );
}

export default async function TodoPage() {
  const [todo1, todo2] = await Promise.all([fetchTodo(1), fetchTodo(2)]);
  return (
    <div>
      <h1>Todo title: {todo1.title}</h1>
      <Todo todo={todo2} />
    </div>
  );
}
