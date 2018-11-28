<!--  -->
<template>
  <div>
    <div class="sty">
      <p class="title"> <span>课程目录</span> <span>共{{doemData.num}}节课</span></p>
    </div>
    <ul v-if="doemData.iffree == 0">
      <li v-for="item in doemData.list" :key="item.id" @click="play(item.id,item.isFree)">
        <span>{{item.title}}</span>
        <div>
          <div class="img1" :class="{img3:changeRed == item.id}"></div>
        </div>
      </li>
    </ul>
    <ul v-else>
      <li v-for="item in doemData.list" :key="item.id" @click="play(item.id,item.isFree)">
        <span>{{item.title}}</span>
        <span v-if="item.isFree == 0 && dj != 1">试听</span>
        <div v-else>
          <div class="img1" v-if="dj == 1" :class="{img3:changeRed == item.id}"></div>
          <div class="img2" v-else></div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      changeRed: 0,
      dj: 1
    }
  },

  components: {},

  computed: {},

  mounted() { },

  methods: {
    play(id, isFree) {
      if (this.doemData.iffree === 0) {
        this.changeRed = id
        // alert('直接听')
      } else {
        if (this.dj === 1) {
          this.changeRed = id // tab切换效果
        } else if (isFree === 0) {
          alert('可以试听')
        } else if (this.dj !== 1) {
          alert('傻屌！不是会员还想听课')
        }
      }
    }
  },

  props: ['doemData']
}

</script>
<style lang='scss' scoped>
ul {
  background-color: #fff;
  padding: 0 32px;
  li {
    padding: 12px 0;
    color: rgba(101, 101, 101, 1);
    font-size: 28px;
    .img1 {
      width: 31px;
      height: 30px;
      display: inline-block;
      background: url("http://chuang-saas.oss-cn-hangzhou.aliyuncs.com/upload/image/20181121/005d48f03a964b719ccae1a6b10c2835.png")
        no-repeat;
      background-size: 100% 100%;
    }
    .img2 {
      width: 28px;
      height: 33px;
      display: inline-block;
      background: url("http://chuang-saas.oss-cn-hangzhou.aliyuncs.com/upload/image/20181121/e6c60949619641bb9bf15f4124af30e2.png")
        no-repeat;
      background-size: 100% 100%;
    }
    .img3 {
      width: 31px;
      height: 30px;
      display: inline-block;
      background: url("http://chuang-saas.oss-cn-hangzhou.aliyuncs.com/upload/image/20181121/02ada08d648d40178c628ef18657b788.png")
        no-repeat;
      background-size: 100% 100%;
    }

    span:nth-child(2) {
      float: right;
      color: rgba(211, 211, 211, 1);
    }
    div {
      display: inline-block;
      float: right;
    }
  }
}
.sty {
  padding: 32px 32px 20px 32px;
  background-color: #fff;
  margin-top: 20px;
}
.title {
  span:nth-child(1) {
    font-size: 40px;
    color: rgba(54, 54, 54, 1);
  }
  span:nth-child(2) {
    font-size: 28px;
    color: rgba(152, 152, 152, 1);
    margin-left: 24px;
  }
}
</style>
