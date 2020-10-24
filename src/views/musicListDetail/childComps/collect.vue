<template>
  <div class="collect">
    <div v-for="(item, index) in collection" :key="index" class="user">
      <div class="img">
        <img :src="item.avatarUrl" alt="" />
      </div>
      <div class="userInfo">
        <div class="userName">
          {{ item.nickname }}
          <div v-if="item.gender === 2">
            <svg
              t="1603554885024"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="10207"
              width="16"
              height="16"
            >
              <path
                d="M512 748.8c-46.1 0-90.9-9-133.1-26.9-40.7-17.2-77.3-41.9-108.6-73.2-31.4-31.4-56-67.9-73.2-108.6-17.8-42.2-26.9-86.9-26.9-133.1s9-90.9 26.9-133.1c17.2-40.7 41.9-77.3 73.2-108.6 31.4-31.4 67.9-56 108.6-73.2 42.2-17.8 86.9-26.9 133.1-26.9s90.9 9 133.1 26.9c40.7 17.2 77.3 41.9 108.6 73.2 31.4 31.4 56 67.9 73.2 108.6 17.8 42.2 26.9 86.9 26.9 133.1s-9 90.9-26.9 133.1c-17.2 40.7-41.9 77.3-73.2 108.6-31.4 31.4-67.9 56-108.6 73.2-42.2 17.9-87 26.9-133.1 26.9z m0-623.5c-75.3 0-146 29.3-199.3 82.5s-82.5 124-82.5 199.3 29.3 146 82.5 199.3c53.2 53.2 124 82.5 199.3 82.5s146-29.3 199.3-82.5c53.2-53.2 82.5-124 82.5-199.3s-29.3-146-82.5-199.3c-53.3-53.2-124-82.5-199.3-82.5zM676.1 837.9h-0.2L353 835.5c-16.6-0.1-29.9-13.6-29.8-30.2 0.1-16.5 13.5-29.8 30-29.8h0.2l322.8 2.3c16.6 0.1 29.9 13.6 29.8 30.2 0 16.6-13.5 29.9-29.9 29.9z"
                fill="#FF6E6E"
                p-id="10208"
              ></path>
              <path
                d="M510.8 958.7h-0.3c-16.6-0.2-29.8-13.8-29.7-30.3l2.3-205.2c0.2-16.5 13.6-29.7 30-29.7h0.3c16.6 0.2 29.8 13.8 29.7 30.3L540.8 929c-0.2 16.5-13.6 29.7-30 29.7z"
                fill="#FF6E6E"
                p-id="10209"
              ></path>
            </svg>
          </div>
          <div v-if="item.gender === 1">
            <svg
              t="1603554998534"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="11476"
              width="16"
              height="16"
            >
              <path
                d="M446.6 925c-46.1 0-90.9-9-133.1-26.9-40.7-17.2-77.3-41.9-108.6-73.2-31.4-31.4-56-67.9-73.2-108.6-17.8-42.2-26.9-86.9-26.9-133.1s9-90.9 26.9-133.1c17.2-40.7 41.9-77.3 73.2-108.6s67.9-56 108.6-73.2c42.2-17.8 86.9-26.9 133.1-26.9s90.9 9 133.1 26.9c40.7 17.2 77.3 41.9 108.6 73.2 31.4 31.4 56 67.9 73.2 108.6 17.8 42.2 26.9 86.9 26.9 133.1s-9 90.9-26.9 133.1c-17.2 40.7-41.9 77.3-73.2 108.6-31.4 31.4-67.9 56-108.6 73.2C537.5 916 492.8 925 446.6 925z m0-623.6c-75.3 0-146 29.3-199.3 82.5-53.2 53.2-82.5 124-82.5 199.3s29.3 146 82.5 199.3c53.2 53.2 124 82.5 199.3 82.5s146-29.3 199.3-82.5c53.2-53.2 82.5-124 82.5-199.3s-29.3-146-82.5-199.3c-53.2-53.2-124-82.5-199.3-82.5zM889.2 409.1c-16.6 0-30-13.4-30-30V159H635.8c-16.6 0-30-13.4-30-30s13.4-30 30-30h253.4c16.6 0 30 13.4 30 30v250.1c0 16.6-13.5 30-30 30z"
                fill="#09DBB9"
                p-id="11477"
              ></path>
              <path
                d="M624.868 347.5l243.185-239.872 42.132 42.714L667 390.213z"
                fill="#09DBB9"
                p-id="11478"
              ></path>
            </svg>
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
    id: String,
  },
  data() {
    return {
      collection: Array,
    };
  },
  methods: {
    getCollection(id) {
      api
        .getCollection({ id: id, limit: 30 })
        .then((res) => {
          this.collection = res.data.subscribers;
          console.log(res.data.subscribers);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.getCollection(this.id);
  },
  created() {},
};
</script>

<style lang="less" scoped>
.collect {
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
  margin-left: 30px;
  .user {
    flex-basis: 388px;
    margin-bottom: 20px;
    display: flex;
    .img {
      width: 90px;
      border-radius: 50%;
      overflow: hidden;
      border: 1px solid #dbddde;
      img {
        width: 100%;
        display: block;
      }
    }
    .userInfo {
      margin-left: 10px;
      font-size: 14px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      .userName {
        color: #333;
        font-size: 14px;
        // background-color: pink;
        height: 14px;
        cursor: pointer;
        &:hover {
          color: #000;
        }
        div {
          // background-color: black;
          display: inline-block;
        }
      }
      .userTitle {
        margin-top: 20px;
        font-size: 12px;
      }
    }
  }
}
</style>