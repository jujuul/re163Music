<!--
 * @Author: your name
 * @Date: 2020-10-22 20:54:25
 * @LastEditTime: 2020-10-22 22:14:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-music\src\views\mv\Video.vue
-->
<template>
  <div class="mv">
    <div class="text">
      最新MV
      <span
        ><svg
          t="1603185183112"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="3041"
          width="13"
          height="13"
        >
          <path
            d="M313.987456 1023.943672c-5.644178 0-11.313329-1.898042-15.983511-5.769049-10.589076-8.84088-12.012607-24.574648-3.196702-35.188699l378.909107-454.581042-380.832123-464.620685c-8.740982-10.663998-7.19258-26.397767 3.496393-35.13875 10.688973-8.740982 26.397767-7.167606 35.13875 3.496393l393.893649 480.579221c7.592167 9.265441 7.542219 22.601684-0.124871 31.817176l-392.145452 470.464656C328.247744 1020.896816 321.130087 1023.943672 313.987456 1023.943672z"
            p-id="3042"
            fill="#2c2c2c"
          ></path></svg
      ></span>
    </div>
    <div class="newList">
      <div v-for="(item, index) in newList" :key="index" class="new">
        <div class="img">
          <img :src="item.cover" alt="" />
        </div>
        <span class="itemName">
          {{ item.name }}
        </span>
        <br />
        <span
          class="artistName"
          v-for="(item, index) in item.artists"
          :key="index"
        >
          {{ item.name }}
        </span>
      </div>
    </div>
    <div class="text">
      推荐MV
      <span
        ><svg
          t="1603185183112"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="3041"
          width="13"
          height="13"
        >
          <path
            d="M313.987456 1023.943672c-5.644178 0-11.313329-1.898042-15.983511-5.769049-10.589076-8.84088-12.012607-24.574648-3.196702-35.188699l378.909107-454.581042-380.832123-464.620685c-8.740982-10.663998-7.19258-26.397767 3.496393-35.13875 10.688973-8.740982 26.397767-7.167606 35.13875 3.496393l393.893649 480.579221c7.592167 9.265441 7.542219 22.601684-0.124871 31.817176l-392.145452 470.464656C328.247744 1020.896816 321.130087 1023.943672 313.987456 1023.943672z"
            p-id="3042"
            fill="#2c2c2c"
          ></path></svg
      ></span>
    </div>
    <div class="newList">
      <div v-for="(item, index) in hotList" :key="index" class="new">
        <div class="img">
          <img :src="item.picUrl" alt="" />
        </div>
        <span class="itemName">
          {{ item.name }}
        </span>
        <br />
        <span
          class="artistName"
          v-for="(item, index) in item.artists"
          :key="index"
        >
          {{ item.name }}
        </span>
      </div>
    </div>
    <div class="text">
      网易出品
      <span
        ><svg
          t="1603185183112"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="3041"
          width="13"
          height="13"
        >
          <path
            d="M313.987456 1023.943672c-5.644178 0-11.313329-1.898042-15.983511-5.769049-10.589076-8.84088-12.012607-24.574648-3.196702-35.188699l378.909107-454.581042-380.832123-464.620685c-8.740982-10.663998-7.19258-26.397767 3.496393-35.13875 10.688973-8.740982 26.397767-7.167606 35.13875 3.496393l393.893649 480.579221c7.592167 9.265441 7.542219 22.601684-0.124871 31.817176l-392.145452 470.464656C328.247744 1020.896816 321.130087 1023.943672 313.987456 1023.943672z"
            p-id="3042"
            fill="#2c2c2c"
          ></path></svg
      ></span>
    </div>
    <div class="newList">
      <div v-for="(item, index) in wyList" :key="index" class="new">
        <div class="img">
          <img :src="item.cover" alt="" />
        </div>
        <span class="itemName">
          {{ item.name }}
        </span>
        <br />
        <span
          class="artistName"
          v-for="(item, index) in item.artists"
          :key="index"
        >
          {{ item.name }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import api from "@/api/api";
export default {
  data() {
    return {
      newList: [],
      hotList: [],
      wyList: [],
    };
  },
  mounted() {
    this.getNewMv();
    this.getRecommendMv();
    this.getWYMv();
  },
  methods: {
    getNewMv() {
      api
        .getNewMv()
        .then((res) => {
          this.newList = res.data.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getRecommendMv() {
      api
        .getRecommendMv()
        .then((res) => {
          this.hotList = res.data.result;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getWYMv() {
      api
        .getWYMv()
        .then((res) => {
          this.wyList = res.data.data;
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style lang="less" scoped>
.mv {
  width: calc(100% - 612px);
  min-width: 800px;
  margin: 0 auto;
  .text {
    font-size: 16px;
    margin-top: 20px;
    margin-bottom: 20px;
    color: #333;
    cursor: pointer;
    &:hover {
      color: #000;
    }
  }
  .newList {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .new {
      width: 24%;
      max-width: 265px;
      margin-bottom: 20px;
      .img {
        width: 100%;
        max-height: 145px;
        margin-bottom: 4px;
        img {
          width: 100%;
          display: block;
          max-height: 145px;
          border-radius: 8px;
        }
      }
      .itemName {
        height: 22px;
        line-height: 22px;
        font-size: 13px;
        color: #333;
        cursor: pointer;
        &:hover {
          color: #000;
        }
      }
      .artistName {
        font-size: 12px;
        color: #999;
        cursor: pointer;
        &:hover {
          color: #333;
        }
      }
    }
  }
}
</style>