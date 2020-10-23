<!--
 * @Author: your name
 * @Date: 2020-10-23 15:17:01
 * @LastEditTime: 2020-10-23 22:16:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-music\src\views\mv\childComps\simiMv.vue
-->
<template>
  <div class="simiMv">
    <div class="text">相关推荐</div>
    <div v-for="(item, index) in mvs" :key="index" class="simi">
      <div class="img">
        <img :src="item.cover" alt="" @click="playMV(item.id)" />
      </div>
      <div class="name">
        <div class="mvName">{{ item.name }}</div>
        <div class="an">
          <div
            v-for="(item, index) in item.artists"
            :key="index"
            class="artistName"
          >
            {{ item.name }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from "@/api/api";
export default {
  props: {
    id: {
      type: String,
    },
  },
  data() {
    return {
      mvs: [],
    };
  },
  created() {
    this.getSimMv(this.id);
  },
  mounted() {
    if (this.id) {
      this.getSimMv(this.id);
    }
  },
  methods: {
    playMV(id) {
      this.$router.push("/mvVideo/mv/" + id);
      console.log(id);
    },
    getSimMv(id) {
      api
        .getSimMv(id)
        .then((res) => {
          this.mvs = res.data.mvs;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style lang="less" scoped>
.simiMv {
  width: 285px;
  .text {
    font-size: 16px;
    margin-top: 20px;
    margin-bottom: 20px;
    color: #333;
    cursor: pointer;
    font-weight: 600;
    &:hover {
      color: #000;
    }
  }
  .simi {
    display: flex;
    margin-bottom: 10px;
    .img {
      width: 140px;
      height: 80px;
      img {
        width: 100%;
        display: block;
        border-radius: 6px;
        cursor: pointer;
      }
    }
    .name {
      width: 135px;
      padding-left: 6px;
      height: 80px;
      font-size: 14px;
      position: relative;
      .mvName {
        width: 135px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        position: absolute;
        top: 12px;
        cursor: pointer;
      }
      .an {
        color: #666;
        position: absolute;
        bottom: 12px;
        display: flex;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        width: 135px;
        .artistName {
          font-size: 12px;
          color: #888;
          &:hover {
            color: #333;
            cursor: pointer;
          }
        }
      }
    }
  }
}
</style>