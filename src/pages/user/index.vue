@<template>
<div class="user">
  <div class="userInfo">
    <div class="portrait" :style="{backgroundImage:'url('+userInfo.img+')'}">
      <!-- <img class="portraitImg" :src="userInfo.img" alt=""> -->
    </div>
      <div class="name">
        {{userInfo.name}}
      </div>
    <div class="detail">
      <div class="item" v-for="(item, index) in userInfo.detail" :key="index">
        {{item.title}} {{item.value}}
      </div>
    </div>
  </div>
  <div class="lists">
    <div class="list" v-for="(list,index) in list" :key="index" @click="go(list.name)">
      <p class="title">
        <i><img :src="list.img" alt=""></i>
        {{list.title}}
      </p>
      <div class="num">
        <span>{{list.num}}</span>
        <i class="icon-more"></i>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data(){
    return {
      userInfo:{
        img: require('../../assets/user/head.png'),
        name:'微信昵称',
        detail:[
          {
            title:'已学课程:',
            value: 25
          },
          {
            title: '我的解封:',
            value: 36
          },
          {
            title: '我的排名',
            value: 12
          }

        ]
      },
      list:[
        {
          title: '我的收藏',
          name: 'collection',
          img:'',
          num: 12
        },{
          title: '我的学习',
          name: 'myStudy',
          img:'',
          num: 109
        },{
          title: '我的积分',
          name: 'integral',
          img:'',
          num: 36
        },{
          title: '我的问卷',
          name: 'survey',
          img:'',
          num: 1
        },{
          title: '培训中心介绍',
          name: 'introduce',
          img:'',
          num: 0
        },
      ]
    }
  },
  methods:{
    go(name){
      this.$router.push({name})
    }
  }
}
</script>

<style lang="less">
  .user{
    width: 100%;
    height: 100%;
    background: #eee;
    .userInfo{
      padding: 0 78px;
      width: 100%;
      height: 480px;
      background: url(../../assets/user/userBg.png) no-repeat;
      background-size: 100% 100%;
      border: 1px solid transparent;
      .portrait{
        width: 291px;
        height: 291px;
        border-radius: 50%;
        border: 10px solid #0d82e0;
        background-size: cover;
        margin: 20px auto;
      }
      .name{
        line-height: 34px;
        font-size: 44px;
        font-weight: bold;
        text-align: center;
        color: #fff;
      }
      .detail{
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 70px;
        margin-top: 20px;
        .item{
          height: 100%;
          flex: 1;
          text-align: center;
          line-height: 70px;
          color: #fff;
          font-size: 38px;
          &+.item{
            border-left: 1px solid #3187cc;
          }
          &:not(:last-child){
            border-right: 1px solid #b1ddff;
          }
        }
      }
    }
    .lists{
      margin-top: 44px;
      .list{
        width: 100%;
        height: 192px;
        border-top: 1px solid #d3d3d3;
        border-bottom: 1px solid #d3d3d3;
        background: #fff;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 38px;
        &+.list{
          margin-top: 20px;
        }
        .num{
          &>span{
            display: inline-block;
            box-sizing: content-box;
            padding: 0 4px;
            line-height: 55px;
            min-width: 55px;
            height: 55px;
            font-size: 38px;
            background: #188fff;
            border-radius: 55px;
            text-align: center;
            color: #fff;
          }
          &>i{
            font-size: 40px;
            display: inline-block;
            transform: translateY(3px);
            color: #7d8a8b;
            
          }
        }
      }
    }
  }
</style>
