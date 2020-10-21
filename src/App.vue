<!--
 * @Author: your name
 * @Date: 2020-10-20 10:13:02
 * @LastEditTime: 2020-10-20 20:29:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-music\src\App.vue
-->
<template>
  <div id="app">
    <Top />
    <Left />
    <Main />
    <Play />
  </div>
</template>

<script>
import LeftMenu from "@/components/content/LeftMenu";
import TabBar from "@/components/content/TabBar";
import Main from "@/components/content/Main";
import Play from "@/components/content/playmusic/Play";
export default {
  name: "App",
  components: {
    Left: LeftMenu,
    Top: TabBar,
    Main,
    Play,
  },
};
</script>

<style>
#app {
  min-width: 1022px;
  position: relative;
}
</style>
