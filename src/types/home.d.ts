/*
 * @Author: zhangmaokai zmkfml@163.com
 * @Date: 2023-11-06 16:33:44
 * @LastEditors: zhangmaokai zmkfml@163.com
 * @LastEditTime: 2023-11-06 16:34:21
 * @FilePath: /erabbit-uni-app-vue3-ts/src/types/home.d.ts
 * @Description: 首页-广告区域数据类型
 */
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
