import axios from 'axios';

// 서버에서 준 api주소
let url = 'http://plot.ejjeong.com/api/member/facebook-login/';
const FB = window.FB;

export default {
  checkLoginState() {
    FB.getLoginStatus((response) => {
      this.statusChangeCallback(response);
    });
  },
  statusChangeCallback(response){
    if (response.status === 'connected') {
      this.sendFaceBookToken(response);
    } else {
      // Notify 1초 동안 알림을 보여준다.
      // 사용자에게 로그인 팝업 창이 보이지 않는다면
      // 브라우저의 설정을 변경해야한다고 알려준다.
      FB.login((response)=>{
        this.sendFaceBookToken(response);
      });
    }
  },
  sendFaceBookToken(response){
    axios.post(url, {
      'token': response.authResponse.accessToken
    }).then((response) => {
      console.log(response);
    }).catch((err) => {
      console.error(err);
    });
  }
};