<template>
  <div class="box">
    <div class="inner layout num">
      <span class="posi fs16px">咨询手机号</span>
      <input type="number" placeholder="请输入咨询手机号" v-model="userData.consultPhone">
    </div>
    <div class="inner layout top20 num">
      <span class="posi fs16px">咨询微信号</span>
      <input type="text" placeholder="请输入咨询微信号" v-model="userData.consultWechatNo">
    </div>
    <span class="text">选择咨询联系方式</span>
    <div class="inner layout">
      <div>
        <select v-model="userData.consultShowType" class="selecss">
          <option v-for="(a,index) in arr" :key="index" :value="a.id">{{ a.name }}</option>
        </select>
        <img src="https://chuang-saas.oss-cn-hangzhou.aliyuncs.com/icon/dongyao/goright.png" alt="" class="imgrigth">
      </div>
    </div>
    <span class="red">注：设置显示之后业务员分享出去的销售信上展示</span>

    <div class="div">
      <div class="fs16px mTop45px" @click="upload">确定</div>
    </div>
  </div>
</template>
<script>
import { getConsultInfo, changeConsultInfo } from '@/api'
export default {
  data() {
    return {
      arr: [{ id: '0', name: '注册手机号' }, { id: '1', name: '咨询手机号' }, { id: '2', name: '咨询微信号' }],
      select: '',
      userData: {
        consultPhone: '', // 咨询手机号
        consultWechatNo: '', // 咨询微信号
        consultShowType: '' // 0展示注册手机号 1展示咨询手机号 2展示咨询微信号
      }
    }
  },
  created() {
    this.userData.consultShowType = this.arr[0].id // 如果没有这句代码，select中初始化会是空白的，默认选中就无法实现
  },
  methods: {
    upload() {
      let ff = /^[a-zA-Z]([-_a-zA-Z0-9]{5,19})$/
      if (ff.test(this.userData.consultWechatNo)) {
        changeConsultInfo(this.userData).then(res => {
          if (res.reCode === 200) {
            // layer.open({
            //   content: '联系方式设置成功',
            //   skin: 'msg',
            //   time: 2,
            //   end: () => {
            //     this.$router.push({ name: 'mine' })
            //   }
            // })
          }
        })
      } else {
        // layer.open({
        //   content: '微信格式不正确，请重新输入',
        //   skin: 'msg',
        //   time: 2,
        //   end: () => { }
        // })
      }
    }
  },
  mounted() {
    getConsultInfo().then(res => {
      this.userData.consultPhone = res.data.consultPhone
      this.userData.consultWechatNo = res.data.consultWechatNo
      this.userData.consultShowType = res.data.consultShowType
    })
  }
}
</script>
<style lang="less" scoped>
.box {
  background-color: #f4f4f4;
  //   padding-bottom: 200px;
  min-height: 100vh;
}
.div div {
  position: relative;
  display: block;
  margin-left: auto;
  margin-right: auto;
  background-color: #c7000a;
  padding-left: 14px;
  padding-right: 14px;
  box-sizing: border-box;
  font-size: 36px;
  text-align: center;
  text-decoration: none;
  line-height: 88px;
  border-radius: 5px;
  -webkit-tap-highlight-color: transparent;
  color: #fff;
  width: 92%;
  height: 88px;
  border-radius: 50px;
}
.div {
  width: 100%;
  height: 112px;
  z-index: 1000;
  margin-top: 80px;
}
.text {
  padding-top: 40px;
  padding-bottom: 16px;
  display: inline-block;
  padding-left: 32px;
  color: #787878;
}
.red {
  color: #c5000a;
  padding-left: 32px;
  padding-top: 30px;
  display: inline-block;
}
.num > input {
  font-family: "微软雅黑";
  line-height: 50px;
  font-size: 32px;
  color: #787878;
  display: inline-block;
  width: 65%;
  border: none;
  outline: none;
}
.top20 {
  margin-top: 20px;
}
.fs16px {
  font-size: 32px;
}
.posi {
  margin-right: 20px;
}
.selecss {
  font-size: 32px;
  outline: none;
  width: 95%;
  color: rgb(194, 194, 194);
  border: none;
  background-color: #ffffff;
  appearance: none;
  /*为下拉小箭头留出一点位置，避免被文字覆盖*/
}
.imgrigth {
  width: 16px;
  height: 24px;
  margin-top: 13px;
  display: inline-block;
  position: absolute;
  right: 32px;
}
.flex-be {
  display: flex;
  display: -webkit-flex;
  flex-direction: row;
  justify-content: space-between;
  -webkit-justify-content: space-between;
}
.inner {
  width: 100%;
  padding-right: 32px;
  padding-left: 32px;
  box-sizing: border-box;
  background-color: #ffffff;
  position: relative;
}
.layout {
  padding-top: 28px;
  padding-bottom: 28px;
}
</style>
