<!--
 * @Author: your name
 * @Date: 2020-10-23 15:20:07
 * @LastEditTime: 2020-10-23 22:15:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-music\src\views\mv\childComps\comment.vue
-->
<template>
  <div class="comment">
    <div class="commentText">
      评论 &nbsp;<span class="number">({{ total }})</span>
    </div>
    <div class="input">
      <textarea type="text" />
    </div>
    <div v-if="showHot">
      <div class="goodComment">精彩评论</div>
      <div
        v-for="(item, index) in hotComments"
        :key="index"
        class="hotComments"
      >
        <div class="avatar">
          <img :src="item.user.avatarUrl" alt="" />
        </div>
        <div class="content">
          <div class="top">
            <span>{{ item.user.nickname }}：</span>{{ item.content }}
          </div>
          <div class="bottom">
            <div class="time">{{ item.time }}</div>
            <div class="opt"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from "@/api/api";
import dayjs from "dayjs";
export default {
  props: {
    id: String,
  },
  data() {
    return {
      hotComments: [],
      showHot: true,
      total: Number,
    };
  },
  mounted() {
    this.getMvComment(this.id);
  },
  methods: {
    getMvComment(id) {
      api
        .getMvComment(id)
        .then((res) => {
          this.total = res.data.total;
          this.hotComments = res.data.hotComments.slice(0, 10);
          if (this.hotComments.length === 0) {
            this.showHot = false;
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
  width: 618px;
  .commentText {
    font-size: 22px;
    margin-bottom: 16px;
    .number {
      font-size: 12px;
      color: #999;
      font-weight: normal;
    }
  }
  .input {
    textarea {
      min-width: 620px;
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
        .tiem {
          color: #888;
          font-size: 12px;
        }
        .opt {
        }
      }
    }
  }
}
</style>