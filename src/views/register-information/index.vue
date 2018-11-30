<!--  -->
<template>
    <div id="information">
        <div class="form">
            <h4>渠道革命</h4>
            <form>
                <div class="line Required" :class='{"hide": !RequiredfromData.locations}'>
                    <span>上课城市</span>
                    <select name="classAddress" v-model="fromData.addressClass" @change="addressClassCheck">
                        <option value="1">－请选择－</option>
                        <option value="2">上海</option>
                        <option value="3">北京</option>
                        <option value="4">杭州</option>
                    </select>
                    <em class="iconfont icon-jiantou"></em>
                </div>
                <div class="line Required" :class='{"hide": !RequiredfromData.cellphone}'>
                    <span>手机号</span>
                    <input type="tel" v-model="fromData.contactCellphone" placeholder="请输入您的手机号" @input="fromVaildate('phone')" @paste="pasteData">
                </div>
                <div class="line Required" :class='{"hide": !RequiredfromData.name}'>
                    <span>姓名</span>
                    <input type="text" v-model="fromData.applicantName" placeholder="请输入您的姓名" @input="fromVaildate('name')" @paste="pasteData">
                </div>
                <div class="line Required" :class='{"hide": !RequiredfromData.idcard}'>
                    <span>身份证</span>
                    <input type="text" v-model="fromData.applicantIdcard" placeholder="请输入您的身份证号" @input="fromVaildate('IDcard')" @paste="pasteData">
                </div>
                <div class="line Required" :class='{"hide": !RequiredfromData.WXcode}'>
                    <span>微信</span>
                    <input type="text" v-model="fromData.WXcode" placeholder="请输入您的微信号" @input="fromVaildate('WXcode')" @paste="pasteData">
                </div>
                <div class="line Required" :class='{"hide": !RequiredfromData.company}'>
                    <span>公司</span>
                    <input type="text" v-model="fromData.company" placeholder="请输入您的公司" @input="fromVaildate('WXcode')" @paste="pasteData">
                </div>
                <div class="line Required" :class='{"hide": !RequiredfromData.brand}'>
                    <span>品牌</span>
                    <input type="text" v-model="fromData.brand" placeholder="请输入您的品牌" @input="fromVaildate('WXcode')" @paste="pasteData">
                </div>
                <div class="line Required" :class='{"hide": !RequiredfromData.jobTitle}'>
                    <span>职位</span>
                    <input type="text" v-model="fromData.jobTitle" placeholder="请输入您的职位" @input="fromVaildate('WXcode')" @paste="pasteData">
                </div>
                <div class="line Required" :class='{"hide": !RequiredfromData.gender}'>
                    <span>性别</span>
                    <radio v-model="fromData.gender" :options="[{label: '男', value: '0'}, {label: '女', value: '1'}]" @click="fromVaildate('sex')">
                    </radio>
                </div>
                <div class="line Required" @click="showAddress=true" :class='{"hide": !RequiredfromData.nowAddress}'>
                    <span>现居城市</span>
                    <p v-if="false" class="hasCity">
                        <i class="province">{{nowAddress.provinceString}}</i>
                        <i class="city">{{nowAddress.cityString}}</i>
                        <i class="area">{{nowAddress.areaString}}</i>
                    </p>
                    <p v-else>{{nowAddress.nowAddressString || '请选择'}}</p>
                    <em class="iconfont icon-jiantou"></em>
                </div>
                <x-address style="display:none;" :title='title' :hide-district='true' @on-shadow-change="onShadowChange" v-model="nowAddress.nowAddressArr" :list="VUXaddressData" :show.sync="showAddress" :raw-value="true"></x-address>
            </form>
        </div>
        <div class="btn" :class='{active: active}'>提交报名</div>
    </div>
</template>

<script>
import { Radio, Indicator } from 'mint-ui'
import { XAddress, ChinaAddressV4Data, Value2nameFilter as value2name } from 'vux'
import { getActivityFormByOrderSn } from '@/api'
export default {
    data() {
        return {
            orderSn: '', // 订单id
            active: false,
            sex: '',
            title: '', // x-address中必须填的字段，没用也必须写，服了
            VUXaddressData: ChinaAddressV4Data,
            showAddress: false, // 地址选择框唤起与否
            RequiredfromData: { // 判断表单中的字段是否必填
                cellphone: false, // 手机号码
                name: false, // 姓名
                idcard: false, // 身份证
                WXcode: false, // 微信code
                addrClass: false, // 上课城市
                gender: false, // 性别
                company: false, // 公司
                brand: false, // 品牌
                jobTitle: false, // 职位
                nowAddress: false // 现居城市
            },
            fromData: {
                contactCellphone: '', // 手机号码
                applicantName: '', // 姓名
                applicantIdcard: '', // 身份证
                WXcode: '', // 微信code
                addressClass: '1', // 上课地址id
                gender: '', // 性别
                company: '', // 公司
                brand: '', // 品牌
                jobTitle: '' // 职位
            }, // 提交的表单数据
            nowAddress: {
                nowAddressArr: [],
                nowAddressString: '',
                provinceString: '',
                cityString: '',
                areaString: '',
                provinceCode: '',
                cityCode: '',
                areaCode: ''
            } // 现居地址的数据
        }
    },
    components: {
        Radio,
        XAddress
    },
    computed: {},
    beforeRouteEnter(to, from, next) {
        if (to.query.orderSn) {
            next()
        } else {
            // 如果没有传给我orderSn则跳转到首页
            next({ name: 'home', replace: true })
        }
    },
    mounted() {
        this.orderSn = this.$route.query.orderSn
        Indicator.open({
            text: '初始化中...',
            spinnerType: 'double-bounce'
        })
        getActivityFormByOrderSn({
            orderSn: this.orderSn
        }).then(res => {
            Indicator.close()
            console.log(res)
            // eslint-disable-next-line
            let Required = eval('(' + res.data.appForm + ')')
            this.RequiredfromData = Required
            console.log(Required)
        }, rej => {
            Indicator.close()
            console.log(rej)
        })
    },

    methods: {
        /**
         * start 现居地址逻辑方法
         */
        doShowAddress() {
            this.showAddress = true
        },
        onShadowChange(ids, names) {
            // console.log(ids, names)
            this.nowAddress.nowAddressString = this.getName(ids)
        },
        getName(value) {
            return value2name(value, ChinaAddressV4Data)
        },
        /**
         * end 现居地址逻辑方法
         */
        /**
         * start 必填字段判断逻辑方法
         * todo 需等后端联调时完善
         */
        addressClassCheck() {
            console.log('select')
        }, // 选择上课城市
        fromVaildate(data) {
            console.log(data)
        },
        pasteData() {
            console.log('paste')
        },
        isSubmitFrom() {
            if (this.active) {

            } else {

            }
            return true
        }
        /**
         * end 必填字段判断逻辑方法
         */
    }
}

</script>
<style lang='scss' scoped>
#information {
  width: 100%;
  min-height: 100vh;
  background: #f7f7f7;
  overflow: hidden;
  .form {
    width: 686px;
    margin: 33px auto 0;
    min-height: 100vh;
    background: rgba(255, 255, 255, 1);
    box-shadow: 2px 4px 14px 0px rgba(186, 186, 186, 0.5); /* no */
    border-radius: 16px;
    h4 {
      width: 100%;
      font-size: 40px;
      color: rgba(54, 54, 54, 1);
      line-height: 111px;
      text-align: center;
      border-bottom: 1px solid #d4d4d4; /* no */
    }
    form {
      width: 622px;
      overflow: hidden;
      margin: 0 auto;
      .line {
        width: 100%;
        height: 96px;
        display: flex;
        // justify-content: space-between;
        border-bottom: 1px solid #e8e8e8; /*no*/
        line-height: 96px;
        overflow: hidden;
        span {
          font-size: 30px;
          width: 160px;
        }
        input,
        select {
          padding-left: 20px;
          width: 430px;
          font-size: 30px;
          border: none;
          background: none;
          -webkit-tap-highlight-color: transparent;
          -webkit-appearance: none;
          &::-webkit-input-placeholder {
            color: #bdbdbd;
            font-size: 30px;
          }
        }
        input {
          padding-right: 22px;
        }
        em {
          line-height: 96px;
          font-size: 20px;
          color: #c6c6c6;
        }
        p {
          width: 430px;
          font-size: 30px;
          color: #656565;
          padding-left: 20px;
        }
      }
      .Required span::before {
        content: "*";
        font-size: 24px;
        color: #d81e06;
        margin-right: 16px;
      }
    }
  }
  .btn {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 96px;
    background: #acacac;
    color: #fff;
    font-size: 36px;
    line-height: 98px;
    text-align: center;
    &.active {
      background-image: linear-gradient(left, #ff7453, #f43231);
    }
  }
}
.mint-radiolist {
  display: flex;
}
</style>
<style lang="scss">
#information {
  .mint-cell-wrapper {
    padding: 0;
    background: none;
  }
  .mint-cell {
    min-height: 100%;
    background: none;
  }
}
</style>
