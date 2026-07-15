import Home from "@/views/Home.vue";
import Notes from "@/views/Notes.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/notes",
      name: "Notes",
      component: Notes,
    },
  ],
});

export default router;
