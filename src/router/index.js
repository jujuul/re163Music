/*
 * @Author: your name
 * @Date: 2020-10-20 11:18:39
 * @LastEditTime: 2020-10-21 12:19:19
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
      // {
      //   path: "/discover/fm",
      //   component: FM,
      // },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
