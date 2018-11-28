<template>
  <div>
    <div
      class='footer flex-ar'
      v-if="productData.isFree"
    >
      <div
        class='share'
        @click="onPhone"
      >
        <img
          src="http://chuang-saas.oss-cn-hangzhou.aliyuncs.com/upload/image/20181122/d43cc96008d04f34aa3c680573956960.png"
          alt=""
        >
        <span>咨询</span>
      </div>
      <div
        class='buy'
        @click='signUp'
      >
        <span style="margin-left:10px;">立即报名</span>
      </div>
    </div>
    <div
      class='footer flex-ar'
      v-else-if="!productData.isOnlinePay"
    >
      <div
        class='share'
        @click="onPhone"
      >
        <img
          src="http://chuang-saas.oss-cn-hangzhou.aliyuncs.com/upload/image/20181122/d43cc96008d04f34aa3c680573956960.png"
          alt=""
        >
        <span>咨询</span>
      </div>
      <div
        class='buy'
        @click='signUp'
      >
        <span style="margin-left:10px;">立即报名</span>
      </div>
    </div>
    <div
      class='footer flex-ar'
      v-else
    >
      <div
        class='share'
        @click="onPhone"
      >
        <img
          src="http://chuang-saas.oss-cn-hangzhou.aliyuncs.com/upload/image/20181122/d43cc96008d04f34aa3c680573956960.png"
          alt=""
        >
        <span>咨询</span>
      </div>
      <div
        class='buy'
        @click='signUp'
      >
        <span>￥{{productData.retailPriceDesc}}</span>
        <span style="margin-left:10px;">立即购买</span>
      </div>
    </div>
  </div>
</template>
<script>
import { pay } from '@/api'
export default {
  data() {
    return {
      authentication: false,
      show: true
    }
  },
  methods: {
    onPhone() {
      window.open(`tel: ${this.productId.phone}`)
    },
    signUp() {
      // 还缺个判断 在未绑定手机号的情况下，先跳去绑定手机号页面
      // if (this.productData.dindanId === '') { // 判断若是订单id为空，调起支付接口
      //   if (this.productData.isfree === 0 || this.productData.isfree === 1) { // 判断若课程为免费或者咨询，调起订单接口，产生订单，但不调支付，直接去填信息页
      //     pay().then(res => {
      //       res.data.dindanId = '1215121542132165'
      //       this.$router.push({ name: 'registerInformation', query: { dindanId: res.data.dindanId } })
      //     })
      //   } else if (this.productData.isfree === 2) { // 判断若课程为付费，调起订单接口，产生订单，然后支付，然后去填信息页
      //     pay().then(res => {
      //       res.data.dindanId = '1215121542132165'
      //     })
      //   }
      // } else { // 判断若是订单id不为空，直接跳去填信息页
      //   this.$router.push({ name: 'registerInformation', query: { dindanId: this.productData.dindanId } })
      // }
      if (this.productData.isxiadan) { // 是否下单
        pay().then(res => {

        })
      } else {
        if (this.productData.isFree) { // 是否免费
          pay().then(res => {

          })
        } else {
          if (this.productData.isOnlinePay) { // 是线上付费   还是线上咨询

          }
        }
      }
    }
  },
  props: ['productData'],
  components: {
    // AuthenTication
  },
  computed: {
    classSty() {
      if (this.renzhen === 99) {
        return 'nobuy'
      } else {
        return 'buy'
      }
    }
  }
}
</script>
<style lang="less" scoped>
.footer {
  width: 100%;
  height: 100px;
  position: fixed;
  bottom: 0;
  background-color: #fff;
}
.share {
  width: 180px;
  text-align: center;
  display: inline-block;
  img {
    display: block;
    width: 40px;
    height: 36px;
    margin-left: 39%;
    margin-top: 17px;
    margin-bottom: 10px;
  }
  span {
    color: rgba(244, 50, 49, 1);
    font-size: 24px;
  }
}
.buy {
  width: 76%;
  float: right;
  text-align: center;
  background-image: linear-gradient(
    left,
    rgba(255, 116, 83, 1),
    rgba(244, 50, 49, 1)
  );
  height: 100%;
  color: #fff;
  font-size: 36px;
  line-height: 100px;
}
</style>
