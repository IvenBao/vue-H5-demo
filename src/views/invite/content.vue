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
        v-model="searchData.cellphone"
      >
      <input
        type="text"
        placeholder='请输入姓名'
        v-else-if="select == 2"
        v-model="searchData.nickname"
      >
      <span
        v-else-if="select == 3"
        style="margin-left:15px;"
      >
        <datetime
          v-model="dateData.startTime"
          format="YYYY-MM-DD"
          class="dateSty"
        >{{dateData.startTime}}</datetime>
        <datetime
          v-model="dateData.endTime"
          format="YYYY-MM-DD"
          class="dateSty1"
        >{{dateData.endTime}}</datetime>
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
              :src="itme.avatar"
              alt=""
              class="img100"
            >
          </div>
          <div class="item-c flex-cl">
            <div>
              <div class="fs16px">{{itme.nickname}}</div>
              <div class="color666">{{itme.cellphone}}</div>
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
        pageSize: 10
        // startTime:'2017-12-6 16:22:22',
        // endTime:'2018-12-6 16:22:22',
        // cellphone:15755029592,
        // nickname:'null'
      },
      select: '',
      dateData: {
        startTime: '开始时间',
        endTime: '结束时间',
        pageSize: 10,
        pageNum: 1
      },
      searchData: {
        cellphone: null,
        nickname: null,
        pageSize: 10,
        pageNum: 1
      },
      invireData: [
      ],
      arr: [{ id: '1', name: '手机号' }, { id: '2', name: '昵称' }, { id: '3', name: '日期' }]
    }
  },
  mounted() {
    getUserListByReferUid(this.pagedata).then(res => {
      this.invireData = res.data
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
      /* eslint-disable */
      if (this.select == 1) {
        getUserListByReferUid(this.searchData).then(res => {
          this.invireData = res.data
          this.searchData.cellphone = null
        })
      } else if (this.select == 2) {
        getUserListByReferUid(this.searchData).then(res => {
          this.invireData = res.data
          this.searchData.nickname = null
        })
      } else if (this.select == 3) {
        getUserListByReferUid(this.dateData).then(res => {
          this.invireData = res.data
        })
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
.dateSty {
  font-size: 30px;
  text-decoration: none;
  color: inherit;
  color: #656565;
  width: 150px;
}
.dateSty1 {
  font-size: 30px;
  text-decoration: none;
  color: inherit;
  color: #656565;
  margin-left: 50px;
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
  width: 100vw;
  height: 100vh;
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
  width: 100%;
  overflow: hidden;
  height: 100%;
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
