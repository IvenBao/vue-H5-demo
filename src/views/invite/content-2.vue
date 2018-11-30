<!--  -->
<template>
  <div class="bigbox">
    <div
      :class="searchBarFixed == true?'searchFlxed':'search'"
      id="searchBar"
    >
      <select
        v-model="select"
        class="selecss"
      >
        <option
          v-for="(a,index) in arr"
          :key="index"
          :value="a.id"
        >{{ a.name }}</option>
      </select>
      <input
        type="tel"
        placeholder='请输入手机号'
        v-if="select == 1"
        v-model="searchData.phone"
      >
      <input
        type="text"
        placeholder='请输入姓名'
        v-else-if="select == 2"
        v-model="searchData.realName"
      >
      <div
        class="but"
        @click="submitData"
      >
        <img
          src="http://chuang-saas.oss-cn-hangzhou.aliyuncs.com/upload/image/20181123/df1f6cada06849e6ad401e7a5ba4ae12.png"
          alt=""
        >
      </div>
    </div>
    <ul v-if="orderList && orderList.length > 0">
      <li
        v-for="item in orderList"
        :key="item.id"
      >
        <div class="top">
          <img
            :src="item.sellerLogo"
            alt=""
          >
          <span>{{item.sellerName}}</span>
          <span>{{item.createTime}}</span>
        </div>
        <div class="content">
          <img
            :src="item.imgUrl"
            alt=""
          />
          <div class="rigth">
            <h3 class="productName">{{item.productName}}</h3>
            <p class="contentText">{{item.desc}}</p>
            <span class="moneySty">￥{{item.totalFeeDesc}}</span>
          </div>
        </div>
      </li>
    </ul>
    <span
      v-else
      class="no-list"
    >
      <img
        src="http://chuang-saas.oss-cn-hangzhou.aliyuncs.com/upload/image/20181123/caf430d9af764a538cdc9b7ab269b414.png"
        alt=""
      >
    </span>
  </div>
</template>

<script>
import { getOrderListByReferUid } from '@/api'
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
          sellerName: '德玛西亚',
          sellerLogo: '',
          createTime: '2018-12-23 13:21:12',
          desc: '人生大起大落完全了解进人生大起大落完全了解进人生大起大落完全了解进人生大起大落完全了解进',
          imgUrl: '',
          productName: '渠道革命',
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
        }, {
          sellerName: '德玛西亚',
          sellerLogo: '',
          createTime: '2018-12-23 13:21:12',
          desc: '人生大起大落完全了解进',
          imgUrl: '',
          productName: '渠道革命',
          totalFeeDesc: '1980',
          id: 5,
          status: 2
        }, {
          sellerName: '德玛西亚',
          sellerLogo: '',
          createTime: '2018-12-23 13:21:12',
          desc: '人生大起大落完全了解进',
          imgUrl: '',
          productName: '渠道革命',
          totalFeeDesc: '1980',
          id: 6,
          status: 2
        }
      ],
      pagedata: {
        pageNum: 1,
        pageSize: 100
      },
      arr: [{ id: '1', name: '手机号' }, { id: '2', name: '姓名' }],
      searchData: {
        dateType: null,
        phone: null,
        realName: null,
        pageSize: 10,
        pageNum: 1
      },
      select: '',
      searchBarFixed: false
    }
  },

  components: {},

  computed: {},

  mounted() {
    getOrderListByReferUid(this.pagedata).then(res => {
      console.log(res)
    })
    window.addEventListener('scroll', this.handleScroll)
  },

  methods: {
    handleScroll() {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      var offsetTop = document.querySelector('#searchBar').offsetTop
      if (scrollTop > offsetTop) {
        this.searchBarFixed = true
      } else {
        this.searchBarFixed = false
      }
    },
    submitData() {
      //   let that = this;
      if (this.select === 1) {
        // let dd = /^[0-9]*[1-9][0-9]*$/;
        // if(dd.test(that.searchData.phone)){
        console.log(this.searchData)
        this.searchData.pageNum = 1
        document.documentElement.scrollTop = document.body.scrollTop = 0
        // getMyUserList(this.searchData).then(res => {
        //     this.listData = res.data
        // })
        this.searchData.realName = null
        //   }else{
        //       layer.open({
        //         content: '手机号格式不正确',
        //         skin: "msg",
        //         time: 2,
        //     });
        //   }
      } else if (this.select === 2) {
        console.log(this.searchData)
        this.searchData.pageNum = 1
        document.documentElement.scrollTop = document.body.scrollTop = 0
        // getMyUserList(this.searchData).then(res => {
        //     this.listData = res.data
        // })
        this.searchData.phone = null
      }
    }
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  created() {
    this.select = this.arr[0].id // 如果没有这句代码，select中初始化会是空白的，默认选中就无法实现
  }
}

</script>
<style lang='scss' scoped>
.selecss {
  height: 74px;
  font-size: 30px;
  text-align: center;
  outline: none;
  padding: 0 18px;
  font-size: 28px;
  color: #656565;
  border-radius: 10px;
  border: none;
  width: 160px;
  box-shadow: 0px 2px 4px #dbdbdb;
  //0px 2px 4px rgba(171, 170, 170, 0.25); /* no */
  appearance: none;
  background: #ffffff
    url("http://chuang-saas.oss-cn-hangzhou.aliyuncs.com/upload/image/20181018/b40b6e0aa29c47e9aea87e476553b49b.png")
    no-repeat 115px;
  background-size: 30px;
  /*为下拉小箭头留出一点位置，避免被文字覆盖*/
}
.search {
  padding: 20px 28px;
  background-color: #f4f4f4;
  input {
    height: 74px;
    width: 400px;
    padding-left: 18px;
    border: none;
    margin-left: 16px;
    border-radius: 10px;
    outline: none;
    box-shadow: 0px 2px 4px #dbdbdb;
    //0px 2px 4px rgba(171, 170, 170, 0.25); /* no */
    color: #bfbfbf;
    display: inline-block;
    font-size: 30px;
    background-color: #ffffff;
  }
  .but {
    width: 69px;
    height: 69px;
    border-radius: 10px;
    float: right;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
.searchFlxed {
  position: fixed;
  top: 0;
  padding: 20px 28px;
  background-color: rgba(247, 247, 247, 1);
  z-index: 10;
  width: 92.5%;
  input {
    height: 74px;
    width: 400px;
    padding-left: 18px;
    border: none;
    margin-left: 16px;
    border-radius: 10px;
    outline: none;
    box-shadow: 0px 2px 4px #dbdbdb;
    //0px 2px 4px rgba(171, 170, 170, 0.25); /* no */
    color: #bfbfbf;
    display: inline-block;
    font-size: 30px;
    background-color: #ffffff;
  }
  .but {
    width: 69px;
    height: 69px;
    border-radius: 10px;
    float: right;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
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
  }
  span:nth-child(3) {
    display: inline-block;
    font-size: 26px;
    color: rgba(152, 152, 152, 1);
    margin-left: 10px;
  }
}
</style>
