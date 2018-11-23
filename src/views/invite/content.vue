<template>
  <div>
    <div class="ulList v100">
      <ul v-if="invireData && invireData.length > 0">
        <li class="itme flex-st" v-for="(itme, index) in invireData" :key="index">
          <div class="itme-l">
            <img :src="itme.logoUrl" alt="" class="img100">
          </div>
          <div class="item-c flex-cl">
            <div>
              <div class="fs16px">{{itme.realName||itme.nickName}}</div>
              <div class="color666">{{itme.registerMobile}}</div>
            </div>
          </div>
          <div class="item-r">
            <div>
              <div class="color97">{{itme.modifyTime}}</div>
            </div>
          </div>
        </li>
      </ul>
      <span v-else class="no-list">
        <img src="http://chuang-saas.oss-cn-hangzhou.aliyuncs.com/upload/image/20181123/caf430d9af764a538cdc9b7ab269b414.png" alt="">
      </span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pagedata: {
        pageNum: 1,
        pageSize: 100
      },
      invireData: [
        {
          logoUrl: '',
          nickName: '王大娘',
          registerMobile: '15755029598',
          modifyTime: '2018-12-23 13:21:12'
        },
        {
          logoUrl: '',
          nickName: '王二娘',
          registerMobile: '15755029598',
          modifyTime: '2018-12-23 13:21:12'
        },
        {
          logoUrl: '',
          nickName: '王大娘',
          registerMobile: '15755029598',
          modifyTime: '2018-12-23 13:21:12'
        },
        {
          logoUrl: '',
          nickName: '王大娘',
          registerMobile: '15755029598',
          modifyTime: '2018-12-23 13:21:12'
        },
        {
          logoUrl: '',
          nickName: '王大娘',
          registerMobile: '15755029598',
          modifyTime: '2018-12-23 13:21:12'
        },
        {
          logoUrl: '',
          nickName: '王三娘',
          registerMobile: '15755029598',
          modifyTime: '2018-12-23 13:21:12'
        },
        {
          logoUrl: '',
          nickName: '王四娘',
          registerMobile: '15755029598',
          modifyTime: '2018-12-23 13:21:12'
        },
        {
          logoUrl: '',
          nickName: '王五娘',
          registerMobile: '15755029598',
          modifyTime: '2018-12-23 13:21:12'
        },
        {
          logoUrl: '',
          nickName: '王六娘',
          registerMobile: '15755029598',
          modifyTime: '2018-12-23 13:21:12'
        },
        {
          logoUrl: '',
          nickName: '王七娘',
          registerMobile: '15755029598',
          modifyTime: '2018-12-23 13:21:12'
        },
        {
          logoUrl: '',
          nickName: '王八娘',
          registerMobile: '15755029598',
          modifyTime: '2018-12-23 13:21:12'
        }
      ]
    }
  },
  // props: ['invireData'],
  mounted() {
    // getMaidInfoList(this.pagedata.pageNum, this.pagedata.pageSize).then(res => {
    //     this.invireData = res.data.maidInfoVoList
    //     this.pagedata.pageNum++
    //     console.log(this.pagedata.pageNum)
    //     // console.log(this.invireData)
    // })
  },
  methods: {
    onLine(id) {
      this.$router.push({ name: 'mineOrderOnline', query: { userId: id } })
    },
    offline(id) {
      this.$router.push({ name: 'mineOrder', query: { userId: id } })
    }
  }
}
</script>

<style lang="less" scoped>
.no-list {
  display: block;
  background-color: #fff;
  position: relative;
  img {
    width: 239px;
    height: 226px;
    position: absolute;
    left: 50%;
    margin-left: -119px;
  }
}
.titlesty {
  font-size: 32px;
  width: 100%;
  height: 100%;
  line-height: 100px;
}
.ulList {
  padding: 32px 32px 0 32px;
  box-sizing: border-box;
  background-color: #ffffff;
}
.v100 {
  width: 100%;
}
.no-list {
  font-size: 28px;
  color: #979797;
  white-space: normal;
  text-overflow: ellipsis;
  width: 480px;
  overflow: hidden;
  height: 96px;
  line-height: 96px;
}
.itme {
  margin: 24px 0px 0px 0px;
  padding: 0 0px 10px 0;
  border-bottom: 2px solid rgba(224, 224, 224, 1);
}
.itme:last-child {
  border: none;
}
.flex-st {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}
.itme-l {
  width: 100px;
  height: 100px;
  background: #ccc;
  border-radius: 50%;
  overflow: hidden;
}
.item-c {
  margin-left: 30px;
}
.img100 {
  width: 100%;
  height: 100%;
}
.item-r {
  flex: 1;
  margin-left: 24px;
  padding-bottom: 6px;
}
.flex-cl {
  display: flex;
  flex-direction: column;
}
.flex-be {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.fs16px {
  font-size: 34px;
  width: 240px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  height: 48px;
}
.red {
  line-height: 46px;
  color: #e6304a;
  font-size: 28px;
  text-align: right;
}
.color666 {
  color: rgba(101, 101, 101, 1);
  font-size: 28px;
  padding-top: 8px;
  white-space: normal;
  text-overflow: ellipsis;
  height: 48px;
  line-height: 48px;
}
.color97 {
  font-size: 26px;
  color: #979797;
  padding-top: 8px;
  white-space: normal;
  text-overflow: ellipsis;
  //width: 240px;
  //overflow: hidden;
  height: 48px;
  line-height: 48px;
  text-align: right;
}
</style>
