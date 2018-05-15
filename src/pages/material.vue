<template>
  <div class="material">
    <div class="video">
      <div class="play"></div>
    </div>
    <div class="video-info">
      <h4>课程名称: 企业文化</h4>
      <div class="info">
        <span class="points">
          积分：{{this.jifen}}
        </span>
        <div class="status">
          <span class="collect icon-love"  @click="collect">{{this.number.collect}}</span>
          <span class="icon-users">{{this.number.number}}</span>
          <span class="like icon-like" @click="zan">{{this.number.like}}</span>
          <span class="wechat icon-wechat">{{this.number.wechart}}</span>
        </div>
      </div>
    </div>
    <div class="toggle">
      <ul class="toggle-buttons">
        <li @click="toggleType('intro')" :class="{ active: type=='intro' }">课程介绍</li>
        <li @click="toggleType('comments')" :class="{ active: type=='comments' }">评论</li>
      </ul>
      <p v-show="type=='intro'">
        近日，全国近日，全国首场外汇市场准则培训在北京中国银行总行举办。中国银行副行长任德奇，外管局国际收支司司长王春英以及人近日，全国近日，全国首场外汇市场准则培训在北京中国银行总行举办。中国银行副行长任德奇，外管局国际收支司司长王春英以及人近日，全国近日，全国首场外汇市场准则培训在北京中国银行总行举办。中国银行副行长任德奇，外管局国际收支司司长王春英以及人
      </p>
      <div class="comment-bar" v-for="(comment, index) in comments" :key='index' v-show="type=='comments'">
        <div class="user-info">
          <img :src="require('../assets/material/' +comment.avatar + '.png')" alt="">
          <span class="name">{{comment.name}}</span>
        </div>
        <p>{{comment.content}}</p>
      </div>
      <textarea cols="30" rows="10" placeholder="欢迎大家评论留言" v-show="type=='comments'"></textarea>
      <button v-show="type=='comments'">评论</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      type: "intro",
      jifen: 2,
      comments: [
        {
          avatar: "avatar",
          name: "微信名称",
          content:
            "近日，全国近日，全国首场外汇市场准则培训在北京中国银行总行举办。中国银行副行长任德奇，外管局国际收支司司长王春英以及人近日"
        },
        {
          avatar: "avatar",
          name: "微信名称",
          content:
            "近日，全国近日，全国首场外汇市场准则培训在北京中国银行总行举办。中国银行副行长任德奇，外管局国际收支司司长王春英以及人近日"
        }
      ],
      number: {
        collect: "56",
        number: "56",
        like: "36",
        wechart: "16"
      },
      iszan: "false",
      iscollect: "false"
    };
  },
  methods: {
    toggleType(t) {
      this.type = t;
    },
    zan: function() {

      if (!this.iszan) {
        this.iszan = true;
        this.number.like--;
      } else {
        this.iszan = false;
        this.number.like++;
      }
    },
    collect: function() {
      if (!this.iscollect) {
        this.iscollect = true;
        this.number.collect--;
      } else {
        this.iscollect = false;
        this.number.collect++;
      }
    }
  }
};
</script>
<style lang="less">
.red {
  color: red;
}
.material {
  .video {
    width: 100%;
    height: 648px;
    background-image: url("../assets/material/video.png");
    background-size: cover;
    .play {
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.6);
      background-image: url("../assets/material/play.png");
      background-repeat: no-repeat;
      background-position: 50% 50%;
      background-size: 15%;
    }
  }
  .video-info {
    height: 206px;
    background-color: #eff8ff;
    padding: 4%;
    font-size: 30px;
    h4 {
      margin-bottom: 40px;
      font-weight: 500;
    }
    .points {
      float: left;
      padding-left: 46px;
      background-image: url("../assets/material/point.png");
      background-repeat: no-repeat;
      background-position: 0 50%;
      background-size: 20%;
    }
    .status {
      display: flex;
      justify-content: space-between;
      align-content: center;
      float: right;
      width: 50%;
      span {
        padding-left: 63px;
        background: 29% 50% no-repeat;
      }
      // .collect {
      //   background-image: url(../assets/material/collect.png);
      //   background-size: 35%;
      // }
      // .number {
      //   background-image: url(../assets/myStudy/number.png);
      //   background-size: 50%;
      // }
      // .like {
      //   background-image: url(../assets/myStudy/like.png);
      //   background-size: 35%;
      // }
      // .wechat {
      //   background-image: url(../assets/myStudy/wechat.png);
      //   background-size: 35%;
      // }
    }
  }
  .toggle {
    padding: 4%;
    margin-top: 30px;
    background-color: #eff8ff;
    .toggle-buttons {
      width: 100%;
      margin: 0 auto 53px;
      height: 120px;
      display: flex;
      justify-content: center;
      align-content: center;
      li {
        width: 50%;
        font-size: 50px;
        height: 100%;
        line-height: 120px;
        text-align: center;
        color: #000;
        background-color: #fff;
        border: 1px solid #9e9e9e;
      }
      li.active {
        color: #fff;
        background-color: #33a6ef;
      }
      li:first-child {
        border-top-left-radius: 30px;
        border-bottom-left-radius: 30px;
      }
      li:last-child {
        border-top-right-radius: 30px;
        border-bottom-right-radius: 30px;
      }
    }
    p {
      font-size: 38px;
      text-indent: 2em;
    }
    .comment-bar {
      position: relative;
      height: 254px;
      padding: 37px 0 37px 17%;
      border-bottom: 2px dotted #9e9e9e;
      .user-info {
        left: 0;
        position: absolute;
        height: 100%;
        width: 20%;
      }
      img {
        margin-bottom: 15px;
        width: 115px;
        height: 115px;
        border-radius: 100%;
        background-color: pink;
      }
      p {
        text-indent: 0;
        height: 150px;
        overflow: hidden;
      }
    }
    textarea {
      height: 180px;
      width: 100%;
      border-radius: 10px;
      border: 5px solid #e4e4e4;
      padding: 25px;
    }
    button {
      width: 100%;
      height: 136px;
      line-height: 136px;
      margin-top: 22px;
      font-size: 58px;
      color: #fff;
      text-align: center;
      font-weight: 800;
      background-color: #1074ee;
      border: 0 none;
    }
  }
}
</style>

