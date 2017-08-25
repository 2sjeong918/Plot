<template>
  <transition name="fade" appear mode="out-in">
    <div id="background" :style="scrollBg">
      <navigation id="navigation" :style="isScroll"></navigation>
      <router-view></router-view>
      <footer-comp></footer-comp>
    </div>
  </transition>
</template>
<script>
import Navigation from './Navigation';
import FooterComp from './FooterComp';

export default {
  // beforeRouteEnter (to, from, next) {
  //   let token = sessionStorage.getItem('token');
  //   token && next();
  //   !token && next({name: 'start'});
  // },
  created(){
    this.$store.dispatch('likeList', 'https://plot-b2239.firebaseio.com/user.json');
    this.$store.dispatch('mypageUser', 'https://plot-b2239.firebaseio.com/user.json');
    this.$store.dispatch('commentList', 'https://plot-b2239.firebaseio.com/user/comments.json');
  },
  mounted(){
    let navHeight = document.getElementById('navigation').scrollHeight;
    window.onscroll = () => { 
      if(!this.scrollBg && (window.scrollY > navHeight)){
        this.scrollBg = {
                          background: '#E5E5E5',
                        };
        this.isScroll = {
                          backgroundImage: 'url(./src/assets/images/bg_img.png)',
                          backgroundSize: '100%',
                          boxShadow: 'rgba(0,0,0,0.2) 0 1px 3px'
                          }
      }
      else if(this.scrollBg && (window.scrollY < navHeight)){
        this.scrollBg = '';
        this.isScroll = '';
      }
    }
  },
  data() {
    return {
      scrollBg: '',
      isScroll: ''
    }
  },
  components: {
    Navigation, FooterComp
  },
}
</script>
<style lang="sass" scoped>

  @import "~config"
  #background
    background-image: url(../../assets/images/bg_img.png)
    background-repeat: no-repeat
    background-size: 100%
    background-attachment: fixed

  .fade-enter
      opacity: 0
  .fade-enter-active
    animation: fade-in 0.5s ease-in-out forwards

  @keyframes fade-in
    from
      opacity: 0
    to
      opacity: 1
  @keyframes fade-out
    from
      opacity: 1
    to
      opacity: 0
</style>