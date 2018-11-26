<!--  -->
<template>
  <div class="shade" @click="noShow">
    <div class="drawing" @click.stop>
      <h4>我要咨询</h4>
      <input class="inp1" type="text" placeholder="请输入您的姓名" v-model="submitData.name">
      <input class="inp2" type="number" placeholder="请输入您的联系电话" v-model="submitData.phone">
      <p><span>*</span><span>请填写正确的联系方式，方便客服与您联系</span></p>
      <button @click.stop="submit">提交</button>
      <div class="phoneSty">客服电话：0570-13421242</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nShow: false,
      submitData: {
        name: '',
        phone: ''
      }
    }
  },

  components: {},

  computed: {},

  mounted() { },

  methods: {
    noShow() {
      this.$emit('noshow', this.nShow)
    },
    submit() {
      console.log(this.submitData)
      this.$emit('noshow', this.nShow)
    }
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
  z-index: 1;
}
.phoneSty {
  width: 355px;
  height: 40px;
  font-size: 28px;
  color: rgba(54, 54, 54, 1);
  line-height: 40px;
  margin-left: 102px;
  margin-top: 46px;
}
.drawing {
  width: 574px;
  height: 656px;
  border-radius: 16px;
  background-color: #fff;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -287px;
  margin-top: -328px;
  button {
    width: 494px;
    height: 78px;
    background-image: linear-gradient(
      left,
      rgba(255, 116, 83, 1),
      rgba(244, 50, 49, 1)
    );
    text-align: center;
    font-size: 36px;
    color: rgba(255, 255, 255, 1);
    border: none;
    outline: none;
    border-radius: 8px;
    margin-left: 40px;
    margin-top: 48px;
  }
  h4 {
    font-size: 40px;
    color: rgba(54, 54, 54, 1);
    margin-left: 206px;
    margin-top: 39px;
  }
  input {
    width: 454px;
    height: 78px;
    border-radius: 4px;
    border: 1px solid rgba(195, 195, 195, 1);
    margin-left: 38px;
    outline: none;
    font-size: 30px;
    padding: 5px 20px;
  }
  p {
    font-size: 24px;
    margin-left: 40px;
    margin-top: 24px;
    span:nth-child(1) {
      color: rgba(216, 30, 6, 1);
      margin-right: 5px;
    }
    span:nth-child(2) {
      color: rgba(101, 101, 101, 1);
    }
  }
}
.inp1 {
  margin-top: 38px;
}
.inp2 {
  margin-top: 36px;
}
</style>
