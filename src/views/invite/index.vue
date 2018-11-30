<!--  -->
<template>
  <div>
    <herder
      v-on:Tdata='Tdata'
      :mineData='mineData'
    ></herder>
    <con-tent v-if="showData == 3"></con-tent>
    <con-tent2 v-else-if="showData == 0"></con-tent2>
  </div>
</template>

<script>
import Herder from '@/views/invite/herder'
import ConTent from '@/views/invite/content'
import ConTent2 from '@/views/invite/content-2'
import { getmineData } from '@/api'
export default {
  data() {
    return {
      showData: 3,
      mineData: {

      }
    }
  },

  components: {
    Herder,
    ConTent,
    ConTent2
  },

  computed: {},

  mounted() {
    getmineData().then(res => {
      this.mineData = res.data
    })
  },

  methods: {
    Tdata(Tdata) {
      this.showData = Tdata
    }
  }
}

</script>
<style lang='scss' scoped>
</style>
