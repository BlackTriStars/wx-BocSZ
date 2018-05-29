<template>
  <div id="location">
    <div class="banner">
      <img :src="bannerImg" alt="">
    </div>
    <div class="introduce">
      <p v-html="introduce"></p>
    </div>
    <div class="loc">
      <div class="bg">
        <img src="../../assets/location/r@3x.png" alt="">
      </div>
      <div class="tip">
        <img src="../../assets/location/tip.png" alt="">
      </div>
      <div class="map">
        <img :src="locMap" class="">
      </div>
    </div>
    <div class="traffic" v-for="(item, index) in traffic" :key="index">
      <div class="title">
        <div class="bg">
          <div class="icon">
            <img :src="item.iconImg" alt="">
          </div>
          <img src="../../assets/location/stationBg.png" alt="">
        </div>
        <span>{{item.title}}</span>
        <div class="trafficBtn">
          <div class="btn" :class="{active:item.current===i}" v-for="(btn,i) in item.btn" :key="i">{{btn}}</div>
        </div>
      </div>
      <div class="map" :class="{active:item.current===i}" v-if="/.png|.jpg|.jpeg/.test(item.map)">
        <img :src="item.map[item.current]" alt="">
      </div>
      <div class="map" :class="{active:item.current===i}" v-else>
        <div class="arror">
          <img src="../../assets/location/arror.png" alt="">
        </div>
        {{item.map}}
      </div>
    </div>
    <div class="bottom">
      <img src="../../assets/location/bottom.png" alt="">
    </div>
  </div>

</template>
<script>
export default {
  data() {
    return {
      bannerImg: require('../../assets/location/banner@3x.png'),
      introduce: `分行培训中心于<span class="important">2017年1月</span>启用，位于<span class="important">深圳市福田区景田北环大道7003号中审大厦</span>。中审大厦是我行与国家审计署合作建设的综合性大楼，我行房产面积<span class="important">14168.35平方米</span>，培训中心占用面积<span class="important">2659.27平方米</span> 。`,
      locMap: require('../../assets/location/map@3x.png'),
      traffic:[
        {
          title: '请记住两个地铁站',
          btn: ['梅景站','景田站'],
          iconImg: require('../../assets/location/METRO.png'),
          current:0,
          map: [
            'http://www.xzknow.com/bocedu/assets/index/banner.png',
            'http://www.xzknow.com/bocedu/assets/index/banner.png',
          ]
        },{
          title: '请记住这些公交站台',
          btn: ['紫薇阁总站','深圳石油大厦','福田中医院'],
          iconImg: require('../../assets/location/bus.png'),          
          current: 0,
          map: ''
        }
      ]

    }
  },
  computed: {
    
  },
  components: {
    
  },
  mounted() {
    
  },
  methods: {
    
  }
}
</script>
<style lang='less' rel='stylesheet/less'>
  #location{
    background: #e6f7ff;
    .banner{
      width: 100%;
    }
    .introduce{
      width: 100%;
      height: 340px;
      background: url(../../assets/location/introduceBg.png) repeat;
      background-size: contain;
      font-size: 42px;
      color: #333333;
      padding: 0 60px;
      display: flex;
      align-items: center;
      // padding: 35px 60px 0;
      text-indent: 2em;
      span.important{
        color: #026a74;
        font-weight: bold;
      }
    }
    .loc{
      position: relative;
      padding-top: 48px;
      .map{
        width: 56.39%;
        position: absolute;
        top: 11px;
        right: 136px;
      }
      .tip{
        width: 456px;
        height: 128px;
        position: absolute;
        bottom: 20px;
        left: -30px;
      }
    }
    .traffic{
      .title{
        position: relative;
        height: 240px;
        .bg{
          padding: 0 97px 0 20px;
          position: absolute;
          left: 0;
          top: 0;
          .icon{
            position: absolute;
            width: 10000/1080vw;
            // height: 100px;
            left: 4.5%;
            top: 18.7%;
          }
        }
        &>span{
          font-size: 4vw;
          color: rgb(255, 255, 255);
          font-weight: bold;
          position: absolute;
          z-index: 999;
          top: 60px;
          left: 18.5%;
        }
        .trafficBtn{
          .btn{
            position: absolute;
            bottom: 0px;
            width: 262px;
            height: 90px;
            background: url(../../assets/location/btn.png);
            background-size: contain;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 40px;
            color: rgb(255, 255, 255);
            font-weight: bold;

            &.active{
              background: url(../../assets/location/btn-active.png);
            background-size: contain;
              
            }
          }
        }
      }
      .map{
        width: 823px;
        border: 4px dashed #3395d7;
        margin: 0 auto;
        border-radius: 10px;
        // overflow: hidden;
        background: #fff;
        margin-top: 36px;
        position: relative;
        &:before{
          content: '';
          position: absolute;
          height: 0px;
          width: 0px;
          border-left: 15px solid transparent;
          border-bottom: 15px dashed #fff;
          border-right: 15px solid transparent;
          top: -15px;
        }
        img{
          border-radius: 10px;
          // border: 0px solid transparent;
          box-sizing: border-box;
        }
      }
      &:nth-child(4){
        .trafficBtn{
          .btn:nth-child(1){
            left: 242px;
          }
          .btn:nth-child(2){
            right: 246px;
          }
        }
        .map.active{

        }
      }
      &:nth-child(5){
        .trafficBtn{
          .btn:nth-child(1){
            left: 152px;
          }
          .btn:nth-child(2){
            left: 432px;
          }
          .btn:nth-child(3){
            right: 99px;
          }
        }
      }
    }

  }
</style>