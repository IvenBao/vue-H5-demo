<template>
  <div>
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
      <span v-else-if="select == 3">
        <datetime
          v-model="minuteListValue"
          format="YYYY-MM-DD"
        >{{minuteListValue}}</datetime>
      </span>
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
    <div class="ulList v100">
      <ul v-if="invireData && invireData.length > 0">
        <li
          class="itme flex-st"
          v-for="(itme, index) in invireData"
          :key="index"
        >
          <div class="itme-l">
            <img
              :src="itme.logoUrl"
              alt=""
              class="img100"
            >
          </div>
          <div class="item-c flex-cl">
            <div>
              <div class="fs16px">{{itme.realName||itme.nickName}}</div>
              <div class="color666">{{itme.registerMobile}}</div>
            </div>
          </div>
          <div class="item-r">
            <div>
              <div class="color97">{{itme.modifyTime}}</div>
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
  </div>
</template>

<script>
import { getUserListByReferUid } from '@/api'
import { Datetime } from 'vux'
export default {
  data() {
    return {
      searchBarFixed: false,
      pagedata: {
        pageNum: 1,
        pageSize: 100
        // startTime:'2017-12-6 16:22:22',
        // endTime:'2018-12-6 16:22:22',
        // cellphone:15755029592,
        // nickname:'null'
      },
      minuteListValue: '2018-10-10',
      select: '',
      searchData: {
        dateType: null,
        phone: null,
        realName: null,
        pageSize: 10,
        pageNum: 1
      },
      invireData: [
        {
          logoUrl: '',
          nickName: '王大娘',
          registerMobile: '15755029598',
          modifyTime: '2018-12-23 13:21:12'
        },
        {
          logoUrl: '',
          nickName: '王二娘',
          registerMobile: '15755029598',
          modifyTime: '2018-12-23 13:21:12'
        },
        {
          logoUrl: '',
          nickName: '王大娘',
          registerMobile: '15755029598',
          modifyTime: '2018-12-23 13:21:12'
        },
        {
          logoUrl: '',
          nickName: '王大娘',
          registerMobile: '15755029598',
          modifyTime: '2018-12-23 13:21:12'
        },
        {
          logoUrl: '',
          nickName: '王大娘',
          registerMobile: '15755029598',
          modifyTime: '2018-12-23 13:21:12'
        },
        {
          logoUrl: '',
          nickName: '王三娘',
          registerMobile: '15755029598',
          modifyTime: '2018-12-23 13:21:12'
        },
        {
          logoUrl: '',
          nickName: '王四娘',
          registerMobile: '15755029598',
          modifyTime: '2018-12-23 13:21:12'
        },
        {
          logoUrl: '',
          nickName: '王五娘',
          registerMobile: '15755029598',
          modifyTime: '2018-12-23 13:21:12'
        },
        {
          logoUrl: '',
          nickName: '王六娘',
          registerMobile: '15755029598',
          modifyTime: '2018-12-23 13:21:12'
        },
        {
          logoUrl: '',
          nickName: '王七娘',
          registerMobile: '15755029598',
          modifyTime: '2018-12-23 13:21:12'
        },
        {
          logoUrl: '',
          nickName: '王八娘',
          registerMobile: '15755029598',
          modifyTime: '2018-12-23 13:21:12'
        }
      ],
      arr: [{ id: '1', name: '手机号' }, { id: '2', name: '姓名' }, { id: '3', name: '日期' }]
    }
  },
  // props: ['invireData'],
  mounted() {
    // getMaidInfoList(this.pagedata.pageNum, this.pagedata.pageSize).then(res => {
    //     this.invireData = res.data.maidInfoVoList
    //     this.pagedata.pageNum++
    //     console.log(this.pagedata.pageNum)
    //     // console.log(this.invireData)
    // })
    getUserListByReferUid(this.pagedata).then(res => {
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
    onLine(id) {
      this.$router.push({ name: 'mineOrderOnline', query: { userId: id } })
    },
    offline(id) {
      this.$router.push({ name: 'mineOrder', query: { userId: id } })
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
  },
  components: {
    Datetime
  }
}
</script>

<style lang="less" scoped>
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
  position: relative;
  img {
    width: 239px;
    height: 226px;
    position: absolute;
    left: 50%;
    margin-left: -119px;
  }
}
.titlesty {
  font-size: 32px;
  width: 100%;
  height: 100%;
  line-height: 100px;
}
.ulList {
  padding: 32px 32px 0 32px;
  box-sizing: border-box;
  background-color: #ffffff;
}
.v100 {
  width: 100%;
}
.no-list {
  font-size: 28px;
  color: #979797;
  white-space: normal;
  text-overflow: ellipsis;
  width: 480px;
  overflow: hidden;
  height: 96px;
  line-height: 96px;
}
.itme {
  margin: 24px 0px 0px 0px;
  padding: 0 0px 10px 0;
  border-bottom: 2px solid rgba(224, 224, 224, 1);
}
.itme:last-child {
  border: none;
}
.flex-st {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}
.itme-l {
  width: 100px;
  height: 100px;
  background: #ccc;
  border-radius: 50%;
  overflow: hidden;
}
.item-c {
  margin-left: 30px;
}
.img100 {
  width: 100%;
  height: 100%;
}
.item-r {
  flex: 1;
  margin-left: 24px;
  padding-bottom: 6px;
}
.flex-cl {
  display: flex;
  flex-direction: column;
}
.flex-be {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.fs16px {
  font-size: 34px;
  width: 240px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  height: 48px;
}
.red {
  line-height: 46px;
  color: #e6304a;
  font-size: 28px;
  text-align: right;
}
.color666 {
  color: rgba(101, 101, 101, 1);
  font-size: 28px;
  padding-top: 8px;
  white-space: normal;
  text-overflow: ellipsis;
  height: 48px;
  line-height: 48px;
}
.color97 {
  font-size: 26px;
  color: #979797;
  padding-top: 8px;
  white-space: normal;
  text-overflow: ellipsis;
  //width: 240px;
  //overflow: hidden;
  height: 48px;
  line-height: 48px;
  text-align: right;
}
</style>
