<!--
 * @Author: your name
 * @Date: 2020-10-24 15:31:12
 * @LastEditTime: 2020-10-25 16:17:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-music\src\views\musicListDetail\childComps\musicTab.vue
-->
<template>
  <div class="tab">
    <div
      v-for="(item, index) in list"
      :key="item.index"
      :class="{ active: beChoseed === index }"
      @click="toggleItem(item.index), toggleIndex(item.index)"
    >
      {{ item.name }}<span v-if="index === 1">({{ commentCount }})</span>
    </div>
  </div>
</template>

<script>
import api from "@/api/api";
export default {
  props: {
    id: String,
  },
  data() {
    return {
      list: [
        { name: "歌曲列表", index: 0 },
        { name: "评论", index: 1 },
        { name: "收藏者", index: 2 },
      ],
      beChoseed: 0,
      commentCount: 0,
    };
  },
  methods: {
    toggleItem(index) {
      this.beChoseed = index;
    },
    toggleIndex(index) {
      this.$emit("childFn", index);
    },
    getPlayListDetails(id) {
      api
        .getPlayListDetails(id)
        .then((res) => {
          this.commentCount = res.data.playlist.commentCount;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  created() {
    this.getPlayListDetails(this.id);
  },
  mounted() {},
};
</script>

<style lang="less" scoped>
.tab {
  margin-top: 42px;
  display: flex;
  margin-bottom: 24px;
  div {
    padding-bottom: 4px;
    margin-right: 20px;
    font-size: 15px;
    color: #666;
    cursor: pointer;
  }
  .active {
    border-bottom: 2px solid #ec4141;
    font-weight: bold;
    color: #333;
  }
}
</style>