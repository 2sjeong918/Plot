import axios from 'axios';

export default{
  state: {
    commentModal : ''
  },
  getters: {
    getCommentModal: state => {
      return state.commentModal;
    }
  },
  mutations: {
    setCommentModal: (state, index) => {
      state.commentModal = index
    }

  },
  actions: {

  }
};