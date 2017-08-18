<template>
    <div class="start">
      <img class="logo" src="../../assets/images/logo_w.svg" alt="plot 홈페이지 로고"> 
      <span class="service-msg">플롯은 나만의 전시공간 서비스입니다.</span>
      <div class="start-button-wrapper">
        <a href class="facebook-link" @click.prevent="checkLoginState"><i class="fa fa-facebook-official" aria-hidden="true"></i>페이스북 로그인</a>
        <a href class="signin-link" @click.prevent="signinLink">로그인</a>
        <a href class="signup-link" @click.prevent="signupLink">회원가입</a> 
      </div>
      <router-view></router-view>
    </div>
</template>
  
<script>
import FBActions from '../../utils/FBActions.js';

export default {
  methods: {
    checkLoginState(){
      FBActions.checkLoginState();
    },
    facebookLink: function(){
      this.$router.push({path: '/'});
    },
    signinLink: function(){
      this.$router.push({path: '/signin'})
    },
    signupLink: function(){
      this.$router.push({path: '/signup'})
    }
   }
  
}
</script>
  
<style lang="sass" scoped>
  @import "~config"
  
  
  .logo
    width: 230px
    padding-top: leading(2)

  .start-button-wrapper
    text-align: center  

  .service-msg
    display: block
    padding-top: leading(8)
    padding-bottom: leading(1)
    color: #fff
  
  .facebook-link,.signin-link,.signup-link 
    display: block
    border: 2px solid rgb(255, 255, 255)
    width: span(5)
    height: leading(2)
    margin: 20px auto
    text-decoration: none
    margin-bottom: leading(1)
    color: #fff
    line-height: leading(2)


  .facebook-link
    background-color: rgb(73, 105, 240)

  .fa-facebook
    padding-right: 1rem  
    font-size: 2rem
  
  .fa-facebook-official
    padding-right: 1rem  
    font-size: 2rem   
    
  .signin-link,.signup-link  
    background-color: rgb(30, 11, 101)
    
    
    

  
  

    
    


  



    
    
   
    
    
    
  




  
  

</style>