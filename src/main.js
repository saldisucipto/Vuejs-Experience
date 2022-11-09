import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/css/index.css";

// import "./assets/main.css";

createApp(App).use(router).mount("#app");