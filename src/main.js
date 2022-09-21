import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '../src/assets/main.css'
import '../node_modules/hover.css/css/hover-min.css'
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./components/scss/main.scss";
import store from './components/store/store';
// Animation with scroll
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
//vue-app/src/main.js
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas);
import { fab } from '@fortawesome/free-brands-svg-icons';
library.add(fab);
import { far } from '@fortawesome/free-regular-svg-icons';
library.add(far);
import { dom } from "@fortawesome/fontawesome-svg-core";
dom.watch();


const app = createApp(App)
app.component("font-awesome-icon", FontAwesomeIcon);
app.use(router)
app.use(store)
app.mount('#app')
