<!--
 * @Author: your name
 * @Date: 2020-10-21 12:19:33
 * @LastEditTime: 2020-10-23 11:05:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-music\src\views\discover\childRouter\NewSongs.vue
-->
<template>
  <div class="NewSongs">
    <nav>
      <span v-for="(item, index) in area" :key="index" class="area">
        {{ item.name }}
      </span>
    </nav>
    <main>
      <ul>
        <li v-for="(item, index) in list" :key="index">
          <div class="number">{{ index + 1 }}</div>
          <div class="img">
            <img :src="item.album.picUrl" alt="" />
          </div>
          <div class="songName">
            {{ item.name }}
          </div>
          <div class="singerName">
            <div v-for="(item, index) in item.album.artists" :key="index">
              {{ item.name }}
            </div>
          </div>
        </li>
      </ul>
    </main>
  </div>
</template>

<script>
import api from "@/api/api";
export default {
  data() {
    return {
      area: [
        { value: 0, name: "全部" },
        { value: 7, name: "华语" },
        { value: 96, name: "欧美" },
        { value: 16, name: "韩国" },
        { value: 8, name: "日本" },
      ],
      list: [],
    };
  },
  methods: {
    getNewSong() {
      api
        .getNewSong()
        .then((res) => {
          this.list = res.data.data.slice(0, 50);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.getNewSong();
  },
};
</script>

<style lang="less" scoped>
.NewSongs {
  width: calc(100% - 552px);
  min-width: 800px;
  margin: 0 auto;
  nav {
    display: flex;
    margin-bottom: 20px;
    .area {
      margin-left: 26px;
      color: #666;
      cursor: pointer;
      font-size: 14px;
      &:hover {
        color: #333;
      }
    }
  }
  main {
    ul {
      margin: 0;
      padding: 0;
      list-style: none;
      li {
        height: 80px;
        display: flex;
        align-items: center;
        font-size: 14px;
        &:nth-child(odd) {
          background-color: #f9f9f9;
        }
        .number {
          min-width: 40px;
          text-align: center;
          color: rgb(199, 199, 199);
          font-size: 12px;
        }
        .img {
          width: 60px;
          border-radius: 4px;
          overflow: hidden;
          img {
            width: 100%;
            display: block;
          }
        }
        .songName {
          margin-left: 12px;
          font-size: 14px;
        }
        .singerName {
          display: flex;
        }
      }
    }
  }
}
</style>