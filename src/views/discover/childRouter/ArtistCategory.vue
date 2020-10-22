<!--
 * @Author: your name
 * @Date: 2020-10-21 12:17:45
 * @LastEditTime: 2020-10-22 19:28:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-music\src\views\discover\childRouter\ArtistCategory.vue
-->
<template>
  <div class="artistCategory">
    <div class="artistList">
      <div v-for="(item, index) in list" :key="index" class="singerDetail">
        <div class="img">
          <img :src="item.img1v1Url" alt="" />
        </div>
        <span class="name">
          {{ item.name }}
        </span>
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
  methods: {
    getSingerList() {
      api
        .getSingerList()
        .then((res) => {
          console.log(res);
          this.list = res.data.artists;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.getSingerList();
  },
};
</script>

<style lang="less" scoped>
.artistCategory {
  width: calc(100% - 612px);
  min-width: 800px;
  margin: 0 auto;
  .artistList {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .singerDetail {
      width: 15%;
      .img {
        width: 100%;
        border-radius: 8px;
        overflow: hidden;
        margin-top: 6px;
        img {
          width: 100%;
          display: flex;
          cursor: pointer;
        }
      }
      .name {
        font-size: 14px;
        cursor: pointer;
        display: inline-block;
        height: 32px;
        line-height: 32px;
        color: #666;
        &:hover {
          color: #333;
        }
      }
    }
  }
}
</style>