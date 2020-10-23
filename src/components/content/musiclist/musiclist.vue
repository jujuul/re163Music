<!--
 * @Author: your name
 * @Date: 2020-10-20 17:14:27
 * @LastEditTime: 2020-10-23 22:35:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-music\src\components\content\musiclist\musiclist.vue
-->
<template>
  <div class="recommend">
    <div class="tuijian">
      <!--<div class="day"></div>-->
      <div v-for="(item, index) in list" :key="index" class="list">
        <div class="img"><img :src="item.picUrl" alt="" /></div>
        <span class="title">{{ item.name }}</span>
      </div>
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
  mounted() {
    this.getRecommend();
  },
  methods: {
    getRecommend() {
      api
        .getRecommend()
        .then((res) => {
          this.list = res.data.result;
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style lang="less" scoped>
.recommend {
  display: flex;
  .tuijian {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .day {
      width: 206px;
      height: 206px;
    }
    .list {
      width: 19%;
      margin-top: 12px;
      min-width: 137px;
      .img {
        border-radius: 10px;
        overflow: hidden;
        margin-bottom: 8px;
        img {
          width: 100%;
          height: 100%;
          display: block;
          cursor: pointer;
        }
      }
      .title {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: pre-wrap;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        font-size: 14px;
        margin-left: 2px;
        line-height: 24px;
        cursor: pointer;
      }
    }
  }
}
</style>