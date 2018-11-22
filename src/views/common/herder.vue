<template>
  <div>
    <div class="header">
      <div class="header-content flex-st">
        <div class="avatar">
          <img :src="minedata.logoUrl" alt="">
        </div>
        <div class="sty">
          <div class="nickname" v-if="!minedata.realName">{{minedata.nickName}} || 德玛西亚 </div>
          <div class="nickname" v-else-if="minedata.realName">{{minedata.realName}} || 德玛西亚</div>
          <div class="users">邀请您学习快速卖货的方法</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getmineData } from '@/api'
export default {
  data() {
    return {
      minedata: {
        memberLevel: 1
      },
      superior: false,
      ReferrerData: {},
      vanish: true,
      shareIsShow: false
    }
  },
  methods: {
    status(status) {
      this.superior = status
    }
  },
  computed: {
  },
  components: {

  },
  mounted() {
    // 判断是否本地有登陆信息则调用接口
    if (window.localStorage.getItem('gm-token')) {
      getmineData().then(res => {
        if (res) {
          if (res.reCode === 200) {
            // res.data.memberLevel = 2
            // res.data.referrer = true
            this.minedata = res.data
            if (this.minedata.memberLevel === 2 && !this.minedata.referrer) {
              this.vanish = false
            }
            if (this.minedata.memberLevel === 99 || this.minedata.referrer) {
              this.shareIsShow = true
            }
          } else {
            //   layer.open({
            //     content: res.reMsg,
            //     skin: "msg",
            //     time: 2
            //   });
          }
        }
        this.$emit('isok', this.minedata.memberLevel)
        this.$emit('isShow', this.shareIsShow)
      })
    }
  }
}
</script>

<style lang='less' scoped>
.shangji {
  color: #fff;
  font-size: 28px;
  padding: 10px 28px;
  border-radius: 50px;
  position: absolute;
  right: 100px;
  top: 10px;
  background-image: linear-gradient(left, #ff5500, #c7000a);
  background-size: 100% 100%;
}
.noshangji {
  color: #fff;
  font-size: 28px;
  padding: 10px 28px;
  background-color: #999999;
  border-radius: 55px;
  position: absolute;
  right: 100px;
  top: 10px;
}
.sty {
  width: 30%;
  img {
    width: 34px;
    height: 28px;
    display: inline-block;
    margin-left: 10px;
    text-align: center;
  }
}
.users {
  color: #fff;
  margin-left: 28px;
  font-size: 26px;
  width: 500px;
}
.memberLev {
  padding: 28px 32px 22px 32px;
}
.flex-be {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.font {
  color: #363636;
  font-size: 34px;
}
.font2 {
  font-size: 30px;
  color: #979797;
}
.header {
  width: 100%;
  padding-top: 30px;
  position: relative;
  padding-bottom: 30px;
  background-image: url("http://chuang-saas.oss-cn-hangzhou.aliyuncs.com/upload/image/20181016/8a560113fafb4e8591d763d3178dfa63.png");
}
.header-content {
  padding-left: 32px;
  padding-right: 32px;
  width: 100%;
  position: relative;
}
.flex-st {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}
.avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: #fff
    url("http://chuang-saas.oss-cn-hangzhou.aliyuncs.com/upload/image/20181108/2e560c8bde31454189903ccbc87207a8.png")
    no-repeat center / cover;
  overflow: hidden;
  box-shadow: 2px 2px 10px #666;
  border: 1px solid #fff;
}
.avatar img {
  width: 100%;
  height: 100%;
  vertical-align: middle;
  border-radius: #979797;
  overflow: hidden;
}
.nickname {
  width: 430px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding-left: 26px;
  vertical-align: middle;
  line-height: 50px;
  text-align: center;
  font-size: 30px;
  text-align: left;
  color: #fff;
}
.logo_level {
  position: absolute;
  top: 40px;
  right: 0;
}
.logo_level img {
  width: 128px;
  height: 114px;
}
</style>
