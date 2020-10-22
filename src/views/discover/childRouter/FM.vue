<!--
 * @Author: your name
 * @Date: 2020-10-21 22:38:00
 * @LastEditTime: 2020-10-22 18:05:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-music\src\views\discover\childRouter\FM.vue
-->
<template>
  <div class="fm">
    <FMS />
    <div class="category">
      <div v-for="(item, index) in category" :key="index" class="cate">
        <div class="img"><img :src="item.pic56x56Url" alt="" /></div>
        <div class="itemName">
          {{ item.name }}
        </div>
      </div>
    </div>
    <div class="text">
      付费精品
      <span
        ><svg
          t="1603185183112"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="3041"
          width="16"
          height="16"
        >
          <path
            d="M313.987456 1023.943672c-5.644178 0-11.313329-1.898042-15.983511-5.769049-10.589076-8.84088-12.012607-24.574648-3.196702-35.188699l378.909107-454.581042-380.832123-464.620685c-8.740982-10.663998-7.19258-26.397767 3.496393-35.13875 10.688973-8.740982 26.397767-7.167606 35.13875 3.496393l393.893649 480.579221c7.592167 9.265441 7.542219 22.601684-0.124871 31.817176l-392.145452 470.464656C328.247744 1020.896816 321.130087 1023.943672 313.987456 1023.943672z"
            p-id="3042"
            fill="#2c2c2c"
          ></path></svg
      ></span>
    </div>
  </div>
</template>

<script>
import api from "@/api/api";
import FMS from "@/components/common/scroll/FMS";
export default {
  components: { FMS },
  data() {
    return {
      category: [],
    };
  },
  methods: {
    getDjCateList() {
      api
        .getDjCateList()
        .then((res) => {
          this.category = res.data.categories.slice(0, 8);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.getDjCateList();
  },
};
</script>

<style lang="less" scoped>
.fm {
  width: calc(100% - 612px);
  min-width: 800px;
  margin: 0 auto;
  .category {
    display: flex;
    margin-bottom: 50px;
    justify-content: space-around;
    .cate {
      width: 56px;
      height: 56px;
      background-color: #fcebeb;
      border-radius: 50%;
      color: #666;
      font-size: 14px;
      cursor: pointer;
      &:hover {
        background-color: #fad8d8;
      }
      .img {
        width: 56px;
        height: 56px;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          width: 50%;
          display: block;
        }
      }
      .itemName {
        margin-top: 10px;
        text-align: center;
      }
    }
  }
  .text {
    font-size: 22px;
    font-weight: bold;
    margin-top: 20px;
    margin-bottom: 20px;
    color: #333;
    cursor: pointer;
    &:hover {
      color: #000;
    }
  }
}
</style>