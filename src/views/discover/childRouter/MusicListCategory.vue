<!--
 * @Author: your name
 * @Date: 2020-10-20 15:51:16
 * @LastEditTime: 2020-10-25 22:39:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-music\src\views\discover\childRouter\MusicListCategory.vue
-->
<template>
  <div class="musicListCategory">
    <!--<header class="header"></header>-->
    <nav class="nav">
      <span
        v-for="(item, index) in tags"
        :key="index"
        @click="toggleList(item.name)"
        >{{ item.name }}</span
      >
    </nav>
    <main class="main">
      <div v-for="(item, index) in list" :key="index" class="list">
        <div class="img" @click="showMusicList(item.id)">
          <div class="markk"></div>
          <div class="mark">
            <svg
              t="1603626970350"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="7533"
              width="10"
              height="10"
            >
              <path
                d="M270.506667 97.066667A96 96 0 0 0 128 181.034667V843.093333a96 96 0 0 0 142.506667 83.968l597.674666-331.050666a96 96 0 0 0 0-167.936L270.506667 97.066667z m579.157333 399.445333a32 32 0 0 1-12.458667 43.52L239.488 870.997333A32 32 0 0 1 192 843.093333V181.034667a32 32 0 0 1 47.488-27.989334l597.717333 330.965334c5.248 2.901333 9.557333 7.253333 12.458667 12.501333z"
                p-id="7534"
                fill="#ffffff"
              ></path></svg
            ><span v-if="item.playCount > 10000"
              >{{ parseInt(item.playCount / 10000) }}万</span
            ><span v-else>{{ item.playCount }}</span>
          </div>
          <img :src="item.coverImgUrl" alt="" />
          <div class="play">
            <svg
              t="1603623225236"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="3267"
              width="24"
              height="24"
            >
              <path
                d="M66.47 853.231l5.34-684.51c1.44-59.26 50.65-106.13 109.91-104.68 16.33 0.4 32.35 4.52 46.85 12.05l671.14 344.26c51.53 25.64 72.51 88.2 46.87 139.73a104.184 104.184 0 0 1-46.87 46.87l-676.49 340.69c-52.21 27.55-116.86 7.56-144.41-44.65a106.715 106.715 0 0 1-12.35-49.71l0.01-0.05z"
                fill="#C74066"
                p-id="3268"
              ></path>
              <path
                d="M69.14 513.861l-2.67 339.36c0.32 59.03 48.43 106.63 107.46 106.3a106.87 106.87 0 0 0 48.41-11.88l676.49-340.69c35.63-17.34 58.26-53.47 58.34-93.09H69.14z"
                fill="#AA2B52"
                p-id="3269"
              ></path>
            </svg>
          </div>
        </div>
        <span class="name">{{ item.name }}</span>
      </div>
    </main>
    <footer class="footer">
      <el-pagination layout="prev, pager, next" :total="total"> </el-pagination>
    </footer>
  </div>
</template>
<script>
import api from "@/api/api";
export default {
  name: "MusicListCategory",
  data() {
    return {
      list: [],
      tags: [],
      total: 0,
    };
  },
  mounted() {
    this.getRecommendList();
    this.getRecommendType();
  },
  methods: {
    toggleList(name) {
      this.getMusicTag(name);
    },
    getMusicTag(name) {
      api
        .getMusicTag({ cat: name })
        .then((res) => {
          console.log(res);
          this.list = res.data.playlists;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    showMusicList(id) {
      this.$router.push("/musiclistDetail/" + id);
    },
    getRecommendList() {
      api
        .getRecommendList()
        .then((res) => {
          this.list = res.data.playlists;
          this.total = res.data.total;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getRecommendType() {
      api
        .getRecommendType()
        .then((res) => {
          this.tags = res.data.tags.reverse();
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
<style lang="less" scoped>
.musicListCategory {
  width: calc(100% - 612px);
  min-width: 800px;
  margin: 0 auto;
  .header {
    height: 168px;
    background-color: pink;
    margin-bottom: 18px;
  }
  .nav {
    height: 30px;
    margin-bottom: 8px;
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
    span {
      margin: 0 9px;
      font-size: 14px;
      color: #676767;
      cursor: pointer;
      &:hover {
        color: #000;
      }
    }
  }
  .main {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .list {
      width: 19%;
      .img {
        margin-top: 12px;
        margin-bottom: 8px;
        position: relative;
        border-radius: 6px;
        overflow: hidden;
        .markk {
          position: absolute;
          top: 0;
          height: 24px;
          width: 100%;
          background: rgb(144, 144, 144);
          background: linear-gradient(
            180deg,
            rgba(144, 144, 144, 1) 0%,
            rgba(187, 183, 183, 0) 100%
          );
        }
        .mark {
          position: absolute;
          font-size: 13px;
          color: #fff;
          right: 4px;
          top: 4px;
        }
        &:hover .play {
          opacity: 1;
        }
        img {
          width: 100%;
          border-radius: 6px;
          overflow: hidden;
          display: block;
          cursor: pointer;
        }
        .play {
          position: absolute;
          bottom: 4px;
          right: 4px;
          opacity: 0;
          cursor: pointer;
        }
      }
      .name {
        margin-top: 4px;
        margin-left: 2px;
        font-size: 14px;
        margin-bottom: 8px;
        line-height: 22px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: pre-wrap;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        cursor: pointer;
      }
    }
  }
  .footer {
    display: flex;
    justify-content: center;
    margin-bottom: 24px;
  }
}
</style>