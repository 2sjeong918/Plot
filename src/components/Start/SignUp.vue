<template>
  <div class="signup">
    <h2>회원가입</h2>
    <form class="login-page-form">
      <div class="signup-input-group">
        <label class="signup-name"></label>
          <input 
          class="input-name" 
          ref="username"
          type="text" 
          placeholder="이름(홍길동)" 
          v-model="user_input.username" 
          required
          autofocus>
          <p class="error">{{ id_error_msg }}</p>
        

        <label class="signup-email"></label>
        <input 
        class="input-email" 
        type="email" 
        ref="email"
        placeholder="이메일(example@gmail.com)"
        v-model="user_input.email" 
        required>
        <p class="error">{{ email_error_msg }}</p>
        

        <label class="signup-pw"></label>
        <input 
        class="input-pw" 
        type="password" 
        ref="password"
        placeholder="비밀번호(6자이상)" 
        minlength="6" maxlength ="20" 
        v-model="user_input.password" 
        required>
        <p class="error">{{ pw_error_msg }}</p>
        
      </div> 
  </form>

    <div class="signup-agreememt">
      <!--플롯 사이트 서비스에 관한 동의 요구 -->
      <div class="signup-agreememt-item">
        <input 
        id="signup-service-agreememt" 
        type="checkbox"
        ef="agreement"   
        @click="agree($event)"
        @keyup.enter="agree($event)" 
        :class="{ agreement : agreement }">
        <label class="signup-agreement-label" for="signup-agreement" ></label>
        <a class="signup-agreement-link" href="#">플롯 서비스 이용약관</a>
        <span>에 동의합니다.</span>
      </div>
      <!--개인정보 수집 이용에 관한 동의 요구-->
      <div class="signup-agreememt-item">
        <input 
        id="signup-privacy-agreememt" 
        type="checkbox" 
        ref="agreement" 
        @click="agree($event)" 
        @keyup.enter="agree($event)" 
        :class="{ agreement : agreement }">
        <label class="signup-agreement-label" for="signup-agreement" ></label>
        <a class="signup-agreement-link" href="#">개인정보 수집 이용</a>
        <span>에 동의합니다.</span>
      </div>
      <p class="error-term">{{ term_error_msg }}</p>
    </div>
    
    <div class="signup-button-wrapper">
      <button 
      class="signup-link" 
      type="submit"
      
      @click="signUp">가입하기</button>
      <!-- <a href class="signup-link" @click.prevent="termAll" v-else>가입하기</a>  -->
      <a href class="signin-link" @click.prevent="signinLink">로그인</a>
      <a href class="facebook-link" @click.prevent="checkLoginState"><span class="fa fa-facebook-official" aria-hidden="true"></span><span class="facebook-login">페이스북으로 로그인</span></a>
    </div>
    
  </div>
</template>
  
<script>
import FBActions from '../../utils/FBActions.js';

export default {
  data() {
      return {
        //전체 약관에 동의 한 경우 true
        agreement: false,
        checkedAll: false,
        //유저 정보 입려값
        user_input: {
          username: '',
          email: '',
          password: ''
        },
        //잘못된 값 입력 시 에러메세지
        id_error_msg: '',
        email_error_msg: '',
        pw_error_msg: '',
        term_error_msg: ''
      }
    },
  computed: {
    signupInfo: function () {
      return this.$store.getters.getuserInfo
    },
    checkboxInfo: function () {
      return this.$store.getters.get_error
    }
  },

  methods: {

    agree(e) {
      let target = e.target;
      console.log(target);
      if(!target.classList.contains('agreement')) {
        target.setAttribute('checked', true);
        target.classList.add('agreement');
      } else {
        target.removeAttribute('checked');
        target.classList.remove('agreement');
      }
    },
    checkLoginState(){
      FBActions.checkLoginState();
    },
    signinLink() {
      this.$router.push({path: '/signin'})
    },
    signupLink() {
      this.$router.push({path: '/signup'})
    },
    signUp() {
        // console.log(this.user_input);
        
    
        let url = this.$store.state.url + '/api/member/signup/';
        this.$http.post(url, {
            username: this.user_input.username,
            email: this.user_input.email,
            nickname: this.user_input.username,
            password: this.user_input.password,
            password2: this.user_input.password
        })
        .then(response => {
          if(response.status === 201) {
            console.log(response);
            alert('회원가입이 성공적으로 완료되었습니다');
            this.$router.push({path: '/signin'});
          }
        })
        .catch(error => {
          console.log('error.response.data: ', error.response.data);
          let refs = this.$refs;
          let get_error = error.response.data
            if( get_error.username ){
                if( get_error.username[0] === 'This field may not be blank.'){
                  this.id_error_msg = '이름을 입력해주세요'
                  refs.username.focus();
                }
              }else{
                this.id_error_msg = ''
                // refs.username.focus();
              }

            if( get_error.email ){
                if( get_error.email[0] === 'This field may not be blank.'){
                  this.email_error_msg = '이메일을 입력해주세요'
                  refs.email.focus();
                }else if( get_error.email[0] === 'Enter a valid email address.' ){
                  this.email_error_msg = '유효한 이메일 주소가 아닙니다.'  
                  refs.email.focus();
                }else{
                  this.email_error_msg = '이미 가입된 이메일 주소 입니다.'
                  refs.email.focus();
                }
            }else{
              this.email_error_msg = ''
              refs.email.focus();
            }
            if( get_error.password ){
                if( get_error.password[0] === 'This field may not be blank.'){
                  this.pw_error_msg = '비밀번호를 입력해주세요'
                  refs.password.focus();
                }
            }else{
              this.pw_error_msg = ''
              refs.password.focus();
            }
            let termUse = document.getElementById('signup-service-agreememt'),
               termInfo = document.getElementById('signup-privacy-agreememt')
            if(!termUse.classList.contains('agreement') || !termInfo.classList.contains('agreement')){
              this.term_error_msg = '약관에 동의하여 주세요'
              this.$refs.agreement.focus();
              return
            }
            
        });
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

  .input-name,.input-email,.input-pw
    display: block
    margin: 0 auto
    width: span(9)
    height: leading(2)
    margin-top: leading(1)

  .error
    color: rgb(255,0,0)  
    text-align: left
    font-size: 1.2rem
    position: absolute
    margin-left: 58px
    margin-top: 5px
  .error-term 
    color: rgb(255,0,0)  
    position: absolute  
    margin-left: 100px
    margin-top: -5px
    font-size: 1.2rem
  .signup-agreememt
    color: rgb(255, 255, 255)
    margin-top: leading(1)
    text-align: justify
  
  .signup-agreememt-item
    margin-left: span(3)
    margin-bottom: 1rem
  .signup-agreement-link
    text-decoration: none  
    color: rgb(255, 255, 255)  
    font-weight: strong
    &:hover
      text-decoration: underline
  .signup-button-wrapper
    margin-top: leading(1)

  .signin-link,.signup-link
    display: block
    border: 2px solid rgb(255, 255, 255)
    color: rgb(255, 255, 255)
    width: span(5)
    height: leading(2)
    margin: 20px auto
    text-decoration: none
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