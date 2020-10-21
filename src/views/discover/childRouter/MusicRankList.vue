<!--
 * @Author: your name
 * @Date: 2020-10-21 12:14:04
 * @LastEditTime: 2020-10-21 22:04:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-music\src\views\discover\childRouter\MusicRankList.vue
-->
<template>
  <div class="musicRankList">
    <p class="text">官方榜</p>
    <RankList />
    <NSRankList />
    <ORankList />
    <SRankList />
    <HRankList />
    <p class="text">全球榜</p>
    <div class="brandList">
      <div v-for="(item, index) in list" :key="index" class="list">
        <div class="img">
          <img :src="item.coverImgUrl" alt="" />
        </div>
        <span class="title">
          {{ item.name }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import api from "@/api/api";
import RankList from "@/views/discover/childComps/RankList";
import NSRankList from "@/views/discover/childComps/NewSongRankList";
import ORankList from "@/views/discover/childComps/OriginRankList";
import SRankList from "@/views/discover/childComps/SingerRankList";
import HRankList from "@/views/discover/childComps/HotSongRankList";
export default {
  components: {
    RankList,
    NSRankList,
    ORankList,
    SRankList,
    HRankList,
  },
  data() {
    return {
      list: [],
    };
  },
  methods: {
    getToplist() {
      api
        .getToplist()
        .then((res) => {
          this.list = res.data.list.slice(5);
          console.log(this.list);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.getToplist();
  },
};
</script>

<style lang="less" scoped>
.musicRankList {
  width: calc(100% - 612px);
  min-width: 800px;
  margin: 0 auto;
  .text {
    font-size: 22px;
    font-weight: bold;
  }
  .brandList {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .list {
      width: 19%;
      font-size: 14px;
      margin-bottom: 10px;
      color: #444;
      .img {
        width: 100%;
        border-radius: 8px;
        overflow: hidden;
        img {
          width: 100%;
          display: block;
          cursor: pointer;
        }
      }
      .title {
        display: inline-block;
        margin-top: 8px;
        height: 22px;
        line-height: 22px;
        cursor: pointer;
        &:hover {
          color: #000;
        }
      }
    }
  }
}
</style>