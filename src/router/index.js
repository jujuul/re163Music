/*
 * @Author: your name
 * @Date: 2020-10-20 11:18:39
 * @LastEditTime: 2020-10-23 22:13:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-music\src\router\index.js
 */
/*
 * @Author: your name
 * @Date: 2020-10-20 11:18:39
 * @LastEditTime: 2020-10-22 20:53:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-music\src\router\index.js
 */
import Vue from "vue";
import VueRouter from "vue-router";

const DiscoverMusic = () => import("@/views/discover/DiscoverMusic");
const Individuation = () =>
  import("@/views/discover/childRouter/Individuation");
const MusicListCategory = () =>
  import("@/views/discover/childRouter/MusicListCategory");
const MusicRankList = () =>
  import("@/views/discover/childRouter/MusicRankList");
const ArtistCategory = () =>
  import("@/views/discover/childRouter/ArtistCategory");
const NewSongs = () => import("@/views/discover/childRouter/NewSongs");
const RadioStation = () => import("@/views/discover/childRouter/FM");
const MvVideo = () => import("@/views/mv/MvVideo");
const Video = () => import("@/views/mv/Video");
const Mv = () => import("@/views/mv/Mv");
const PlayMv = () => import("@/views/mv/PlayMv");

Vue.use(VueRouter);

const routes = [
  {
    path: "",
    redirect: "/discover",
  },
  {
    path: "/discover",
    component: DiscoverMusic,
    children: [
      {
        path: "/",
        redirect: "/discover/individ",
      },
      {
        path: "/discover/individ",
        component: Individuation,
      },
      {
        path: "/discover/category",
        component: MusicListCategory,
      },
      {
        path: "/discover/ranklist",
        component: MusicRankList,
      },
      {
        path: "/discover/artist",
        component: ArtistCategory,
      },
      {
        path: "/discover/newsongs",
        component: NewSongs,
      },
      {
        path: "/discover/fm",
        component: RadioStation,
      },
    ],
  },
  {
    path: "/mvVideo",
    component: MvVideo,
    children: [
      {
        path: "",
        redirect: "/mvVideo/video",
      },
      {
        path: "/mvVideo/video",
        component: Video,
      },
      {
        path: "/mvVideo/mv",
        component: Mv,
      },
    ],
  },
  {
    path: "/mvVideo/mv/:id",
    component: PlayMv,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
