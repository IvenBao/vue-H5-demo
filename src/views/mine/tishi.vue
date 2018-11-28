<!--  -->
<template>
  <div class="shade">
    <div class="drawing">
      <h4>温馨提示</h4>
      <img src="./img/111.png" alt="">
      <p>您有{{}}订单未填写报名信息</p>
      <div class="but">立即填写</div>
    </div>
    <div class="line"></div>
    <div class="circle">×</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },

  components: {},

  computed: {},

  mounted() { },

  methods: {

  }
}

</script>
<style lang='scss' scoped>
.shade {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  background: rgba(20, 20, 20, 0.5);
  z-index: 11;
  .line {
    width: 3px;
    height: 38px;
    position: absolute;
    left: 50%;
    background-color: rgba(227, 227, 227, 1);
    top: 63.4%;
  }
  .circle {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    border: 1px solid #fff;
    text-align: center;
    font-size: 55px;
    line-height: 50px;
    color: #fff;
    position: absolute;
    left: 50%;
    margin-left: -28px;
    top: 66.6%;
  }
}
.drawing {
  width: 521px;
  height: 660px;
  border-radius: 16px;
  background-color: #fff;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -260px;
  margin-top: -500px;
  h4 {
    font-size: 36px;
    text-align: center;
    margin-top: 48px;
  }
  img {
    width: 187px;
    height: 182px;
    display: inline-block;
    margin-left: 167px;
    margin-top: 48px;
  }
  p {
    font-size: 36px;
    color: rgba(101, 101, 101, 1);
    width: 311px;
    margin-left: 105px;
    margin-top: 48px;
    text-align: center;
    line-height: 50px;
  }
  .but {
    width: 389px;
    height: 80px;
    background-image: linear-gradient(
      left,
      rgba(255, 116, 83, 1),
      rgba(244, 50, 49, 1)
    );
    text-align: center;
    font-size: 32px;
    color: rgba(255, 255, 255, 1);
    border: none;
    outline: none;
    border-radius: 8px;
    margin-left: 65px;
    margin-top: 48px;
    line-height: 45px;
  }
}
</style>
