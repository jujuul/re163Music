/*
 * @Author: your name
 * @Date: 2020-10-20 10:13:02
 * @LastEditTime: 2020-10-23 21:29:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-music\src\main.js
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import BScroll from "better-scroll";
import "element-ui/lib/theme-chalk/index.css";
import "normalize.css/normalize.css";
import VideoPlayer from "vue-video-player";
import dayjs from "dayjs";
import moment from "moment";
require("video.js/dist/video-js.css");
require("vue-video-player/src/custom-theme.css");
Vue.use(VideoPlayer);
Vue.prototype.$moment = moment;
Vue.config.productionTip = false;
Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
