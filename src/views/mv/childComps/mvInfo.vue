<!--
 * @Author: your name
 * @Date: 2020-10-23 15:21:55
 * @LastEditTime: 2020-10-23 22:07:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-music\src\views\mv\childComps\mvInfo.vue
-->
<template>
  <div class="mvInfo">
    <div class="text">MV详情</div>
    <div></div>
    <div class="detail">
      <div class="avatar">
        <img src="" alt="" />
      </div>
      <div class="name">{{ detail.artistName }}</div>
    </div>
    <div class="songName">
      {{ detail.name }}
    </div>
    <div class="time">
      发布：{{ detail.publishTime }} 播放：{{ detail.playCount }}
    </div>
  </div>
</template>

<script>
import api from "@/api/api";
export default {
  props: {
    id: {
      type: String,
    },
  },
  data() {
    return {
      detail: [],
    };
  },
  created() {
    this.getMvUrl(this.id);
  },
  mounted() {
    if (this.id) {
      this.getMvDetail(this.id);
    }
  },
  methods: {
    getMvDetail(id) {
      api
        .getMvDetail(id)
        .then((res) => {
          console.log(res.data.data);
          this.detail = res.data.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getMvUrl(id) {
      api
        .getMvUrl(id)
        .then((res) => {
          //   console.log(res.data.data.url);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style lang="less" scoped>
.mvInfo {
  width: 618px;
  .text {
    font-size: 16px;
    margin-top: 20px;
    margin-bottom: 20px;
    color: #333;
    cursor: pointer;
    font-weight: 600;
    &:hover {
      color: #000;
    }
  }
  .video-player {
    width: 600px;
  }
  .detail {
    height: 200px;
    background-color: pink;
  }
  .songName {
    font-size: 22px;
    font-weight: bold;
    color: #333;
  }
  .time {
    font-size: 12px;
    color: #999;
  }
}
</style>