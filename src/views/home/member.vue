<template>
  <div @click="push">
    <img
      v-if="isok"
      src="http://chuang-saas.oss-cn-hangzhou.aliyuncs.com/upload/image/20181120/1c24016fcc364bd78a538efa51e02348.png"
      alt=""
    >
    <img
      v-else
      src="http://chuang-saas.oss-cn-hangzhou.aliyuncs.com/upload/image/20181120/6720beb4f4af4f288235055db2bfff82.png"
      alt=""
    >
  </div>
</template>
<script>
export default {
  data() {
    return {
    }
  },
  props: ['isok'],
  methods: {
    push() {
      this.$router.push({ name: 'dredge', query: { isVIP: this.isok } })
    }
  }
}
</script>
<style lang="less" scoped>
div {
  padding-top: 10px;
  padding-left: 7px;
  background: #fff;
}
img {
  width: 100%;
  display: block;
}
</style>
