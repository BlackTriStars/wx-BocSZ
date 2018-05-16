<template>
  <div class="trainMaterial">
      <div class="top"></div>
      <div class="bottom">
          <ul>
              <li v-for="item in buttons">
                  <img :src="require('../assets/trainMaterial/'+item+'.png')" alt="">
              </li>
          </ul>
      </div>
      <img class="man" src="../assets/trainPlan/man.png" alt="">
  </div>
</template>
<script>
export default {
  data() {
      return {
          buttons: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
      }
  }
}
</script>
<style lang="less">
    .trainMaterial {
        background-color: #fff;
        position: relative;
        height: 100%;
        .top {
            height: 595px;
            background-image: url("../assets/trainPlan/banner.png");
            background-size: 130% 100%;
            background-position: 40% 50%;
            position: absolute;
            top: 0;
            width: 100%;
            z-index: 1;
        }
        .bottom {
            height: 100%;
            background-image: url("../assets/trainPlan/bg.png");
            position: absolute;
            top: 500px;
            width: 100%;
        }
        .man {
            height:  460px;
            width: 277px;
            position: absolute;
            bottom: 35px;
            left: 62px;
            z-index: 2;
        }
        ul {
            width: 985px;
            height: 833px;
            margin: 180px auto;
            background-image: url("../assets/trainPlan/bg2.png");
            background-size: 100% 100%;
            background-position: 50% 50%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            padding: 52px 58px 180px  58px;
            li {
                width:  33%;
                
            }
        }
    }
</style>

