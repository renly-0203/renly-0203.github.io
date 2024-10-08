import { createRouter, createWebHistory } from "vue-router";
import Hello from "@/pages/Hello.vue";
import Home from "@/pages/Home.vue";
import PhotoAlbum from "@/pages/PhotoAlbum.vue";
import RotateNews from "@/pages/RotateNews.vue";

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
    {
      path: '/rotate-news',
      name: "RotateNews",
      component: RotateNews,
    },
    {
      path: '/photo-album',
      name: "PhotoAlbum",
      component: PhotoAlbum,
    },
  ]
})

export default router