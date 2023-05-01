import { createApp } from "vue";
import App from "./App.vue";

const app = createApp(App);

// Vuex
import stores from "./stores";
app.use(stores);

// Vue-Router
import router from "./views/routes";
app.use(router);

// PrimeVue
import PrimeVue from "primevue/config";
import "primevue/resources/themes/lara-light-indigo/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import PrimeButton from "primevue/button";
import InputText from "primevue/inputtext";

app.use(PrimeVue);
app.component("PrimeButton", PrimeButton);
app.component("InputText", InputText);

app.mount("#app");
