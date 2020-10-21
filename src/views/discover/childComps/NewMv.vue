<!--
 * @Author: your name
 * @Date: 2020-10-20 20:55:56
 * @LastEditTime: 2020-10-20 23:07:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-music\src\views\discover\childComps\NewMv.vue
-->
<template>
  <div class="newMv">
    <div v-for="(item, index) in list" :key="index" class="newMvList">
      <div class="img">
        <img :src="item.picUrl" alt="" />
      </div>
      <div class="name">{{ item.name }}</div>
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
    getNewestMv() {
      api
        .getNewestMv()
        .then((res) => {
          console.log(res.data.result);
          this.list = res.data.result;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.getNewestMv();
  },
};
</script>

<style lang="less" scoped>
.newMv {
  display: flex;
  justify-content: space-between;
  .newMvList {
    width: 24%;
    overflow: hidden;
    .img {
      width: 100%;
      border-radius: 6px;
      overflow: hidden;
      cursor: pointer;
      img {
        width: 100%;
        display: block;
      }
    }
    .name {
      margin-top: 6px;
      font-size: 14px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      cursor: pointer;
    }
  }
}
</style>