<!--
 * @Author: your name
 * @Date: 2020-10-20 14:30:33
 * @LastEditTime: 2020-10-21 10:47:05
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
  data() {
    return {
      list: [
        { link: "/discover/individ", name: "个性推荐" },
        { link: "/discover/category", name: "歌单" },
        { link: "/discover/fm", name: "主播电台" },
        { link: "/discover/ranklist", name: "排行榜" },
        { link: "/discover/artist", name: "歌手" },
        { link: "/discover/newsongs", name: "最新音乐" },
      ],
    };
  },
  components: {
    NavBar,
  },
  created() {},
};
</script>

<style lang="less" scoped>
.discover {
}
</style>