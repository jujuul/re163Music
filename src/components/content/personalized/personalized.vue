<!--
 * @Author: your name
 * @Date: 2020-10-20 19:31:45
 * @LastEditTime: 2020-10-20 23:07:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-music\src\components\content\personalized\personalized.vue
-->
<template>
  <div class="personalized">
    <div v-for="(item, index) in list" :key="index" class="list">
      <div><img :src="item.sPicUrl" alt="" /></div>
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
  mounted() {
    this.getPersonalized();
  },
  methods: {
    getPersonalized() {
      api
        .getPersonalized()
        .then((res) => {
          this.list = res.data.result;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style lang="less" scoped>
.personalized {
  display: flex;
  justify-content: space-between;
  .list {
    width: 22rem;
    overflow: hidden;
    img {
      width: 100%;
      border-radius: 4px;
      cursor: pointer;
    }
    .name {
      margin-left: 2px;
      margin-top: 2px;
      font-size: 14px;
      line-height: 22px;
      cursor: pointer;
    }
    &:nth-child(2) {
      margin: 0 1rem;
    }
  }
}
</style>