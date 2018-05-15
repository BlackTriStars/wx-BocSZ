@<template>
  <div class="container" :class="{paddingTop:header,paddingBottom:footer}">
    <BocHeader v-show="header"></BocHeader>
    <div class="appContent">
      <slot></slot>
    </div>
    <BocFooter v-show="footer"></BocFooter>
  </div>
</template>

<script>
import BocHeader from '@/components/common/header.vue'
import BocFooter from '@/components/common/footerNav.vue'
export default {
  data(){
    return{}
  },
  props:{
    header:{
      type: Boolean,
      default: true
    },
    footer: {
      type: Boolean,
      default: true
    }
  },
  components:{
    BocHeader,BocFooter
  }
}
</script>

<style lang="less">
  .container{
    // padding: 160px 0 146px;
    height: 100vh;
    overflow: hidden;
    &.paddingTop{
      padding-top: 160px;
    }
    &.paddingBottom{
      padding-bottom: 146px;
    }
    .appContent{
      height: 100%;
      overflow: auto;
    }
  }
</style>
