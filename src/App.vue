<template>
  <div class="header">
    <ul class="header-button-left">
      <li>Cancel</li>
    </ul>
    <ul  class="header-button-right">
      <li v-if="step == 1" @click="nextPage">Next</li>
      <li v-if="step == 2" @click="publish">발행</li>
    </ul>
    <img src="./assets/logo.png" class="logo" />
  </div>

  <h4> 안녕 {{$store.state.name}} {{$store.state.age}}</h4>
  <p> 나이 : </p>
  <button @click="nameChange">버튼</button>
  <button @click="$store.commit('increaseAge',10)">나이버튼</button>

  <Container  :step="step" :data="data" :urlData="urlData"  @textValue="textValue = $event" />

  <p>{{$store.state.more}}</p>
  <button @click="setMore">더보기</button>

  <p>{{name}} {{age}} {{likes}}</p>
  <button @click="counter++" >버튼</button>

  <div class="footer">
    <ul class="footer-button-plus">
      <input @change="upload" type="file" id="file" class="inputfile" />
      <label for="file" class="input-plus">+</label>
    </ul>
  </div>



</template>

<script>
import Container from './Container'
import data from './data'
import axios from 'axios'

import {mapState,mapMutations} from 'vuex'

axios.post()


export default {
  name: 'App',
  data(){
    return {
      data : data,
      moreSee : 0,
      step: 3,
      urlData : '',
      textValue: '',
      selectedFilter : '',
      counter :0,
    }
  },
  mounted() {
    this.emitter.on('boxClicked', (a)=>{
      this.selectedFilter = a;
      console.log(this.selectedFilter)
    })
  },
  computed:{
    ...mapState(['name','age','likes']),
  },
  methods : {

  ...mapMutations(['setMore','nameChange','increaseAge']),
    now(){
      return new Date()
    },
    more(){
      axios.get(`https://codingapple1.github.io/vue/more${this.moreSee}.json`)
          .then((result)=>{
            this.data.push(result.data);
            this.moreSee++
          })
    },
    upload(e){
      let files = e.target.files
      console.log(files[0].type)
      let url = URL.createObjectURL(files[0])
      this.urlData=url
      console.log(this.urlData)
      this.step ++;
    },
    nextPage(){
      this.step > 2 ? alert('다음페이지 없음') : this.step++
    },
    publish(){
      var post = {
        name: "Kim Hyun",
        userImage: "https://placeimg.com/100/100/arch",
        postImage: this.urlData,
        likes: 36,
        date: "May 15",
        liked: false,
        content: this.textValue,
        filter: this.selectedFilter
      };
      this.data.unshift(post);
      this.step =0;
      console.log(post)
    }
  },
  components: {
    Container,
  }
}
</script>

<style>
body {
  margin: 0;
}
ul {
  padding: 5px;
  list-style-type: none;
}
.logo {
  width: 22px;
  margin: auto;
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 13px;
}
.header {
  width: 100%;
  height: 40px;
  background-color: white;
  padding-bottom: 8px;
  position: sticky;
  top: 0;
}
.header-button-left {
  color: skyblue;
  float: left;
  width: 50px;
  padding-left: 20px;
  cursor: pointer;
  margin-top: 10px;
}
.header-button-right {
  color: skyblue;
  float: right;
  width: 50px;
  cursor: pointer;
  margin-top: 10px;
}
.footer {
  width: 100%;
  position: sticky;
  bottom: 0;
  padding-bottom: 10px;
  background-color: white;
}
.footer-button-plus {
  width: 80px;
  margin: auto;
  text-align: center;
  cursor: pointer;
  font-size: 24px;
  padding-top: 12px;
}
.sample-box {
  width: 100%;
  height: 600px;
  background-color: bisque;
}
.inputfile {
  display: none;
}
.input-plus {
  cursor: pointer;
}
#app {
  box-sizing: border-box;
  font-family: "consolas";
  margin-top: 60px;
  width: 100%;
  max-width: 460px;
  margin: auto;
  position: relative;
  border-right: 1px solid #eee;
  border-left: 1px solid #eee;
}
</style>
