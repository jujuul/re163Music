/*
 * @Author: your name
 * @Date: 2020-10-20 10:13:02
 * @LastEditTime: 2020-10-25 16:42:07
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
import Moment from "moment";
import VideoPlayer from "vue-video-player";
require("video.js/dist/video-js.css");
require("vue-video-player/src/custom-theme.css");
Vue.use(VideoPlayer);
Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.filter("pListCT", function(value) {
  return Moment(value).format("YYYY-MM-DD");
});
Vue.filter("hCCT", function(value) {
  if (Moment(value).format("YYYY") == new Date().getFullYear()) {
    return Moment(value).format("MM-DD");
  } else {
    return Moment(value).format("YYYY-MM-DD");
  }
});
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
