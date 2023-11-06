/*
 * @Author: zhangmaokai zmkfml@163.com
 * @Date: 2023-11-06 16:33:44
 * @LastEditors: zhangmaokai zmkfml@163.com
 * @LastEditTime: 2023-11-06 18:36:56
 * @FilePath: /erabbit-uni-app-vue3-ts/src/types/home.d.ts
 * @Description: 首页-数据类型
 */

/** 首页-广告区域数据类型 */
export type BannerItem = {
  /** 跳转链接 */
  hrefUrl: string
  /** id */
  id: string
  /** 图片链接 */
  imgUrl: string
  /** 跳转类型 */
  type: number
}

/** 首页-前台类目数据类型 */
export type CategoryItem = {
  /** 图标路径 */
  icon: string
  /** id */
  id: string
  /** 分类名称 */
  name: string
}
