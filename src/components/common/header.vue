@<template>
  <header :style="{background:header.color}">
    <i></i>
    {{header.title}}
    <i></i>
  </header>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data(){
    return {

    }
  },
  computed:{
    ...mapState([ 'header'])
  },
  mouted(){
    
  }
}
</script>

<style lang="less">
  header{
    width: 100%;
    height: 160px;
    // background-color: #0181ca;
    line-height: 160px;
    color: #ffffff;
    box-shadow: 0px 5px 7px 0px rgba(0, 0, 0, 0.27);
    text-align: center;
    position: fixed;
    top: 0;
    left: 0;
    font-size: 56px;
    color: rgb(255, 255, 255);
    text-align: center;
    line-height: 160px;
    
  }
</style>
