<template>
  <div>
    <div class="cardBox">
      <div class="card" v-if="memberLevel == 99">
        <h4>会员用户</h4>
        <p>
          <img :src="mineData.logoUrl" alt="">
          <span>{{mineData.realName}}</span>
        </p>
        <span class="textSty">有效期至 2020-01-01</span>
      </div>
      <div class="card" v-else>
        <h4>加入会员享会员专属课程</h4>
        <p>有效期 1年</p>
        <span class="text">立即开通</span>
      </div>
    </div>
    <div class="money">
      <p class="leftSty">一年期VIP</p>
      <p class="rightSty">￥399</p>
    </div>
    <div class="butSty" v-if="memberLevel == 99">
      <div>
        <span>已开通</span>
      </div>
    </div>
    <div class="but" v-else>
      <div>
        <img src="http://chuang-saas.oss-cn-hangzhou.aliyuncs.com/upload/image/20181120/afa4bb073e6740f79adaca52a5950248.png" alt="">
        <span>立即付款学习</span>
      </div>
    </div>
    <li-ne></li-ne>
    <div class="title">
      <h4>会员权益说明</h4>
      <div></div>
    </div>
  </div>
</template>
<script>
import { getmineData } from '@/api'
import LiNe from '@/views/home/line.vue'
export default {
  data() {
    return {
      memberLevel: '',
      mineData: {}
    }
  },
  mounted() {
    let params = { ...this.$route.params, ...this.$route.query }
    this.memberLevel = params.memberLevel
    if (this.memberLevel === 99) {
      getmineData().then(res => {
        // res.data.memberLevel = 1;
        this.mineData = res.data
      })
    }
  },
  components: {
    LiNe
  }
}
</script>
<style lang="less" scoped>
.title {
  padding: 32px 32px 0 32px;
  h4 {
    font-size: 40px;
    color: rgba(54, 54, 54, 1);
  }
}
.but {
  padding: 0 32px 43px 32px;
  div {
    width: 686px;
    height: 88px;
    background: rgba(78, 178, 66, 1);
    position: relative;
    border-radius: 8px;
    img {
      display: inline-block;
      position: absolute;
      left: 30%;
      top: 25px;
      width: 43px;
      height: 36px;
    }
    span {
      display: inline-block;
      font-size: 36px;
      color: #fff;
      text-align: center;
      line-height: 88px;
      margin-left: 40%;
    }
  }
}
.butSty {
  padding: 0 32px;
  div {
    width: 686px;
    height: 88px;
    background-image: linear-gradient(
      left,
      rgba(247, 129, 96, 1),
      rgba(250, 63, 67, 1)
    );
    border-radius: 8px;
    span {
      display: inline-block;
      font-size: 36px;
      color: #fff;
      text-align: center;
      line-height: 88px;
    }
  }
}
.money {
  padding: 48px 32px;
  .leftSty {
    font-size: 40px;
    color: rgba(54, 54, 54, 1);
    font-weight: 600;
    float: left;
  }
  .rightSty {
    color: rgba(235, 43, 52, 1);
    font-size: 32px;
    line-height: 45px;
    text-align: right;
    font-weight: 600;
  }
}
.textSty {
  display: block;
  height: 58px;
  text-align: center;
  font-size: 30px;
  color: rgba(50, 50, 50, 1);
  line-height: 58px;
  position: absolute;
  left: 42px;
  top: 227px;
}
.cardBox {
  padding: 22px 10px 0 19px;
}
.card {
  background: url("http://chuang-saas.oss-cn-hangzhou.aliyuncs.com/upload/image/20181120/aa9850f70ca44f08be1f93cfa5debe46.png")
    no-repeat top center;
  background-size: 100% auto;
  width: 100%;
  height: 342px;
  position: relative;
  h4 {
    position: absolute;
    left: 42px;
    top: 48px;
    font-size: 40px;
    color: rgba(53, 53, 53, 1);
  }
  p {
    position: relative;
    font-size: 30px;
    color: rgba(70, 70, 70, 1);
    position: absolute;
    left: 42px;
    top: 120px;
    img {
      width: 52px;
      height: 52px;
      border-radius: 50%;
    }
    span {
      font-size: 32px;
      color: rgba(53, 53, 53, 1);
      position: absolute;
      top: 3px;
      left: 70px;
    }
  }
  .text {
    display: block;
    width: 185px;
    height: 58px;
    border-radius: 29px;
    border: 1px solid rgba(50, 50, 50, 1);
    text-align: center;
    font-size: 30px;
    color: rgba(50, 50, 50, 1);
    line-height: 58px;
    position: absolute;
    left: 42px;
    top: 227px;
  }
}
</style>
