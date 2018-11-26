// import {
//     isWX
// } from './tools.js'
import {
    tips
} from './g.js'
/**
 * 商品购买下单方法
 * productId 传入商品id去生成订单
 * Order(...)
 */
export const Order = (productId) => {}
/**
 * 加入购物车方法
 * add to Shopping Cart
 * productId 传入商品id
 * num 传入需要加购的商品数量
 * addShoppingCart(..., ...)
 */
export const addShoppingCart = (productId, num) => {

}
/**
 * 唤起微信h5支付
 */
export const openwechatpay = (config, callback) => {
    config = {
        'appId': 'wx2531d3b9ec1a6f93',
        'nonceStr': 'am1LVGfLZLvomq7T',
        'package': 'prepay_id=wx22100837318192257ed3fc733362471583',
        'paySign': 'D89296669B1F5043157AD4B239432A62CF824E7A36CA0E8128F2453C789D65E1',
        'signType': 'HMAC-SHA256',
        'timeStamp': '1414561699',
        ...config
    }

    function jsApiCall() {
        // eslint-disable-next-line
        WeixinJSBridge.invoke(
            'getBrandWCPayRequest',
            config,
            function(res) {
                console.log(res)
                Object.assign(res.data || {})
                if (res.err_msg === 'get_brand_wcpay_request:ok') {
                    // 支付成功
                    tips({
                        message: '取消支付'
                    }).then(() => {
                        callback && callback()
                    })
                } else if (res.err_msg === 'get_brand_wcpay_request:cancel') {
                    tips({
                        message: '取消支付'
                    })
                } else {
                    // 支付失败
                    tips({
                        message: '支付失败'
                    })
                }
            }
        )
    }
    if (typeof WeixinJSBridge === 'undefined') {
        if (document.addEventListener) {
            document.addEventListener('WeixinJSBridgeReady', jsApiCall, false)
        } else if (document.attachEvent) {
            document.attachEvent('WeixinJSBridgeReady', jsApiCall)
            document.attachEvent('onWeixinJSBridgeReady', jsApiCall)
        }
    } else {
        jsApiCall()
    }
}
