<template>
  <div class="pad64px">
    <mine-header :minedata="mineData"></mine-header>
    <me-mber :isok=ok></me-mber>
    <mine-content :minedata="mineData"></mine-content>
    <mine-footer></mine-footer>
  </div>
</template>
<script>
import MineHeader from '@/views/mine/mine-header.vue'
import MineContent from '@/views/mine/mine-content.vue'
import MineFooter from '@/views/mine/footer-tab.vue'
import MeMber from '@/views/home/member.vue'
import { getmineData } from '@/api'
export default {
  data() {
    return {
      mineData: {
        // isok: 2,
        // logoUrl: 'http://thirdwx.qlogo.cn/mmopen/vi_32/icicMFqvtG0ha6GmwPtxK3XeobYdjMqChnSWhBeibC8KQqweASlxtH7vejDTwWF7T0JgvWVXibn0ibUEqrHcD2Db1og/132',
        // nickName: 'D_H',
        // xiaxianCount: 15,
        // registerMobile: '13866365214'
        memberLevel: 99
      },
      ok: ''
    }
  },
  components: {
    MineHeader,
    MineContent,
    MineFooter,
    MeMber
  },
  beforeRouteEnter(to, from, next) {
    if (window.localStorage.getItem('gm-token')) {
      next()
    } else {
      // todo
      // login()
    }
  },
  mounted() {
    /**
     * 测试流程用代码，无用代码
     */

    getmineData().then(res => {
      if (res) {
        if (res.reCode === 200) {
          // res.data.memberLevel = 1;
          // res.data.referrer = true
          this.mineData = res.data
          this.ok = res.data.memberLevel
        } else {
        }
      }
    })
  }
}
</script>
<style lang="less" scoped>
.pad64px {
  background-color: #f4f4f4;
  //   padding-bottom: 200px;
  min-height: 100vh;
}
</style>
