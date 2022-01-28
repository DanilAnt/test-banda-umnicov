import { createStore } from 'vuex'

export default createStore({
  state: {
    user: {

    },
    beer: {

    },
    pending: false,
  },
  mutations: {
    setUser: (state, payload) => {
      state.user = { ...payload }
    },
    setBeer: (state, payload) => {
      state.beer = { ...payload }
    },
    setPending: (state, payload) => {
      state.pending = payload;
    }
  },
  actions: {
    LOAD_USER: async ({ commit }) => {
      let response = await fetch('https://random-data-api.com/api/users/random_user');
      if (response.ok) {
        let result = await response.json();
        commit('setUser', result);
      } else {
        alert("fetch Error");
      }

    },

LOAD_BEER: async ({ commit }) => {
  commit('setPending', true);

  let response = await fetch('https://random-data-api.com/api/beer/random_beer');
  if (response.ok) {
    let result = await response.json();
    let imgResponse = await fetch(`https://api.bing.microsoft.com/v7.0/images/search?q=${result.brand}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Ocp-Apim-Subscription-Key': '1bea5cfddd3e434099db904570c2d397'
      }
    })
    if (imgResponse.ok) {
      let imgRes = await imgResponse.json();
      console.log(imgRes);
      commit('setBeer', { ...result, img: imgRes.value[0].contentUrl });
      console.log({ ...result, img: imgRes.value[0].contentUrl }, 1);
    } else {
      commit('setBeer', result);
      console.log(result, 2);
    }
  } else {
    alert("fetch Error");
  }
  
  commit('setPending', false);
}

  },
getters: {
  GET_USER: state => {
    return state.user;
  },
    GET_BEER: state => {
      return state.beer;
    },
      GET_PENDING_STATUS: state => {
        return state.pending;
      }
}
})
