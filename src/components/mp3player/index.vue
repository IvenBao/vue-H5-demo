<!-- 吸底的mp3播放器组件 -->
<template>
    <div v-if="!$store.state.Player.close_player" id="mp3player" :class="{'hidePlayer': $store.state.Player.is_scollup}">
        <div class="player">
            <div class="close iconfont icon-chacopy" :class="{'isClose':$store.state.Player.playStatus}" @click="_close"></div>
            <img class="mp3_img" :src="$store.state.Player.playerList[$store.state.Player.playingIndex].mp3Img" alt="" @click="doFunction">
            <div class="mp3_info" @click="doFunction">
                <span class="title">{{$store.state.Player.playerList[$store.state.Player.playingIndex].mp3Title}}</span>
                <span class="time">
                    <em class="playing_time">{{playingTime}}</em> /
                    <em class="all_play_time">{{playerTime}}</em>
                </span>
            </div>
            <div class="play_btn iconfont icon-bofangzanting" :class="{ 'icon-bofanging': $store.state.Player.playStatus, 'icon-loading': loading}" @click="control_audio"></div>
            <audio autoplay @error="error" @timeupdate="updateTime" controlos="controls" loop='false' :src="$store.state.Player.playerList[$store.state.Player.playingIndex].mp3Src" ref='audioPlayer'></audio>
        </div>
    </div>
</template>

<script>
// audio.duration//播放时间。
// audio.currentTime//播放进度
import { tips } from 'base/global/g'
let top = 0
export default {
    data() {
        return {
            is_scollup: false, // 是否向上滚动,用作上滑时的效果触发
            close_player: true, // 关闭播放器
            // playerList: [
            //     {
            //         mp3Src: 'http://chuang-saas.oss-cn-hangzhou.aliyuncs.com/upload/image/20181126/be1c3e57467d4a36ac9d5a3602c691b9.mp3', // mp3地址
            //         mp3Img: 'http://chuang-saas.oss-cn-hangzhou.aliyuncs.com/upload/image/20181126/cb72633a7fb74c2c8d0f110a2f68a3f6.png', // mp3封面图
            //         mp3Title: '35-小点成交法话术与策略' // mp3标题
            //     }
            // ], // 播放列表
            // playingIndex: 0, // 当前播放的是哪一个
            playingTime: '00:00', // 已播放时间
            playerTime: '00:00', // 音频所有时长
            playStatus: false, // 播放状态是否为正在播放
            loading: true // 是否在加载中
        }
    },

    components: {},

    mounted() {
        window.addEventListener('scroll', this.handleScroll)
    },

    methods: {
        // 滚动时间监听方法
        handleScroll() {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
            if (scrollTop > top) {
                top = scrollTop
                this.$store.state.Player.is_scollup = true
            } else {
                top = scrollTop
                this.$store.state.Player.is_scollup = false
            }
        },
        // 播放功能
        control_audio() {
            console.log(this.$store.state.Player.playStatus)
            if (this.$store.state.Player.playStatus) {
                this._pause()
            } else {
                this._play()
            }
        },
        // 关闭播放器
        _close() {
            this._pause()
            this.$store.state.Player.is_scollup = true
            setTimeout(() => {
                this.$store.commit('closePlayer')
            }, 500)
        },
        // 开始播放
        _play() {
            if (this.$refs.audioPlayer) {
                this._pause()
            }
            this.$nextTick(() => {
                this.$store.state.Player.playStatus = true
                let audio = this.$refs.audioPlayer
                if (window.WeixinJSBridge) {
                    // eslint-disable-next-line
                    WeixinJSBridge.invoke('getNetworkType', {}, function (e) {
                        audio.play()
                    }, false)
                } else {
                    // eslint-disable-next-line
                    document.addEventListener("WeixinJSBridgeReady", function () {
                        // eslint-disable-next-line
                        WeixinJSBridge.invoke('getNetworkType', {}, function (e) {
                            audio.play()
                        })
                    }, false)
                }
                audio.play()
            })
        },
        // 暂停播放
        _pause() {
            this.$nextTick(() => {
                this.$store.state.Player.playStatus = false
                this.$refs.audioPlayer.pause()
            })
        },
        // 保存当前播放器播放的内容提供下次进入后播放
        save_play_info() {

        },
        // 自动播放
        auto_play() {

        },
        // 加载出错
        error() {
            tips('音频加载出错')
        },
        // 更新当前播放时长
        updateTime(e) {
            this.playingTime = this.formatTime(parseInt(e.target.currentTime, 10))
            this.playerTime = this.formatTime(parseInt(e.target.duration, 10))
        },
        // 格式化音频时长
        formatTime(interval) {
            interval = interval || 0
            let munite = this._pad(interval / 60 || 0)
            let secend = this._pad(interval % 60)
            return `${munite}:${secend}`
        },
        // 补零
        _pad(num, n = 2) {
            num = parseInt(num)
            let len = num.toString().length
            while (len < n) {
                num = '0' + num
                len++
            }
            return num
        },
        // 点击标题后的逻辑
        doFunction(fn) {
            fn && fn()
        }
    },
    computed: {
        playerSrc() {
            return this.$store.state.Player.playerList[this.$store.state.Player.playingIndex].mp3Src // 'sdsadasdas.mp3'
        }
    },
    watch: {
        playerSrc() {
            this._play()
        }
    }
}

</script>
<style lang='scss' scoped>
#mp3player {
  width: 100%;
  height: 104px;
  position: fixed;
  left: 0;
  bottom: 105px;
  right: 0;
  transition: all 0.5s ease-in-out 0s;
  &.hidePlayer {
    transform: translate3d(0, 104px, -100px);
    opacity: 0;
  }
  .player {
    width: 686px;
    height: 104px;
    overflow: hidden;
    border-radius: 12px;
    background: #595959;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    align-items: center;
    transition: all 0.3s ease-in-out;
    .close {
      color: #fff;
      width: 44px;
      font-size: 44px;
      line-height: 44px;
      padding-left: 24px;
      transition: all 0.3s ease-in-out;
    }
    .isClose {
      transform: scale(0);
      transform: translateX(-64px);
      width: 0;
      padding-left: 0;
      opacity: 0;
    }
    .mp3_img {
      width: 73px;
      height: 73px;
      border-radius: 8px;
      overflow: hidden;
      margin-left: 24px;
    }
    .mp3_info {
      margin-left: 22px;
      width: 418px;
      flex: 1;
      span {
        display: block;
      }
      .title {
        color: #fff;
        line-height: 40px;
        font-size: 28px;
      }
      .time {
        color: #d7d7d7;
        font-size: 24px;
        line-height: 33px;
        em {
          font-style: normal;
        }
      }
    }
    .play_btn {
      color: #fff;
      font-size: 62px;
      line-height: 62px;
      margin-right: 25px;
      width: 66px;
      padding-left: 4px;
    }
    .icon-loading {
      transform: rotate(7200deg);
      transition: all 10s linear 0s;
    }
  }
  audio {
    width: 0;
    height: 0;
  }
}
</style>
