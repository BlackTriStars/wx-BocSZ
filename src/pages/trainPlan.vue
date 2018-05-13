<template>
  <div class="train-plan">
    <zh-header title='培训计划'></zh-header>
    <div class="main_img">
      <img src="../assets/trainPlan/bg@3x.png" alt="">
    </div>
    <ul class="main_ul">
      <li v-for="(item, index) in list" :key='index'>
        <div class="li_left">
          <img :src="require('../assets/trainPlan/'+ item.img + '.png')" alt="">
        </div>
        <div class="li_right">
          <h4>{{item.title}}</h4>
          <p>{{item.text}}
            <a href="javascript:;">
              <span>[详情]</span>
            </a>
          </p>
        </div>

      </li>
    </ul>
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
          title: "法律法规培训",
          img: "4",
          text:
            "近日，全国首场外汇市场准则培训在北京中国银行总行举办。中国银行副行长任德奇，外管局国际收支司司长...."
        },
        {
          title: "法律法规培训",
          img: "5",
          text:
            "近日，全国首场外汇市场准则培训在北京中国银行总行举办。中国银行副行长任德奇，外管局国际收支司司长...."
        },
        {
          title: "法律法规培训",
          img: "6",
          text:
            "近日，全国首场外汇市场准则培训在北京中国银行总行举办。中国银行副行长任德奇，外管局国际收支司司长...."
        },
        {
          title: "法律法规培训",
          img: "7",
          text:
            "近日，全国首场外汇市场准则培训在北京中国银行总行举办。中国银行副行长任德奇，外管局国际收支司司长...."
        }
      ]
    };
  }
};
</script>

<style lang='less'>
ul,
li {
  margin: 0;
  padding: 0;
  list-style: none;
}
a {
  text-decoration: none;
}
.train-plan {
  position: relative;
  .main_ul {
    position: absolute;
    margin: 0 112px;
    width: 857px;
    top: 500px;
    li {
      height: 235px;
      border-bottom: 1px solid #ccc;
      .li_left {
        float: left;
        width: 20vw;
        height: 232px;
        left: 0;
        top: 0;
      }
      .li_right {
        float: right;
        width: 70%;
        h4 {
          font-size: 36px;
          line-height: 34px;
          margin-top: 37px;
          font-family: "MicrosoftYaHei-Bold";
          color: #333;
        }
        p {
          margin-top: 17px;
          font-size: 30px;
          line-height: 44px;
          span {
            color: rgb(255, 84, 0);
          }
        }
      }
    }
  }
}
</style>