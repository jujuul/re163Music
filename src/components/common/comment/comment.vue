<!--
 * @Author: your name
 * @Date: 2020-10-25 16:10:09
 * @LastEditTime: 2020-10-25 22:55:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-music\src\components\common\comment\comment.vue
-->
<template>
  <div class="comment">
    <div class="input">
      <textarea type="text" />
    </div>
    <div v-if="showHot">
      <div class="goodComment">精彩评论</div>
      <div class="hotComments" v-for="(item, index) in hotList" :key="index">
        <div class="avatar">
          <img :src="item.user.avatarUrl" alt="" />
        </div>
        <div class="content">
          <div class="top">
            <span>{{ item.user.nickname }}</span
            >：{{ item.content }}
          </div>
          <div class="reply" v-if="item.beReplied.length > 0">
            <span class="null" v-if="item.beReplied[0].content == null"
              >该评论以删除</span
            >
            <span v-else>
              <span class="name">@{{ item.beReplied[0].user.nickname }}：</span
              >{{ item.beReplied[0].content }}</span
            >
          </div>
          <div class="bottom">
            <div class="time">{{ item.time | hCCT }}</div>
            <div class="opt"></div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="showCom">
      <div class="goodComment">最新评论</div>
      <div class="hotComments" v-for="(item, index) in comList" :key="index">
        <div class="avatar">
          <img :src="item.user.avatarUrl" alt="" />
        </div>
        <div class="content">
          <div class="top">
            <span>{{ item.user.nickname }}</span
            >：{{ item.content }}
          </div>
          <div class="reply" v-if="item.beReplied.length > 0">
            <span class="null" v-if="item.beReplied[0].content == null"
              >该评论以删除</span
            >
            <span v-else>
              <span class="name">@{{ item.beReplied[0].user.nickname }}：</span
              >{{ item.beReplied[0].content }}</span
            >
          </div>
          <div class="bottom">
            <div class="time">{{ item.time | hCCT }}</div>
            <div class="opt"></div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="sofa">
      <div class="sofa">还没有评论，快来抢沙发~</div>
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
      showHot: false,
      showCom: false,
      hotList: Array,
      comList: Array,
      sofa: false,
    };
  },
  mounted() {
    this.getMusicComments(this.id);
  },
  methods: {
    getMusicComments(id) {
      api
        .getMusicComments({ id })
        .then((res) => {
          console.log(res);
          if (res.data.hotComments.length > 0) {
            this.showHot = true;
            this.hotList = res.data.hotComments;
          }
          if (res.data.comments.length > 0) {
            this.showCom = true;
            this.comList = res.data.comments;
          } else {
            this.sofa = true;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style lang="less" scoped>
.comment {
  padding: 0 30px;
  .input {
    textarea {
      width: 100%;
      outline: none;
      border-radius: 6px;
      border: 1px solid #e5e5e5;
      padding: 6px 10px;
      height: 69px;
      resize: none;
      box-sizing: border-box;
    }
  }
  .goodComment {
    margin: 20px 0;
    color: #000;
    font-size: 14px;
    font-weight: bold;
  }
  .hotComments {
    display: flex;
    border-bottom: 1px solid #e4e4e4;
    padding-bottom: 10px;
    margin-bottom: 20px;
    .avatar {
      width: 36px;
      height: 36px;
      img {
        width: 100%;
        border-radius: 50%;
        overflow: hidden;
      }
    }
    .content {
      margin-left: 16px;
      flex: 1;
      font-size: 13px;
      line-height: 20px;
      color: #666;
      span {
        color: #507daf;
        cursor: pointer;
        &:hover {
          color: #0b58b0;
        }
      }
      .top {
        margin-bottom: 4px;
      }
      .bottom {
        display: flex;
        justify-content: space-between;
        .time {
          color: #888;
          font-size: 12px;
        }
        .opt {
        }
      }
      .reply {
        width: 100%;
        background-color: #f4f4f4;
        padding: 4px 6px;
        span {
          cursor: auto;
          color: #888;
          font-size: 12px;
          .name {
            color: #507daf;
            cursor: pointer;
            &:hover {
              color: #0b58b0;
            }
          }
        }
        .null {
          display: flex;
          justify-content: center;
        }
      }
    }
  }
  .sofa {
    text-align: center;
    color: #999;
    font-size: 13px;
    margin-top: 30px;
  }
}
</style>