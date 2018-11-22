<template>
  <div>
    <div class='footer flex-ar'>
      <div class='share' @click="iShow">
        <img src="http://chuang-saas.oss-cn-hangzhou.aliyuncs.com/upload/image/20181122/d43cc96008d04f34aa3c680573956960.png" alt="">
        <span>咨询</span>
      </div>
      <div :class='classSty' @click='signUp'>
        <span>立即支付</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      authentication: false,
      show: true
    }
  },
  methods: {
    onPhone() {
      window.open(`tel: ${this.productId.phone}`)
    },
    iShow() {
      this.$emit('iSshow', this.show)
    },
    signUp() {
      if (this.renzhen === 1) {
        this.authentication = true
      } else if (this.renzhen === 2 && this.productId.themeId) {
        // MessageBox({
        //   message: "请先购买",
        //   showCancelButton: true,
        //   confirmButtonText: "购买"
        // }).then(action => {
        //   if (action === "confirm") {
        //     this.buyOffline()
        //   }
        // })
        this.buyOffline()
        // this.$router.push({ name: "apply", query: { themeId: this.productId.themeId, type: 0 } })
      }
    },
    status(status) {
      this.authentication = status
    }
  },
  props: ['productId', 'renzhen', 'price'],
  components: {
    // AuthenTication
  },
  computed: {
    classSty() {
      if (this.renzhen === 99) {
        return 'nobuy'
      } else {
        return 'buy'
      }
    }
  }
}
</script>
<style lang="less" scoped>
.footer {
  width: 100%;
  height: 100px;
  position: fixed;
  bottom: 0;
  background-color: #fff;
}
.share {
  width: 180px;
  text-align: center;
  display: inline-block;
  img {
    display: block;
    width: 40px;
    height: 36px;
    margin-left: 39%;
    margin-top: 17px;
    margin-bottom: 10px;
  }
  span {
    color: rgba(244, 50, 49, 1);
    font-size: 24px;
  }
}
.buy {
  width: 76%;
  float: right;
  text-align: center;
  background-image: linear-gradient(
    left,
    rgba(255, 116, 83, 1),
    rgba(244, 50, 49, 1)
  );
  height: 100%;
  color: #fff;
  font-size: 36px;
  line-height: 100px;
}
</style>
