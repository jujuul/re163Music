<!--
 * @Author: your name
 * @Date: 2020-10-23 22:32:56
 * @LastEditTime: 2020-10-25 16:23:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-music\src\views\musicListDetail\musicListDetail.vue
-->
<!--
 * @Author: your name
 * @Date: 2020-10-23 22:32:56
 * @LastEditTime: 2020-10-24 18:33:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-music\src\views\musicListDetail\musicListDetail.vue
-->
<template>
  <div class="musicListDetail">
    <div class="info">
      <musicInfo :id="id" />
      <musicTab :id="id" @childFn="parentFn" />
    </div>
    <div class="detail">
      <div v-if="index == 0">
        <playList />
      </div>
      <div v-else-if="index == 1">
        <comment :id="id" />
      </div>
      <div v-else-if="index == 2">
        <collect :id="id" />
      </div>
    </div>
  </div>
</template>

<script>
import api from "@/api/api";
import musicInfo from "@/views/musicListDetail/childComps/musicInfo";
import musicTab from "@/views/musicListDetail/childComps/musicTab";
import playList from "@/views/musicListDetail/childComps/playList";
import comment from "@/components/common/comment/comment";
import collect from "@/views/musicListDetail/childComps/collect";
export default {
  components: {
    musicInfo,
    musicTab,
    playList,
    collect,
    comment,
  },
  data() {
    return {
      id: String,
      index: 0,
    };
  },
  created() {
    this.id = this.$route.params.id;
  },
  mounted() {
    this.getPlayListDetails(this.id);
  },
  methods: {
    parentFn(index) {
      this.index = index;
    },
    getPlayListDetails(id) {
      api
        .getPlayListDetails(id)
        .then((res) => {})
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style lang="less" scoped>
.musicListDetail {
  padding-top: 32px;
  .info {
    margin-left: 32px;
  }
}
</style>