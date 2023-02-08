import { createApp } from "vue";
import App from "./App.vue";
import router from "./routes";

import "./assets/css/index.css";
import "./assets/css/styles.css";

const app = createApp(App);
app.use(router);
app.mount("#app");
