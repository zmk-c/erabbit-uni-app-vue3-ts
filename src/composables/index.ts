/*
 * @Author: zhangmaokai zmkfml@163.com
 * @Date: 2023-11-08 16:41:30
 * @LastEditors: zhangmaokai zmkfml@163.com
 * @LastEditTime: 2023-11-08 16:47:13
 * @FilePath: /erabbit-uni-app-vue3-ts/src/composables/index.ts
 * @Description: 封装成组合式函数
 */

import type { XtxGuessInstance } from '@/types/component'
import { ref } from 'vue'

/**
 * 猜你喜欢 组合式函数 = 获取组件实例 + 滚动触底事件 + 加载分页数据
 */
export const useGuessList = () => {
  // 获取猜你喜欢组件实例
  const guessRef = ref<XtxGuessInstance>()

  // 滚动触底事件
  const onScrolltolower = () => {
    guessRef.value?.getMore()
  }

  // 返回 ref 和事件处理函数
  return {
    guessRef,
    onScrolltolower,
  }
}
