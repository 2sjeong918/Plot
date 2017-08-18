import Vue from 'vue';
import App from './App';
import toggle from './toggle';
import router from './router';
import store from './store';

// Axios 설정
import axios from 'axios';

// Vue.http = axios;
// Vue.prototype.$http = axios;

// store 설정
store.dispatch('initList', 'https://plot-b2239.firebaseio.com/display.json');


// Vue 인스턴스 생성
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});

import VueRouter from 'vue-router';
// import {routes} from './routes.js';

function appInit() {
  // const router = assignRouterBind();
  assignAxiosBind();
  assignFBInit();
  
  new Vue({
    el: '#app',
    router,
    render: h => h(App)
  });

}

function assignAxiosBind(){
  Vue.http = axios;
  Vue.prototype.$http = axios;
}

function assignRouterBind(){
  Vue.use(VueRouter);
  return new VueRouter({
    mode: 'history',
    routes
  });
}

function assignFBInit(){

  // vue.js 페이스북 플러그인
  // import FBSignInButton from 'vue-facebook-signin-button'
  // Vue.use(FBSignInButton);

  window.fbAsyncInit = function() {
    FB.init({
      appId      : '114314212557003',
      // appId      : '1694431924199335',
      cookie     : true,  // enable cookies to allow the server to access the session
      xfbml      : true,  // parse social plugins on this page
      version    : 'v2.8' // use graph api version 2.8
    });
  };
}

appInit();