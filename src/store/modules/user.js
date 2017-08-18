import axios  from 'axios';
import store from '../index'

export default {
  state: {
    userInfo: {},
    errorMessage: ''
  },
  getters:{
    getuserInfo(state) {
      return state.userInfo;
    },
    getError(state) {
      return state.errorMessage;
    }
  },
  mutations: {
    setUserInfo(state, data){
      state.userInfo = data;
    },
  
  },
  actions: {
    
    //로그인  
    signIn: ({state,commit}, userInfo) => {
      console.log(userInfo)
      
      let url = store.state.url + '/api/member/login/'
      
      axios
        .post(url, {
          "email": userInfo.email,
          "password": userInfo.password
        })
        .then(response => {
          sessionStorage.setItem('token', response.data.token);
          console.log(response.data);
          commit('setUserInfo',response.data);
          userInfo._this.$router.push({path: '/home'});
        })
        .catch(error => {
          let data = error.response.data;
          console.log(data)
          if(data.error[0]) {
            alert('이메일/비밀번호를 확인해주세요');
          }
        })
  
      },
    //페이스북 로그인
    fbLogin:  ({commit},userInfo) => {
      console.log(userInfo);
      axios
        .get(path)
        .then(response => {
          commit('getUserList', response.data);
          console.log(respose.data);
        })
        .catch(error => console.log(error.message));
    }
  }

}