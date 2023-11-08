/*
 * @Author: zhangmaokai zmkfml@163.com
 * @Date: 2023-11-08 10:00:00
 * @LastEditors: zhangmaokai zmkfml@163.com
 * @LastEditTime: 2023-11-08 10:11:18
 * @FilePath: /erabbit-uni-app-vue3-ts/src/services/category.ts
 * @Description:
 */
import type { CategoryTopItem } from '@/types/category'
import { http } from '@/utils/http'

/**
 * 分类列表-小程序
 */
export const getCategoryTopAPI = () => {
  return http<CategoryTopItem[]>({
    method: 'GET',
    url: '/category/top',
  })
}
