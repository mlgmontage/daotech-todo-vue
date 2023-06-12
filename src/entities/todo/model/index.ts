export const todoModel = {
  state: () => ({
    todos: [
      { id: 0, text: "wash dishes", completed: false },
      { id: 1, text: "write some code", completed: true },
    ],
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
  },
  actions: {},
  getters: {},
};
