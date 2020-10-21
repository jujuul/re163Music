<!--
 * @Author: your name
 * @Date: 2020-10-20 14:22:24
 * @LastEditTime: 2020-10-20 23:09:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-music\src\views\discover\childRouter\Individ.vue
-->
<template>
  <div class="individuation">
    <Scroll />
    <div class="text">
      推荐歌单
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
    <MusicList />
    <div class="text">
      独家放送
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
    <Personalized />
    <!--<div class="text">
      最新音乐
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
    <NewSong />-->
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
    <NewMv />
    <footer></footer>
  </div>
</template>

<script>
import Scroll from "@/components/common/scroll/scroll";
import MusicList from "@/components/content/musiclist/musiclist";
import Personalized from "@/components/content/personalized/personalized";
import NewSong from "@/views/discover/childComps/NewSongs";
import NewMv from "@/views/discover/childComps/NewMv";
export default {
  components: { Scroll, MusicList, Personalized, NewSong, NewMv },
  data() {
    return {};
  },
  methods: {},
  mounted() {},
};
</script>

<style lang="less" scoped>
.individuation {
  width: calc(100% - 612px);
  min-width: 800px;
  margin: 0 auto;
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
footer {
  height: 60px;
}
</style>