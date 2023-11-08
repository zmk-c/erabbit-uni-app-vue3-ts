/*
 * @Author: zhangmaokai zmkfml@163.com
 * @Date: 2023-11-08 11:10:24
 * @LastEditors: zhangmaokai zmkfml@163.com
 * @LastEditTime: 2023-11-08 11:19:17
 * @FilePath: /erabbit-uni-app-vue3-ts/src/services/goods.ts
 * @Description: 商品详情接口
 */
import type { GoodsResult } from '@/types/goods'
import { http } from '@/utils/http'

/**
 * 商品详情
 * 规格集合一定要和skus集合下的specs 顺序保持一致
 */
export const getGoodsByIdAPI = (id: string) => {
  return http<GoodsResult>({
    method: 'GET',
    url: '/goods',
    data: { id },
  })
}
