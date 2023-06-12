import { createApp } from "vue";
import App from "./app/App.vue";
import router from "./pages";
import store from "./app/store";

createApp(App).use(store).use(router).mount("#app");
