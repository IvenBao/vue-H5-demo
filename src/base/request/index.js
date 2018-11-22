import Axios from 'axios'
import {
    randomWord
} from 'base/global/tools'
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
            console.log(config)
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
            console.log(data)
            // alert('请求成功')
        }, error => {
            // alert('请求失败')
            // 对响应错误做点什么
            return Promise.reject(error)
        })
    }
    // 创建实例
    create() {
        let conf = {
            // timeout: 2000,
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
                // 'X-URL-PATH': location.pathname
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
        this.queue[options.url] = instance
        return instance(options)
    }
}
export const axios = new HttpRequest()
