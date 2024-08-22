// 导入axios和所需的类型
import axios, { type AxiosInstance, AxiosError, type AxiosResponse, type InternalAxiosRequestConfig } from 'axios'

 
// 默认配置
const service: AxiosInstance = axios.create({
  baseURL: "/proxy_url", // 设置API的基本URL，默认为根路径
  withCredentials: true
})
 
// 请求拦截器，对请求配置进行一些处理或设置
const source = axios.CancelToken.source();
const token = 'your_token_here';
// 请求拦截器
service.interceptors.request.use(
  (config) => {
    
    config.cancelToken = source.token; // 设置 cancelToken
    return config;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);


export default service;
// export default service // 导出封装好的axios实例
 
// 定义结果接口Result
export interface Result<T = unknown> {
  message: string
  code: number
  data: T
 
  [key: string]: any // 其他任意属性
}
 
export interface logins {
  accountEmail: string,
  accountPassword: string,
  code: string,
  data: string,
}


export const http = {
  // 发送GET请求的方法，可指定数据类型T，并返回一个Promise对象，其值为Result<T>类型
  get<T = any>(url: string, data?: object): Promise<Result<T>> {
    return service.get<T, Result<T>>(url, data);
  },
  
 
  // 发送POST请求的方法，同样可指定数据类型T，并返回一个Promise对象
  post<T = any>(url: string, data?: object): Promise<Result<T>> {
    return service.post<T, Result<T>>(url, data);
  },
 
  // 发送PUT请求的方法，同样可指定数据类型T，并返回一个Promise对象
  put<T = any>(url: string, data?: object): Promise<Result<T>> {
    return service.put<T, Result<T>>(url, data);
  },
 
  // 发送DELETE请求的方法，同样可指定数据类型T，并返回一个Promise对象
  delete<T = any>(
    url: string
  ): Promise<Result<T>> {
    return service.delete<T, Result<T>>(url);
  },
};


interface AxiosPollingConfig {
  /** The total number of previous normal polls, initial value: 0 */
  count: number
  /** When polling normally, the request delay in milliseconds, default: 1000 milliseconds */
  delay: number
  /**  Polling request interval increments in milliseconds, default: 0 milliseconds (recommended not to exceed 1000) */
  delayGaps: number
  /** When an error occurs, the current number of retries, initial value: 0 */
  retryCount: number
  /** The maximum number of requests when an error occurs, default: 10 */
  retryLimit: number
  /** The number of milliseconds to send the first request, default: 1000 milliseconds */
  retryAfter: number
}
