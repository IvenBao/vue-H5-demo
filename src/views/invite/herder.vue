<!--  -->
<template>
  <div>
    <div class="herder">
      <div class="sty" style="float:left">
        <span></span>
        <span>邀请会员人数</span>
        <p>{{num}}</p>
      </div>
      <p class="wire"></p>
      <div class="sty" style="margin-left:200px">
        <span></span>
        <span>邀请订单总金额</span>
        <p>￥{{num}}</p>
      </div>
    </div>
    <div class="posi">
      <div class="radio-wrap">
        <div class="radio-group">
          <span v-for="(tab ,index) in tabs" :key="index" :class="{cur:iscur == index}" @click="iscur = index , getData(tab.data)">{{tab.name}}</span>
        </div>
      </div>
      <div :class="searchBarFixed == true?'searchFlxed':'search'" id="searchBar">
        <select v-model="select" class="selecss">
          <option v-for="(a,index) in arr" :key="index" :value="a.id">{{ a.name }}</option>
        </select>
        <input type="tel" placeholder='请输入手机号' v-if="select == 1" v-model="searchData.phone">
        <input type="text" placeholder='请输入姓名' v-else-if="select == 2" v-model="searchData.realName">
        <div class="but" @click="submitData">
          <img src="http://chuang-saas.oss-cn-hangzhou.aliyuncs.com/upload/image/20181123/df1f6cada06849e6ad401e7a5ba4ae12.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchBarFixed: false,
      num: 1000,
      select: '',
      arr: [{ id: '1', name: '手机号' }, { id: '2', name: '姓名' }],
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
      ],
      searchData: {
        dateType: null,
        phone: null,
        realName: null,
        queryType: 0,
        pageSize: 10,
        pageNum: 1
      }
    }
  },

  components: {},

  computed: {},

  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    getData(data) {
      console.log(data)
      this.$emit('Tdata', data)
    },
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

  created() {
    this.select = this.arr[0].id // 如果没有这句代码，select中初始化会是空白的，默认选中就无法实现
  }
}

</script>
<style lang='scss' scoped>
.posi {
  width: 100%;
}
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
