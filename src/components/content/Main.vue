<!--
 * @Author: your name
 * @Date: 2020-10-20 14:26:22
 * @LastEditTime: 2020-10-21 21:51:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-music\src\components\main.vue
-->
<template>
  <div class="main">
    <router-view />
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.main {
  float: left;
  width: calc(100% - 198px);
  height: calc(100vh - 73px - 59px);
  overflow-y: auto;
}
</style>