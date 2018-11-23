<template>
  <div class="content">
    <div class="inner layout">
      <a href="/letter-list">
        <div class="fs18px v100 flex-be sty">
          <img class="leftimg" src="http://chuang-saas.oss-cn-hangzhou.aliyuncs.com/upload/image/20181120/b737523b5c624d13a3d7157269a4a119.png" alt="">
          <span class="posi">邀请好友来学习</span>
          <img src="https://chuang-saas.oss-cn-hangzhou.aliyuncs.com/icon/dongyao/goright.png" alt="" class="imgrigth">
        </div>
      </a>
    </div>
    <div class="inner layout borderSty">
      <a href="/order-list">
        <div class="fs18px v100 flex-be sty">
          <img class="leftimg" src="http://chuang-saas.oss-cn-hangzhou.aliyuncs.com/upload/image/20181120/52f9cbd04e47421d9996ced9882d30aa.png" alt="">
          <span class="posi">我的订单</span>
          <img src="https://chuang-saas.oss-cn-hangzhou.aliyuncs.com/icon/dongyao/goright.png" alt="" class="imgrigth">
        </div>
      </a>
    </div>
    <div class="inner layout borderSty">
      <router-link to="/invite">
        <div class="fs18px v100 flex-be sty">
          <img class="leftimg" src="http://chuang-saas.oss-cn-hangzhou.aliyuncs.com/upload/image/20181120/f2ba819fa0aa4f43b4993c2709fc3526.png" alt="">
          <span class="posi">我的邀请</span>
          <!-- <span class="item-rigth">{{minedata.bindCount}}人</span> -->
          <img src="https://chuang-saas.oss-cn-hangzhou.aliyuncs.com/icon/dongyao/goright.png" alt="" class="imgrigth">
        </div>
      </router-link>
    </div>
    <div class="inner layout borderSty">
      <router-link to="/mine-order">
        <div class="fs18px v100 flex-be sty">
          <img class="leftimg" src="http://chuang-saas.oss-cn-hangzhou.aliyuncs.com/upload/image/20181120/7050ef793a6d446089cc9032300a3206.png" alt="">
          <span class="posi">账户管理</span>
          <!-- <span class="item-rigth">{{minedata.userOrderCount}}</span> -->
          <img src="https://chuang-saas.oss-cn-hangzhou.aliyuncs.com/icon/dongyao/goright.png" alt="" class="imgrigth">
        </div>
      </router-link>
    </div>
    <div class="inner layout top20" @click="confirm">
      <div class="fs18px v100 flex-be sty">
        <img class="leftimg" src="http://chuang-saas.oss-cn-hangzhou.aliyuncs.com/upload/image/20181120/73c32aaba0ae4c588be1efb95754676b.png" alt="">
        <span class="posi">我的客服</span>
        <!-- <span class="item-rigth">{{minedata.userOnlineOrderCount}}</span> -->
        <img src="https://chuang-saas.oss-cn-hangzhou.aliyuncs.com/icon/dongyao/goright.png" alt="" class="imgrigth">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      phone: 13023687583
    }
  },
  props: ['minedata'],
  computed: {
  },
  methods: {
    fenxiang() {
      this.$router.push({ name: 'my-qrcode' })
    },
    reminder() {
      this.$router.push({
        name: 'realNameStatus',
        query: { certificationStatus: this.minedata.certificationStatus }
      })
    },
    confirm() {
      window.open('tel:13023687583')
    }
  },
  mounted() {
    // getUserBindWechat().then(res => {
    //     if (res.data && res.data.weChatNo) {
    //         this.weChatNo = res.data.weChatNo
    //     }
    // })
  }
}
</script>
<style lang='less' scoped>
a {
  text-decoration: none;
}
.content {
  padding-bottom: 140px;
}
.top20 {
  margin-top: 20px;
}
.borderSty {
  border-top: 2px solid #e0e0e0;
}
.inner {
  width: 100%;
  padding: 0 32px;
  box-sizing: border-box;
  background-color: #ffffff;
}
.layout {
  padding-top: 28px;
  padding-bottom: 28px;
}
.layout .leftimg {
  width: 44px;
  height: 44px;
}
.imgrigth {
  width: 16px;
  height: 24px;
  margin-top: 13px;
  position: absolute;
  right: 0;
}
.layout div {
  height: 52px;
  line-height: 52px;
  color: rgb(41, 54, 61);
  position: relative;
}
.layout .item-rigth {
  position: absolute;
  right: 0px;
  margin-right: 40px;
  color: rgb(194, 194, 194);
}
.v100 {
  width: 100%;
}
.fs18px {
  font-size: 32px;
}

.item-bottom-line {
  border-bottom: 1px solid #dfdfdf;
  width: 100%;
  margin-left: 35px;
}
.item-bottom-sty {
  height: 20px;
  width: 100%;
  background: #f7f7f7;
  box-sizing: border-box;
}
.sty {
  position: relative;
}
.posi {
  position: absolute;
  top: -4px;
  margin-left: 21px;
  font-size: 30px;
  color: rgba(54, 54, 54, 1);
}
</style>
