<!-- 绑定手机 -->
<template>
    <div id="bindMobile">
        <h4>登录</h4>
        <div class="input_div phone">
            <div class="area_code">+86</div>
            <input type="tel" placeholder="请输入手机号" v-model="loginInfo.phone" @input="checkValue" @paste="pastePhone">
            <div class="get_code">获取验证码</div>
        </div>
        <div class="input_div msg_code">
            <div class="area_code">验证码</div>
            <input type="tel" placeholder="请输入手机号" v-model="loginInfo.code" @input="checkValue" @paste="pasteCode">
        </div>
        <div class="bind" :class='{active: active}' @click="tologin">登录</div>
    </div>
</template>

<script>
import { tips, WXAuthorize } from 'base/global/g'
import { isWX, trimIn } from 'base/global/tools'
import { weblogin } from '@/api'
import {
    Indicator
} from 'mint-ui'
export default {
    data() {
        return {
            loginInfo: {
                phone: '18658859571',
                code: '1234'
            },
            active: true // 登录按钮的样式
        }
    },
    components: {
    },

    computed: {},
    beforeRouteEnter(to, from, next) {
        // Indicator.open({
        //     text: '请稍后...',
        //     spinnerType: 'double-bounce'
        // })
        // ...
        if (isWX) {
            if (to.query.code) {
                // todo
                // 调用后端的接口去实现微信登录
            } else {
                // 去授权
                WXAuthorize(window.location.origin + window.location.pathname)
            }
        } else {
            next()
        }
    },
    mounted() {
    },

    methods: {
        tologin() {
            if (this.active) {
                Indicator.open({
                    text: '登录中...',
                    spinnerType: 'double-bounce'
                })
                weblogin(this.loginInfo).then(res => {
                    Indicator.close()
                    console.log(res)
                    if (res.errno === 0) {
                    }
                }, rej => {
                    Indicator.close()
                    console.log(rej)
                })
            } else {
                if (!this.loginInfo.phone) {
                    tips({
                        message: '请填写手机号码'
                    })
                } else if (!this.loginInfo.code) {
                    tips({
                        message: '请填写手机验证码'
                    })
                }
            }
        },
        checkValue() {
            this.loginInfo.phone = trimIn(this.loginInfo.phone)
            this.$nextTick()
            if (this.loginInfo.phone && this.loginInfo.code) {
                this.active = true
            } else {
                this.active = false
            }
        },
        pastePhone() {

        },
        pasteCode() {

        },
        // 获取二维码
        getCode() {

        }
    }
}

</script>
<style lang='scss' scoped>
#bindMobile {
  overflow: hidden;
  h4 {
    width: 292px;
    height: 81px;
    opacity: 1;
    font-size: 58px;
    color: rgba(51, 51, 51, 1);
    line-height: 81px;
    letter-spacing: 0.28px;
    margin: 56px 0 68px 32px;
  }
  .input_div {
    width: 686px;
    height: 78px;
    opacity: 1;
    margin: 0 auto;
    border-bottom: 1px solid #eeeeee; /* no */
    display: flex;
    justify-content: flex-start;
    margin-top: 34px;
    .area_code {
      width: 130px;
      border-right: 1px solid #979797; /* no */
      height: 48px;
      font-size: 34px;
      color: rgba(54, 54, 54, 1);
      line-height: 48px;
    }
    input {
      display: block;
      width: 226px;
      height: 48px;
      border: none;
      font-size: 34px;
      margin-left: 40px;
      margin-right: 147px;
      -webkit-tap-highlight-color: transparent;
      -webkit-appearance: none;
      &::-webkit-input-placeholder {
        color: #bdbdbd;
        font-size: 34px;
      }
      &:focus {
        border-bottom: none; /* no */
        box-shadow: none; /* no */
      }
    }
    .get_code {
      width: 143px;
      height: 48px;
      font-size: 28px;
      color: #f43231;
      line-height: 48px;
    }
  }
  .bind {
    width: 686px;
    height: 88px;
    background: #acacac;
    margin: 72px auto 0;
    border-radius: 8px;
    text-align: center;
    line-height: 88px;
    color: #fff;
    font-size: 36px;
    &.active {
      background-image: linear-gradient(left, #ff7453, #f43231);
    }
  }
}
</style>
