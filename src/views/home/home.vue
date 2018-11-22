<!-- 首页 -->
<template>
  <div>
    <swiper-comm :swiperVal="bannerData" :swiperType="1"></swiper-comm>
    <me-mber :isok="ok"></me-mber>
    <li-ne></li-ne>
    <product :isok='ok'></product>
    <li-ne></li-ne>
    <online-learning :isok='ok'></online-learning>
    <footer-tab></footer-tab>

  </div>
</template>

<script>
// import { Indicator } from 'mint-ui';
import { getBannerList, getmineData } from '@/api'
import SwiperComm from '@/views/home/swiper-comm.vue'
import LiNe from '@/views/home/line.vue'
import FooterTab from '@/views/home/footer-tab.vue'
import MeMber from '@/views/home/member.vue'
import Product from '@/views/home/online-product.vue'
import onlineLearning from '@/views/home/offline-product.vue'
// import 'swiper/dist/css/swiper.css'
// import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  data() {
    return {
      attentionShow: true,
      show: false,
      ok: '',
      bannerData: {},
      portType: {
        portType: 1
      }
    }
  },
  components: {
    SwiperComm,
    FooterTab,
    Product,
    onlineLearning,
    MeMber,
    LiNe
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper
    }
  },

  mounted() {
    getBannerList(this.portType).then(res => {
      this.bannerData = res.data
    })
    getmineData().then(res => {
      res.data.memberLevel = 1
      this.ok = res.data.memberLevel
    })
  },
  methods: {
    isok(isok) {
      this.ok = isok
    }
  }
}
</script>

<style lang='less' scoped>
/*@import url("home.css");*/
.video {
  padding: 0 32px 30px;
  box-sizing: border-box;
}
</style>
