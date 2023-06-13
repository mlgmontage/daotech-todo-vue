export const todoModel = {
  state: () => ({
    todos: [
      { id: 0, text: "wash dishes", completed: false },
      { id: 1, text: "write some code", completed: true },
    ],
    filter: "all", // "all" | "todo" | "done"
  }),
  mutations: {
    createtodo(state: any, payload: string) {
      const len = state.todos.length;
      state.todos.push({ id: len, text: payload, completed: false });
    },
    removetodo(state: any, payload: number) {
      const i = state.todos.findIndex((todo: any) => todo.id === payload);
      state.todos.splice(i, 1);
    },
    toggletodo(state: any, payload: number) {
      const i = state.todos.findIndex((todo: any) => todo.id === payload);
      state.todos[i].completed = !state.todos[i].completed;
    },
    setfilter(state: any, payload: string) {
      state.filter = payload;
    },
  },
  actions: {},
  getters: {
    filteredTodos(state: any) {
      if (state.filter === "todo") {
        return state.todos.filter((todo: any) => todo.completed === false);
      }
      if (state.filter === "done") {
        return state.todos.filter((todo: any) => todo.completed === true);
      }
      return state.todos;
    },
    countTodos(state: any) {
      const todo = state.todos.filter(
        (todo: any) => todo.completed === false
      ).length;
      const done = state.todos.filter(
        (todo: any) => todo.completed === true
      ).length;

      return { todo, done };
    },
  },
};
