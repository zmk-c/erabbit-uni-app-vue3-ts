/*
 * @Author: zhangmaokai zmkfml@163.com
 * @Date: 2023-11-03 00:09:36
 * @LastEditors: zhangmaokai zmkfml@163.com
 * @LastEditTime: 2023-11-06 16:05:18
 * @FilePath: /erabbit-uni-app-vue3-ts/src/types/component.d.ts
 * @Description: 全局组件类型声明
 */
/**
 * declare module '@vue/runtime-core'
 *   现调整为
 * declare module 'vue'
 */
import 'vue'
import XtxSwiper from '@/components/XtxSwiper.vue'

declare module 'vue' {
  export interface GlobalComponents {
    XtxSwiper: typeof XtxSwiper
  }
}
