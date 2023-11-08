/*
 * @Author: zhangmaokai zmkfml@163.com
 * @Date: 2023-11-08 15:38:28
 * @LastEditors: zhangmaokai zmkfml@163.com
 * @LastEditTime: 2023-11-08 15:38:30
 * @FilePath: /erabbit-uni-app-vue3-ts/src/types/member.d.ts
 * @Description: 登录用户信息类型
 */

/** 小程序登录 登录用户信息 */
export type LoginResult = {
  /** 用户ID */
  id: number
  /** 头像  */
  avatar: string
  /** 账户名  */
  account: string
  /** 昵称 */
  nickname?: string
  /** 手机号 */
  mobile: string
  /** 登录凭证 */
  token: string
}
