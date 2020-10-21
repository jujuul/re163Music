<!--
 * @Author: your name
 * @Date: 2020-10-20 10:54:00
 * @LastEditTime: 2020-10-20 11:07:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-music\src\components\content\Search\search.vue
-->
<template>
  <div class="search">
    <input type="text" placeholder="搜索" />
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.search {
  input {
    background-color: #e13e3e;
    width: 160px;
    height: 32px;
    margin-left: 20px;
    border-radius: 25px;
    padding-left: 20px;
    line-height: 32px;
    font-size: 14px;
    color: #fff;
    outline: none;
    border: none;
    &::-webkit-input-placeholder {
      /* WebKit browsers */
      color: rgba(255, 255, 255, 0.3);
    }
  }
}
</style>