import { useMemberStore } from '@/stores'

/*
 * @Author: zhangmaokai zmkfml@163.com
 * @Date: 2023-11-06 11:03:14
 * @LastEditors: zhangmaokai zmkfml@163.com
 * @LastEditTime: 2023-11-06 11:45:05
 * @FilePath: /erabbit-uni-app-vue3-ts/src/utils/http.ts
 * @Description: 请求和上传文件拦截器
 */
const baseURL = 'https://pcapi-xiaotuxian-front-devtest.itheima.net'

/**
 * 添加拦截器：
 *    拦截 request 请求
 *    拦截 uploadFile 文件上传
 */

const httpInterceptor = {
  // 拦截前触发
  invoke(options: UniApp.RequestOptions) {
    // 1. 非 http 开头需拼接地址
    if (!options.url.startsWith('http')) {
      options.url = baseURL + options.url
    }
    // 2. 请求超时
    options.timeout = 10000
    // 3. 添加小程序端请求头标识
    options.header = {
      'source-client': 'miniapp', // 说明来源为小程序 后端接口需要字段区分
      ...options.header, // 请求中传入的header
    }
    // 4. 添加token请求头标识
    const member = useMemberStore()
    const token = member.profile?.token
    if (token) {
      options.header.Authorization = token
    }
  },
}

uni.addInterceptor('request', httpInterceptor)
uni.addInterceptor('uploadFile', httpInterceptor)
