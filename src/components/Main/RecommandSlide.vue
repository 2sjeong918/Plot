<template>
  <div class="slide">
    <!-- hello slide? {{ slide.src }} -->
    <img :src="proofingSlide" alt="slide.alt">
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  // 오류 발생원인 : props 문법 에러 문제 
  props: ['slide'],
  computed: {
    proofingSlide(){
      return require(`../../assets/images/${this.slide.src}`);
    }
  }
}
</script>

<style lang="sass" scoped>
  @import "~config"
  img
    width: 260px
    height: 200px
    // padding-left: span(1)
  
  .slide
    // background-color: #1e0b65
 
</style>
