
<template>
  <div>
    <swiper :list="list" auto style="width:100%;margin:0 auto;" height="180px" dots-class="custom-bottom" dots-position="center"></swiper>
  </div>
</template>

<script>
import { Swiper } from 'vux'
export default {
  data() {
    return {
      list: [
        {
          url: 'javascript:',
          img: 'http://chuang-saas.oss-cn-hangzhou.aliyuncs.com/upload/image/20181121/c07eafaacac242febf990e02e87685d5.png'
        }, {
          url: 'javascript:',
          img: 'http://chuang-saas.oss-cn-hangzhou.aliyuncs.com/upload/image/20181121/c07eafaacac242febf990e02e87685d5.png'
        }
      ]
    }
  },
  props: [],
  mounted() {
    // console.log('swiper', this.swiper, this.pageType);
    // swiper
  },
  computed: {
  },
  methods: {
  },
  components: {
    Swiper
  }
}
</script>

<style lang='less' scoped>
* {
  padding: 0;
  margin: 0;
}
.swiper-slide.banner {
  width: 100%;
  height: 270px;
}
.swiper-slide.banner img {
  width: 100%;
  height: 270px;
  display: block;
}
.swiper-slide.video {
  width: 100%;
  height: 330px;
}
.swiper-slide.video img {
  width: 100%;
  height: 330px;
  border-radius: 12px;
  display: block;
}
.swiper-pagination .swiper-pagination-bullet {
  background: rgb(221, 230, 230) !important;
}
.swiper-pagination > .swiper-pagination-bullet-active {
  background: #dbbc3a !important;
}
</style>

<style>
.swiper-pagination .swiper-pagination-bullet {
  background: rgb(221, 230, 230) !important;
}
.swiper-pagination > .swiper-pagination-bullet-active {
  width: 10px;
  height: 10px;
  background: #fff !important;
}
</style>
