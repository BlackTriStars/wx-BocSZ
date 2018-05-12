@<template>
  <div id="integral">
    <div class="info">
      <p>当前积分为</p>
      <p>当前排名: {{res.rank}}</p>
      <div class="score">
        {{res.score}}
      </div>
    </div>
    <div class="padding"></div>
    <div class="main">
      <div class="item" v-for="(item,index) in res.list" :key="index">
        <div class="leftArea">
          <h4>{{item.title}}</h4>
          <p>{{item.desc}}</p>
          <p class="time">{{item.time}}</p>
        </div>
        <div class="rightArea">
          <img src="../../assets/user/gold.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      res: {
        rank: 12,
        score: 98,
        list: [
          {
            title: '课程学习',
            desc: '企业文化课程',
            time: '2018-0420'
          },{
            title: '课程学习',
            desc: '企业文化课程',
            time: '2018-0420'
          },{
            title: '课程学习',
            desc: '企业文化课程',
            time: '2018-0420'
          },
        ]
      }
    }
  }
}
</script>

<style lang="less">
  #integral{
    height: 100%;
    background-color: #edffff;    
    .info {
      width: 100%;
      height: 400px;
      background: url('../../assets/user/integralBg.png') no-repeat;
      background-size: 100% 100%;
      padding: 56px 40px 39px 43px;
      position: relative;
      color: #fff;
      &>p{
        position: absolute;
        font-size: 42px;
      }
      &>p:nth-child(1){
        top: 56px;
        left: 43px;
      }
      &>p:nth-child(2){
        bottom: 39px;
        right: 40px;
      }
      .score{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        font-size: 188px;
      }
    }
    .padding{
      height: 30px;
      width: 100%;
      background: #ececec;
    }
    .main{
      .item{
        height: 230px;
        width: 100%;
        border-top: 2px solid #999;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 60px 40px 30px;
        .leftArea{
          h4{
            font-size: 44px;
            color: #444;
          }
          p{
            color: #777;
            font-size: 34px;
          }
          .time{
            font-size: 32px;
          }
        }
        .rightArea {
          img{
            width: 182px;
            height: 80px;
          }
        }
      }
    }
  }
</style>
