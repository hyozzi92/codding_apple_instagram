<template>
  <div style="padding : 10px">
    <h4>팔로워</h4>
    <input @input="inputHandler($event.target.value)"  placeholder="?" />
    <div class="post-header" v-for="(a,i) in follower" :key="i">
      <div class="profile" :style="`background-image: url(${a.image})`"></div>
      <span class="profile-name">{{a.name}}</span>


    </div>
  </div>
</template>

<script>
import {ref, onMounted,  } from 'vue'
import axios from "axios";



export default {
  name: "TheMypage",
  props : {
    one : Number,
  },

  setup(){
    let follower = ref([]);
    let followerOg = ref([])

    onMounted(()=>{
      axios.get('/follower.json').then((a)=>{
        follower.value = a.data
        followerOg.value = [...a.data]
      })
    })

    function inputHandler(keyword){
    let newFollower = followerOg.value.filter((a)=>{
      return a.name.indexOf(keyword) != -1
    })
    follower.value = [...newFollower]
      console.log(follower.value)
    }

    return { follower,inputHandler, }
  },
}
</script>

<style scoped>
.profile {
  width: 50px;
  height: 50px
}
</style>