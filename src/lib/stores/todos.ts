import { writable } from "svelte/store";

const createTodoStore = () => {
  const todos = writable<Todo[]>([]);

  return {
    actions: {},
    subscribe: todos.subscribe,
  };
};

export const todosStore = createTodoStore();
