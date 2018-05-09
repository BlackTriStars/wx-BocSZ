@<template>
  <div class="search">
    <i class="icon-search"></i>
    <input type="search" @search="search" v-model="searchTxt" placeholder="搜索查询 / 培训资料 / 往期回顾......">
  </div>
</template>

<script>
export default {
  data(){
    return {
      searchTxt: ''
    }
  },
  methods:{
    search(){
      this.$emit('afterInput',this.searchTxt);
    }
  }
}
</script>

<style lang="less">
  .search{
    position: relative;
    width: 100%;
    height: 92px;
    color: rgb(153, 153, 153);
    background: rgba(255,255,255,.8);
    border-radius: 92px;
    overflow: hidden;
    i{
      position: absolute;
      font-size: 32px;/*px*/
      font-weight: bold;
      top: 50%;
      transform: translateY(-50%);
      left: 26px;
    }
    input{
      outline: none;
      border: none;
      height: 100%;
      width: 100%;
      padding: 0 50px 0 100px;
      font-size: 36px;
    }
  }

</style>
