import { writable } from "svelte/store";

const createTodoStore = () => {
  const todos = writable<Todo[]>([
    {
      id: "1",
      name: "Hello",
      completed: false,
    },
    {
      id: "2",
      name: "Bro",
      completed: true,
    },
  ]);

  const addTodo = (name: string) => {
    todos.update((x) => [
      ...x,
      { name, id: (x.length + 1).toString(), completed: false },
    ]);
  };

  return {
    actions: { addTodo },
    set: todos.set,
    subscribe: todos.subscribe,
  };
};

export const todosStore = createTodoStore();
