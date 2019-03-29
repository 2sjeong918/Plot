// Routing => Login / Main / Mypage /Search / Information /  
import Vue          from 'vue'
import VueRouter    from 'vue-router'

Vue.use(VueRouter);
import Root         from './components/Root.vue'
//login
import User         from './components/Start/User.vue'
import Start        from './components/Start/Start.vue'
import SignIn       from './components/Start/SignIn.vue'
import SignUp       from './components/Start/SignUp.vue'
//mypage
import Mypage       from './components/Mypage/Mypage.vue'
import Wishlist     from './components/Mypage/Wishlist.vue'
import Display      from './components/Mypage/Display.vue'
import Comments     from  './components/Mypage/Comments.vue'
//main
import Home         from './components/Home/Home.vue'
import Main         from './components/Main/Main.vue'
//search
import Search       from './components/Home/Search.vue'
//detail 
import Detail       from './components/Detail/Detail.vue'

const routes = [
  { path: '/', component: Root,
      children:[
        { path: '/', component: User,
          children:[
            { path: '', component: Start,name: 'start',},
            { path: '/signin', component: SignIn },
            { path: '/signup', component: SignUp },
          ]
        },
        { path: '/home', component: Home,
          children:[
            {  path: '', component: Main },
            {  path: 'detail/:Id', name: 'detail', component: Detail, props: true},
            {  path: '/search', component: Search },
            {  path: '/mypage', component: Mypage, 
              children:[
                {  path: '', component: Wishlist },
                {  path: 'display', component: Display },
                {  path: 'comments', component: Comments }
              ]
            },
          ]
        },
        { path: '*', redirect: '/' },
      ]
  },
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;