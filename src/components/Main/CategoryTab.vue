<template>
  <div id="category" class="container" v-cloak>
    <h2 class="cg-heading container">카테고리</h2>
    <div class="container categorys">
      <div class="category" :key="index" v-for="(list, index) in cg_lists">
        <h2 class="cg-list-heading">
          <a href="" @click.prevent="toggleList(list, $event)" @blur="leaveList">
            {{list.heading}}
            <i class="fa fa-caret-down" aria-hidden="true"></i>
          </a>
        </h2>
        <ul class="cg-list" :class="{'active' : cg_lists[index] === isActive }">
          <li>
            <a href="" @click.prevent="filterItem(index, $event)" :key="i" v-for="(item, i) in list.items">{{item}}</a>
            <input v-if="index === 2" :value="dateInput" @change="changeText(index, $event)" class="cg-list-date" :class="{'active' : cg_lists[index] === isActive }" type="date">
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
  
<script>
export default {
  computed:{
    dateInput: function () {
      return this.date
    }
  },
  data() {
    return {
      date: '',
      isActive: '',
      datalist: [],
      cg_lists: [
        {
          heading: '모든 장르',
          items: ['모든 장르', '미술', '사진', '영상', '공예', '조각', '설치', '기타']
        },
        {
          heading: '모든 지역',
          items: ['모든 지역', '서울', '인천', '대전', '대구', '울산', '광주', '부산', '경기도', '강원도', '충청도', '경상도', '전라도', '제주도']
        },
        {
          heading: '모든 날짜',
          items: ['모든 날짜']
        },
        {
          heading: '추천순',
          items: ['추천순', '인기순']
        }
      ]
    }
  },
  methods: {
    toggleList(list, e){
      let listIcon = e.target.lastChild
      this.isActive === list ? this.isActive = '' : this.isActive = list
      // console.log(listIcon)
      // listIcon.classList.add('fa-caret-down')&&listIcon.classList.remove('fa-caret-up')
      // listIcon.classList.add('fa-caret-up')&&listIcon.classList.remove('fa-caret-down')
      
    },
    filterItem(index, e){
      let el = e.target
      this.cg_lists[index].heading = el.textContent
      this.isActive = ''
      let filter_title = this.cg_lists.map(function(lists) {
        return lists.heading
      })
      this.$store.commit('filterList', filter_title)
    },
    updateInput(e){
      this.date = e.target.value
    },
    changeText(index, e){
      if (e.target.value) {
        this.cg_lists[index].heading = e.target.value
      }
      // console.log(e.target.value);
      this.isActive = ''
    },
    leaveList(e){
      console.log(e.target);
      // if(){
      //   return
      // }else{
      //   return this.isActive = ''
      // }
    }
  }
}
</script>
  
<style lang="sass" scoped>
  @import "~config"
  .container
    +container(1190px 12)
    // +global-box-sizing(border-box)
  [v-cloak]
    display: none

  .cg-heading
    margin-top: leading(2)
    padding-left: leading(1)/2
    background: #1e0b65
    color: #fff
    font: bold 2rem "Noto Sans kr", sans-serif
    +span(2)
    line-height: leading(2)
    height: leading(2)
    margin-right: span(10)

  .category
    +span(2)
    margin-top: leading(2)
    position: relative
    i
      position: absolute
      line-height: leading(2)
      top: 0
      right: leading(1)/2
      color: #1e0b65
    
  .cg-list-heading, .cg-list, .cg-sort-heading, .cg-sort
    border: 2px solid #1e0b65
    background: #fff
    a
      padding: leading(1)/4 0 leading(1)/4 leading(1)/2
      color: #1e0b65
      display: block
      text-decoration: none
      font: bold 2rem "Noto Sans kr", sans-serif
      height: 100%
      
  .cg-list-heading, .cg-sort-heading
    height: leading(2)

  .cg-list, .cg-sort
    display: none
    max-height: leading(7)
    overflow: scroll
    border-top: none
    position: absolute
    width: 100%
    top: leading(2)
    z-index: 1000
  .cg-list a:hover
    background: #1e0b65
    color: #fff

  .active
    display: block

  .cg-list-date
    // background: red
    width: 100%
    z-index: 1000
    border: none
    padding: leading(1)/4 0 leading(1)/4 leading(1)/2
    height: 100%
    color: #1e0b65
    font: bold 2rem "Noto Sans kr", sans-serif
    &:hover
      background: #1e0b65
      color: #fff
</style>