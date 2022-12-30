import { createStore } from 'vuex'
import axios from 'axios'

const store = createStore({
  state(){
    return {
  name : 'kim',
      age : 20,
      likes : 30,
      liked : false,
      more : {},
    }
  },
  mutations : {
    setMore(state, data) {
      state.more = data
    },
    nameChange(state){
      state.name = 'park';
      state.name == !state.name

    },
    increaseAge(state, data){
      state.age += data;
    },
    clickedLikes(state){
            if(state.liked == false){
        state.likes ++
              state.liked = true
      } else {
              state.likes --
              state.liked = false
            }
    }
  },
  actions : {
    getData(context){
    axios.get('https://codingapple1.github.io/vue/more0.json')
        .then((a)=>{ context.commit ('setMore', (a.data))})
    }
  }

})

export default store