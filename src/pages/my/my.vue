<!--
 * @Author: zhangmaokai zmkfml@163.com
 * @Date: 2023-11-03 00:09:36
 * @LastEditors: zhangmaokai zmkfml@163.com
 * @LastEditTime: 2023-11-06 11:49:26
 * @FilePath: /erabbit-uni-app-vue3-ts/src/pages/my/my.vue
 * @Description: 我的页面
-->
<template>
  <view class="my">
    <view>会员信息：{{ memberStore.profile }}</view>
    <button
      @tap="
        memberStore.setProfile({
          nickname: '黑马先锋',
          token: '1233',
        })
      "
      size="mini"
      plain
      type="primary"
    >
      保存用户信息
    </button>
    <button @tap="memberStore.clearProfile()" size="mini" plain type="warn">清理用户信息</button>
    <button @tap="getData()" size="mini" plain type="primary">测试请求</button>
  </view>
</template>

<script setup lang="ts">
import { useMemberStore } from '@/stores'
import '@/utils/http'

const memberStore = useMemberStore()

// 测试请求
const getData = () => {
  uni.request({
    method: 'GET',
    url: '/home/banner',
  })
}
</script>

<style lang="scss">
//
</style>
