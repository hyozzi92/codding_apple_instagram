<template>

  <div @click="fire" :style="`background-image: url(${urlData})`" :class="a" class=" filter-item">
  {{a}}
  </div>

</template>

<script>
export default {
  name: "TheFilterBox",
  props:{
    urlData:String,
    a:String,
  },
  methods:{
    fire(){
      this.emitter.emit('boxClicked',this.a)
    }
  },
}
</script>

<style scoped>
.filter-item {
  width: 100px;
  height: 100px;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color : white;
  background-size: cover;
  background-position : center;
}
.filterWrap {

  white-space: nowrap;
}
</style>