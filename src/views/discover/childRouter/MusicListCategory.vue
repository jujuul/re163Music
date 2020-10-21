<!--
 * @Author: your name
 * @Date: 2020-10-20 15:51:16
 * @LastEditTime: 2020-10-21 15:45:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-music\src\views\discover\childRouter\MusicListCategory.vue
-->
<template>
  <div class="musicListCategory">
    <!--<header class="header"></header>-->
    <nav class="nav">
      <span v-for="(item, index) in tags" :key="index">{{ item.name }}</span>
    </nav>
    <main class="main">
      <div v-for="(item, index) in list" :key="index" class="list">
        <div class="img">
          <img :src="item.coverImgUrl" alt="" />
        </div>
        <div class="name">{{ item.name }}</div>
      </div>
    </main>
    <footer class="footer">
      <el-pagination layout="prev, pager, next" :total="total"> </el-pagination>
    </footer>
  </div>
</template>
<script>
import api from "@/api/api";
export default {
  name: "MusicListCategory",
  data() {
    return {
      list: [],
      tags: [],
      total: 0,
    };
  },
  mounted() {
    this.getRecommendList();
    this.getRecommendType();
  },
  methods: {
    getRecommendList() {
      api
        .getRecommendList()
        .then((res) => {
          this.list = res.data.playlists;
          this.total = res.data.total;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getRecommendType() {
      api
        .getRecommendType()
        .then((res) => {
          this.tags = res.data.tags.reverse();
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
<style lang="less" scoped>
.musicListCategory {
  width: calc(100% - 612px);
  min-width: 800px;
  margin: 0 auto;
  .header {
    height: 168px;
    background-color: pink;
    margin-bottom: 18px;
  }
  .nav {
    height: 30px;
    margin-bottom: 18px;
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
    span {
      margin: 0 9px;
      font-size: 14px;
      color: #676767;
      cursor: pointer;
      &:hover {
        color: #000;
      }
    }
  }
  .main {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .list {
      width: 19%;
      .img {
        img {
          width: 100%;
          border-radius: 6px;
          overflow: hidden;
          cursor: pointer;
        }
      }
      .name {
        margin-top: 4px;
        margin-left: 2px;
        font-size: 14px;
        margin-bottom: 8px;
        line-height: 20px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        white-space: pre-wrap;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        cursor: pointer;
      }
    }
  }
  .footer {
    display: flex;
    justify-content: center;
    margin-bottom: 24px;
  }
}
</style>