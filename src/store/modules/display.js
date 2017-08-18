import axios from 'axios';


export default {

  state: {
    displayList : [],
    filterList : []
  },

  getters: {
    getList: state => {
      return state.displayList;
    },
    getFilter: state => {
      return state.filterList;
    }
  },

  mutations: {
    initList: (state, payload) => {
      state.displayList = payload;
      state.filterList = payload;
    },
    // addList: (state, payload) => {
    //   state.displayList.push(payload);
    // },
    filterList: (state, payload) => {
      let filter_title = payload
      let displayList = JSON.parse(JSON.stringify(state.displayList));
      let filteredList = displayList.filter(function (param) {
        if (filter_title[0] === '모든 장르') {
          param.genre = '모든 장르'
        }
        if (filter_title[1] === '모든 지역') {
          param.location = '모든 지역'
        }
        if (filter_title[2] === '모든 날짜') {
          param.duration = '모든 날짜'
        }
        if (param.genre === filter_title[0] && param.location === filter_title[1]) {
          return true
        }
      });
      state.filterList = filteredList;
    }
  },

  actions: {
    initList: ({commit}, path) => {
      // Ajax 비동기 통신
      axios
        .get(path)
        .then(response => {
          commit('initList', response.data);
        })
        .catch(error => console.log(error.message));
    },
    addList: (store, payload) => {
      let value = {
        done: false,
        content: payload
      };
      window.setTimeout(function() {
        store.commit('addList', value);
      }, 2000);
    }
  }
};