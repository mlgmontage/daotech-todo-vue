import { createStore } from "vuex";
import { todoModel } from "@/entities/todo/model";
import { UIModel } from "@/entities/UI/model";

export default createStore({
  modules: {
    todo: todoModel,
    ui: UIModel,
  },
});
