<template>
  <div class="footer-bg">
    <footer>
      <div class="footer-header">
        <img src="../../assets/images/logo.svg" alt="">
      </div>
      <div class="footer-body">
        <p>
          <i class="fa fa-star" aria-hidden="true"></i>
          355,052,263 개의 별점 평가가 쌓이고 있습니다.
        </p>
        <ul class="address">
          <dt>company.</dt>
          <dd>plot</dd>
          <dt>대표이사.</dt>
          <dd>강다인, 손현, 이소정</dd>
          <dt>사업자번호.</dt>
          <dd>123-45-67890</dd>
          <dt>Copyright ⓒ 2017 by PLOT. All rights reserved.</dt>
          <dt>플롯 서비스 이용약관</dt>
          <dt>개인정보 취급방침</dt>
        </ul>
        <div class="btn-sns">
          <button type="button"><i class="fa fa-facebook-official" aria-hidden="true"></i></button>
          <button type="button"><i class="fa fa-twitter" aria-hidden="true"></i></button>
          <button type="button"><i class="fa fa-comments" aria-hidden="true"></i></button>
        </div>
      </div>

    </footer>
  </div>
</template>
  
<script>
export default {
  
}
</script>
  
<style lang="sass" scoped>
  @import "~config"

  .footer-bg
    background: #fff
    width: 100%
    height: leading(10)
    margin-top: leading(4)
    border-top: 2px solid #1e0b65
  footer
    +container(1190px 12)
    margin-top: leading(2)
    position: relative
  .footer-header
    height: leading(2)
    img
      +span(2)
  
  .footer-body
    +span(6)
    margin-top: leading(1)
  .fa-star
    color: #fce000
  .address
    margin-top: leading(2)
    dt, dd
      display: inline-block
      font-size: 1.2rem
    dt
      font-weight: bold
    dd
      margin-right: 15px
  .btn-sns
    position: absolute
    top: 0
    right: 0
    button
      border: none
      background: #fff
      i
        font-size: 4rem
      .fa-facebook-official
        color: #999
        &:hover
          color: #4867aa
      .fa-twitter
        color: #999
        &:hover
          color: #39a0ce
      .fa-comments
        color: #999
        &:hover
          color: #fce000
</style>