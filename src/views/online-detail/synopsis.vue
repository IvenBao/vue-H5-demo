<!--  -->
<template>
  <div>
    <div class="contentSty">
      <span class="tib">
        课程简介
      </span>
      <div class="richText" v-html="doemData"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },

  components: {},

  computed: {},

  mounted() { },

  methods: {},

  props: ['doemData']
}

</script>
<style lang='scss' scoped>
.contentSty {
  background-color: #fff;
  margin-top: 20px;
  padding: 0 32px;
}
.tib {
  padding: 40px 0px 8px 0px;
  color: #363636;
  font-size: 40px;
  display: inline-block;
}
.richText {
  padding-bottom: 100px;
}
</style>
