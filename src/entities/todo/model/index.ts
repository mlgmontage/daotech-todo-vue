export const todoModel = {
  state: () => ({
    todos: [
      { id: 0, text: "wash dishes", completed: false, level: "low" },
      { id: 1, text: "write some code", completed: true, level: "regular" },
      { id: 2, text: "watch YT", completed: true, level: "high" },
    ],
    filter: "all", // "all" | "todo" | "done"
    viewmode: "list", // "list" | "card"
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
    setviewmode(state: any, payload: string) {
      state.viewmode = payload;
    },
  },
  actions: {},
  getters: {
    filteredTodos: (state: any) => {
      if (state.filter === "todo") {
        return state.todos.filter((todo: any) => todo.completed === false);
      }
      if (state.filter === "done") {
        return state.todos.filter((todo: any) => todo.completed === true);
      }
      return state.todos;
    },
    countTodos: (state: any) => {
      const todo = state.todos.filter(
        (todo: any) => todo.completed === false
      ).length;
      const done = state.todos.filter(
        (todo: any) => todo.completed === true
      ).length;

      return { todo, done };
    },
    getTodo: (state: any) => (id?: number) => {
      if (!id === undefined) return undefined;
      return state.todos.find((todo: any) => todo.id == id);
    },
  },
};
