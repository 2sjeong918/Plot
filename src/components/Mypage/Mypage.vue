<template>
  <div class="mypage">
    <div class="user-info container">
      <div class="user">
        <i class="fa fa-user-circle-o" aria-hidden="true"></i>
        <span class="user-name">{{userInfo.nick_name}}</span>
      </div>
      <div class="user-display-count">
        <span class="display-count">
          <i class="fa fa-eye" aria-hidden="true">11</i>
        </span>
        <span class="user-display">내가 본 전시</span>
      </div>
      <div class="user-like-count">
        <span class="display-count">
          <i class="fa fa-heart" aria-hidden="true">6</i>
        </span>
        <span class="user-display">좋아요 수</span>
      </div>
    </div>
    <div class="mypage-display">
      <div class="mypage-display-bg">
        <ul class="mypage-display-list container">
          <li>
            <router-link to="/mypage" active-class="activated" tag="a">
              보고싶어요
            </router-link>
          </li>
          <li>
            <router-link to="/mypage/display" active-class="activated" tag="a"> 
              봤어요
            </router-link>
          </li>
          <li>
            <router-link to="/mypage/comments" active-class="activated"  tag="a"> 
              코멘트
            </router-link>
          </li>
        </ul>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Display from './Display';
import Comments from './Comments';
export default {
  data() {
     return {
    }
  },
  components: {
    Display, Comments
  },
  computed: {
    userInfo: function () {
      return this.$store.getters.getuserInfo
    },
    mypageUser: function () {
      return this.$store.getters.getMypageUser
    }
  }
}
</script>
<style lang="sass" scoped>
  @import "~config"
  .container
    +container(960px 8)
    text-align: center
  .user-info
    height: leading(10)
    color: #403f4e
    div
      position: relative
      top: 50%
      // left: 50%
      transform: translateY(-50%)
  .user
    +span(8 of 8)
    display: flex
    flex-direction: column
    text-align: center
    i
      font-size: 7rem
      margin-bottom: leading(1)/2

  .user-display-count, .user-like-count
    +span(2 of 8)
    display: flex
    flex-direction: column
  .user-display-count
    +push(2 of 8)

  .mypage-display
    background: #e5e5e5
  .mypage-display-bg
    background: #F0F0F0
    height: leading(2)
    box-shadow: rgba(0,0,0,0.2) 0 1px 2px

  .mypage-display-list
    display: flex
    li
      +span(1 of 8)
      line-height: leading(2)
      position: relative
      // background: red
      &::after
        content: ''
        position: absolute
        left: 50%
        right: 50%
        bottom: 0
        transition: all 0.3s
      &:hover::after
        border-bottom: 3px solid #1e0b65
        left: 0
        right: 0

      a
        color: #6d6c83
        text-decoration: none
        font: bold 1.6rem "Noto Sans kr", sans-serif
        width: 100%
        height: 100%


</style>