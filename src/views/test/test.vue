<!-- demo项目 -->
<template>
  <div id="test">
    <x-header></x-header>
    <div>test</div>
    <div>test</div>
    <div>test</div>
    <div>test</div>
    <div>test</div>
  </div>
</template>

<script>
import { XHeader } from 'vux'
export default {
  data() {
    return {
    }
  },

  components: {
    XHeader
  },

  computed: {},

  mounted() {
  },

  methods: {}
}

</script>
<style lang='scss' scoped>
#test {
  div {
    color: red;
    font-size: 48px;
  }
}
</style>
