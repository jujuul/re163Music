<!--
 * @Author: your name
 * @Date: 2020-10-23 11:57:17
 * @LastEditTime: 2020-10-23 22:13:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-music\src\views\mv\childComps\newMv.vue
-->
<template>
  <div class="newList">
    <div
      v-for="(item, index) in newList"
      :key="index"
      class="new"
      @click="playMV(item.id)"
    >
      <img :src="item.cover" alt="" />
      <span class="itemName">
        {{ item.name }}
      </span>
      <br />
      <span
        class="artistName"
        v-for="(item, index) in item.artists"
        :key="index"
      >
        {{ item.name }}
      </span>
    </div>
  </div>
</template>

<script>
import api from "@/api/api";
export default {
  data() {
    return {
      newList: [],
    };
  },
  methods: {
    playMV(id) {
      this.$router.push("/mvVideo/mv/" + id);
    },
    getNewMv() {
      api
        .getNewMv()
        .then((res) => {
          this.newList = res.data.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.getNewMv();
  },
};
</script>

<style lang="less" scoped>
.newList {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .new {
    width: 24%;
    margin-bottom: 20px;
    img {
      width: 100%;
      height: 8vw;
      min-height: 135px;
      display: block;
      border-radius: 8px;
      overflow: hidden;
      cursor: pointer;
    }
    .itemName {
      height: 22px;
      line-height: 22px;
      font-size: 13px;
      color: #333;
      cursor: pointer;
      &:hover {
        color: #000;
      }
    }
    .artistName {
      font-size: 12px;
      color: #999;
      cursor: pointer;
      &:hover {
        color: #333;
      }
    }
  }
}
</style>