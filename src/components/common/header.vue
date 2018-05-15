@<template>
  <header :style="{background:header.color}">
    <i class="icon-home" @click="$router.push({name:'index'})"></i>
    {{header.title}}
    <i class="right icon-refresh"></i>
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
    z-index: 999;
    &>i{
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      font-size: 70px;
    }
    &>i:first-child{
      left: 40px;
    }
    &>i:last-child{
      right: 40px;
      transform-origin: center;
      font-weight: bold;
      transform: scaleX(-1) translateY(-50%) rotate(-90deg);
    }
  }
</style>
