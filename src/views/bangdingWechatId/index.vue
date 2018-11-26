<template>
    <div>
        <wechat-top></wechat-top>
        <div class="data">
            <div class="inp">
                <input type="text" placeholder="请输入微信号" v-model="wechatData.wechatAccount">
            </div>
            <div class="hint">
                <span class="left">请输入本人微信号，仅能设置一次</span>
                <span class="right" @click="look">查看示例</span>
            </div>
        </div>
        <div class="div" v-if="wechatData.wechatAccount">
            <div class="fs18px mTop45px" @click="upload">确定</div>
        </div>
        <div class="div" v-else style="opacity: 0.5;">
            <div class="fs18px mTop45px" @click="upload">确定</div>
        </div>
        <div class="zhezhao" v-show="show" @click="vanish">
            <img src="http://chuang-saas.oss-cn-hangzhou.aliyuncs.com/upload/image/20181011/f741e0f63b954143a3c0f55ef6d4528a.png" alt="">
        </div>
    </div>
</template>
<script>
import wechatTop from '@/views/bangdingWechatId/wechatTop.vue'
import { bindUserWechat } from '@/api'
export default {
    data() {
        return {
            wechatData: {
                wechatAccount: ''
            },
            show: false
        }
    },
    components: {
        wechatTop
    },
    methods: {
        upload() {
            let ff = /^[a-zA-Z]([-_a-zA-Z0-9]{5,19})$/
            if (ff.test(this.wechatData.wechatAccount)) {
                bindUserWechat(this.wechatData).then(res => {
                    // if (res.code == '200') {
                    //     layer.open({
                    //         content: '绑定成功',
                    //         skin: "msg",
                    //         time: 2,
                    //         end: () => {
                    //             this.$router.push({ name: "mine" });
                    //         }
                    //     })
                    // } else {
                    //     layer.open({
                    //         content: res.message,
                    //         skin: "msg",
                    //         time: 2,
                    //         end: () => {

                    //         }
                    //     })
                    // }
                })
            } else {
                // layer.open({
                //     content: '请输入正确的微信号',
                //     skin: "msg",
                //     time: 2,
                //     end: () => {

                //     }
                // })
            }
        },
        look() {
            this.show = true
        },
        vanish() {
            this.show = false
        }
    }
}
</script>
<style lang="less" scoped>
.zhezhao {
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.3);
  img {
    width: 600px;
    height: 800px;
    position: absolute;
    left: 50%;
    margin-left: -300px;
    top: 50%;
    margin-top: -400px;
  }
}
.data {
  padding: 0 32px 0 32px;
}
.inp {
  padding-bottom: 26px;
  border-bottom: 1px solid #c1c1c1;
  margin-bottom: 26px;
}
.inp > input {
  font-family: "微软雅黑";
  line-height: 50px;
  font-size: 36px;
  color: #787878;
  display: block;
  width: 100%;
  border: none;
  outline: none;
}
input::-webkit-input-placeholder {
  color: #c1c1c1;
}
.hint > span {
  display: block;
  font-size: 28px;
}
.left {
  float: left;
  color: #989898;
}
.right {
  float: right;
  color: #e4304a;
}
.div {
  width: 100%;
  background: #fff;
  height: 112px;
  z-index: 1000;
  margin-top: 200px;
}
.div div {
  position: relative;
  display: block;
  margin-left: auto;
  margin-right: auto;
  background-color: red;
  padding-left: 14px;
  padding-right: 14px;
  box-sizing: border-box;
  font-size: 36px;
  text-align: center;
  text-decoration: none;
  line-height: 88px;
  border-radius: 5px;
  -webkit-tap-highlight-color: transparent;
  color: #fff;
  width: 92%;
  height: 88px;
  border-radius: 50px;
}
.zhezhao {
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.3);
  img {
    width: 600px;
    height: 800px;
    position: absolute;
    left: 50%;
    margin-left: -300px;
    top: 50%;
    margin-top: -400px;
  }
}
.data {
  padding: 0 32px 0 32px;
}
.inp {
  padding-bottom: 26px;
  border-bottom: 1px solid #c1c1c1;
  margin-bottom: 26px;
}
.inp > input {
  font-family: "微软雅黑";
  line-height: 50px;
  font-size: 36px;
  color: #787878;
  display: block;
  width: 100%;
  border: none;
  outline: none;
}
.hint > span {
  display: block;
  font-size: 28px;
}
.left {
  float: left;
  color: #989898;
}
.right {
  float: right;
  color: #e4304a;
}
.div {
  width: 100%;
  background: #fff;
  height: 112px;
  z-index: 1000;
  margin-top: 200px;
}
.div div {
  position: relative;
  display: block;
  margin-left: auto;
  margin-right: auto;
  background-color: red;
  padding-left: 14px;
  padding-right: 14px;
  box-sizing: border-box;
  font-size: 36px;
  text-align: center;
  text-decoration: none;
  line-height: 88px;
  border-radius: 5px;
  -webkit-tap-highlight-color: transparent;
  color: #fff;
  width: 92%;
  height: 88px;
  border-radius: 50px;
}
</style>
