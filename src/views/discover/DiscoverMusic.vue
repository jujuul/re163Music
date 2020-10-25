<!--
 * @Author: your name
 * @Date: 2020-10-20 14:30:33
 * @LastEditTime: 2020-10-25 15:50:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-music\src\views\discover\childRouter\DiscoverMusic.vue
-->
<template>
  <div class="discover">
    <Nav-bar :list="list" />
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script>
import NavBar from "@/views/discover/childComps/NavBar";
export default {
  name: "DiscoverMusic",
  components: {
    NavBar,
  },
  data() {
    return {
      list: [
        { link: "/discover/individ", name: "个性推荐" },
        { link: "/discover/category", name: "歌单" },
        // { link: "/discover/fm", name: "主播电台" },
        { link: "/discover/ranklist", name: "排行榜" },
        { link: "/discover/artist", name: "歌手" },
        { link: "/discover/newsongs", name: "最新音乐" },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
</style>