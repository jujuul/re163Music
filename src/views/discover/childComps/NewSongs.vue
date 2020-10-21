<!--
 * @Author: your name
 * @Date: 2020-10-20 20:40:13
 * @LastEditTime: 2020-10-21 21:38:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-music\src\views\discover\childComps\NewSongs.vue
-->
<template>
  <div class="newSongs">
    <div v-for="(item, index) in list" :key="index" class="list">
      <img :src="item.picUrl" alt="" />
      {{ item.name }}
    </div>
  </div>
</template>

<script>
import api from "@/api/api";
export default {
  data() {
    return {
      list: [],
    };
  },
  methods: {
    getNewestSong() {
      api
        .getNewestSong()
        .then((res) => {
          this.list = res.data.result;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.getNewestSong();
  },
};
</script>

<style lang="less" scoped>
.newSongs {
  display: flex;
  height: 200px;
  .list {
    width: 80px;
    height: 80px;
    border: 1px solid red;
    img {
      width: 100%;
      height: 100%;
      display: block;
    }
  }
}
</style>