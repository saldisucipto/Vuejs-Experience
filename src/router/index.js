import { createWebHistory, createRouter } from "vue-router";

import CorouselScreen from "../screen/CorouselScreen.vue";
import HtmlEditor from "../screen/HtmlEditor.vue";
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
  {
    path: "/html-editor",
    name: "HtmlEditor",
    component: HtmlEditor,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
