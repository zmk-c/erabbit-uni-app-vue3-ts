/*
 * @Author: zhangmaokai zmkfml@163.com
 * @Date: 2023-11-07 23:10:49
 * @LastEditors: zhangmaokai zmkfml@163.com
 * @LastEditTime: 2023-11-07 23:11:00
 * @FilePath: /erabbit-uni-app-vue3-ts/src/types/hot.d.ts
 * @Description: 热门推荐数据类型
 */
import type { PageResult, GoodsItem } from './global'

/** 热门推荐 */
export type HotResult = {
  /** id信息 */
  id: string
  /** 活动图片 */
  bannerPicture: string
  /** 活动标题 */
  title: string
  /** 子类选项 */
  subTypes: SubTypeItem[]
}

/** 热门推荐-子类选项 */
export type SubTypeItem = {
  /** 子类id */
  id: string
  /** 子类标题 */
  title: string
  /** 子类对应的商品集合 */
  goodsItems: PageResult<GoodsItem>
}
