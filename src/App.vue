<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {

    }
  },

  methods: {

  }

}

</script>

<style lang="sass">
  @import "~config"

  html 
    font-size: 10px
    background: #fff
    // box-sizing: border-box
    +global-box-sizing(border-box)
  body
    margin: 0
    font-size: 1.6rem
  
</style>
