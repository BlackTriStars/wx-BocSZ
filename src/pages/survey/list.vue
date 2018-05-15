@<template>
  <div id="surveyList">
    <div class="title">
      {{title}}
    </div>
    <div class="desc" v-if="!status">
      <p>问卷简介: {{info.desc}}</p>
      <p>开始时间: {{info.time}}</p>
      <p>实体数量: {{info.num}}</p>
    </div>
    <div class="question" v-else>
      <div class="questionContent">
        <span class="order">{{current+1}}.</span>
        <p>{{questionList[current].content}}</p>
      </div>
      <div class="options">
        <p class="option" v-for="(option,index) in questionList[current].options" :key="index" @click="chooseAnswer(index)">
          <span class="select" :class="{active:questionList[current].value === index}">
            <i class="icon-checkbox" v-show="questionList[current].value === index"></i>
          </span>
          {{option}}</p>
      </div>
    </div>
    <div class="btnWrap">
      <div class="pre" :class="{join:!status}" @click="pre">{{status?'上一题':'参加问卷'}}</div>
      <div class="next" @click="next">{{status?'下一题':'查看问卷'}}</div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      title: '2018届青年后备人才调研',
      info:{
        desc:'问卷简介：欢迎各位同事参加2018年青年后备人才问卷调研',
        time: '2018年5月3日',
        num: 20
      },
      status: false, // 调查状态 true 调研中 false 调研前
      current: 0, //  当前题目
      questionList:[
        {
          content:'您认为本单位对青年后备人才培养的重视程度？',
          options: [
            '很满意',
            '满意',
            '一般',
            '不满意'
          ],
          value: -1
        }
      ]
    }
  },
  methods:{
    pre(){
      if(this.status){
        
      }else{
        this.status = true;
      }
    },
    next(){
      if(this.status){
        
      }else{
        this.$router.push({name:'survey'})
      }
    },
    chooseAnswer(index){
      this.$set(this.questionList[this.current], 'value', index)
    }
  }
}
</script>

<style lang="less">
  #surveyList{
    background: #edffff;
    min-height: 100vh;
    .title{
      width: 100%;
      height: 163px;
      border-bottom: 1px solid #999;
      line-height: 162px;
      font-size: 48px;
      color: #333;
      padding-left: 70px;
      position: relative;
      &:before{
        content:'';
        width: 12px;
        height: 60px;
        background-color: #3383ef;
        position: absolute;
        top: 50%;
        left: 30px;
        transform: translateY(-50%);
      }
    }
    .desc,.question{
      padding: 57px 40px 0;
      font-size: 36px;
      line-height: 68px; 
      color: #666;
    }
    .question{
      .questionContent{
        padding-left: 50px;
        position: relative;
        .order{
          position: absolute;
          left: 0;
          top: 0;
        }
      }
      .options{
        position: relative;
        .select{
          position: absolute;
          left: 0;
          width: 58px;
          height: 58px;
          border-radius: 50%;
          border: 2px solid #85d0ff;/*no*/
          color: #fff;
          line-height: 58px;
          text-align: center;
          &.active{
            background: #85d0ff;
          }
        }
        .option{
          padding-left: 100px;
        }
      }
    }
    .btnWrap{
      margin-top: 70px;
      padding:0 40px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      &>div{
        width: 472px;
        height: 138px;
        background: #1074ee;
        font-size: 60px;
        color: #fff;
        line-height: 138px;
        text-align: center;
      }
      .join{
        background: #ff850c;
      }
    }
  }
</style>
