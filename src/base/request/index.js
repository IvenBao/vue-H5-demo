import Axios from 'axios'
import {
    randomWord
} from 'base/global/tools'
import baseConfig from 'base/global/config'
import {
    login
} from 'base/global/g'
if (!sessionStorage.getItem('_r')) {
    sessionStorage.setItem('_r', randomWord(false, 32))
}
class HttpRequest {
    constructor() {
        this.options = {
            method: 'post',
            url: ''
        }
        // 存储请求队列
        this.queue = {}
    }
    // 销毁请求实例
    destroy(url) {
        delete this.queue[url]
        const queue = Object.keys(this.queue)
        return queue.length
    }
    // 请求拦截
    interceptors(instance, url) {
        // 添加请求拦截器
        instance.interceptors.request.use(config => {
            // config.url = `${baseConfig.baseUrl}${url}?r=${sessionStorage.getItem('_r')}` // 请求接口时后台添加上随机数,以便于后端记录用户操作
            config.url = `${baseConfig.baseUrl}${url}`
            // 请求拦截器中可以添加请求前需要用到的公用参数（统一添加即可），减少再业务逻辑中重复添加参数
            // 在发送请求之前做些什么
            return config
        }, error => {
            // 对请求错误做些什么
            return Promise.reject(error)
        })
        // 添加响应拦截器
        instance.interceptors.response.use((res) => {
            let {
                data
            } = res
            if (!data.errno) {
                console.log('invoker api success!')
                return data
            } else {
                return Promise.reject(data)
            }
            // alert('请求成功')
        }, error => {
            // alert('请求失败')
            if (error && error.response) {
                switch (error.response.status) {
                    case 400:
                        error.message = `请求错误`
                        break
                    case 401:
                        error.message = `无权访问,请登录!`
                        break
                    case 403:
                        error.message = `无权访问,请登录!`
                        break
                    case 404:
                        error.message = `请求地址出错: ${error.response.config.url}`
                        break
                    case 408:
                        error.message = `请求超时`
                        break
                    case 500:
                        error.message = '服务器内部错误'
                        break
                    case 501:
                        error.message = '服务未实现'
                        break
                    case 502:
                        error.message = '网关错误'
                        break
                    case 503:
                        error.message = '服务不可用'
                        break
                    case 504:
                        error.message = '网关超时'
                        break
                    case 505:
                        error.message = 'HTTP版本不受支持'
                        break
                    default:
                        break
                }
            }
            if (error.response.status === 403) {
                login()
                return new Promise(() => {})
            }
            // 对响应错误做点什么
            return Promise.reject(error.response)
        })
    }
    // 创建实例
    create() {
        let conf
        if (window.localStorage.getItem('token')) {
            conf = {
                // timeout: 2000,
                headers: {
                    'Content-Type': 'application/json; charset=utf-8',
                    // 'X-URL-PATH': location.pathname
                    'Authorization': `Bearer ${window.localStorage.getItem('token')}`
                }
            }
        } else {
            conf = {
                // timeout: 2000,
                headers: {
                    'Content-Type': 'application/json; charset=utf-8'
                    // 'X-URL-PATH': location.pathname
                }
            }
        }

        return Axios.create(conf)
    }
    // 合并请求实例
    mergeReqest(instances = []) {
        //
    }
    // 请求实例
    request(options) {
        var instance = this.create()
        this.interceptors(instance, options.url)
        options = Object.assign({
            method: 'post'
        }, options)
        if (options.method === 'get' && options.data) {
            options['params'] = options.data
            delete options.data
        }
        this.queue[options.url] = instance
        return instance(options)
    }
}
export const axios = new HttpRequest()
