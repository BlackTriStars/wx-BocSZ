@<template>
  <div id="collection">
    <div class="edit">
      <div class="btn">编辑</div>
    </div>
    <div class="main">
      <div class="item" v-for="(item,index) in list" :key="index">
        <div class="img">
          <img src="" alt="">
        </div>
        <div class="detail">
          <h4></h4>
          <!-- <p>{{item.deta}}</p> -->
          <div class="data">
            <span>
              <i></i>
              <!-- {{item.num}} -->
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      list: [
        {}
      ]
    }
  }
}
</script>

<style lang="less">
  #collection{
    width: 100%;
    height: 100%;
    .edit{
      width: 100%;
      height: 128px;
      padding: 29px 40px;
      .btn{
        width: 160px;
        height: 70px;
        background: #f14d4f;
        border-radius: 10px;
        text-align: center;
        line-height: 70px;
        color: #fff;
        font-size: 30px;
        float: right;
      }
    }
    .main{
      background: #fff;
      .item{
        margin-top:30px;
        padding: 0 40px; 
        height: 263px;
        width: 100%;
        border-bottom: 1px solid #999;/*no*/
      }
    }
  }
</style>
