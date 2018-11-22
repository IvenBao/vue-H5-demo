<template>
  <div class="box" @click="noxs">
    <div class="card">
      <span class="title">您的专属客户经理</span>
      <p class="logoUrl"><img :src="superiorData.logoUrl" alt=""></p>
      <span class="name">{{superiorData.realName}}</span>
      <span class="phone">{{superiorData.registerMobile}}</span>
      <div class="ok">知道啦</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      status: false
    }
  },
  methods: {
    noxs() {
      this.$emit('status', this.status)
    }
  },
  props: ['superiorData']
}
</script>
<style lang="less" scoped>
.ok {
  color: #ffffff;
  font-size: 28px;
  text-align: center;
  line-height: 70px;
  background-color: #c7000a;
  height: 70px;
  border-radius: 55px;
  width: 450px;
  margin-left: 36px;
  margin-top: 56px;
}
.phone {
  margin-top: 24px;
  font-size: 30px;
  color: #989898;
}
.name {
  margin-top: 28px;
  color: #363636;
  font-size: 34px;
}
.logoUrl {
  /*  */
  padding: 0 182px;
  margin-top: 52px; /*  */
  img {
    display: inline-block;
    width: 156px;
    height: 156px;
    border-radius: 50%;
    background-color: #000000;
  }
}
.box {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.25);
  position: fixed;
  top: 0;
  z-index: 2;
}
.card {
  width: 520px;
  height: 620px;
  background-color: #ffffff;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -310px;
  margin-left: -260px;
  border-radius: 20px;
  z-index: 10;
  span {
    display: block;
    width: 100%;
    text-align: center;
  }
}
.title {
  font-size: 32px;
  color: #c7000a;
  margin-top: 66px;
}
</style>
