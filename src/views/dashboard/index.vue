<!--  -->
<script setup lang="ts">
// import { ref } from "vue";
// // * 加载标识
// const loading = ref<boolean>(true);

import { onMounted, onUnmounted, reactive } from "vue";
import { WEEK } from "./constant";
import mhLogo from "../../assets/mhlogo.png";

// 时间模块
const timeInfo = reactive({
  setInterval: undefined,
  dateDay: "",
  dateYear: "",
  dateWeek: ""
});
// todo 处理时间监听
const handleTime = () => {
  timeInfo.setInterval = setInterval(() => {
    const date = new Date();
    timeInfo.dateWeek = WEEK[date.getDay()];
    timeInfo.dateDay = date.toLocaleTimeString();
    timeInfo.dateYear = date.toLocaleDateString();
  }, 1000);
};

// 生命周期
onMounted(() => {
  handleTime();
});

onUnmounted(() => {
  clearInterval(timeInfo.setInterval);
});
</script>

<template>
  <div id="data-view">
    <!-- <dv-loading v-if="loading">Loading...</dv-loading> -->
    <dv-full-screen-container>
      <div class="main-header">
        <div class="main-header-top">
          <span><img class="w-24 h-10" :src="mhLogo" /></span>
          <span class="text-4xl ml-3"> 美 恒 客 户 服 务 中 心</span>
        </div>
        <div class="text-xl">MH Client Service</div>
        <div class="text-4xl">
          {{ timeInfo.dateYear }} {{ timeInfo.dateWeek }} {{ timeInfo.dateDay }}
        </div>
      </div>
      <div class="main-container flex-auto">
        <div class="left-container">
          <dv-border-box-10> 111 </dv-border-box-10>
          <dv-border-box-10> 222 </dv-border-box-10>
        </div>
        <div class="middle-container">map</div>
        <div class="right-container">
          <dv-border-box-10> 333 </dv-border-box-10>
          <dv-border-box-10> 444 </dv-border-box-10>
        </div>
      </div>
    </dv-full-screen-container>
  </div>
</template>

<style lang="scss" scoped>
#data-view {
  width: 100%;
  height: 100%;
  background-color: #2c3e50;
  color: #fff;
  #dv-full-screen-container {
    background-image: url("/@/assets/pageBg.png");
    background-size: 100% 100%;
    box-shadow: 0 0 3px blue;
    display: flex;
    flex-direction: column;
    .main-header {
      display: flex;
      flex-direction: column;
      align-items: center;
      color: #88cbfc;
      .main-header-top {
        display: flex;
        align-items: center;
        padding-top: 2rem;
      }
      .main-container {
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 100%;
        .left-container {
          height: 58%;
        }
        .right-container {
          height: 42%;
        }
      }
    }
  }
}
</style>
