<template>
  <div id="recommand" class="recommand">
    <ul class="rc-items container" :style="moveItem">
      <li class="rc-item1":key="index" v-for="(data, index) in recommandList" >
        <img  :src="data.thumbnail_img[0]" alt="전시 포스터 이미지">
      </li>
    </ul>
    <button type="button" class="carousel-button is-prev" @click.prevent="prevItem" >
          <i class="fa fa-chevron-left" aria-hidden="true"></i>
    </button>
    <button type="button" class="carousel-button is-next" @click.prevent="nextItem" >
      <i class="fa fa-chevron-right" aria-hidden="true"></i>
    </button>

  </div>
</template>
<script>
export default {
  
  data() {
     return {
       moveItem: '',
       index: 4
      
       
     }
  },
  computed: {
    recommandList() {
      return this.$store.getters.getList.slice(0,8);
    },
    // moveItem() {
    //   transform: 'translateX('index')';
    // }
  },

  mounted() {
    this.prevItem = () => {
      console.log('이전버튼')
      
        

        this.moveItem = {
          
            transform: 'translateX(0%)' 
            
          }
          
          
      },
    this.nextItem = () => {
      console.log('다음버튼')
      
        

        this.moveItem = {
          
            transform: 'translateX(-100%)'
            
          }
          
          
          
        
      
    }
  }
    
}
</script>
<style lang="sass" scoped>
  @import "~config"
  .container
    +container(1190px 12)
    display: flex
    // overflow: hidden
    background: #1e0b65
  .recommand
    margin-top: leading(2)
    display: flex
    position: relative
    
  .rc-items li
    +span(3)
    width: span(5)
    height: leading(10)
    background: #1e0b65
    margin: 0
    // margin-left: 2%
    img
      width: 300px
      height: 100%
      margin-left: 50%
      transform: translateX(-50%)
  button
    position: absolute
    height: 100%    
  .is-prev
    left: 1%
  .is-next
    right: 1%  
    
      
      
      
        
</style>
