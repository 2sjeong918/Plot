<!--Recommand Carousel --> 
<template>
  <div id="recommand" class="recommand">
    <ul class="rc-items container">
      <li class="rc-item1">item1</li>
      <li class="rc-item2">item2</li>
      <li class="rc-item3">item3</li>
      <li class="rc-item4">item4</li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
     return {


    }
  }
}
</script>
<style lang="sass" scoped>
  @import "~config"
  
  .container
    +container(1190px 12)
  .recommand
    margin-top: leading(2)
  .rc-items li
    +span(3)
    height: leading(10)
    background: #1e0b65
    
</style>
