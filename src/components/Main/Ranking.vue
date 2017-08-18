<!--Ranking Carousel --> 
<template>
  <div class="container">
    <div class="ranking">
      <h2 class="ranking-heading">
        <i class="fa fa-caret-down" aria-hidden="true"></i>
        실시간 전시 랭킹
      </h2>
      <ul class="ranking-list">
        <li :key="index" v-for="(data, index) in rankingList">
          <router-link :to="{ name: 'detail', params: { Id: data.id }}" tag="a" class="detail-link">
            {{++index+'.'+' '+data.title}}
          </router-link>
        </li>
        <!-- <li><a href="#">1. 픽사 애니메이션 30주년 특별전</a></li>
        <li><a href="#">2. 이상한 나라의 앨리스</a></li>
        <li><a href="#">3. 어둠속의 대화</a></li>
        <li><a href="#">4. 즐거운 나의 집</a></li>
        <li><a href="#">5. 라이프 사진전</a></li> -->
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
     return {
    }
  },
  computed: {
    rankingList: function () {
      return this.$store.getters.getList.slice(0,5);
    },
  }
}
</script>
<style lang="sass" scoped>
  @import "~config"
  
  .container
    +container(1190px 12)

  .ranking
    margin-top: leading(2)
    height: leading(2)
    position: relative
    +span(3 last)
    &:hover .ranking-list
      height: auto

  .ranking-heading
    font: bold 2rem "Noto Sans kr", sans-serif
    height: leading(1)
    color: #1e0b65
    padding-left: leading(1)/2
    i
      padding-right: leading(1)/2

  .ranking-list
    margin-top: leading(1)/2
    width: 100%
    background: #1e0b65
    color: #fff
    font: 1.6rem "Noto Sans kr", sans-serif
    position: absolute
    overflow: hidden
    height: leading(2)
    a
      text-decoration: none
      line-height: leading(1)
      padding: leading(1)/2
      color: #fff
      display: inline-block
      width: 100%
      &:hover
        background: #fff
        border: 2px solid #1e0b65
        color: #1e0b65
        font-weight: bold
          
</style>
