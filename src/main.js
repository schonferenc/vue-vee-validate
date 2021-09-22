import { createApp } from 'vue';
import App from './App.vue';

// import the vee-validation settings file
import VeeValidatePlugin from './includes/validate';

import './assets/tailwind.css';

const app = createApp(App);

// we make it usable globally
app.use(VeeValidatePlugin);
app.mount('#app');
