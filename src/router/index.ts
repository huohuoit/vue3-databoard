import {
  createRouter,
  createWebHistory,
  Router,
  RouteRecordRaw
} from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Index",
    component: () => import("../views/databoard.vue")
  }
];

// 创建路由实例
export const router: Router = createRouter({
  history: createWebHistory(),
  routes: routes,
  strict: true
});

export default router;
