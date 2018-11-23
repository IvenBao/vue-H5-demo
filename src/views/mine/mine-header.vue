
<template>
  <div>
    <header>
      <div class="header">
        <div class="header-content flex-st">
          <div class="avatar">
            <img :src="minedata.logoUrl" alt="">
          </div>
          <div class="sty">
            <div class="nickname" v-if="!minedata.realName">{{minedata.nickName}}<span :class="minedata.memberLevel == 99?'memberSty':'nomemberSty'"></span> </div>
            <div class="nickname" v-else-if="minedata.realName">{{minedata.realName}}<span :class="minedata.memberLevel == 99?'memberSty':'nomemberSty'"></span></div>
            <div class="users" v-if="minedata.memberLevel == 99">2018-12-22到期</div>
            <div class="users" v-else>您暂未开通会员</div>
          </div>
        </div>
        <div class="content">
          <div class="indentNum">
            <p>100</p>
            <span>订单总数（个）</span>
          </div>
          <div class="inviteNum">
            <p>100</p>
            <span>邀请会员数（个）</span>
          </div>
        </div>
      </div>
    </header>
    <!-- <my-superior v-show="superior" v-on:status="status" :superiorData='ReferrerData'></my-superior> -->
  </div>
</template>

<script>
// import { getUserReferrerInfo } from '@/api'
export default {
  data() {
    return {
      superior: false,
      ReferrerData: {}
      // vanish:true
    }
  },
  methods: {
    show() {
      if (this.minedata.memberLevel === 2) {
        this.superior = true
        // getUserReferrerInfo().then(res => {
        //   this.ReferrerData = res.data
        // })
      } else if (this.minedata.memberLevel === 99) {
        this.$router.push({ name: 'invite' })
      } else if (this.minedata.memberLevel === 1) {
        this.$router.push({ name: 'real-name' })
      }
    },
    status(status) {
      this.superior = status
    }
  },
  props: ['minedata'],
  computed: {

  },
  components: {

  }
  // fenxiang () {
  //     this.$router.push({name: "my-qrcode"})
  //
}
</script>

<style lang='less' scoped>
.content {
  padding: 48px 32px 0 32px;
  p {
    color: rgba(54, 54, 54, 1);
    font-size: 52px;
    font-weight: 600;
  }
  span {
    color: rgba(152, 152, 152, 1);
    font-size: 28px;
  }
}
.content .indentNum {
  float: left;
  margin-right: 123px;
}
.shangji {
  color: #ffffff;
  font-size: 28px;
  padding: 10px 28px;
  background-image: linear-gradient(left, #ff5500, #c7000a);
  background-size: 100% 100%;
  border-radius: 50px;
  position: absolute;
  right: 100px;
  top: 30px;
}
.noshangji {
  color: #ffffff;
  font-size: 28px;
  padding: 10px 28px;
  background-color: #999999;
  border-radius: 55px;
  position: absolute;
  right: 100px;
  top: 10px;
}
.users {
  font-size: 28px;
  color: rgba(152, 152, 152, 1);
  margin-left: 28px;
  width: 250px;
}
.memberSty {
  display: inline-block;
  width: 56px;
  height: 31px;
  background-image: url("http://chuang-saas.oss-cn-hangzhou.aliyuncs.com/upload/image/20181120/6f370dfa170f4370b0e22b13523044d6.png");
  background-size: 100% 100%;
  margin-left: 21px;
}
.nomemberSty {
  display: inline-block;
  width: 56px;
  height: 31px;
  background-image: url("http://chuang-saas.oss-cn-hangzhou.aliyuncs.com/upload/image/20181120/7f4c9d9a26fb45489d830ef74cc1ba18.png");
  background-size: 100% 100%;
  margin-left: 21px;
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
  padding-top: 40px;
  position: relative;
  padding-bottom: 36px;
  // background-image: url("http://chuang-saas.oss-cn-hangzhou.aliyuncs.com/upload/image/20181016/8a560113fafb4e8591d763d3178dfa63.png");
  background: #fff;
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
  width: 132px;
  height: 132px;
  border-radius: 50%;
  background: #979797;
  overflow: hidden;
  box-shadow: 2px 2px 10px #666;
  // border: 1px solid #fff
}
.avatar img {
  width: 132px;
  height: 132px;
  vertical-align: middle;
  // border-radius: #979797;
  overflow: hidden;
}
.nickname {
  width: 430px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding-left: 26px;
  vertical-align: middle;
  line-height: 72px;
  text-align: center;
  font-size: 36px;
  text-align: left;
  color: rgba(52, 52, 52, 1);
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
