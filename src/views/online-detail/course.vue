<!--  -->
<template>
    <div>
        <div class="sty">
            <p class="title">
                <span>课程目录</span>
                <span>共{{doemData.num}}节课</span>
            </p>
        </div>
        <ul>
            <li v-for="(item, index) in list" :key="index" @click="play(item.id,item.isFree,item, index)">
                <span>{{item.name}}</span>
                <span v-if="item.isFree && !doemData.isListen">试听</span>
                <div v-else>
                    <div class="img1" v-if="doemData.isListen" :class="{img3:changeRed == item.id}"></div>
                    <div class="img2" v-else></div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import { getCourseAudioList } from '@/api'
import { tips } from 'base/global/g'
export default {
    data() {
        return {
            changeRed: 0,
            list: [],
            productId: ''
        }
    },

    components: {},

    computed: {},

    mounted() {
        let params = { productId: 0, ...this.$route.params, ...this.$route.query }
        this.productId = Number(params.productId)
        getCourseAudioList(this.productId).then(res => {
            this.list = res.data
        })
    },

    methods: {
        playPalyers(playerList, index) {
            this.$store.commit('playPlayer', {
                playerList: playerList,
                playingIndex: 0
            })
        },
        play(id, isFree, item, index) {
            let playerList = [{
                mp3Src: item.url, // mp3地址
                mp3Img: item.picUrl || 'http://chuang-saas.oss-cn-hangzhou.aliyuncs.com/upload/image/20181126/cb72633a7fb74c2c8d0f110a2f68a3f6.png', // mp3封面图
                mp3Title: item.name // mp3标题
            }]
            // if (this.doemData.isFree) {
            //   this.changeRed = id
            //   // alert('直接听')
            // } else if (!this.doemData.isVipFree) {
            //   tips({
            //     message: '请单独购买该课程'
            //   })
            // } else {
            //   if (this.dj === 1) {
            //     this.changeRed = id // tab切换效果
            //   } else if (isFree) {
            //     alert('可以试听')
            //   } else if (this.dj !== 1) {
            //     tips({
            //       message: '请先去开通会员'
            //     })
            //   }
            // }
            if (this.doemData.isListen === 1) { // 判断是否能听
                this.changeRed = id
                this.playPalyers(playerList, index)
            } else {
                if (this.doemData.errorType === 0) { // 判断是否绑定手机
                    if (isFree) {
                        alert('可以试听')
                    } else {
                        tips({
                            message: '请先去绑定手机号'
                        }).then(res => {
                            this.$router.push({ name: 'bindMobile' })
                        })
                    }
                } else if (this.doemData.errorType === 1) { // 判断是否开通会员
                    if (isFree) {
                        alert('可以试听')
                    } else {
                        tips({
                            message: '请先去开通会员'
                        }).then(res => {
                            this.$router.push({ name: 'dredge', query: { productId: this.productId } })
                        })
                    }
                } else if (this.doemData.errorType === 2) { // 判断是否购买
                    if (isFree) {
                        alert('可以试听')
                    } else {
                        tips({
                            message: '请单独购买该课程'
                        }).then(res => {
                            alert('买买买')
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
