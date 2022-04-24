import { createApp } from "vue";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import ToastService from "primevue/toastservice";
import Button from "primevue/button";
import Card from "primevue/card";
import "primevue/resources/primevue.min.css";
import "primevue/resources/themes/vela-blue/theme.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.scss";

createApp(App)
  .use(PrimeVue)
  .use(ToastService)
  .component("Button", Button)
  .component("Card", Card)
  .mount("#app");
