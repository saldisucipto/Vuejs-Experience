import { createWebHistory, createRouter } from "vue-router";

import CorouselScreen from "../screen/CorouselScreen.vue";
import HomePages from "../screen/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePages,
  },
  {
    path: "/corousel",
    name: "CorouselScreen",
    component: CorouselScreen,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
