<!--
 * @Author: zhangmaokai zmkfml@163.com
 * @Date: 2023-11-03 00:09:36
 * @LastEditors: zhangmaokai zmkfml@163.com
 * @LastEditTime: 2023-11-06 19:50:31
 * @FilePath: /erabbit-uni-app-vue3-ts/src/pages/index/index.vue
 * @Description: 首页
-->
<template>
  <!-- 自定义导航栏 -->
  <CustomNavbar></CustomNavbar>

  <scroll-view class="scroller-view" scroll-y>
    <!-- 自定义轮播图 -->
    <XtxSwiper :list="bannerList"></XtxSwiper>
    <!-- 分类面板 -->
    <CategoryPanel :list="cateoryList"></CategoryPanel>
    <!-- 热门推荐 -->
    <HotPanel :list="hotList"></HotPanel>
    <!-- 猜你喜欢 -->
    <XtxGuess></XtxGuess>
  </scroll-view>
</template>

<script setup lang="ts">
import CustomNavbar from './components/CustomNavbar.vue'
import CategoryPanel from './components/CategoryPanel.vue'
import HotPanel from './components/HotPanel.vue'
import { getHomeBannerAPI, getHomeCategoryAPI, getHomeHotAPI } from '@/services/home'
import type { BannerItem, CategoryItem, HotItem } from '@/types/home'
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'

// 获取首页轮播图
const bannerList = ref<BannerItem[]>([])
const getHomeBannerData = async () => {
  const res = await getHomeBannerAPI()
  bannerList.value = res.result
}

// 获取首页前台分类
const cateoryList = ref<CategoryItem[]>([])
const getHomeCategoryData = async () => {
  const res = await getHomeCategoryAPI()
  cateoryList.value = res.result
}

// 获取首页热门推荐
const hotList = ref<HotItem[]>([])
const getHomeHotData = async () => {
  const res = await getHomeHotAPI()
  hotList.value = res.result
}

// 页面生命周期 onLoad->监听页面加载
onLoad(() => {
  getHomeBannerData()
  getHomeCategoryData()
  getHomeHotData()
})
</script>

<style lang="scss">
page {
  background-color: #f7f7ff;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.scroller-view {
  flex: 1;
}
</style>
