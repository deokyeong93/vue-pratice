import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './app.css';
import mixins from './mixins';

const app = createApp(App);
app.use(router);
app.mixin(mixins);
app.mount('#app');
