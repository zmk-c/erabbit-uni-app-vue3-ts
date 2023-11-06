/*
 * @Author: zhangmaokai zmkfml@163.com
 * @Date: 2023-11-06 19:55:55
 * @LastEditors: zhangmaokai zmkfml@163.com
 * @LastEditTime: 2023-11-06 19:59:32
 * @FilePath: /erabbit-uni-app-vue3-ts/src/types/global.d.ts
 * @Description: 通用数据类型
 */

/** 通用分页结果类型 后端返回类型 */
export type PageResult<T> = {
  /** 列表数据 实际数据 拆分了*/
  items: T[]
  /** 总条数 */
  counts: number
  /** 当前页数 */
  page: number
  /** 总页数 */
  pages: number
  /** 每页条数 */
  pageSize: number
}

/** 通用分页参数类型 */
export type PageParams = {
  /** 页码：默认值为 1 */
  page?: number
  /** 页大小：默认值为 10 */
  pageSize?: number
}
