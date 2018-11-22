
<template>
  <div class='header'>
    <img src="http://chuang-saas.oss-cn-hangzhou.aliyuncs.com/upload/image/20181106/a27e020736f849628375538e8c626a11.png" alt="">
    <span class="fons36">{{headTitle.title}}</span><span class="text">{{headTitle.text}}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  props: ['headTitle'],
  methods: {
  }
}
</script>

<style lang='less' scoped>
.header {
  width: 100%;
  height: 94px;
  margin-left: 28px;
  overflow: hidden;
  span {
    display: inline-block;
  }
  img {
    margin-top: 30px;
    margin-bottom: 8px;
    display: block;
    width: 80px;
    height: 8px;
  }
  .text {
    margin-left: 24px;
    color: rgba(152, 152, 152, 1);
    font-size: 28px;
  }
  .fons28 {
    font-size: 28px;
  }
  .fons36 {
    color: #363636;
    font-weight: 600;
    font-size: 36px;
  }
}
</style>
