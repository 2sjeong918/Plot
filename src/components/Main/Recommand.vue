<!--Recommand Carousel --> 
<template>
  <div id="recommand" class="recommand">
    <h2 class="re-heading">추천 전시</h2>
        <div class="slides-view" :style="{width: 260 * number +'px'}">
          <div class="slides-inner" :style="{width: 260 * slides.length +'px'}">
            <div class="img-wrapper" v-for="(slide,index) in slides"
              :key="index"> 
              <recommand-slide :slide="slide"></recommand-slide>
            </div>
          </div>
        </div>
        <div class="arrow_btn">
          <button class="slide_btn is_prev" type="button" @click="preve">
            <img src='https:icon.now.sh/chevron/left/fff/32' alt='chevron icon' />
          </button>
          <button class="slide_btn is_next" type="button" @click="next">
            <img src='https:icon.now.sh/chevron/right/fff/32' alt='chevron icon' />
          </button>
        </div>
  </div>
</template>
<script>
import RecommandSlide from './RecommandSlide';

export default {
  components: {
    RecommandSlide
  },
  data() {
    return {
      slides: [
        { src: 'img01.png', alt: "alt 01"},
        { src: 'img02.png', alt: "alt 02"},
        { src: 'img03.png', alt: "alt 03"},
        { src: 'img04.png', alt: "alt 04"},
        { src: 'img05.png', alt: "alt 05"},
        { src: 'img06.png', alt: "alt 06"},
        { src: 'img07.png', alt: "alt 07"},
        { src: 'img08.png', alt: "alt 08"}
      ],
      number: 4
    }  
  },
  methods: {
    preve: function () {
      return this.number -= 4;
    },
    next: function () {
      return this.number += 4;
    }
  }
}
</script>
<style lang="sass" scoped>
  @import "~config"
  
  .container
    +container(1190px 12)

  .re-heading
    +span(2)
    margin-top: leading(-3)
    padding-left: leading(1)/2
    background: #1e0b65
    color: #fff
    font: bold 2rem "Noto Sans kr", sans-serif
    line-height: leading(2)
    height: leading(2)
    margin-right: span(10)

  .recommand
    margin-top: leading(4)
    background-color: #1e0b65
    position: relative
    height: leading(10)

  .slides-view
    width: 260px
    margin: 0 auto
    overflow: hidden
    height: 230px
   
  .img-wrapper
    float: left
  .slides-inner
    height: 230px
    margin-top: span(0.35)

  button
    width: 3.5rem
    height: 3.5rem
  
  .slide_btn
    position: absolute
    bottom: 40%
    border: none
    opacity: 0.5
    background-color: #1e0b65
    transition: opacity 0.4s
    transform: translateY(-50%)
    &.is_prev
      left: 40px
    &.is_next
      right: 40px  
    &:hover
      color: rgba(255, 255, 255, 0.5)

    
</style>
