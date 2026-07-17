import Home from "@/views/Home.vue";
import PageNotFound from "@/views/PageNotFound.vue";
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
      path: "/:pathMatch(.*)",
      name: "NotFound",
      component: PageNotFound,
      meta: {
        hideFooter: true,
        hideNavbar: false,
      },
    },
  ],
});

export default router;
