import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// 저장소 모듈
import display from './modules/display';
import user from './modules/user';
import viewstate from './modules/viewstate';

export default new Vuex.Store({
  
  modules: {
    display,
    user,
    viewstate
  },
  state: {
    url: 'http://plot.ejjeong.com'
  }

});