<template>
  <div @click="hidenWeixin">
    <div class="attention">
      <img src="http://chuang-saas.oss-cn-hangzhou.aliyuncs.com/upload/image/20181019/b1485c81854d46e3896ba6cfa2e738f4.png" alt="">
    </div>
  </div>
</template>
<script>
export default {
  props: ['isShow'],
  data() {
    return {
      show: true
    }
  },
  methods: {
    hidenWeixin() {
      this.$emit('hidenWeixin')
    }
  }
}
</script>
<style lang="less" scoped>
.attention {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.25);
  position: fixed;
  top: 0;
  z-index: 2;
  img {
    width: 550px;
    height: 750px;
    background-color: #ffffff;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -375px;
    margin-left: -275px;
    border-radius: 20px;
  }
}
</style>
