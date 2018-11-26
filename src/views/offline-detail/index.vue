<template>
  <div class="big">
    <her-der></her-der>
    <con-tent :productData="productData"></con-tent>
    <opera-tion :productId="productId" :price="productData.priceDesc" v-on:iSshow="iSshow"></opera-tion>
    <adv-isory v-show="isShow" v-on:noshow="noshow"></adv-isory>
  </div>
</template>
<script>
import { getActivityProductDetailById } from '@/api'
import operaTion from '@/views/offline-detail/operation.vue'
import conTent from '@/views/offline-detail/content.vue'
import advIsory from '@/views/offline-detail/advisory.vue'
import HerDer from '@/views/common/herder.vue'
export default {
  data() {
    return {
      productId: {
        themeId: '',
        phone: '0579-83443200'
      },
      productData: {
        gallery: 'http://1254016570.vod2.myqcloud.com/7176c53evodgzp1254016570/822fe01c5285890780717738819/fU4oyY5EooQA.mp4',
        // themeHrefUrl: 'http://chuang-saas.oss-cn-hangzhou.aliyuncs.com/upload/image/20180911/ee26846833ab481d8b0815d1f5def3d7.jpeg',
        themeType: 1,
        // themeType: 0,
        name: 'TALENT CULTIV',
        detail: '<p><img src="http://chuang-saas.oss-cn-hangzhou.aliyuncs.com/upload/image/20180814/6ff2e558836f42739085633edaab5f74.png" style="max-width:100%;"><img src="http://chuang-saas.oss-cn-hangzhou.aliyuncs.com/upload/image/20180814/cba645b736454ca599baf06c38cbe96a.png" style="line-height: 32px; max-width: 100%;"><img src="http://chuang-saas.oss-cn-hangzhou.aliyuncs.com/upload/image/20180814/9994356ea456424ab98998d17e4ee497.png" style="line-height: 32px; max-width: 100%;"><img src="http://chuang-saas.oss-cn-hangzhou.aliyuncs.com/upload/image/20180814/bd597f5b51914492b4458bcdcfa0a2ee.png" style="line-height: 32px; max-width: 100%;"><img src="http://chuang-saas.oss-cn-hangzhou.aliyuncs.com/upload/image/20180814/5d29b27c126c412eb4e2e66b2dea3f0a.png" style="line-height: 32px; max-width: 100%;"><img src="http://chuang-saas.oss-cn-hangzhou.aliyuncs.com/upload/image/20180814/00f3f454027542948092f106dc7a0144.png" style="line-height: 32px; max-width: 100%;"><img src="http://chuang-saas.oss-cn-hangzhou.aliyuncs.com/upload/image/20180814/1f8ee060801e4b569ae60afb881d7d27.png" style="line-height: 32px; max-width: 100%;"><img src="http://chuang-saas.oss-cn-hangzhou.aliyuncs.com/upload/image/20180814/da74baa92cfd46098f2886c415615c0f.png" style="line-height: 32px; max-width: 100%;"><img src="http://chuang-saas.oss-cn-hangzhou.aliyuncs.com/upload/image/20180814/7dff672b10e342ba98c6208f8f1b1c2b.png" style="line-height: 32px; max-width: 100%;"></p><p><video src="http://1254016570.vod2.myqcloud.com/7176c53evodgzp1254016570/185e92f15285890781237742077/0puRQIaXfYcA.mp4"></video></p><p><br></p><p><img src="http://chuang-saas.oss-cn-hangzhou.aliyuncs.com/upload/image/20180817/f91ae72642694dd9959d4b6f3029eeed.png" style="max-width: 100%;"></p><p><img src="http://chuang-saas.oss-cn-hangzhou.aliyuncs.com/upload/image/20181009/bc0677c5162d4d1286558d6a778de140.jpg" style="max-width: 100%;"></p>',
        brief: '非常有效、百试不爽的快速卖货的大大撒打算打算第三代',
        retailPriceDesc: 1980,
        salesNumberDesc: 10000
      },
      isShow: false
    }
  },
  components: {
    operaTion,
    conTent,
    HerDer,
    advIsory
  },
  methods: {
    iSshow(iShow) {
      this.isShow = iShow
    },
    noshow(noshow) {
      this.isShow = noshow
    },
    share() {
      window.location.href = `/share?themeId=${this.productId.themeId}`
    }
    // isok(isok) {
    //     this.ok = isok;
    // },
    // isShow(isShow) {
    //     this.dd = isShow;
    // }
  },
  mounted() {
    let params = { productId: 0, ...this.$route.params, ...this.$route.query }
    this.productId.themeId = Number(params.productId)
    if (this.productId.themeId > 0) {
      getActivityProductDetailById(this.productId).then(res => {
        console.log(res)
      })
    }
  }
}

</script>
<style lang="less" scoped>
.share {
  width: 100px;
  height: 100px;
  position: fixed;
  bottom: 170px;
  right: 40px;
  img {
    width: 100%;
    height: 100%;
  }
}
.big {
  background-color: rgba(247, 247, 247, 1);
}
</style>
