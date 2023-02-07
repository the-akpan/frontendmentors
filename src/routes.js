import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  { name: "index", path: "/", component: () => import("./views/Home.vue") },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
