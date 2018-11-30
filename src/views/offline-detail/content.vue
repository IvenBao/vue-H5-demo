<template>
  <div class="big1">
    <div>
      <!-- <video
        id="productVideo"
        ref="videoDetail"
        controls
        playsinline
        webkit-playsinline
        :src="productData.picUrl"
        preload="auto"
        autoplay
        @click="make()"
        v-if="productData.themeType === 1"
        x5-video-player-type='h5'
      ></video> -->
      <swiper
        v-if="productData.gallery.length > 0"
        :list="productData.gallery"
        auto
        style="width:100%;margin:0 auto;"
        height="180px"
        dots-class="custom-bottom"
        dots-position="center"
      ></swiper>
      <img
        v-else
        :src="productData.picUrl"
        alt=""
        class="demoSty"
      >
      <div class="content">
        <p class="titleSty">{{productData.name}}</p>
        <p class="contxt">{{productData.brief}}</p>
        <!--<img
          src="http://chuang-saas.oss-cn-hangzhou.aliyuncs.com/upload/image/20181121/1b4c378527ba4df485193a05ee4f45d9.png"
          alt=""
        >-->
        <div style="margin-top: 12px;">
          <h4 class="timeSty">￥{{productData.retailPriceDesc}} <span
              class="original"
              v-show="productData.showPriceDesc"
            >原价:￥{{productData.showPriceDesc}}</span> </h4>
          <span class="personSty">{{productData.salesNumberDesc}}</span>
        </div>
      </div>
    </div>
    <div class="align">
      <h4 class="tib">
        课程简介
      </h4>
    </div>
    <div
      class="sale-letter richText"
      v-html="productData.detail"
    ></div>
  </div>
</template>
<script>
import { Swiper } from 'vux'
export default {
  data() {
    return {
    }
  },
  mounted() {

  },
  updated() {
    // if (this.$refs.videoDetail) {
    //   if (window.WeixinJSBridge) {
    //     WeixinJSBridge.invoke('getNetworkType', {}, (e) => {
    //       this.$refs.videoDetail.play()
    //     }, false)
    //   } else {
    //     document.addEventListener('WeixinJSBridgeReady', () => {
    //       WeixinJSBridge.invoke('getNetworkType', {}, (e) => {
    //         this.$refs.videoDetail.play()
    //       })
    //     }, false)
    //   }
    //   this.$refs.videoDetail.play()
    // }
  },
  methods: {
    make() {
      this.$refs.videoDetail.play()
    }
  },
  components: {
    Swiper
  },
  props: ['productData']
}
</script>
<style lang="less" scoped>
.personSty {
  float: right;
  font-size: 28px;
  color: rgba(152, 152, 152, 1);
}
.align {
  padding-left: 32px;
  padding-bottom: 20px;
  margin-top: 20px;
  background-color: #fff;
}
.original {
  font-size: 12px;
  font-weight: 500;
  margin-left: 10px;
  color: rgba(152, 152, 152, 1);
  text-decoration: line-through;
}
.tib {
  padding: 40px 0px 8px 0px;
  color: #272828;
  font-size: 36px;
}
.align img {
  display: block;
  width: 80px;
  height: 8px;
}
.demoSty {
  width: 100%;
  height: 404px;
  display: block;
}
.content {
  padding: 20px 26px;
  overflow: hidden;
  background-color: #fff;
  position: relative;
  img {
    width: 109px;
    height: 54px;
    position: absolute;
    right: 0;
    top: 27px;
  }
}
.titleSty {
  // width: 518px;
  color: #272828;
  font-size: 36px;
}
.timeSty {
  display: inline-block;
  color: rgba(235, 43, 52, 1);
  font-size: 30px;
}
.richText {
  padding-bottom: 100px;
}
.contxt {
  margin-bottom: 8px;
  margin-top: 8px;
  width: 483px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 30px;
  color: rgba(152, 152, 152, 1);
}
</style>
