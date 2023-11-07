/*
 * @Author: zhangmaokai zmkfml@163.com
 * @Date: 2023-11-07 22:44:40
 * @LastEditors: zhangmaokai zmkfml@163.com
 * @LastEditTime: 2023-11-07 23:14:22
 * @FilePath: /erabbit-uni-app-vue3-ts/src/services/hot.ts
 * @Description: 热门推荐
 */
import { http } from '@/utils/http'
import type { PageParams } from '@/types/global'
import type { HotResult } from '@/types/hot'

// 交叉类型
type HotParams = PageParams & { subType?: string } // subType可选Tab 项的 id，默认查询全部 Tab 项的第 1 页数据

export const getHomeRecommandAPI = (url: string, data?: HotParams) => {
  return http<HotResult>({
    method: 'GET',
    url,
    data,
  })
}
