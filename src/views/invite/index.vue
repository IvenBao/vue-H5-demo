<!--  -->
<template>
  <div>
    <herder v-on:Tdata='Tdata'></herder>
    <con-tent v-if="showData == 3"></con-tent>
    <con-tent2 v-else-if="showData == 0"></con-tent2>
  </div>
</template>

<script>
import Herder from '@/views/invite/herder'
import ConTent from '@/views/invite/content'
import ConTent2 from '@/views/invite/content-2'
export default {
  data() {
    return {
      showData: 3
    }
  },

  components: {
    Herder,
    ConTent,
    ConTent2
  },

  computed: {},

  mounted() { },

  methods: {
    Tdata(Tdata) {
      this.showData = Tdata
    }
  }
}

</script>
<style lang='scss' scoped>
</style>
