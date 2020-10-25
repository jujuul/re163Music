<!--
 * @Author: your name
 * @Date: 2020-10-24 18:08:05
 * @LastEditTime: 2020-10-25 15:56:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-music\src\views\musicListDetail\childComps\playList.vue
-->
<template>
  <div class="playlist">
    <div class="head">
      <div class="block"></div>
      <div class="title">音乐标题</div>
      <div class="songer">歌手</div>
      <div class="album">专辑</div>
      <div class="time">时长</div>
    </div>
    <div v-for="(item, index) in songArr" :key="index" class="bg">
      <div class="block">
        <div>
          {{ index + 1 }}
        </div>
        <svg
          t="1603551806009"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="5107"
          width="16"
          height="16"
          style="cursor: pointer"
        >
          <path
            d="M512 853.333333c-18.868148 0-55.845926-22.471111-83.626667-41.339259-42.666667-29.013333-87.514074-66.37037-126.103703-105.244444C222.814815 626.915556 128 500.717037 128 353.185185c0-60.112593 23.419259-116.717037 65.991111-159.194074 42.571852-42.571852 99.081481-65.991111 159.194074-65.991111 60.112593 0 116.811852 23.608889 158.814815 65.517037 42.002963-41.908148 98.702222-65.517037 158.814815-65.517037 60.112593 0 116.717037 23.419259 159.194074 65.991111 42.571852 42.571852 65.991111 99.081481 65.991111 159.194074 0 147.531852-94.814815 273.73037-174.26963 353.659259-38.684444 38.874074-83.437037 76.231111-126.103703 105.244445-27.780741 18.773333-64.758519 41.244444-83.626667 41.244444z m1.327407-42.571852z m-2.654814 0zM353.185185 170.666667C252.586667 170.666667 170.666667 252.586667 170.666667 353.185185c0 130.654815 85.333333 245.285926 156.823703 318.482963C411.496296 757.475556 494.554074 805.451852 512 810.477037c17.445926-4.93037 100.503704-53.001481 184.50963-138.808889C768 598.471111 853.333333 483.84 853.333333 353.185185 853.333333 252.586667 771.413333 170.666667 670.814815 170.666667c-55.466667 0-107.33037 24.841481-142.222222 68.077037L512 259.413333l-16.592593-20.574814c-34.891852-43.33037-86.755556-68.171852-142.222222-68.171852z"
            p-id="5108"
            fill="#8a8a8a"
          ></path>
        </svg>
        <svg
          t="1603551417860"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="4033"
          width="16"
          height="16"
          style="cursor: pointer"
        >
          <path
            d="M960 682.666667c-12.8 0-21.333333 8.533333-21.333333 21.333333v128c0 23.466667-17.066667 42.666667-42.666667 42.666667H128c-23.466667 0-42.666667-19.2-42.666667-42.666667v-128c0-12.8-8.533333-21.333333-21.333333-21.333333s-21.333333 8.533333-21.333333 21.333333v128c0 46.933333 36.266667 85.333333 85.333333 85.333333h768c46.933333 0 85.333333-38.4 85.333333-85.333333v-128c0-12.8-8.533333-21.333333-21.333333-21.333333z"
            p-id="4034"
            fill="#8a8a8a"
          ></path>
          <path
            d="M452.266667 731.733333c17.066667 17.066667 38.4 25.6 59.733333 25.6s44.8-8.533333 59.733333-25.6l215.466667-215.466666c8.533333-8.533333 8.533333-21.333333 0-29.866667s-21.333333-8.533333-29.866667 0L541.866667 701.866667c-2.133333 2.133333-6.4 4.266667-8.533334 6.4V106.666667c0-12.8-8.533333-21.333333-21.333333-21.333334s-21.333333 8.533333-21.333333 21.333334v601.6c-2.133333-2.133333-6.4-4.266667-8.533334-6.4L266.666667 486.4c-8.533333-8.533333-21.333333-8.533333-29.866667 0s-8.533333 21.333333 0 29.866667l215.466667 215.466666z"
            p-id="4035"
            fill="#8a8a8a"
          ></path>
        </svg>
      </div>
      <div class="title">{{ item.name }}</div>
      <div class="songer">
        <div v-for="(item, index) in item.ar" :key="index">{{ item.name }}</div>
      </div>
      <div class="album">{{ item.al.name }}</div>
      <div class="time">{{ item.dt }}</div>
    </div>
  </div>
</template>

<script>
import api from "@/api/api";
export default {
  data() {
    return {
      playList: Object,
      trackIds: Array,
      songArr: Array,
    };
  },
  created() {
    this.getPlayListDetails(this.$route.params.id);
    setTimeout(() => {
      this.getMusicDetails(this.trackIds);
    }, 500);
  },
  methods: {
    getPlayListDetails(id) {
      api
        .getPlayListDetails(id)
        .then((res) => {
          let len = res.data.playlist.trackIds.length;
          let songArr = [];
          for (let i = 0; i < len; i++) {
            songArr.push(res.data.playlist.trackIds[i].id);
          }
          this.trackIds = songArr;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getMusicDetails(ids) {
      let id = JSON.stringify(ids).slice(1, -1);
      api
        .getMusicDetails({ ids: id })
        .then((res) => {
          this.songArr = res.data.songs;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style lang="less" scoped>
.playlist {
  padding-bottom: 30px;
  .head {
    margin-top: 10px;
    display: flex;
    height: 35px;
    line-height: 35px;
    font-size: 14px;
    color: #666;
    .block {
      flex-basis: 114px;
    }
    .title {
      flex: 5;
      flex-basis: 300px;
      padding-left: 6px;
      &:hover {
        background-color: #f0f1f2;
      }
    }
    .songer {
      flex: 2;
      flex-basis: 145px;
      padding-left: 6px;
      &:hover {
        background-color: #f0f1f2;
      }
    }
    .album {
      flex: 3;
      flex-basis: 190px;
      padding-left: 6px;
      &:hover {
        background-color: #f0f1f2;
      }
    }
    .time {
      flex: 1;
      flex-basis: 72px;
      padding-left: 6px;
      &:hover {
        background-color: #f0f1f2;
      }
    }
  }
  .bg {
    display: flex;
    align-items: center;
    font-size: 13px;
    height: 35px;
    background-color: #fff;
    color: #666;
    &:nth-child(even) {
      background-color: #f9f9f9;
    }
    &:hover {
      background: #f0f1f2;
    }
    .block {
      flex-basis: 114px;
      box-sizing: border-box;
      display: flex;
      justify-content: space-around;
      padding-left: 24px;
    }
    .title {
      flex: 5;
      flex-basis: 300px;
      padding-left: 6px;
      color: #333;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      &:hover {
        background-color: #f0f1f2;
      }
    }
    .songer {
      flex: 2;
      flex-basis: 145px;
      padding-left: 6px;
      display: flex;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      &:hover {
        background-color: #f0f1f2;
      }
    }
    .album {
      flex: 3;
      flex-basis: 190px;
      padding-left: 6px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      &:hover {
        background-color: #f0f1f2;
      }
    }
    .time {
      flex: 1;
      flex-basis: 72px;
      padding-left: 6px;
      &:hover {
        background-color: #f0f1f2;
      }
    }
  }
}
</style>