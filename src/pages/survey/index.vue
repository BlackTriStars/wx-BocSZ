<template>
  <div class="my-study">
        <zh-header title='我的学习'></zh-header>
        <div class="toggle-container">
            <ul class="toggle">
                <li>进行中</li>
                <li>已完成</li>
            </ul>
        </div>
        <div class="content">
          <div class="item" v-for="(item,index) in list" :key="index" @click="go(item.id)">
            <div class="cot">
              <h4>{{item.title}}</h4>
              <p class="time">开始时间: {{item.time}}</p>
            </div>
            <div class="tip">
              <span>{{item.num}}人已参加</span>
            </div>
          </div>
        </div>
  </div>
</template>
<script>
import zhHeader from "@/components/common/header.vue";
export default {
  components: {
    zhHeader
  },
  data() {
    return {
      list: [
        {
          title: "2018届青年后备人才调研",
          time: "2018-04-20",
          num: 15,
          id: 0
        },{
          title: "2018届青年后备人才调研",
          time: "2018-04-20",
          num: 15,
          id: 0
        }
      ]
    };
  },
  methods:{
    go(id){
      this.$router.push({name:'surveyList'})
    }
  }
};
</script>
<style lang='less'>
.my-study {
  background-color: #edffff;
  min-height: 100%;
  .toggle-container {
    height: 162px;
    background: url("../../assets/myStudy/banner.png") 0 0 no-repeat;
    background-size: cover;
    position: relative;
    .toggle {
      width: 41%;
      height: 110px;
      line-height: 110px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: flex;
      justify-content: space-between;
      align-content: center;
      li {
        height: 100%;
        width: 50%;
        text-align: center;
        font-size: 42px;
      }
      li:first-child {
        border-top-left-radius: 110px;
        border-bottom-left-radius: 110px;
        background-color: #33a6ef;
        color: #fff;
      }
      li:last-child {
        border-top-right-radius: 110px;
        border-bottom-right-radius: 110px;
        background-color: #ffffff;
        color: #000000;
      }
    }
  }
  .content {
    .item{
      display: flex;
      position: relative;
      justify-content: space-between;
      padding: 60px 0 53px 40px;
      border-bottom: 1px solid #999;/*no*/
      h4{
        font-size: 48px;
        font-weight: normal;
        line-height: 70px;
      }
      .time{
        font-size: 28px;
        color: #9c9c9c;
      }
      .tip{
        height: 100%;
        &>span{
          position: absolute;
          width: 216px;
          height: 54px;
          background-color: #188fff;
          text-align: center;
          line-height: 54px;
          color: 30px;
          bottom: 37px;
          right: 0;
          color: #fff;
          border-top-left-radius: 10px;
        }
      }
    }
  }
}
</style>
   