import { createRouter, createWebHistory } from "vue-router";

/**
 * 各ルーティングのパス
 */
export const routePaths = {
  root: "/",
  forms: "/forms",
};

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: "root",
      path: routePaths.root,
      component: () => import("./RootView.vue"),
    },
    {
      name: "forms",
      path: routePaths.forms,
      component: () => import("./FormsView.vue"),
    },
  ],
});
