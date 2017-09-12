<template>
  <div class="container">
    <ul class="cg-items container">
      <li :key="index" v-for="(data, index) in commentList">
        <div class="display-info">
          <img  :src="(displayList[data.id].poster_img)" alt="전시 포스터 이미지">
          <div class="action-wrapper">
            <router-link :to="{ name: 'detail', params: { Id: data.id }}" tag="a" class="detail-link"></router-link>
            <div class="action-info">
              <div class="display-title">{{displayList[data.id].title}}</div>
              <div class="rating">
                <i class="fa fa-star rating-number1" aria-hidden="true"
                  @mouseenter="mouseEnter(index, 1)">
                </i>
                <i class="fa fa-star rating-number2" aria-hidden="true"
                  @mouseenter="mouseEnter(index, 2)">
                </i>
                <i class="fa fa-star rating-number3" aria-hidden="true"
                  @mouseenter="mouseEnter(index, 3)">
                </i>
                <i class="fa fa-star rating-number4" aria-hidden="true"
                  @mouseenter="mouseEnter(index, 4)">
                </i>
                <i class="fa fa-star rating-number5" aria-hidden="true"
                  @mouseenter="mouseEnter(index, 5)">
                </i>
              </div>
              <div class="wish-comment">
                <div class="wish">
                  <i class="fa fa-heart" aria-hidden="true" :class="{'active': index === isActive}"></i>
                  <a href="" @click.prevent="wishCount(index, $event)" :class="{'active': index === isActive}">보고싶어요</a>
                </div>
                <div class="comment">
                  <i class="fa fa-comment" aria-hidden="true"></i>
                  <a href="#">코멘트쓰기</a>
                </div>
                <!-- <comment-modal v-if="commentModal===data.id"></comment-modal> -->
              </div>
            </div>
          </div>
        </div>
        <div class="comment-area">
          <ul>
            <li class="comment-title">{{displayList[data.id].title}}</li>
            <li class="comment-text">{{data.comment}}</li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
     return {
       isActive: [],
       displayList: [],
       commentList: []
    }
  },
  created(){
    console.log(this.$store.getters.getCommentList);
    this.displayList = this.$store.getters.getList;
    this.commentList = this.$store.getters.getCommentList;
  },
}
</script>
<style lang="sass" scoped>
  @import "~config"
  
  .container
    +container(960px 8)
  [v-cloak]
    display: none
  
  .cg-items
    margin-bottom: leading(2)
    +span(8 of 8 nest)
    > li
      +span(4 of 8)
      // border: 3px solid #1e0b65
      border-radius: 10px
      margin-top: leading(2)
      display: flex
    .display-info
      +span(2 of 4 nest)
      background: #1e0b65
      position: relative
      overflow: hidden
      padding-top: 65%
      border-radius: 10px 0 0 10px
      &:hover .action-wrapper
        opacity: 1
      img
        position: absolute
        width: auto
        height: 100%
        top: 0
        left: 50%
        transform: translateX(-50%)
    .comment-area
      +span(2 of 4 nest)
      // padding: 10px
      // border: 3px solid #999
      border-radius: 0 10px 10px 0
      background: #fff
      line-height: leading(1)
      text-align: left
      padding: 10px
      color: #403f4e
    .comment-title
      font-weight: bold
    .comment-text
      font-size: 1.4rem
      text-overflow: ellipsis
      overflow: hidden
      white-space: wrap
      // width: 100px
      height: leading(3)
      display: -webkit-box
      -webkit-line-clamp: 3
      -webkit-box-orient: vertical
      

  .action-wrapper
    position: absolute
    bottom: 0
    width: 100%
    height: 100%
    opacity: 0

  .detail-link
    display: block
    background: black
    opacity: 0.5
    width: 100%
    height: 50%

  .action-info
    background: #fff
    height: 50%
    text-align: center
    padding: leading(1)/2
    font: 1.4rem "Noto Sans kr", sans-serif

  .display-title
    padding-bottom: leading(1)/2
    border-bottom: 1px solid #999
  .rating
    margin-top: leading(1)
  .wish-comment
    margin-top: leading(1)
    display: flex
    justify-content: space-around
    a
      color: #333
      text-decoration: none

  .wish a, .wish .fa-heart
    color: #ff5539
  
  .comment:hover a, .comment:hover .fa-comment
    color: #5d5df6
  .fa-star
    color: #999
    font-size: 2.5rem
    &:hover
      color: rgb(255, 205, 26)
  .fa-heart, .fa-comment
    color: #999

  .more
    padding-top: leading(2)
    text-align: center
    a
      +span(2)
      +push(5)
      border: 2px solid #1e0b65
      height: leading(2)
      line-height: leading(2)
      padding-top: leading(1)/4
      color: #1e0b65
      text-decoration: none
      font: bold 2rem "Noto Sans kr", sans-serif

</style>