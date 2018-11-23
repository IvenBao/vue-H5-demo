
<template>
  <div class="product">
    <!-- <ly-line v-show="productList.length > 0"></ly-line> -->
    <head-line :headTitle="headTitle" v-show="productList.length > 0"></head-line>
    <ul>
      <li class="flex-row flex-st" v-for="item in productList" :key="item.id" @click="getProductById(item.id)">
        <img class="url" :src="item.picUrl" alt="" />
        <div class="left flex-col">
          <h3 class="productName color36">{{item.name}}</h3>
          <p class=" color97 contentText">{{item.brief}}</p>
          <div class=" color97 position">
            <img class="player" src="http://chuang-saas.oss-cn-hangzhou.aliyuncs.com/upload/image/20181120/f9f2a39d507e4055b9eaee0643d13ed6.png" alt="">
            <p class="sty">
              <span>{{item.listenCountDesc}}</span>
            </p>
            <span class="price">会员免费</span>
            <span class="price">立即学习</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { getOfflineActivityThemeList } from '@/api'
import HeadLine from '@/views/home/headline.vue'
export default {
  data() {
    return {
      headTitle: {
        title: '线上课程',
        text: '微谷精选',
        type: 1,
        imgUrl:
          'http://chuang-saas.oss-cn-hangzhou.aliyuncs.com/upload/image/20180917/7373c0c6badb448890338f796394a0be.png'
      },
      productList: [
        {
          brief: '按大萨达撒大赛的积极的奋斗覅国际饭店按大萨达撒大赛的积极的奋斗覅国际饭店按大萨达撒大赛的积极的奋斗覅国际饭店',
          name: '爱是飞洒撒旦撒',
          listenCountDesc: '157万',
          id: 1
        },
        {
          brief: '按大萨达撒大赛的积极的奋斗覅国际饭店按大萨达撒大赛的积极的奋斗覅国际饭店按大萨达撒大赛的积极的奋斗覅国际饭店',
          name: '爱是飞洒撒旦撒',
          listenCountDesc: '157万',
          id: 2
        },
        {
          brief: '按大萨达撒大赛的积极的奋斗覅国际饭店按大萨达撒大赛的积极的奋斗覅国际饭店按大萨达撒大赛的积极的奋斗覅国际饭店',
          name: '爱是飞洒撒旦撒',
          listenCountDesc: '157万',
          id: 3
        }
      ]

    }
  },
  components: {
    HeadLine
  },
  mounted() {
    let o = {
      queryType: 0,
      pageNum: 1,
      pageSize: 20
    }
    getOfflineActivityThemeList(o).then(res => {
      this.productList = res.data
    })
  },
  props: ['isok'],
  methods: {
    getProductById(id) {
      this.$router.push({ name: 'online-detail', query: { productId: id } })
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
  padding-bottom: 30px;
  display: flex;
}
.product ul li .url {
  width: 168px;
  height: 240px;
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
  font-weight: 400;
  font-size: 32px;
  text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
}
.product ul li .contentText {
  width: 100%;
  text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 28px;
  color: #979797;
  line-height: 30px;
  box-sizing: border-box;
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
  padding: 0 20px;
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
  font-size: 24px;
  border-radius: 6px;
  color: #979797;
  span {
    color: rgba(152, 152, 152, 1);
    display: inline-block;
    position: absolute;
    top: 10px;
    margin-left: 8px;
  }
}
.player {
  width: 31px;
  height: 31px;
  display: inline-block;
}
</style>
