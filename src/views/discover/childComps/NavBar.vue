<!--
 * @Author: your name
 * @Date: 2020-10-20 14:32:05
 * @LastEditTime: 2020-10-21 11:22:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-music\src\views\discover\childRouter\childComps\NavBar.vue
-->
<template>
  <div class="navbar">
    <div class="content">
      <router-link
        active-class="active"
        v-for="(item, index) in list"
        :key="index"
        :to="item.link"
      >
        {{ item.name }}
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "NavBar",
  props: {
    list: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang="less" scoped>
.navbar {
  margin-bottom: 24px;
  .content {
    display: flex;
    height: 42px;
    line-height: 42px;
    margin-left: 30px;
    margin-top: 20px;
    .active {
      font-size: 22px;
      font-weight: bold;
      border-bottom: 3px solid #ec4141;
    }
    a {
      text-decoration: none;
      color: #000;
      margin-right: 22px;
    }
  }
}
</style>