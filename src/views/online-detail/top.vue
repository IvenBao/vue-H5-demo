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
      <span class="name">{{doemData.name}}</span>
      <p>{{doemData.brief}}</p>
      <img
        @click="share"
        src="http://chuang-saas.oss-cn-hangzhou.aliyuncs.com/upload/image/20181121/1b4c378527ba4df485193a05ee4f45d9.png"
        alt=""
      >
      <div
        style="margin-top: 12px;"
        v-if="!doemData.isListen && !doemData.isVipFree"
      >
        <h4 class="timeSty">￥{{doemData.retailPriceDesc}}</h4>
        <span
          class="original"
          v-show="doemData.showPriceDesc"
        >原价:￥{{doemData.showPriceDesc}}</span>
      </div>
      <div
        style="margin-top: 12px;"
        v-if="!doemData.isListen && doemData.isVipFree"
      >
        <span class="memberSty">会员免费</span>
      </div>
      <div
        style="margin-top: 12px;"
        v-if="doemData.isListen"
      >
        <span class="memberSty">免费学习</span>
      </div>
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
.memberSty {
  display: inline-block;
  font-size: 30px;
  color: #fff;
  padding: 3px 13px;
  background-color: rgba(235, 43, 52, 1);
  border-radius: 8px;
}
.imgSty {
  width: 100%;
  img {
    width: 100%;
    height: 350px;
  }
}
.original {
  font-size: 12px;
  font-weight: 500;
  margin-left: 10px;
  color: rgba(152, 152, 152, 1);
  text-decoration: line-through;
}
.timeSty {
  display: inline-block;
  color: rgba(235, 43, 52, 1);
  font-size: 30px;
}
.content {
  padding: 28px 0 28px 32px;
  background-color: #fff;
  position: relative;
  .name {
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
