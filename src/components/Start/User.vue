<template>
    <div class="container">
      <div class="background">
        <router-view></router-view>
      </div>
    </div>
  
</template>
<script>
export default {
  
}
</script>
<style lang="sass" scoped>
  @import "~config"
  .container
    +container(1190px 12)
  .background
    margin: 0 auto
    margin-top: leading(4)
    background: url('../../assets/images/b_g.png') no-repeat
    background-size: cover
    width: 420px
    height: leading(24)
    text-align: center
    box-shadow: 0px 3px 59px 0px rgba(0, 0, 0, 0.5)


</style>