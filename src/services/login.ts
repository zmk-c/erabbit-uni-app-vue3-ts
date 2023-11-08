/*
 * @Author: zhangmaokai zmkfml@163.com
 * @Date: 2023-11-08 15:11:15
 * @LastEditors: zhangmaokai zmkfml@163.com
 * @LastEditTime: 2023-11-08 15:27:50
 * @FilePath: /erabbit-uni-app-vue3-ts/src/services/login.ts
 * @Description: 登录接口
 */

import { http } from '@/utils/http'

type LoginParams = {
  code: string // 必要 通过wx.login()获取
  encryptedData: string // 必要
  iv: string // 必要
}

export const postLoginWxMinAPI = (data: LoginParams) => {
  return http({
    method: 'POST',
    url: '/login/wxMin',
    data: data,
  })
}
