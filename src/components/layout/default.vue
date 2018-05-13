@<template>
  <div class="container" :class="{paddingTop:header,paddingBottom:footer}">
    <BocHeader v-show="header"></BocHeader>
    <slot></slot>
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
    min-height: 100%;
    &.paddingTop{
      padding-top: 160px;
    }
    &.paddingBottom{
      padding-bottom: 146px;
    }
  }
</style>
