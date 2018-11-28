<!-- 我的海报 -->
<template>
    <div id="poster">
        <canvas id="postreCtx">您的手机系统版本暂时不支持该功能</canvas>
        <qrcode class="hide" :value="qrLink" ref='qrcodeImg' type='img'></qrcode>
        <img v-if="myPoster" id="myPoster" :src="myPoster" alt="">
    </div>
</template>

<script>
import { Qrcode } from 'vux'
import { setTimeout } from 'timers'
import { getPosterInfo } from '@/api'
export default {
    data() {
        return {
            qrLink: window.location.href,
            myPoster: ''
        }
    },

    components: {
        Qrcode
    },

    computed: {},

    mounted() {
        getPosterInfo({ goodsId: '1' }).then(res => {
            console.log(res)
        }, rej => {
            console.log(rej)
        })
        let canvas = document.getElementById('postreCtx')
        let ctx = canvas.getContext('2d')
        let nWidth = document.body.clientWidth // 屏幕可视区域 宽度
        let nHeight = nWidth * 1.5 + 50 // 屏幕可视区域 高度
        // let _canvasWidth = document.body.clientWidth * 2 // 画布 宽度
        // let _canvasHeight = document.body.clientHeight * 2 // 画布 高度
        canvas.width = nWidth
        canvas.height = nHeight
        setTimeout(() => { // 模拟请求环境 等待接口联调
            // console.log(this.$refs.qrcodeImg.imgData)
            // ctx.font = '12px Arial'
            // ctx.fillText('Hello World', 20, 10)
            // ctx.fill()
            // ctx.closePath()
            // 画背景
            let bgimg = new Image()
            bgimg.crossOrigin = 'anonymous'
            bgimg.src = 'https://img.tuguaishou.com/ips_templ_preview/32/fd/5b/lg_749652_1532602227_5b59a77358349.jpg!w280?auth_key=1543420800-0-0-19e6b811d5e58117a9fd431781ee9c57'
            bgimg.onload = () => {
                ctx.save()
                ctx.drawImage(bgimg, 0, 50, nWidth, nHeight - 50)
                // 画昵称
                ctx.save()
                // 头像下面的文字
                ctx.textAlign = 'center'
                // 设置字体
                ctx.font = '20px Arial'
                ctx.fillStyle = '#000'
                ctx.fillText('昵称昵称', nWidth / 2, 120, nWidth)
                // 画头像
                let headerimg = new Image()
                headerimg.crossOrigin = 'anonymous'
                headerimg.src = 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3629352444,3713987645&fm=27&gp=0.jpg'
                headerimg.onload = () => {
                    ctx.save()
                    ctx.beginPath() // 开始路径，准备画个圆把头像框住(会将之前设置的路径删除)
                    ctx.moveTo((nWidth / 2) - 50, 15)
                    // 画出圆
                    ctx.arc(nWidth / 2, 50, 50, 0, 2 * Math.PI)
                    ctx.fillStyle = 'black'
                    // 填充绘制好的线段之中的内容
                    ctx.fill()
                    // ctx.stroke()
                    // 裁剪上面的圆形
                    ctx.clip()
                    // 在刚刚裁剪的园上画图
                    ctx.drawImage(headerimg, (nWidth / 2) - 50, 0, 100, 100)
                    ctx.restore()
                    // 绘制二维码
                    let qrCodeImage = new Image()
                    qrCodeImage.src = this.$refs.qrcodeImg.imgData
                    qrCodeImage.onload = () => {
                        ctx.save()
                        ctx.beginPath() // 开始路径，准备画个正方形把二维码框住(会将之前设置的路径删除)
                        ctx.moveTo((nWidth / 2) - 60, nHeight - 180)
                        // // 画出矩形
                        ctx.rect((nWidth / 2) - 60, nHeight - 180, 120, 120)
                        ctx.fillStyle = 'black'
                        // // 填充绘制好的线段之中的内容
                        ctx.fill()
                        // // 裁剪上面的正方形形
                        ctx.clip()
                        // 在刚刚裁剪的园上画图
                        ctx.drawImage(qrCodeImage, (nWidth / 2) - 60, nHeight - 180, 120, 120)
                        ctx.restore()
                        let _imgSrc = canvas.toDataURL('image/png', 1)
                        canvas.style.display = 'none'
                        this.myPoster = _imgSrc
                    }
                }
            }

            // bgimg.onload = () => {
            //     ctx.save() // 保存当前_context的状态
            //     ctx.beginPath()
            //     ctx.moveTo(((nWidth) / 2 + 40 / 375 * nWidth) * 2, 70.28 / 603 * nHeight * 2)
            //     ctx.lineWidth = 20
            //     // 画出圆
            //     ctx.arc(nWidth, 70.28 / 603 * nHeight * 2, 40 / 375 * nWidth * 2, 0, 2 * Math.PI, true)
            //     // 圆有个边框
            //     ctx.lineWidth = 20
            //     // ctx.strokeStyle = 'rgba(255,197,108,14)'
            //     ctx.fill()
            //     ctx.stroke()
            //     // 裁剪上面的圆形
            //     ctx.clip()
            //     // 在刚刚裁剪的园上画图
            //     ctx.drawImage(bgimg, (nWidth / 2 - 40) * 2, 30 * 2, 90 * 2, 90 * 2)
            //     ctx.restore()
            //     ctx.stroke()
            //     // 头像下面的文字
            //     ctx.beginPath()
            //     ctx.textAlign = 'center'
            //     // 设置字体
            //     ctx.font = '30px Arial'
            //     ctx.lineWidth = 1.0
            //     ctx.fillStyle = 'rgb(73,73,73)'
            //     ctx.fillText('任小超', nWidth, 150 * 2)
            // }
        }, 1000)
    },

    methods: {
    }
}

</script>
<style lang='scss' scoped>
#poster {
  width: 100%;
  height: 100vh;
  #postreCtx {
  }
}
</style>
