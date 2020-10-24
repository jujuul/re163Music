<!--
 * @Author: your name
 * @Date: 2020-10-20 10:39:22
 * @LastEditTime: 2020-10-24 22:50:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-music\src\components\content\LeftMenu.vue
-->
<template>
  <div class="left">
    <router-link
      :to="item.link"
      active-class="active"
      v-for="(item, index) in list"
      :key="index"
    >
      {{ item.title }}
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          link: "/discover",
          title: "发现音乐",
        },
        {
          link: "/mvVideo",
          title: "视频",
        },
        {
          link: "/friend",
          title: "朋友",
        },
        {
          link: "/live",
          title: "直播",
        },
        {
          link: "/FM",
          title: "私人FM",
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
a {
  text-decoration: none;
}
.left {
  box-sizing: border-box;
  width: 198px;
  padding-top: 6px;
  float: left;
  a {
    padding: 0px 10px;
    margin: 3px 18px 2px 13px;
    color: #000;
    height: 35px;
    display: flex;
    align-items: center;
    background-color: #fff;
    border-radius: 2px;
    &:hover {
      background-color: #f6f6f7;
    }
  }
}
.active {
  font-weight: bold;
  font-size: 18px;
  background-color: #f6f6f7 !important;
}
</style>