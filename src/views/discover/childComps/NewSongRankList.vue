<!--
 * @Author: your name
 * @Date: 2020-10-21 16:41:31
 * @LastEditTime: 2020-10-21 21:38:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-music\src\views\discover\childComps\MusicRankList.vue
-->
<template>
  <div class="rankList">
    <div class="coverImg">
      <img :src="coverImg" alt="" />
    </div>
    <div class="list">
      <ul>
        <li v-for="(item, index) in list" :key="index">
          <div class="left">
            <div>{{ index + 1 }}</div>
            <div class="name">{{ item.name }}</div>
          </div>
          <div class="right" v-for="(item, index) in item.ar" :key="index">
            {{ item.name }}
          </div>
        </li>
      </ul>
      <div class="all">
        查看全部&nbsp;<span
          ><svg
            t="1603185183112"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="3041"
            width="10"
            height="10"
          >
            <path
              d="M313.987456 1023.943672c-5.644178 0-11.313329-1.898042-15.983511-5.769049-10.589076-8.84088-12.012607-24.574648-3.196702-35.188699l378.909107-454.581042-380.832123-464.620685c-8.740982-10.663998-7.19258-26.397767 3.496393-35.13875 10.688973-8.740982 26.397767-7.167606 35.13875 3.496393l393.893649 480.579221c7.592167 9.265441 7.542219 22.601684-0.124871 31.817176l-392.145452 470.464656C328.247744 1020.896816 321.130087 1023.943672 313.987456 1023.943672z"
              p-id="3042"
              fill="#2c2c2c"
            ></path></svg
        ></span>
      </div>
    </div>
  </div>
</template>

<script>
import api from "@/api/api";
export default {
  data() {
    return {
      coverImg: "",
      id: "",
      list: [],
    };
  },
  methods: {
    getPlayListDetails(id) {
      api
        .getPlayListDetails(id)
        .then((res) => {
          this.list = res.data.playlist.tracks.slice(0, 5);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getToplist() {
      api
        .getToplist()
        .then((res) => {
          this.id = res.data.list[1].id;
          this.coverImg = res.data.list[1].coverImgUrl;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  created() {
    this.getToplist();
  },
  mounted() {
    setTimeout(() => {
      this.getPlayListDetails(this.id);
    }, 500);
  },
};
</script>

<style lang="less" scoped>
.rankList {
  display: flex;
  margin-bottom: 26px;
  .coverImg {
    min-width: 170px;
    width: 170px;
    height: 170px;
    min-height: 170px;
    border-radius: 8px;
    overflow: hidden;
    img {
      width: 100%;
      display: block;
    }
  }

  .list {
    width: 80%;
    margin-left: 34px;
    color: #999;
    ul {
      list-style: none;
      padding: 0;
      margin: 0;
      li {
        height: 34px;
        line-height: 34px;
        font-size: 12px;
        padding-left: 12px;
        padding-right: 12px;
        &:hover {
          background-color: #f4f4f4;
        }
        &:nth-child(Odd) {
          background-color: #f9f9f9;
          &:hover {
            background-color: #f4f4f4;
          }
        }
        .left {
          display: flex;
          float: left;
          div {
            margin-right: 8px;
          }
          .name {
            color: #333;
          }
        }
        .right {
          float: right;
          display: flex;
        }
      }
    }
    .all {
      height: 34px;
      line-height: 34px;
      font-size: 12px;
      margin-left: 12px;
      color: #888;
      cursor: pointer;
      &:hover {
        color: #333;
      }
    }
  }
}
</style>