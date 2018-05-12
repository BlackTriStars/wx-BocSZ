<template>
  <div id="app">
    <defaultLayout :header="headerShow" :footer="footerShow">
      <router-view></router-view>
    </defaultLayout>
  </div>
</template>

<script>
import defaultLayout from '@/components/layout/default.vue'
import { mapMutations } from 'vuex'
export default {
  name: 'App',
  data(){
    return {
      headerShow: false,
      footerShow: false,
      headerBgColor: '#0181ca'
    }
  },
  components:{
    defaultLayout
  },
  mounted () {
    this.checkoutPath(this.$route.name)
  },
  methods:{
    ...mapMutations(['changeHeader']),
    // 根据当前url 给header设置不同颜色
    //  默认的颜色不用设置
    checkoutPath(name){
      if(name === 'index'){
        this.headerShow = false;
        this.footerShow = true;
      }else{
        this.headerShow = true;        
        this.footerShow = false
      }
      switch (name) {
        case 'user':
          this.changeHeader({title:'个人中心'})
          break;
      
        default:
          break;
      }
    }
  },
  watch:{
    $route(v){
      console.log(v)
      this.checkoutPath(v.name)
    }
  }
}
</script>

<style>
@import './styles/fonts/style.css';
html,
body,
#app {
  width: 100%;
  height: 100%;
  background: #ececec;
  
}
</style>
