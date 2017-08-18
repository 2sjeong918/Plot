<!--Category Ranking Recommand Search --> 
<template>
  <div class="main">
    <banner></banner>
    <ranking></ranking>
    <category></category>
    <recommand></recommand>
  </div>
</template>
<script>
import Banner from './Banner';
import Category from './Category';
import Ranking from './Ranking';
import Recommand from './Recommand';

export default {
  
  components: {
    Banner, Category, Ranking, Recommand
  },
  data() {
     return {
    }
  }
}
</script>
<style lang="sass" scoped>
  @import "~config"
</style>
