<!--  -->
<template>
  <div>
    <div class="herder">
      <div
        class="sty"
        style="float:left"
      >
        <span></span>
        <span>邀请会员人数</span>
        <p>{{mineData.referVIPCount}}</p>
      </div>
      <p class="wire"></p>
      <div
        class="sty"
        style="margin-left:200px"
      >
        <span></span>
        <span>邀请订单总金额</span>
        <p>￥{{mineData.orderPriceSum}}</p>
      </div>
    </div>
    <div class="posi">
      <div class="radio-wrap">
        <div class="radio-group">
          <span
            v-for="(tab ,index) in tabs"
            :key="index"
            :class="{cur:iscur == index}"
            @click="iscur = index , getData(tab.data)"
          >{{tab.name}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num: 1000,
      select: '',
      iscur: 0,
      tabs: [
        {
          name: '我邀请的会员',
          data: 3
        },
        {
          name: '邀请订单记录',
          data: 0
        }
      ]
    }
  },

  components: {},

  computed: {},
  methods: {
    getData(data) {
      this.$emit('Tdata', data)
    }
  },
  props: ['mineData']
}

</script>
<style lang='scss' scoped>
.posi {
  width: 100%;
}
.radio-group {
  font-size: 0;
  line-height: 30px;
  color: rgba(101, 101, 101, 1);
  border-bottom: 1px solid #dfdfdf;
  background-color: #ffffff;
}
.radio-group > span {
  cursor: pointer;
  display: inline-block;
  font-size: 34px;
  text-align: center;
  padding: 21px 80px;
}
.cur {
  color: rgba(50, 50, 50, 1);
}
.cur::after {
  position: absolute;
  width: 52px;
  transform: translateX(150%);
  z-index: 5;
  display: block;
  content: "";
  margin-top: 8px;
  overflow: hidden;
  height: 8px;
  background-image: linear-gradient(
    left,
    rgba(247, 129, 96, 1),
    rgba(250, 63, 67, 1)
  );
  box-sizing: border-box;
  border-radius: 200px;
}
.herder {
  background: url("http://chuang-saas.oss-cn-hangzhou.aliyuncs.com/upload/image/20181123/6a0a825008604c61becd88639e10d666.png")
    no-repeat;
  background-size: 100% 100%;
  width: 100%;
  padding-bottom: 15px;
  position: relative;
  .wire {
    position: absolute;
    border-left: 1px solid #fff;
    width: 0px;
    height: 63px;
    left: 50%;
    top: 38px;
  }
  .sty {
    padding-left: 57px;
    padding-top: 25px;
    span:nth-child(1) {
      display: inline-block;
      float: left;
      width: 25px;
      height: 25px;
      border-radius: 48%;
      border: 5px solid rgba(255, 255, 255, 1);
    }
    span:nth-child(2) {
      font-size: 28px;
      color: #fff;
      display: inline-block;
      margin-left: 15px;
    }
    p {
      margin-top: 15px;
      font-size: 40px;
      color: #fff;
      padding-left: 45px;
    }
  }
}
</style>
