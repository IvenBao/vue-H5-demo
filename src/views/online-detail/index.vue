<!--  -->
<template>
  <div class="box">
    <her-der></her-der>
    <top :doemData="doemData"></top>
    <course :doemData="doemData"></course>
    <synopsis :doemData="doemData.detail"></synopsis>
    <div
      class="but"
      @click="dredge"
      v-if="doemData.isVipFree&&!doemData.isListen"
    >
      <span>立即加入会员</span>
    </div>
    <div
      class="but"
      @click="dredge"
      v-else-if="!doemData.isVipFree&&!doemData.isListen"
    >
      <span>立即购买</span>
    </div>
  </div>
</template>

<script>
import HerDer from '@/views/common/herder.vue'
import Top from '@/views/online-detail/top.vue'
import Course from '@/views/online-detail/course.vue'
import Synopsis from '@/views/online-detail/synopsis.vue'
import { openwechatpay } from 'base/global/pay'
// import { tips } from 'base/global/g.js'
import { getCourseProductDetailById, buyOrder, buy } from '@/api'
export default {
  data() {
    return {
      doemData: {
      }
    }
  },

  components: {
    HerDer,
    Top,
    Course,
    Synopsis
  },

  computed: {},

  mounted() {
    let params = { productId: 0, ...this.$route.params, ...this.$route.query }
    let productId = Number(params.productId)
    getCourseProductDetailById(productId).then(res => {
      //   res.data.isListen = 1
      //   res.data.errorType = 1
      //   res.data.isVipFree = true
      //   res.data.isFree = true
      if (res.data.isFree) {
        res.data.isVipFree = false
        this.doemData = res.data
        document.title = this.doemData.name
      } else {
        this.doemData = res.data
        document.title = this.doemData.name
      }
    })
  },

  methods: {
    dredge() {
      if (this.doemData.isVipFree) {
        let params = { productId: 0, ...this.$route.params, ...this.$route.query }
        let productId = Number(params.productId)
        this.$router.push({ name: 'dredge', query: { productId: productId } })
      } else {
        let postData = {
          productId: '',
          productType: ''
        }
        let params = { productId: 0, ...this.$route.params, ...this.$route.query }
        postData.productId = Number(params.productId)
        postData.productType = this.doemData.productType
        buyOrder(postData).then(res => {
          // eslint-disable-next-line
          if (res.errno == 0) {
            let data = {
              orderSn: res.data.orderSn
            }
            buy(data).then(res => {
              // eslint-disable-next-line
              if (res.errno == 0) {
                var config = {
                  'appId': res.data.appid,
                  'nonceStr': res.data.nonceStr,
                  'package': res.data.packageStr,
                  'paySign': res.data.paySign,
                  'signType': res.data.signType,
                  'timeStamp': res.data.timeStamp
                }
                openwechatpay(config, res => {
                  console.log(res)
                })
              }
            })
          }
        })
      }
    }
  }
}

</script>
<style lang='scss' scoped>
.box {
  background-color: rgba(247, 247, 247, 1);
}
.but {
  background-image: linear-gradient(
    left,
    rgba(255, 116, 83, 1),
    rgba(244, 50, 49, 1)
  );
  width: 100%;
  height: 93px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  span {
    display: inline-block;
    width: 100%;
    line-height: 93px;
    font-size: 36px;
    color: #fff;
    text-align: center;
  }
}
</style>
