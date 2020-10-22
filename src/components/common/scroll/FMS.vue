<!--
 * @Author: your name
 * @Date: 2020-10-20 16:03:27
 * @LastEditTime: 2020-10-22 16:12:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-music\src\components\common\scroll\scroll.vue
-->
<template>
  <div class="swiper">
    <el-carousel :interval="4000" type="card" height="200px">
      <el-carousel-item v-for="(item, index) in banners" :key="index">
        <span class="type">{{ item.typeTitle }}</span>
        <img class="img" :src="item.pic" alt="" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
import api from "@/api/api";
export default {
  name: "Scroll",
  data() {
    return {
      banners: [],
    };
  },
  mounted() {
    this.getDjBanner();
  },
  methods: {
    getDjBanner() {
      api
        .getDjBanner()
        .then((res) => {
          this.banners = res.data.data;
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>
<style lang="less" scoped>
.swiper {
  .type {
    position: absolute;
    bottom: 0;
    right: 0;
    border-top-left-radius: 8px;
    border-bottom-right-radius: 8px;
    background-color: #cc4a4a;
    font-size: 12px;
    color: #fff;
    padding: 4px 8px;
  }
  .img {
    width: 100%;
    height: 100%;
    border-radius: 8px;
  }
  /deep/.is-active .el-carousel__button{
    background-color: #ec4141;
  }
  /deep/.el-carousel__button {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: #696969;
    padding: 0;
    margin: 0;
    outline: 0;
  }
}
</style>