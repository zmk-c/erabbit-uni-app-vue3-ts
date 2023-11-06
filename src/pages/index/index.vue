<!--
 * @Author: zhangmaokai zmkfml@163.com
 * @Date: 2023-11-03 00:09:36
 * @LastEditors: zhangmaokai zmkfml@163.com
 * @LastEditTime: 2023-11-06 17:04:57
 * @FilePath: /erabbit-uni-app-vue3-ts/src/pages/index/index.vue
 * @Description: 首页
-->
<template>
  <CustomNavbar></CustomNavbar>
  <XtxSwiper :list="bannerList"></XtxSwiper>
</template>

<script setup lang="ts">
import CustomNavbar from './components/CustomNavbar.vue'
import { getHomeBannerAPI } from '@/services/home'
import type { BannerItem } from '@/types/home'
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'

const bannerList = ref<BannerItem[]>([])
const getHomeBannerData = async () => {
  const res = await getHomeBannerAPI()
  bannerList.value = res.result
}

// 小程序生命周期
onLoad(() => {
  getHomeBannerData()
})
</script>

<style lang="scss">
//
</style>
