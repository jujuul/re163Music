<!--
 * @Author: your name
 * @Date: 2020-10-23 11:50:52
 * @LastEditTime: 2020-10-23 20:42:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-music\src\views\mv\PlayMv.vue
-->
<template>
  <div class="playMv">
    <main>
      <mvInfo :id="id" />
      <simiMv :id="id" />
    </main>
    <footer>
      <comment :id="id" />
    </footer>
  </div>
</template>

<script>
import simiMv from "@/views/mv/childComps/simiMv";
import mvInfo from "@/views/mv/childComps/mvInfo";
import comment from "@/views/mv/childComps/comment";
export default {
  components: {
    simiMv,
    comment,
    mvInfo,
  },
  data() {
    return {
      id: Number,
    };
  },
  created() {
    this.id = this.$route.params.id;
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="less" scoped>
.playMv {
  width: 930px;
  min-width: 800px;
  margin: 0 auto;
  main {
    display: flex;
    justify-content: space-between;
  }
}
</style>