<!--
 * @Author: your name
 * @Date: 2020-10-20 16:03:27
 * @LastEditTime: 2020-10-21 11:21:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-music\src\components\common\scroll\scroll.vue
-->
<template>
  <div class="swiper">
    <el-carousel :interval="4000" type="card" height="200px">
      <el-carousel-item v-for="(item, index) in banners" :key="index">
        <img class="img" :src="item.imageUrl" alt="" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
import api from "@/api/api";
export default {
  name: "Scroll",

  data() {
    return { banners: [] };
  },
  mounted() {
    this.getBanner();
  },
  methods: {
    getBanner() {
      api
        .getBanners()
        .then((res) => {
          //数据处理
          this.banners = res.data.banners;
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>
<style lang="less" scoped>
.swiper {
  .img {
    width: 100%;
    height: 100%;
    border-radius: 8px;
  }
}
</style>