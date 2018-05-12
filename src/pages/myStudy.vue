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
            <ul>
                <li v-for="(item, index) in list" :key='index'>
                    <img :src="require('../assets/myStudy/' +item.img + '.png')" alt="">
                    <h4>{{item.title}}</h4>
                    <p>{{item.text}}</p>
                    <div class="status">
                        <span class="number">56</span>
                        <span class="like">36</span>
                        <span class="wechat">16</span>
                    </div>
                </li>
            </ul>
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
          title: "企业文化",
          img: "culture",
          text:
            "近日，全国首场外汇市场准则培训在北京中国银行总行举办。中国银行副行长任德奇，外管局国际收支司司长阿里山扩大飞机卢卡斯的房间里空间"
        },
        {
          title: "规则制度",
          img: "rule",
          text:
            "近日，全国首场外汇市场准则培训在北京中国银行总行举办。中国银行副行长任德奇，外管局国际收支司司长阿里山扩大飞机卢卡斯的房间里空间"
        },
        {
          title: "法律法规",
          img: "law",
          text:
            "近日，全国首场外汇市场准则培训在北京中国银行总行举办。中国银行副行长任德奇，外管局国际收支司司长阿里山扩大飞机卢卡斯的房间里空间"
        }
      ]
    };
  }
};
</script>
<style lang='less'>
.my-study {
  background-color: #edffff;
  min-height: 100%;
  .toggle-container {
    height: 162px;
    background: url("../assets/myStudy/banner.png") 0 0 no-repeat;
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
    padding: 35px 3%;
    height: 1000px;
    li {
      img {
        width: 34vw;
        height: 232px;
        position: absolute;
        left: 0;
      }
      position: relative;
      padding:30px 0 30px 37vw;
      border-bottom: 1px solid #afb4b4;
      h4 {
        font-size: 30px;
      }
      p {
        margin-top: 28px;
        max-height: 116px;
        overflow: hidden;
      }
      .status {
        display: flex;
        justify-content: space-between;
        align-content: center;
        margin-top: 20px;
        span {
          width: 33%;
          padding-left: 63px;
          background: 0 50% no-repeat;
        }
        .number {
          background-image: url(../assets/myStudy/number.png);
          background-size: 30%;
        }
        .like {
          background-image: url(../assets/myStudy/like.png);
          background-size: 20%;
        }
        .wechat {
          background-image: url(../assets/myStudy/wechat.png);
          background-size: 20%;
        }
      }
    }
  }
}
</style>
   