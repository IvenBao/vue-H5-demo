import Vue from 'vue'
import Vuex from 'vuex'
import mp3Player from './mp3Player' // 引入某个store对象

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        Player: mp3Player
        //  other: other,//其他组件
    }
})
