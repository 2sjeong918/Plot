<template>
  <div class="signin">
    <h2>로그인</h2>
    <form action="" class="login-page-form">
      <div class="signin-input-group">
        <label class="signin-email"></label>
        <input class="input-email" type="email" placeholder="이메일(example@gmail.com)" v-model="email" required autofocus>
        
        <label class="signin-pw"></label>
        <input class="input-pw" type="password" placeholder="비밀번호(6자이상)" minlength="6" maxlength ="20" v-model="password" required autocomplete="off">
        
      </div>
    </form>  

      <div class="signin-button-wrapper">
        <button 
        class="signin-link" 
        type="submit"
        @click="signIn">로그인 하기</button>
        <!-- <a href class="signin-link" @click.prevent="signinLink">로그인 하기</a> -->
        <a href class="signup-link" @click.prevent="signupLink">회원가입 하기</a> 
        <a href class="facebook-link" @click.prevent="checkLoginState" @click="fbLogin"><span class="fa fa-facebook-official" aria-hidden="true"></span><span class="facebook-login">페이스북으로 로그인</span></a>
      </div>
    
  </div>
</template>
  
<script>
import FBActions from '../../utils/FBActions.js';

export default {
    // beforeRouteEnter (to, from, next) {
    //   let token = sessionStorage.getItem('token');
    //   token && next({name: 'main'});
    //   !token && next();
    // },
  computed: {
    signinInfo: function () {
      return this.$store.getters.setuserInfo
    }
  },
 
  data() {
    return {
      email: '',
      password: '',
    }
  },
    
methods: {
  checkLoginState(){
      FBActions.checkLoginState();
    },
    signinLink: function(){
      this.$router.push({path: '/home'})
    },
    signupLink: function(){
      this.$router.push({path: '/signup'})
    },
    signIn() {
      this.$store.dispatch('signIn', {
        email: this.email,
        password: this.password,
        _this: this
      });
    },
    fbLogin() {
      this.$store.dispatch('fbLogin',{
        "_this": this, 
        "_FB" : FB
      })
    }
  }
  
}
</script>
  
<style lang="sass" scoped>
  @import "~config"

  h2
    color: rgb(255,255,255)
    font-size: 2rem
    padding-top: leading(2)

  input
    display: block
    margin: 0 auto
    width: span(9)
    height: leading(2)
    margin-top: leading(1)
    box-sizing: border-box
    padding-left: 1rem
  
  .signin-button-wrapper
    margin-top: leading(6)

  .signin-link,.signup-link
    display: block
    border: 2px solid rgb(255, 255, 255)
    color: rgb(255, 255, 255)
    width: span(5)
    height: leading(2)
    margin: 20px auto
    text-decoration: none
    margin-bottom: leading(1)
    line-height: leading(2)
    background-color: rgb(30, 11, 101)

  .facebook-link
    color: rgb(255, 255, 255)
    text-decoration: none
    &:hover
      text-decoration: underline

  .fa-facebook-official
    padding-right: 1rem  
    font-size: 2rem 
      
    
    



  




  
  

</style>