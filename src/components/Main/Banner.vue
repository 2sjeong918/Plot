<template>
  <div id="banner">
    <banner-carousel>
      <banner-carousel-item class="carousel-item" v-for="(item,index) in rankingList":index="index" :key="index" >
        <img :src="item.thumbnail_img[0]" :alt="item.alt" class="cover">
        </banner-carousel-item>
    </banner-carousel>
  </div>
</template>

<script>
import BannerCarousel     from './BannerCarousel'
import BannerCarouselItem from './BannerCarouselItem'

export default {
  name: 'Banner',
  components: {
    BannerCarousel, BannerCarouselItem
  },
  created() {
      //  let items = this.items;
      let rankingList = this.rankingList;
  }, 
    
  data () {
    return {
      
    }
  },
  computed:{
    rankingList: function () {
      return this.$store.getters.getList.slice(0,4);
    }
  },
  
}
</script>

<style lang="sass" scoped>
  @import "~config"

  #banner
    // +container(1190px 12)
    // margin-top: 20px
    color: #2c3e50

  .carousel-item
    position: relative
    overflow: hidden
    padding-bottom: 20%

  .cover
    position: absolute
    width: 100%
    height: auto
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)
 
 
  
  
</style>
