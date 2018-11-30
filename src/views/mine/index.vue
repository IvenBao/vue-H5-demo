<template>
  <div class="pad64px">
    <mine-header :minedata="mineData"></mine-header>
    <me-mber :isok='ok'></me-mber>
    <mine-content :minedata="mineData"></mine-content>
    <mine-footer></mine-footer>
    <ti-shi v-show="show"></ti-shi>
  </div>
</template>
<script>
import MineHeader from '@/views/mine/mine-header.vue'
import MineContent from '@/views/mine/mine-content.vue'
import MineFooter from '@/views/mine/footer-tab.vue'
import MeMber from '@/views/home/member.vue'
import TiShi from '@/views/mine/tishi.vue'
import { getmineData } from '@/api'
export default {
  data() {
    return {
      mineData: {
      },
      ok: '',
      show: false
    }
  },
  components: {
    MineHeader,
    MineContent,
    MineFooter,
    MeMber,
    TiShi
  },
  mounted() {
    /**
     * 测试流程用代码，无用代码
     */

    getmineData().then(res => {
      if (res) {
        console.log(res)
        if (res.userVip) {
          res.userVip.expiresAt = res.userVip.expiresAt.substring(0, 10)
        }
        // res.data.isVIP = true
        /* eslint-disable */
        if (res.data.isVIP) {
          var arr = []
          var dd = ''
          dd = res.data.expiresTime
          arr = dd.split(" ")
          res.data.expiresTime = arr[0]
          this.ok = res.data.isVIP
          this.mineData = res.data
        } else {
          this.ok = res.data.isVIP
          this.mineData = res.data
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
