<!--
 * @Author: your name
 * @Date: 2020-10-22 20:54:25
 * @LastEditTime: 2020-10-23 12:48:15
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
    <newMv />
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
    <recomdMv />
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
    <wyMv />
  </div>
</template>

<script>
import api from "@/api/api";
import newMv from "@/views/mv/childComps/newMv";
import recomdMv from "@/views/mv/childComps/recomdMv";
import wyMv from "@/views/mv/childComps/wyMv";
export default {
  components: {
    newMv,
    recomdMv,
    wyMv,
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {},
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
}
</style>