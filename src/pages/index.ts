import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import TodoPage from "./TodoPage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "todo",
    component: TodoPage,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "./AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
