<!--  -->
<template>
  <div>
    <div class="sty">
      <p class="title"> <span>课程目录</span> <span>共{{doemData.audioCount}}节课</span></p>
    </div>
    <ul>
      <li
        v-for="(item, index) in list"
        :key="index"
        @click="play(item.id,item.isFree,list, index)"
      >
        <span>{{item.name}}</span>
        <span v-if="item.isFree && !doemData.isListen">试听</span>
        <div v-else>
          <div
            class="img1"
            v-if="doemData.isListen"
            :class="{img3:changeRed == item.id}"
          ></div>
          <div
            class="img2"
            v-else
          ></div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { getCourseAudioList, xiadan, buy } from '@/api'
import { openwechatpay } from 'base/global/pay'
import { tips } from 'base/global/g'
export default {
  data() {
    return {
      changeRed: 0,
      list: [],
      productid: ''
    }
  },

  components: {},

  computed: {},

  mounted() {
    let params = { productId: 0, ...this.$route.params, ...this.$route.query }
    this.productid = Number(params.productId)
    getCourseAudioList(this.productid).then(res => {
      this.list = res.data
    })
  },

  methods: {
    playPalyers(playerList, index) {
      this.$store.commit('playPlayer', {
        playerList: playerList,
        playingIndex: index
      })
    },
    play(id, isFree, list, index) {
      var playerList = []
      for (var i = 0; i < list.length; i++) {
        var itme = {}
        itme.mp3Src = list[i].url
        itme.mp3Img = list[i].picUrl || 'http://chuang-saas.oss-cn-hangzhou.aliyuncs.com/upload/image/20181126/cb72633a7fb74c2c8d0f110a2f68a3f6.png'
        itme.mp3Title = list[i].name
        playerList.push(itme)
      }

      // let playerList = [{
      //   mp3Src: item.url, // mp3地址
      //   mp3Img: item.picUrl || 'http://chuang-saas.oss-cn-hangzhou.aliyuncs.com/upload/image/20181126/cb72633a7fb74c2c8d0f110a2f68a3f6.png', // mp3封面图
      //   mp3Title: item.name // mp3标题
      // }]
      if (this.doemData.isListen === 1) { // 判断是否能听
        this.changeRed = id
        this.playPalyers(playerList, index)
      } else {
        if (this.doemData.errorType === 0) { // 判断是否绑定手机
          if (isFree) { // 是否能试听
            this.playPalyers(playerList, index)
          } else {
            tips({
              message: '请先去绑定手机号'
            }).then(res => {
              this.$router.push({ name: 'bindMobile' })
            })
          }
        } else if (this.doemData.errorType === 1) { // 判断是否开通会员
          if (isFree) { // 是否能试听
            this.playPalyers(playerList, index)
          } else {
            // tips({
            //   message: '请先开通VIP会员'
            // }).then(res => {
            //   this.$router.push({ name: 'dredge' })
            // })
            tips({
              message: '请联系客服'
            }).then(res => {
              this.$router.push({ name: 'mine' })
            })
          }
        } else if (this.doemData.errorType === 2) { // 判断是否购买
          if (isFree) { // 是否能试听
            this.playPalyers(playerList, index)
          } else {
            tips({
              message: '请先购买课程'
            }).then(res => {
              let postData = {
                productId: this.productid,
                productType: this.doemData.productType
              }
              xiadan(postData).then(res => {
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
            })
          }
        }
      }
    }
  },

  props: ['doemData', 'dj']
}

</script>
<style lang='scss' scoped>
ul {
  background-color: #fff;
  padding: 0 32px;
  li {
    padding: 12px 0;
    color: rgba(101, 101, 101, 1);
    font-size: 28px;
    .img1 {
      width: 31px;
      height: 30px;
      display: inline-block;
      background: url("http://chuang-saas.oss-cn-hangzhou.aliyuncs.com/upload/image/20181121/005d48f03a964b719ccae1a6b10c2835.png")
        no-repeat;
      background-size: 100% 100%;
    }
    .img2 {
      width: 28px;
      height: 33px;
      display: inline-block;
      background: url("http://chuang-saas.oss-cn-hangzhou.aliyuncs.com/upload/image/20181121/e6c60949619641bb9bf15f4124af30e2.png")
        no-repeat;
      background-size: 100% 100%;
    }
    .img3 {
      width: 31px;
      height: 30px;
      display: inline-block;
      background: url("http://chuang-saas.oss-cn-hangzhou.aliyuncs.com/upload/image/20181121/02ada08d648d40178c628ef18657b788.png")
        no-repeat;
      background-size: 100% 100%;
    }

    span:nth-child(2) {
      float: right;
      color: rgba(211, 211, 211, 1);
    }
    div {
      display: inline-block;
      float: right;
    }
  }
}
.sty {
  padding: 32px 32px 20px 32px;
  background-color: #fff;
  margin-top: 20px;
}
.title {
  span:nth-child(1) {
    font-size: 40px;
    color: rgba(54, 54, 54, 1);
  }
  span:nth-child(2) {
    font-size: 28px;
    color: rgba(152, 152, 152, 1);
    margin-left: 24px;
  }
}
</style>
