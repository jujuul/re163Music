<!--
 * @Author: your name
 * @Date: 2020-10-22 20:50:57
 * @LastEditTime: 2020-10-22 21:44:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-music\src\views\mv\MV.vue
-->
<template>
  <div class="mvVideo">
    <Nav-bar :list="list" />
    <router-view />
  </div>
</template>

<script>
import NavBar from "@/views/discover/childComps/NavBar";
export default {
  components: {
    NavBar,
  },
  data() {
    return {
      list: [
        { link: "/mvVideo/video", name: "视频" },
        { link: "/mvVideo/mv", name: "MV" },
      ],
      newList: [],
    };
  },
};
</script>

<style lang="less" scoped>
.MV {
  width: calc(100% - 612px);
  min-width: 800px;
  margin: 0 auto;
  .newList {
    display: flex;
    .img {
      width: 240px;
      overflow: hidden;
      img {
        width: 100%;
        display: block;
      }
    }
  }
}
</style>