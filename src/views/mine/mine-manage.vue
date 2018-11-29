<template>
  <div id="box">
    <div class="inner layout herd">
      <div class="fs18px v100 flex-be sty">
        <span class="posi">头像</span>
        <img
          :src="minedata.avatar"
          alt=""
          class="imgurl"
        >
      </div>
    </div>
    <div class="line">
      <div class="inner layout">
        <div
          v-if="minedata.userInfo"
          class="fs18px v100 flex-be sty"
        >
          <span class="posi">手机号</span>
          <span class="item-rigth-0">{{minedata.userInfo.cellphone}}</span>
          <!-- <img src="https://chuang-saas.oss-cn-hangzhou.aliyuncs.com/icon/dongyao/goright.png" alt="" class="imgrigth"> -->
        </div>
        <div
          v-else
          @click="bangding"
          class="fs18px v100 flex-be sty"
        >
          <span class="posi">手机号</span>
          <span class="item-rigth">未绑定</span>
          <img
            src="https://chuang-saas.oss-cn-hangzhou.aliyuncs.com/icon/dongyao/goright.png"
            alt=""
            class="imgrigth"
          >
        </div>
      </div>
      <div class="inner layout">
        <div
          v-if="minedata.gender == 0 || minedata.gender == 1"
          class="fs18px v100 flex-be sty"
        >
          <span class="posi">性别</span>
          <select
            v-model="select1"
            class="selecss1"
            @change="chooseMedicine1(select1)"
          >
            <option
              v-for="(a,index) in arr1"
              :key="index"
              :value="a.id"
            >{{ a.name }}</option>
          </select>
          <img
            src="https://chuang-saas.oss-cn-hangzhou.aliyuncs.com/icon/dongyao/goright.png"
            alt=""
            class="imgrigth"
          >
        </div>
        <div
          v-else
          class="fs18px v100 flex-be sty"
        >
          <span class="posi">性别</span>
          <select
            v-model="select"
            class="selecss"
            @change="chooseMedicine(select)"
          >
            <option
              v-for="(a,index) in arr"
              :key="index"
              :value="a.id"
            >{{ a.name }}</option>
          </select>
          <img
            src="https://chuang-saas.oss-cn-hangzhou.aliyuncs.com/icon/dongyao/goright.png"
            alt=""
            class="imgrigth"
          >
        </div>
      </div>

      <div class="inner layout">
        <div
          v-if="minedata.city"
          class="fs18px v100 flex-be sty"
          @click="popupVisible=true"
        >
          <span class="posi">现居城市</span>
          <span class="item-rigth">{{minedata.province}} {{minedata.city}}</span>
          <img
            src="https://chuang-saas.oss-cn-hangzhou.aliyuncs.com/icon/dongyao/goright.png"
            alt=""
            class="imgrigth"
          >
        </div>
        <div
          v-else
          class="fs18px v100 flex-be sty"
          @click="popupVisible=true"
        >
          <span class="posi">现居城市</span>
          <p class="rightSty">{{postData.province}} {{postData.city}} </p>
          <img
            src="https://chuang-saas.oss-cn-hangzhou.aliyuncs.com/icon/dongyao/goright.png"
            alt=""
            class="imgrigth"
          >
        </div>
      </div>
      <x-address
        style="display:none;"
        :title='title'
        :hide-district='true'
        @on-shadow-change="onShadowChange"
        v-model="nowAddress.nowAddressArr"
        :list="VUXaddressData"
        :show.sync="popupVisible"
        :raw-value="true"
        @on-hide="updata"
      ></x-address>
      <div class="inner layout">
        <div
          v-if="wechatAccount"
          class="fs18px v100 flex-be sty"
        >
          <span class="posi">微信号</span>
          <span class="item-rigth-0">{{wechatAccount}}</span>
          <!-- <img src="https://chuang-saas.oss-cn-hangzhou.aliyuncs.com/icon/dongyao/goright.png" alt="" class="imgrigth"> -->
        </div>
        <div
          v-else
          @click="bangdingWechatId"
          class="fs18px v100 flex-be sty"
        >
          <span class="posi">微信号</span>
          <span class="item-rigth">未设置</span>
          <img
            src="https://chuang-saas.oss-cn-hangzhou.aliyuncs.com/icon/dongyao/goright.png"
            alt=""
            class="imgrigth"
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { saveUserInfo } from '@/api'
import { XAddress, ChinaAddressV4Data, Value2nameFilter as value2name } from 'vux'
export default {
  data() {
    return {
      title: '',
      VUXaddressData: ChinaAddressV4Data,
      minedata: {},
      wechatAccount: '',
      arr: [{ id: '0', name: '男' }, { id: '1', name: '女' }, { id: '3', name: '未设置', disabled: 'disabled' }],
      arr1: [{ id: '0', name: '男' }, { id: '1', name: '女' }],
      saveData: {
        province: '',
        city: '',
        gender: ''
      },
      hint: '',
      genderData: {
        gender: ''
      },
      select: '',
      select1: '',
      gender: '',
      popupVisible: false,
      nowAddress: {
        nowAddressArr: [],
        nowAddressString: '',
        provinceString: '',
        cityString: '',
        areaString: '',
        provinceCode: '',
        cityCode: '',
        areaCode: ''
      }, // 现居地址的数据
      postData: {
        gender: '', // 性别
        province: '', // 省
        city: '' // 市
      }
    }
  },
  methods: {
    updata() {
      console.log(this.postData)
    },
    onShadowChange(ids, names) {
      console.log(names)
      this.postData.province = names[0]
      this.postData.city = names[1]
      this.nowAddress.nowAddressString = this.getName(ids)
      // console.log(this.nowAddress.nowAddressString)
    },
    getName(value) {
      // console.log(value)
      return value2name(value, ChinaAddressV4Data)
    },
    chooseMedicine(id) {
      this.saveData.gender = id
      saveUserInfo(this.saveData).then(res => {
        if (res.code === 200) {
          this.saveData.gender = ''
        }
        // getmineData().then(res => {
        //   this.minedata = res.data
        // })
      })
    },
    chooseMedicine1(id) {
      this.genderData.gender = id
      saveUserInfo(this.genderData).then(res => {
        if (res.code === 200) {
          this.genderData.gender = ''
        }
        // getmineData().then(res => {
        //   this.minedata = res.data
        // })
      })
    },
    reminder() {
      this.$router.push({
        name: 'realNameStatus',
        query: { certificationStatus: this.minedata.certificationStatus }
      })
    },
    bangding() {
      this.$router.push({ name: 'bindMobile' })
    },
    bangdingWechatId() {
      this.$router.push({ name: 'bangdingWechatId' })
    }
  },
  mounted() {
    // getUserBindWechat().then(res => {
    //   if (res.data && res.data.wechatAccount) {
    //     this.wechatAccount = res.data.wechatAccount
    //   }
    // })
    // getUserInfoById().then(res => {
    //   this.minedata = res.data
    //   this.select1 = this.minedata.gender
    // })
  },
  created() {
    this.select = this.arr[2].id // 如果没有这句代码，select中初始化会是空白的，默认选中就无法实现
  },
  components: {
    XAddress
  }
}
</script>
<style lang="less" scoped>
.selecss {
  font-size: 32px;
  outline: none;
  width: 90%;
  text-align: right;
  padding-right: 37px;
  color: rgb(194, 194, 194);
  border: none;
  background-color: #ffffff;
  padding-left: 70%;
  position: absolute;
  right: 0;
  appearance: none;
  /*为下拉小箭头留出一点位置，避免被文字覆盖*/
}
.item-rigth-0 {
  position: absolute;
  right: 0px;
  color: rgb(194, 194, 194);
}
.selecss1 {
  font-size: 32px;
  outline: none;
  width: 90%;
  text-align: right;
  padding-right: 37px;
  color: rgb(194, 194, 194);
  border: none;
  background-color: #ffffff;
  padding-left: 80%;
  position: absolute;
  right: 0;
  appearance: none;
  /*为下拉小箭头留出一点位置，避免被文字覆盖*/
}
.mint-popup-4 {
  width: 100%;
  .picker-slot-wrapper,
  .picker-item {
    backface-visibility: hidden;
  }
}
.rightSty {
  z-index: 100;
  width: 75%;
  position: absolute;
  right: 40px;
  text-align: right;
  color: rgb(194, 194, 194);
}
.imgurl {
  width: 80px;
  height: 80px;
  position: absolute;
  right: 0;
  top: 50%;
  margin-top: -40px;
  border-radius: 10px;
}
.herd {
  padding-left: 32px;
}
.but {
  width: 686px;
  height: 88px;
  opacity: 1;
  background: rgba(209, 44, 68, 1);
  font-size: 34px;
  color: #ffffff;
  text-align: center;
  line-height: 88px;
  border-radius: 70px;
  margin-top: 88px;
  margin-left: 30px;
}
.line {
  background-color: #ffffff;
  padding-left: 32px;
  margin-top: 20px;
}
#box {
  background-color: #f7f7f7;
  height: 100vh;
}
.pad32px {
  padding-left: 32px;
  margin-top: 20px;
}
.content {
  padding-bottom: 140px;
}
.inner {
  width: 100%;
  padding-right: 32px;
  box-sizing: border-box;
  background-color: #ffffff;
  border-bottom: 1px solid #f7f7f7;
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
.posi {
  position: absolute;
  left: 0;
}
.layout div {
  height: 52px;
  line-height: 52px;
  color: rgb(41, 54, 61);
  //   text-indent: 72px;
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
.flex-be {
  display: flex;
  display: -webkit-flex;
  flex-direction: row;
  justify-content: space-between;
  -webkit-justify-content: space-between;
}
.item-bottom-line {
  border-bottom: 1px solid #dfdfdf;
  width: 100%;
  margin-left: 30px;
}
</style>
