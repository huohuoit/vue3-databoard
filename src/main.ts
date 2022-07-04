import App from "./App.vue";
import router from "./router";
import { setupStore } from "/@/store";
import { createApp } from "vue";
import { registerGlobComp } from "/@/components/registerGlobComp";

import "virtual:windi.css";

const app = createApp(App);

// Configure store
setupStore(app);

// Register global components
registerGlobComp(app);

app.use(router);
app.mount("#app");
