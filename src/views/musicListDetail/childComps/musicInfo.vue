<!--
 * @Author: your name
 * @Date: 2020-10-24 11:24:49
 * @LastEditTime: 2020-10-25 21:27:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-music\src\views\musicListDetail\childComps\musicInfo.vue
-->
<template>
  <div class="musicInfo">
    <div class="cover">
      <img :src="playList.coverImgUrl" alt="" />
    </div>
    <div class="info">
      <div class="title">
        <div class="list"><div>歌单</div></div>
        {{ playList.name }}
      </div>
      <div class="createUser">
        <div class="img">
          <img :src="profile.avatarUrl" alt="" />
        </div>
        <div class="nickName">{{ profile.nickname }}</div>
        <div class="createTime">{{ playList.createTime | pListCT }}创建</div>
      </div>
      <div class="opt">
        <div class="allPlay">
          <div class="all">
            <svg
              t="1603520519493"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="3044"
              width="16"
              height="16"
              style="margin-right: 2px"
            >
              <path
                d="M810.4 465.8 253.6 134.4c-6.8-4-13.8-6.4-21.8-6.4-21.8 0-39.6 18-39.6 40L192 168l0 688 0.2 0c0 22 17.8 40 39.6 40 8.2 0 15-2.8 22.4-6.8l556.2-331c13.2-11 21.6-27.6 21.6-46.2C832 493.4 823.6 477 810.4 465.8z"
                p-id="3045"
                fill="#ffffff"
              ></path></svg
            >播放全部
          </div>
          <span class="shu">|</span>
          <div class="add">
            <svg
              t="1603520602502"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="4673"
              width="16"
              height="16"
            >
              <path
                d="M0 465.454545l1024 0 0 93.090909-1024 0 0-93.090909Z"
                p-id="4674"
                fill="#ffffff"
              ></path>
              <path
                d="M465.454545 0l93.090909 0 0 1024-93.090909 0 0-1024Z"
                p-id="4675"
                fill="#ffffff"
              ></path>
            </svg>
          </div>
        </div>
        <div class="collection">
          <svg
            t="1603522071985"
            class="icon"
            viewBox="0 0 1165 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="8298"
            width="16"
            height="16"
            style="margin-right: 6px"
          >
            <path
              d="M945.230769 1024H220.553846A220.553846 220.553846 0 0 1 0 803.446154V220.553846A220.553846 220.553846 0 0 1 220.553846 0h192.512a78.769231 78.769231 0 0 1 69.159385 41.117538l67.584 123.98277a15.753846 15.753846 0 0 0 13.863384 8.192H945.230769a220.553846 220.553846 0 0 1 220.553846 220.553846v409.6a220.553846 220.553846 0 0 1-220.553846 220.553846zM220.553846 63.015385A157.538462 157.538462 0 0 0 63.015385 220.553846v582.892308a157.538462 157.538462 0 0 0 157.538461 157.538461h724.676923a157.538462 157.538462 0 0 0 157.538462-157.538461V393.846154a157.538462 157.538462 0 0 0-157.538462-157.538462H563.672615a78.769231 78.769231 0 0 1-69.159384-41.117538L426.929231 71.207385a15.753846 15.753846 0 0 0-13.863385-8.192z"
              fill="#8a8a8a"
              p-id="8299"
            ></path>
            <path
              d="M707.505231 842.043077a53.563077 53.563077 0 0 1-25.678769-7.089231L582.892308 782.651077 481.910154 834.953846a54.665846 54.665846 0 0 1-78.769231-57.816615l19.692308-111.379693-80.502154-78.76923a54.508308 54.508308 0 0 1 30.562461-92.790154l111.852308-15.753846L535.630769 376.832A53.878154 53.878154 0 0 1 583.837538 346.584615a54.350769 54.350769 0 0 1 48.679385 30.562462l49.624615 101.612308 111.69477 16.856615a54.350769 54.350769 0 0 1 29.774769 92.947692l-81.289846 78.769231 18.589538 111.379692a54.350769 54.350769 0 0 1-21.897846 53.248 54.980923 54.980923 0 0 1-31.507692 10.082462z m3.938461-62.070154zM582.892308 718.532923a54.823385 54.823385 0 0 1 25.678769 6.301539l88.379077 47.261538-15.753846-98.934154a54.193231 54.193231 0 0 1 15.753846-47.261538l71.995077-69.632-99.091693-15.753846a54.665846 54.665846 0 0 1-40.96-29.932308l-43.795692-90.112-44.898461 89.639384a53.720615 53.720615 0 0 1-41.117539 29.617231l-99.249231 14.020923 71.522462 70.262154a54.508308 54.508308 0 0 1 15.753846 48.364308l-17.486769 98.619077L557.056 724.676923a54.508308 54.508308 0 0 1 25.836308-6.144z"
              fill="#8a8a8a"
              p-id="8300"
            ></path>
          </svg>
          收藏({{ playList.subscribedCount }})
        </div>
        <div class="collection">
          <svg
            t="1603523126567"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="9548"
            width="16"
            height="16"
            style="margin-right: 6px"
          >
            <path
              d="M779.636364 954.181818h-535.272728A174.778182 174.778182 0 0 1 69.818182 779.636364v-535.272728A174.778182 174.778182 0 0 1 244.363636 69.818182H512a34.909091 34.909091 0 0 1 0 69.818182H244.363636A104.96 104.96 0 0 0 139.636364 244.363636v535.272728a104.96 104.96 0 0 0 104.727272 104.727272h535.272728a104.96 104.96 0 0 0 104.727272-104.727272V512a34.909091 34.909091 0 0 1 69.818182 0v267.636364a174.778182 174.778182 0 0 1-174.545454 174.545454z"
              p-id="9549"
              fill="#8a8a8a"
            ></path>
            <path
              d="M500.363636 558.545455a35.141818 35.141818 0 0 1-24.669091-10.24 34.676364 34.676364 0 0 1 0-49.338182l418.909091-418.909091a34.909091 34.909091 0 0 1 49.338182 49.338182l-418.909091 418.909091a35.141818 35.141818 0 0 1-24.669091 10.24z"
              p-id="9550"
              fill="#8a8a8a"
            ></path>
            <path
              d="M919.272727 139.636364h-186.181818a34.909091 34.909091 0 0 1 0-69.818182h186.181818a34.909091 34.909091 0 0 1 0 69.818182z"
              p-id="9551"
              fill="#8a8a8a"
            ></path>
            <path
              d="M919.272727 325.818182a34.909091 34.909091 0 0 1-34.909091-34.909091v-186.181818a34.909091 34.909091 0 0 1 69.818182 0v186.181818a34.909091 34.909091 0 0 1-34.909091 34.909091z"
              p-id="9552"
              fill="#8a8a8a"
            ></path>
          </svg>
          分享({{ playList.shareCount }})
        </div>
        <div class="collection">
          <svg
            t="1603523251344"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="11021"
            width="16"
            height="16"
            style="margin-right: 6px"
          >
            <path
              d="M960 682.666667c-12.8 0-21.333333 8.533333-21.333333 21.333333v128c0 23.466667-17.066667 42.666667-42.666667 42.666667H128c-23.466667 0-42.666667-19.2-42.666667-42.666667v-128c0-12.8-8.533333-21.333333-21.333333-21.333333s-21.333333 8.533333-21.333333 21.333333v128c0 46.933333 36.266667 85.333333 85.333333 85.333333h768c46.933333 0 85.333333-38.4 85.333333-85.333333v-128c0-12.8-8.533333-21.333333-21.333333-21.333333z"
              p-id="11022"
              fill="#8a8a8a"
            ></path>
            <path
              d="M452.266667 731.733333c17.066667 17.066667 38.4 25.6 59.733333 25.6s44.8-8.533333 59.733333-25.6l215.466667-215.466666c8.533333-8.533333 8.533333-21.333333 0-29.866667s-21.333333-8.533333-29.866667 0L541.866667 701.866667c-2.133333 2.133333-6.4 4.266667-8.533334 6.4V106.666667c0-12.8-8.533333-21.333333-21.333333-21.333334s-21.333333 8.533333-21.333333 21.333334v601.6c-2.133333-2.133333-6.4-4.266667-8.533334-6.4L266.666667 486.4c-8.533333-8.533333-21.333333-8.533333-29.866667 0s-8.533333 21.333333 0 29.866667l215.466667 215.466666z"
              p-id="11023"
              fill="#8a8a8a"
            ></path>
          </svg>
          下载全部
        </div>
      </div>
      <div class="tags">
        标签：
        <div v-for="(item, index) in playList.tags" :key="index">
          <span v-if="index === 0">{{ item }}</span>
          <span v-else><span class="xie">/</span>{{ item }}</span>
        </div>
      </div>
      <div class="songs">
        歌曲：{{ playList.trackCount }}
        <span v-if="playList.playCount > 10000"
          >播放：{{ parseInt(playList.playCount / 10000) }}万</span
        >
        <span v-else>{{ playList.playCount }}</span>
      </div>
      <div class="des">简介：{{ playList.description }}</div>
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
      playList: Object,
      userId: Object,
      userDetail: Object,
      profile: Object,
    };
  },
  methods: {
    getPlayListDetails(id) {
      api
        .getPlayListDetails(id)
        .then((res) => {
          this.playList = res.data.playlist;
          this.userId = res.data.playlist.userId;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getUserDetails(id) {
      api
        .getUserDetails(id)
        .then((res) => {
          this.profile = res.data.profile;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  created() {
    this.getPlayListDetails(this.id);
  },
  mounted() {
    setTimeout(() => {
      this.getUserDetails(this.userId);
    }, 500);
  },
};
</script>

<style lang="less" scoped>
.musicInfo {
  display: flex;
  .cover {
    min-width: 185px;
    width: 185px;
    min-height: 185px;
    border-radius: 6px;
    overflow: hidden;
    img {
      width: 100%;
      display: block;
    }
  }
  .info {
    margin-left: 20px;
    position: relative;
    .title {
      display: flex;
      font-size: 22px;
      font-weight: bold;
      color: #222;
      .list {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 8px;
        div {
          font-size: 12px;
          font-weight: normal;
          color: #ec4141;
          border: 1px solid red;
          border-radius: 4px;
          padding: 3px 5px;
        }
      }
    }
  }
  .createUser {
    margin-top: 10px;
    display: flex;
    font-size: 13px;
    font-weight: normal;
    align-items: center;
    .img {
      width: 26px;
      height: 26px;
      border-radius: 50%;
      overflow: hidden;
      img {
        width: 100%;
      }
    }
    .nickName {
      color: #507db6;
      cursor: pointer;
      margin: 0 8px;
      &:hover {
        color: #0b58b0;
      }
    }
    .createTime {
      color: #777;
    }
  }
  .opt {
    display: flex;
    margin-top: 14px;
    .allPlay {
      background-color: #ec4141;
      width: 138px;
      height: 32px;
      border-radius: 25px;
      overflow: hidden;
      display: flex;
      box-sizing: border-box;
      cursor: pointer;
      &:hover {
        background-color: #d73535;
      }
      .all {
        width: 102px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 14px;
        color: #fff;
        font-weight: normal;
        &:hover {
          background-color: #cc3232;
        }
      }
      .shu {
        transform: scaleX(0.00049);
        color: #fff;
        width: 1px;
      }
      .add {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 16px;
        font-size: 14px;
        width: 35px;
        &:hover {
          background-color: #cc3232;
        }
      }
    }
    .collection {
      margin-left: 16px;
      box-sizing: border-box;
      border: 1px solid #d8d8d8;
      background-color: #fff;
      width: 138px;
      height: 32px;
      border-radius: 25px;
      overflow: hidden;
      display: flex;
      font-size: 14px;
      color: #444;
      font-weight: normal;
      cursor: pointer;
      align-items: center;
      justify-content: center;
    }
  }
  .tags {
    margin-top: 12px;
    display: flex;
    font-size: 13px;
    font-weight: normal;
    color: #666;
    div {
      cursor: pointer;
      color: cornflowerblue;
      .xie {
        margin: 0 4px;
        color: #666 !important;
      }
    }
  }
  .songs {
    margin-top: 12px;
    bottom: 26px;
    font-size: 13px;
    color: #666;
  }
  .des {
    margin-top: 12px;
    width: 600px;
    font-size: 13px;
    white-space: nowrap;
    overflow: hidden;
    color: #666;
    text-overflow: ellipsis;
  }
}
</style>