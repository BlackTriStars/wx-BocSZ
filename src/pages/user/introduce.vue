@<template>
  <div id="introduce">
    <div class="one" v-if="part === 0">
      <div class="bg">
        <img src="../../assets/user/introduce-0.png" mode="widthFix"/>>
      </div>
    </div>
    <div class="two" v-if="part === 1">
      <div class="bg">
        <img src="../../assets/user/introduce-1.png" mode="widthFix" />
      </div>
      <div class="first">
        <!-- :style="{top:parseInt((index+1)/2)}" 814/28.5% -->
        <div class="button" v-for="(btn,index) in firstFloor" :key="index" :style="{top:(814 + parseInt((index)/2)*154)/28.5 + '%'}" @click="showAlbum('firstFloor',index)">
          {{btn}}
        </div>
      </div>
      <div class="second">
        <div class="button" v-for="(btn,index) in secondFloor" :key="index" :style="{top:(814 + 984 + parseInt((index)/2)*154)/28.5 + '%'}" @click="showAlbum('secondFloor',index)">
          {{btn}}
        </div>
      </div>
    </div>
    <div class="mask" v-show="album">
      <div class="album">
        <div class="bg">
          <div class="title">
            {{title}}
          </div>
          <div class="close" @click="album = false">
            <i class="icon-close"></i>
          </div>
          <img src="../../assets/user/album.png" alt="">
        </div>
        <div class="imgWrap">
          <img src="../../assets/user/album-0.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  data(){
    return {
      part: 1,
      firstFloor: [
        '各课室分布情况',
        '阶梯课室全景',
        '一楼培训中心大堂',
        '一楼过道',
        '一楼休息厅',
        '阶梯课室休息厅',
        '102教室',
      ],
      secondFloor: [
        '二楼大堂',
        '二楼休息厅',
        '二楼过道',
        '201课室全景',
        '202课室全景',
        '203会议室',
        '204会议室全景',
        '206课室全景',
        '学员健身室',
        '学员阅览室'
      ],
      title: '',
      album: false,
    }
  },
  methods: {
    ...mapMutations(['changeHeader'])
  },
  mounted(){
    let headerInfo = {
      title: '培训中心介绍',
    };
    if(this.part === 0){
      headerInfo.color = '#db3f40';      
    }
    if(this.part === 1){
      headerInfo.color = '#178286';
    }
    this.$store.commit('changeHeader',headerInfo)
  },
  methods:{
    showAlbum(type,index){
      this.title = this[type][index];
      this.album = true;
    }
  }
}
</script>

<style lang="less">
  #introduce{
    position: relative;
    .two{
      .first,.second{
        .button{
          position: absolute;
          z-index: 9;
          top: 814/28.5%;
          left: 120/10.8%;
          width: 382/10.8%;
          height: 110/28.5%;
          border-radius: 108px;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 40px;
          color:#2c1900;
          &:nth-child(2n){
            left: 540/10.8%;
          }
        }
      }
    }
    .mask{
      position: fixed;
      width: 100%;
      height: 100%;
      background-color: rgba(0,0,0,.8);
      z-index: 99;
      display: flex;
      justify-content: center;
      align-items: center;
      top: 0;
      left: 0;
      .album{
        width: 926px;
        height: 1213px;
        position: relative;
        .bg{
          position: relative;
          z-index: 999;
          .title{
            position: absolute;
            top: 150px;
            width: 100%;
            text-align: center;
            font-size: 56px;
            font-weight: bold;
            color: #fff;
          }
          .close{
            position: absolute;
            top: 136px;
            right: 50px;
            width: 131px;
            height: 131px;
            border-radius: 50%;
            background-color: #e94547;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #fff;
            font-size: 68px;
          }
        }
        .imgWrap{
          width: 660px;
          height: 963px;
          background: #fff;
          z-index: 9;
          position: absolute;
          bottom: 25px;
          left: 137px;
          img{
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
</style>
