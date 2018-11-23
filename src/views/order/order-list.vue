<!--  -->
<template>
  <div class="bigbox">
    <ul v-if="orderList && orderList.length > 0">
      <li v-for="item in orderList" :key="item.id">
        <div class="top">
          <img :src="item.sellerLogo" alt="">
          <span>{{item.sellerName}}</span>
          <span>{{item.createTime}}</span>
          <span @click="push(item.status)">我的签到码</span>
        </div>
        <div class="content">
          <img :src="item.imgUrl" alt="" />
          <div class="rigth">
            <h3 class="productName">{{item.productName}}</h3>
            <p class="contentText">{{item.desc}}</p>
            <span class="moneySty">￥{{item.totalFeeDesc}}</span>
          </div>
        </div>
      </li>
    </ul>
    <span v-else class="no-list">
      <img src="http://chuang-saas.oss-cn-hangzhou.aliyuncs.com/upload/image/20181123/9f956e49cd58415c918b20d959af4dfa.png" alt="">
    </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      orderList: [
        {
          sellerName: '德玛西亚',
          sellerLogo: '',
          createTime: '2018-12-23 13:21:12',
          desc: '人生大起大落完全了解进人生大起大落完全了解进人生大起大落完全了解进人生大起大落完全了解进',
          imgUrl: '',
          productName: '渠道革命',
          totalFeeDesc: '1980',
          id: 1,
          status: 1
        }, {
          sellerName: '德玛西亚',
          sellerLogo: '',
          createTime: '2018-12-23 13:21:12',
          desc: '人生大起大落完全了解进',
          imgUrl: '',
          productName: '渠道革命',
          totalFeeDesc: '1980',
          id: 2,
          status: 2
        }, {
          sellerName: '德玛西亚德玛西亚德玛西亚',
          sellerLogo: '',
          createTime: '2018-12-23 13:21:12',
          desc: '人生大起大落完全了解进人生大起大落完全了解进人生大起大落完全了解进人生大起大落完全了解进',
          imgUrl: '',
          productName: '渠道革命渠道革命渠道革命渠道革命渠道革命',
          totalFeeDesc: '1980',
          id: 3,
          status: 1
        }, {
          sellerName: '德玛西亚',
          sellerLogo: '',
          createTime: '2018-12-23 13:21:12',
          desc: '人生大起大落完全了解进',
          imgUrl: '',
          productName: '渠道革命',
          totalFeeDesc: '1980',
          id: 4,
          status: 2
        }
      ]
    }
  },

  components: {},

  computed: {},

  mounted() { },

  methods: {
    push(status) {
      if (status === 1) {
        this.$router.push({ name: 'order-result' })
      } else {
        alert(6666)
      }
    }
  }
}

</script>
<style lang='scss' scoped>
.no-list {
  display: block;
  background-color: #fff;
  img {
    width: 239px;
    height: 226px;
    position: fixed;
    left: 50%;
    margin-left: -119px;
    top: 50%;
    margin-top: -113px;
  }
}
.bigbox {
  background-color: rgba(247, 247, 247, 1);
  li {
    background-color: #fff;
    margin-top: 20px;
    padding: 15px 0 32px 32px;
  }
}
.content {
  margin-top: 23px;
  display: flex;
  img {
    flex: 1;
    display: inline-block;
    width: 245px;
    height: 150px;
    background-color: black;
    border-radius: 8px;
  }
  .rigth {
    flex: 2;
    float: right;
    padding-left: 16px;
    .productName {
      font-size: 32px;
      color: rgba(54, 54, 54, 1);
      width: 300px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .contentText {
      color: rgba(152, 152, 152, 1);
      font-size: 28px;
      margin-top: 15px;
      width: 400px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .moneySty {
      display: block;
      font-size: 24px;
      color: rgba(152, 152, 152, 1);
      margin-top: 23px;
    }
  }
}
.top {
  padding-right: 32px;
  position: relative;
  border-bottom: 1px solid rgba(224, 224, 224, 1);
  padding-bottom: 13px;
  img {
    position: absolute;
    display: inline-block;
    width: 38px;
    height: 38px;
    border-radius: 50%;
    background-color: black;
  }
  span:nth-child(2) {
    display: inline-block;
    font-size: 28px;
    color: rgba(54, 54, 54, 1);
    margin-left: 50px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 150px;
  }
  span:nth-child(3) {
    display: inline-block;
    overflow: hidden;
    font-size: 26px;
    color: rgba(152, 152, 152, 1);
  }
  span:nth-child(4) {
    display: inline-block;
    font-size: 24px;
    color: rgba(250, 79, 78, 1);
    float: right;
  }
}
</style>
