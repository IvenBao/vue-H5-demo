<template>
  <div class="product">
    <!-- <ly-line v-show="productList.length > 0"></ly-line> -->
    <head-line
      :headTitle="headTitle"
      v-show="productList.length > 0"
    ></head-line>
    <ul>
      <li
        class="flex-row flex-st"
        v-for="item in productList"
        :key="item.id"
        @click="getProductById(item.id)"
      >
        <img
          :src="item.picUrl"
          alt=""
        />
        <div class="left flex-col">
          <h3 class="productName color36">{{item.name}}</h3>
          <p class=" color97 contentText">{{item.brief}}</p>
          <div class=" color97 position">
            <p class="sty">
              ￥<span>{{item.showPriceDesc}}</span>
            </p>
            <span class="price">报名</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import HeadLine from '@/views/home/headline.vue'
export default {
  data() {
    return {
      headTitle: {
        title: '线下活动',
        text: '微谷精选',
        type: 1,
        imgUrl:
          'http://chuang-saas.oss-cn-hangzhou.aliyuncs.com/upload/image/20180917/7373c0c6badb448890338f796394a0be.png'
      }
    }
  },
  components: {
    HeadLine
  },
  mounted() {
  },
  props: ['isok', 'productList'],
  methods: {
    getProductById(id) {
      this.$router.push({ name: 'offline-detail', query: { productId: id } })
    }
  }
}
</script>

<style lang='less' scoped>
.time {
  font-size: 26px;
  color: #989898;
}
.product {
  margin-top: 20px;
  background-color: #fff;
}
.product ul {
  padding: 0 28px;
  overflow: hidden;
  box-sizing: border-box;
}
.product ul li {
  margin-top: 14px;
  padding-bottom: 20px;
  display: flex;
}
.product ul li img {
  width: 260px;
  height: 160px;
  border-radius: 8px;
}
.product ul li div.left {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 3px 0 0 10px;
  margin-left: 10px;
  box-sizing: border-box;
}
.product ul li .productName {
  text-align: left;
  vertical-align: top;
  font-weight: 400;
  font-family: "PingFangSC-Regular";
  font-size: 30px;
  line-height: 0.3rem;
}
.product {
  padding-bottom: 100px;
}
.product ul li .contentText {
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  font-size: 26px;
  color: #979797;
  line-height: 30px;
  box-sizing: border-box;
  white-space: nowrap;
  min-width: 0;
  font-family: "PingFangSC-Regular";
}
.position {
  position: relative;
  display: block;
  width: 100%;
}
.price {
  display: block;
  color: #ffffff;
  line-height: 54px;
  font-size: 28px;
  width: 130px;
  height: 52px;
  text-align: center;
  position: absolute;
  border-radius: 55px;
  right: 0;
  bottom: 0;
  background-image: linear-gradient(
    left,
    rgba(247, 129, 96, 1),
    rgba(250, 63, 67, 1)
  );
}
.color97 {
  color: #979797;
}
.sty {
  // background-color: #EFEFEF;
  display: inline-block;
  width: 168px;
  height: 42px;
  line-height: 44px;
  font-size: 24px;
  border-radius: 6px;
  color: red;
  span {
    color: red;
  }
}
</style>
