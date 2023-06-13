export const UIModel = {
  state: () => ({
    details: {
      show: false,
      id: undefined,
    },
  }),
  mutations: {
    toggleDetails(state: any, payload: number) {
      if (state.details.show) {
        state.details.show = false;
        state.details.id = undefined;
      } else {
        state.details.show = true;
        state.details.id = payload;
      }
    },
  },
  actions: {},
  getters: {},
};
