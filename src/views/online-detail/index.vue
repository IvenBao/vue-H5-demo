<!--  -->
<template>
  <div class="box">
    <her-der></her-der>
    <top :doemData="doemData"></top>
    <course :doemData="doemData"></course>
    <synopsis :doemData="doemData.content"></synopsis>
    <div class="but">
      <span>立即加入会员</span>
    </div>
  </div>
</template>

<script>
import HerDer from '@/views/common/herder.vue'
import Top from '@/views/online-detail/top.vue'
import Course from '@/views/online-detail/course.vue'
import Synopsis from '@/views/online-detail/synopsis.vue'
export default {
  data() {
    return {
      doemData: {
        title: '快速卖货的方法',
        text: '非常有效、百试不爽的快速卖货的方式发送到发送到防守打法',
        num: '10',
        dj: 1,
        list: [
          {
            title: '01-人人可行的8条移动互联网创业之路',
            id: 1,
            st: 1
          },
          {
            title: '02-人人可行的8条移动互联网创业之路',
            id: 2,
            st: 2
          },
          {
            title: '03-人人可行的8条移动互联网创业之路',
            id: 3,
            st: 2
          },
          {
            title: '04-人人可行的8条移动互联网创业之路',
            id: 4,
            st: 2
          }
        ],
        content: '<p><img src="http://chuang-saas.oss-cn-hangzhou.aliyuncs.com/upload/image/20180814/6ff2e558836f42739085633edaab5f74.png" style="max-width:100%;"><img src="http://chuang-saas.oss-cn-hangzhou.aliyuncs.com/upload/image/20180814/cba645b736454ca599baf06c38cbe96a.png" style="line-height: 32px; max-width: 100%;"><img src="http://chuang-saas.oss-cn-hangzhou.aliyuncs.com/upload/image/20180814/9994356ea456424ab98998d17e4ee497.png" style="line-height: 32px; max-width: 100%;"><img src="http://chuang-saas.oss-cn-hangzhou.aliyuncs.com/upload/image/20180814/bd597f5b51914492b4458bcdcfa0a2ee.png" style="line-height: 32px; max-width: 100%;"><img src="http://chuang-saas.oss-cn-hangzhou.aliyuncs.com/upload/image/20180814/5d29b27c126c412eb4e2e66b2dea3f0a.png" style="line-height: 32px; max-width: 100%;"><img src="http://chuang-saas.oss-cn-hangzhou.aliyuncs.com/upload/image/20180814/00f3f454027542948092f106dc7a0144.png" style="line-height: 32px; max-width: 100%;"><img src="http://chuang-saas.oss-cn-hangzhou.aliyuncs.com/upload/image/20180814/1f8ee060801e4b569ae60afb881d7d27.png" style="line-height: 32px; max-width: 100%;"><img src="http://chuang-saas.oss-cn-hangzhou.aliyuncs.com/upload/image/20180814/da74baa92cfd46098f2886c415615c0f.png" style="line-height: 32px; max-width: 100%;"><img src="http://chuang-saas.oss-cn-hangzhou.aliyuncs.com/upload/image/20180814/7dff672b10e342ba98c6208f8f1b1c2b.png" style="line-height: 32px; max-width: 100%;"></p><p><video src="http://1254016570.vod2.myqcloud.com/7176c53evodgzp1254016570/185e92f15285890781237742077/0puRQIaXfYcA.mp4"></video></p><p><br></p><p><img src="http://chuang-saas.oss-cn-hangzhou.aliyuncs.com/upload/image/20180817/f91ae72642694dd9959d4b6f3029eeed.png" style="max-width: 100%;"></p><p><img src="http://chuang-saas.oss-cn-hangzhou.aliyuncs.com/upload/image/20181009/bc0677c5162d4d1286558d6a778de140.jpg" style="max-width: 100%;"></p>'
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

  mounted() { },

  methods: {}
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
