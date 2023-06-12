import { createStore } from "vuex";
import { todoModel } from "@/entities/todo/model";

export default createStore({
  modules: {
    todo: todoModel,
  },
});
