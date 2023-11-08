/*
 * @Author: zhangmaokai zmkfml@163.com
 * @Date: 2023-11-08 15:11:15
 * @LastEditors: zhangmaokai zmkfml@163.com
 * @LastEditTime: 2023-11-08 15:49:34
 * @FilePath: /erabbit-uni-app-vue3-ts/src/services/login.ts
 * @Description: 登录接口
 */

import type { LoginResult } from '@/types/member'
import { http } from '@/utils/http'

type LoginParams = {
  code: string // 必要 通过wx.login()获取
  encryptedData: string // 必要
  iv: string // 必要
}

/**
 * 生产环境 需要企业appid
 * @param data
 * @returns
 */
export const postLoginWxMinAPI = (data: LoginParams) => {
  return http<LoginResult>({
    method: 'POST',
    url: '/login/wxMin',
    data: data,
  })
}

/**
 * 模拟环境 只需要传一个 phoneNumber 参数即可
 * @param phoneNumber
 * @returns
 */
export const postLoginWxMinSimpleAPI = (phoneNumber: string) => {
  return http<LoginResult>({
    method: 'POST',
    url: '/login/wxMin/simple',
    data: { phoneNumber },
  })
}
