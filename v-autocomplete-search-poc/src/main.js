/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins';

// Components
import App from './App.vue';
import axios from 'axios';
import VueAxios from 'vue-axios';

// Composables
import { createApp } from 'vue';

const app = createApp(App);
app.use(VueAxios, axios);

registerPlugins(app);

app.mount('#app');
