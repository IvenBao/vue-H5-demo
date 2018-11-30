<!-- 首页 -->
<template>
  <div class="bigbox">
    <swiper-comm
      :swiperVal="bannerData"
      :swiperType="1"
    ></swiper-comm>
    <me-mber :isok="ok"></me-mber>
    <product
      :isok='ok'
      v-show="onlineproductListShow"
      :productList='onlineproductList'
    ></product>
    <offline-product
      :isok='ok'
      :productList='offlineproductList'
      v-show="offlineproductListShow"
    ></offline-product>
    <footer-tab></footer-tab>

  </div>
</template>

<script>
// import { Indicator } from 'mint-ui';
import { getBannerList, getmineData, getCourseProductList, getOfflineActivityThemeList } from '@/api'
import SwiperComm from '@/views/home/swiper-comm.vue'
import FooterTab from '@/views/home/footer-tab.vue'
import MeMber from '@/views/home/member.vue'
import Product from '@/views/home/online-product.vue'
import offlineProduct from '@/views/home/offline-product.vue'
// import 'swiper/dist/css/swiper.css'
// import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  data() {
    return {
      attentionShow: true,
      show: false,
      ok: '',
      bannerData: [],
      portType: {
        portType: 1
      },
      onlineproductList: [],
      offlineproductList: [],
      onlineproductListShow: false,
      offlineproductListShow: false
    }
  },
  components: {
    SwiperComm,
    FooterTab,
    Product,
    offlineProduct,
    MeMber
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper
    }
  },

  mounted() {
    let o = {
      pageNum: 1,
      pageSize: 20
    }
    getBannerList(this.portType).then(res => {
      this.bannerData = res.data.map(item => {
        item.img = item.imageUrl
        item.url = item.hrefUrl
        return item
      })
      console.log(this.bannerData)
    })
    getmineData().then(res => {
      // res.data.memberLevel = 1
      // res.data.isVIP = true
      this.ok = res.data.isVIP
    })
    getCourseProductList(o).then(res => {
      if (res.data) {
        this.onlineproductList = res.data
      }
      if (res.data.length > 0) {
        this.onlineproductListShow = true
      }
    })
    getOfflineActivityThemeList(o).then(res => {
      if (res.data) {
        this.offlineproductList = res.data
      }
      if (res.data.length > 0) {
        this.offlineproductListShow = true
      }
    })
  },
  methods: {

  }
}
</script>

<style lang='less' scoped>
/*@import url("home.css");*/
.bigbox {
  background-color: rgba(247, 247, 247, 1);
}
.video {
  padding: 0 32px 30px;
  box-sizing: border-box;
}
</style>
