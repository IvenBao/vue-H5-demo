<template>
  <div>
    <div class="title">
      <h5>绑定微信号</h5>
    </div>
    <div class="userinfo">
      <img :src="mineData.logoUrl" alt="">
      <span>{{mineData.nickName}}</span>
    </div>
  </div>
</template>
<script>
import { getmineData } from '@/api'
export default {
  data() {
    return {
      mineData: {}
    }
  },
  mounted() {
    getmineData().then(res => {
      if (res) {
        if (res.code === 200) {
          this.mineData = res.data
        } else {
          // layer.open({
          //   content: res.message,
          //   skin: 'msg',
          //   time: 2,
          //   end: () => {
          //     cb && cb();
          //   }
          // })
        }
      }
    })
  }
}
</script>
<style lang="less" scoped>
.title {
  padding: 36px 0 0 32px;
  font-size: 62px;
}
.userinfo {
  padding: 54px 0 54px 32px;
  img {
    display: inline-block;
    width: 100px;
    height: 100px;
    border-radius: 8px;
    float: left;
  }
  span {
    display: inline-block;
    height: 100px;
    line-height: 100px;
    margin-left: 20px;
    font-size: 28px;
  }
}
</style>
