/**
 * 调用方式
 *  this.$store.commit('playPlayer', {
        playerList: [{
            mp3Src: 'http://chuang-saas.oss-cn-hangzhou.aliyuncs.com/upload/image/20181126/be1c3e57467d4a36ac9d5a3602c691b9.mp3', // mp3地址
            mp3Img: 'http://chuang-saas.oss-cn-hangzhou.aliyuncs.com/upload/image/20181126/cb72633a7fb74c2c8d0f110a2f68a3f6.png', // mp3封面图
            mp3Title: '35-小点成交法话术与策略' // mp3标题
        }, {
            mp3Src: 'http://chuang-saas.oss-cn-hangzhou.aliyuncs.com/upload/image/20181123/8a5f51909fe445e1b8545219cfcbb804.mp3', // mp3地址
            mp3Img: 'http://chuang-saas.oss-cn-hangzhou.aliyuncs.com/upload/image/20181123/5123e3f71a18495eacc02d8930a9de2a.png', // mp3封面图
            mp3Title: '36-小点成交法话术与策略' // mp3标题
        }, {
            mp3Src: 'http://chuang-saas.oss-cn-hangzhou.aliyuncs.com/upload/image/20181120/ddb807f6bdbb46a6bb85931ea7eefa32.mp3', // mp3地址
            mp3Img: 'http://chuang-saas.oss-cn-hangzhou.aliyuncs.com/upload/image/20181120/96d983b0060349d4a5bd35a0496de9bf.png', // mp3封面图
            mp3Title: '37-小点成交法话术与策略' // mp3标题
        }], // 播放列表
        playingIndex: 1 // 当前播放的是哪一个
    })
 */

export default {
    state: {
        is_scollup: false, // 是否向上滚动,用作上滑时的效果触发
        close_player: true, // 关闭播放器
        playerList: [{
            mp3Src: 'http://chuang-saas.oss-cn-hangzhou.aliyuncs.com/upload/image/20181126/be1c3e57467d4a36ac9d5a3602c691b9.mp3', // mp3地址
            mp3Img: 'http://chuang-saas.oss-cn-hangzhou.aliyuncs.com/upload/image/20181126/cb72633a7fb74c2c8d0f110a2f68a3f6.png', // mp3封面图
            mp3Title: '35-小点成交法话术与策略' // mp3标题
        }], // 播放列表
        playingIndex: 0, // 当前播放的是哪一个
        playingTime: '00:00', // 已播放时间
        playerTime: '00:00', // 音频所有时长
        playStatus: false // 播放状态是否为正在播放
    },
    mutations: {
        closePlayer(state) {
            state.close_player = true
        },
        playPlayer(state, data) {
            if (data && data.playerList && data.playingIndex) {
                state.playerList = data.playerList // 播放列表
                state.playingIndex = data.playingIndex // 当前播放的是哪一个
                state.close_player = false
                state.playStatus = true
                state.is_scollup = false
            } else {
                return false
            }
        },
        pausePlayer() {}
    },
    actions: {

    },
    getters: {

    }
}
