<template>
  <div class="recommend">
    <div class="tuijian">
      <!--<div class="day"></div>-->
      <div v-for="(item, index) in list" :key="index" class="list">
        <div class="img"><img :src="item.picUrl" alt="" /></div>
        <div class="title">{{ item.name }}</div>
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
          //数据处理
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
        display: -webkit-box;
        white-space: pre-wrap;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        font-size: 14px;
        margin-top: 8px;
        margin-left: 2px;
        line-height: 1.6em;
        cursor: pointer;
      }
    }
  }
}
</style>