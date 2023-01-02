<template>
  <!-- 저번시간에 만든거 -->
  <div>
  <div v-if="step == 0">
  <Post :data="data[i]" v-for="(a, i) in data" :key="i" />
  </div>
  <!-- 필터선택페이지 -->
    <div v-if="step == 1">
  <div :style="`background-image: url(${urlData})`" :class="selectedFilter"  class="upload-image"></div>
  <div class="filters">
    <FilterBox v-for="(a,i) in filterArray" :key="i" :urlData="urlData" :a="a">

    </FilterBox>
     </div>
    </div>

  <!-- 글작성페이지 -->
    <div v-if="step == 2">
  <div :style="`background-image: url(${urlData})`" :class="selectedFilter" class="upload-image"></div>
  <div class="write">
    <textarea @input="$emit('textValue', $event.target.value)" class="write-box">write!</textarea>
  </div>
    </div>

    <div v-if="step == 3">
      <Mypage :one="1"/>
    </div>

  </div>
</template>

<script>
import Post from './Post'
import FilterBox from "@/components/FilterBox";
import Mypage from "@/components/Mypage";

export default {
  name: "TheContainer",
  data(){
    return {
      filterArray : [ "aden", "_1977", "brannan", "brooklyn", "clarendon", "earlybird", "gingham", "hudson",
        "inkwell", "kelvin", "lark", "lofi", "maven", "mayfair", "moon", "nashville", "perpetua",
        "reyes", "rise", "slumber", "stinson", "toaster", "valencia", "walden", "willow", "xpro2"],
      selectedFilter : '',
    }
  },
  mounted() {
      this.emitter.on('boxClicked',(a)=>{
        this.selectedFilter = a;
        console.log(a)
      })

  },
  props:{
    data: Array,
    step: Number,
    urlData: String,


  },
  components:{
    Post,
    FilterBox,
    Mypage,
  }
}
</script>

<style scoped>
.upload-image{
  width: 100%;
  height: 450px;
  background: cornflowerblue;
  background-size : cover;
  background-position : center;
}
.filters{
  overflow-x:scroll;
  white-space: nowrap;
}
.filter-1 {
  width: 100px;
  height: 100px;
  background-color: cornflowerblue;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color : white;
  background-size: cover;
}
.filters::-webkit-scrollbar {
  height: 5px;
}
.filters::-webkit-scrollbar-track {
  background: #f1f1f1;
}
.filters::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 5px;
}
.filters::-webkit-scrollbar-thumb:hover {
  background: #555;
}
.write-box {
  border: none;
  width: 90%;
  height: 100px;
  padding: 15px;
  margin: auto;
  display: block;
  outline: none;
}
</style>