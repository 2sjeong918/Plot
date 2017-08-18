<template>
  <div class="sear-result">
    <h2>SEARCH</h2>
    <!-- <ul class="cg-items container">
        <li :key="index" v-for="(data, index) in initList">
          <img  :src="data.poster_img" alt="전시 포스터 이미지">
        </li> 
    </ul>     

    <ul v-if="initList.length === 0">
        <li :key="index" v-for="(data, index) in initList">
            입력한 정보를 찾을 수 없습니다.
        </li> 
    </ul>             -->

  </div>
</template>
<script>

import Category from './Search'
export default {
  computed: {
    initList: function () {
      console.log(this.$store.getters.getList);
      this.$store.getters.getList.push(this.datalist)
      return this.$store.getters.getList
    }
  },
  data() {
    return{
      data: ''
    }
  }
  
}
</script>
<style lang="sass">
  @import "~config"
  button
    background-color: rgb(30, 11, 101)
    color: #fff
    

</style>