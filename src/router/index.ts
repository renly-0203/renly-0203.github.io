import { createRouter, createWebHistory } from "vue-router";
import Hello from "../pages/Hello.vue";
import Home from "../pages/Home.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Hello,
    },
    {
      path: '/hello',
      name: "Hello",
      component: Hello,
    },
    {
      path: '/home',
      name: "Home",
      component: Home,
    },
  ]
})

export default router