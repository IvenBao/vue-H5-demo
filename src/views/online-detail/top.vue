<!--  -->
<template>
  <div>
    <div class="imgSty">
      <img
        :src="doemData.picUrl"
        alt=""
      >
    </div>
    <div class="content">
      <span>{{doemData.name}}</span>
      <p>{{doemData.brief}}</p>
      <img
        @click="share"
        src="http://chuang-saas.oss-cn-hangzhou.aliyuncs.com/upload/image/20181121/1b4c378527ba4df485193a05ee4f45d9.png"
        alt=""
      >
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

  methods: {
    share() {
      alert(123)
    }
  },

  props: ['doemData']
}

</script>
<style lang='scss' scoped>
.imgSty {
  width: 100%;
  img {
    width: 100%;
    height: 284px;
  }
}
.content {
  padding: 28px 0 28px 32px;
  background-color: #fff;
  position: relative;
  span {
    font-size: 36px;
    color: rgba(54, 54, 54, 1);
  }
  p {
    margin-top: 11px;
    font-size: 30px;
    color: rgba(152, 152, 152, 1);
    width: 483px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  img {
    width: 109px;
    height: 54px;
    position: absolute;
    right: 0;
    top: 27px;
  }
}
</style>
