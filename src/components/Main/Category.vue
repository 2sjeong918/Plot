<template>
  <div>
    <category-tab></category-tab>
    <category-item></category-item>
  </div>
</template>
<script>
import CategoryTab from './CategoryTab'
import CategoryItem from './CategoryItem'
export default {
  components:{
    CategoryTab, CategoryItem
  }
  }
</script>
<style lang="sass" scoped>
  @import "~config"
</style>
