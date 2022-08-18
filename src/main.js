import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fas, fab);

const useImage = ((url) => {
  return new URL(`/src/${url}`, import.meta.url).href;
});


const app = createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)

app.use(router)
app.config.globalProperties.$image = useImage;

app.mount('#app')
