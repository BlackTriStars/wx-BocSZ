<template>
  <footer>
    <ul>
      <li v-for="(item, index) in list" :key="index" :class="{active: currentIndex === index}" @click="changeCurrentActive(index)">
        <i :class="item.icon"></i>
        <span>{{item.content}}</span>
      </li>
    </ul>
  </footer>  
</template>

<script>
export default {
  data(){
    return{
      list:[
        {
          content:'首页',
          icon: 'icon-home'
        },
        {
          content:'资料培训',
          icon: 'icon-data'
        },
        {
          content:'我的',
          icon: 'icon-user'
        }
      ],
      currentIndex: 0
    }
  },
  methods:{
    changeCurrentActive(index){
      let url;
      switch (index) {
        case 0:
          url='index'
          break;
        case 1:
          url='materialIndex'
          break;
        case 2:
          url='user'
          break;
      
        default:
          break;
      }
      this.$router.push({ name: url})
      this.currentIndex = index;
    }
  },
  watch:{
    $route(v){
      if(v.name === 'index'){ 
        this.currentIndex = 0;
      }
      if(v.name === 'materialIndex'){ 
        this.currentIndex = 1;
      }
      if(v.name === 'user'){
        this.currentIndex = 2;        
      }
    }
  }
}
</script>

<style lang="less">
  footer{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 146px;
    box-shadow: 0px -4px 6px 0px rgba(0, 0, 0, 0.278);
    background-color: #f2f2f2;
    ul{
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 100%;
      li{
        flex: 1;
        height: 100%;
        text-align: center;
        color: #999;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 21px 0;
        font-size: 14px;
        &>i{
          font-size: 60px;
          margin-bottom: 4px;
        }
        &.active{
          color: #0082d8;
        }
      }
    }
  }
</style>
