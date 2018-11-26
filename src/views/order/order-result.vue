<template>
  <section>
    <h4>恭喜您 与大咖一起参加</h4>
    <div class="order-body-container">
      <ul class="order-info">
        <li>
          <h5>{{realName}}</h5>
        </li>
        <li>
          <p>{{ themeName }}</p>
        </li>
        <li>
          <p>{{ contentList[2][1] }}</p>
        </li>
        <li><span v-if="activityPriceDesc">价格：{{activityPriceDesc}}元 票数：{{amount}}</span></li>
      </ul>
      <div class="separator">
        <span>请保存此二维码作为入场凭证</span>
      </div>
      <div class="qrcode">
        <qrcode :value="value" :fg-color="fgColor" type="img"></qrcode>
        <p>（长按保存至相册）</p>
        <span>* 切勿分享传播该二维码 ！！！</span>
      </div>
    </div>
  </section>
</template>

<script>
// import { getOrderDetail } from '@/api/freedrb'
// import { Indicator } from 'mint-ui'
// import { Toast, resolveTimeout } from '@/global'
// import weixin from '../Official-Accounts'
import { Qrcode } from 'vux'
export default {
  name: 'order-result',
  data() {
    return {
      value: '',
      fgColor: '#000000',
      title: '签到二维码',
      desc:
        '长按保存到手机相册 开课现场工作人员扫码 入场即可 (非工作人员扫码无法验证)',
      contentList: [
        ['姓名', ''],
        ['报名课程', ''],
        ['线下开课时间', ''],
        ['金额', ''],
        ['票数', 1]
      ],
      realName: '李大谷',
      themeName: '渠道革命（杭州 12月19日 - 12月20日）',
      activityAddress: '',
      activityStartTime: '',
      activityEndTime: '',
      activityPriceDesc: '1980',
      amount: '1',
      qrCodeUrl: '',
      qrcode: '',
      showFollow: false // 是否显示关注公众号的
    }
  },
  components: {
    // weixin
    Qrcode
  },
  methods: {
    goBack() {
      if (!this.routerFrom || this.routerFrom === 'apply') {
        this.$router.push({ name: 'mineOrder' })
      } else {
        this.$router.go(-1)
      }
    },
    setOrderInfo(orderDetail) {
      let {
        realName,
        themeName,
        activityAddress,
        activityStartTime,
        activityEndTime,
        activityPriceDesc,
        amount,
        qrCodeUrl
      } = orderDetail
      Object.assign(this, orderDetail)
      this.contentList[0][1] = realName
      this.contentList[1][1] = themeName
      this.contentList[2][1] = `${activityAddress} (${activityStartTime}-${activityEndTime})`
      this.contentList[3][1] = activityPriceDesc
      this.contentList[4][1] = amount
      this.qrcode = qrCodeUrl
      this.showFollow = Number(orderDetail.subscibeWechat) === 0
    },
    hidenWeixin() {
      this.showFollow = false
    },
    fetchOrderInfo() {
      // let { orderNo } = {
      //   ...this.$route.params,
      //   ...this.$route.query
      // }
      // Indicator.open({
      //   text: '查询中...',
      //   spinnerType: 'snake'
      // })
      // getOrderDetail({ orderNo })
      //   .then(orderDetail => {
      //     Indicator.close()
      //     this.setOrderInfo(orderDetail)
      //   })
      // .catch(err => {
      //   Indicator.close()
      //   layer.open({
      //     icon: 'icon-check',
      //     content: err.message,
      //     skin: 'msg',
      //     time: 2
      //   })
      // })
    }
  },
  mounted() {
    // this.fetchOrderInfo()
  },
  computed: {},
  beforeRouteEnter(to, from, next) {
    next()
    /*
    let { orderNo } = {
      ...to.params,
      ...to.query
    }
    if (orderNo) {
      // 参数
      // Indicator.open({ text: '查询中...' })
      // getOrderDetail({ orderNo })
      //   .then(orderDetail => {
      //     next(vm => {
      //       vm.routerFrom = from.name || ''
      //       vm.setOrderInfo(orderDetail)
      //       resolveTimeout(1).then(res => {
      //         Indicator.close()
      //       })
      //     })
      //   })
      //   .catch(err => {
      //     Indicator.close()
      //     Toast(err)
      //     if (!from.name) {
      //       // 要是直接进来，返回首页
      //       next({ name: 'mineOrder', replace: true })
      //     }
      //   })
    } else {
      // Toast('参数错误，请重试')
      // if (!from.name) {
      //   // 要是直接进来，返回首页
      //   next({ name: 'mineOrder', replace: true })
      // }
    }
    */
  },
  beforeRouteLeave(to, from, next) {
    if (
      (!this.routerFrom || this.routerFrom === 'apply') &&
      to.name !== 'mineOrder'
    ) {
      this.$router.replace({ name: 'mineOrder' })
    } else {
      next()
    }
  }
}
</script>

<style lang="less" scoped>
section {
  width: 100%;
  height: 100vh;
  background: linear-gradient(#ff3200, #c7000a);
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  padding: 0 32px;

  h4 {
    color: #fff;
    font-size: 48px;
    line-height: 50px;
    text-align: center;
    margin: 50px 0 48px;
  }

  .order-body-container {
    background: #fff;
    width: 100%;
    border-radius: 12px;
    overflow: hidden;
    ul {
      padding-top: 30px;
      li {
        margin: 20px 0;
        padding: 0 42px;
        &:first-of-type {
          h5 {
            font-size: 44px;
            line-height: 46px;
          }
        }
        &:nth-of-type(2),
        &:nth-of-type(3) {
          p {
            color: RGB(197, 0, 10);
            line-height: 34px;
            font-size: 32px;
          }
        }
        &:last-of-type {
          span {
            color: RGB(101, 101, 101);
            line-height: 34px;
            font-size: 32px;
          }
        }
      }
    }
    .separator {
      position: relative;
      display: flex;
      justify-content: center;
      height: 0;
      box-sizing: border-box;
      border-bottom: 1px dashed #83b2db;
      align-items: center;
      box-sizing: border-box;
      margin: 50px auto;
      span {
        background: #fff;
        padding: 0 20px;
        color: #83b2db;
      }
      &:before {
        position: absolute;
        left: -15px;
        content: "";
        width: 30px;
        height: 30px;
        background-color: RGB(242, 38, 2);
        border-radius: 50%;
      }
      &:after {
        position: absolute;
        right: -15px;
        content: "";
        width: 30px;
        height: 30px;
        background-color: RGB(242, 38, 2);
        border-radius: 50%;
      }
    }
    .qrcode {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      padding-bottom: 114px;
      img {
        width: 280px;
        height: 280px;
        background: rgba(0, 0, 0, 0.2);
        display: block;
        margin: 0 auto;
        border-radius: 8px;
        margin-top: 50px;
      }
      span {
        display: inline-block;
        text-align: center;
        color: RGB(214, 51, 72);
        font-size: 32px;
        padding: 27px 60px 36px;
      }
      p {
        font-size: 26px;
        color: #989898;
        margin-top: 16px;
      }
    }
  }
}
</style>
