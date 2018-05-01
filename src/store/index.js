import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  // actions: {
  //   // 第一个参数是上下文，第二个是传入的数据
  //   changeCity (ctx, city) {
  //     console.log(city)
  //     ctx.commit('changeCity', city)
  //   }
  // },
  mutations
})
