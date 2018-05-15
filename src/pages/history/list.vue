@<template>
  <div id="historyList">
    <div class="content">
      <h2 class="title">
        {{res.title}}
      </h2>
      <p class="data">
        <span v-for="(v,i) in res.data" :key="i">
          <i :class="'icon-'+v.name"></i>
          {{v.value}}
        </span>
      </p>
      <div class="alumb">
        <div class="bg">
          <img src="../../assets/dynamic/list-alumb.png" alt="">
        </div>
        <img :src="res.img" alt="">
      </div>
      <div class="article">
        <p v-for="(article, idx) in res.article" :key="idx">{{article}}</p>
      </div>
    </div>
    <div class="comments">
      <div class="list" v-for="(comment,index) in res.comments" :key="index">
        <div class="avatar">
          <img :src="comment.avatar" alt="">
          <span>{{comment.name}}</span>
        </div>
        <div class="comment">
          <p>{{comment.comment}}</p>
        </div>

      </div>

      <div class="textarea">
        <textarea placeholder="欢迎大家评论留言……" v-model="commentTxt"></textarea>
        <div class="submit">
          评论
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      res: {
        title: "中国银行举办全国首场外汇市场准则培训",
        img: require("../../assets/dynamic/img-0.png"),
        data: [
          {
            value: 56,
            name: "users"
          },
          {
            value: 36,
            name: "like"
          },
          {
            value: 16,
            name: "wechat"
          }
        ],
        article: [
          `近日，全国首场外汇市场准则培训在北京中国银行总行举办。中国银行副行长任德奇，外管局国际收支司司长王春英以及人民银行货币政策司、全国外汇自律机制秘书处、中国外汇市场指导委员会等监管、自律机构代表出席开班仪式。`,
          `外汇市场准则是外汇市场自律的最新基础性制度，包括2017年5月发布的《全球外汇市场准则》和《中国外汇市场准则》，准则的制定发布是我国健全金融监管体系的重要举措，也是促进人民币国际化，和外部市场互通互认的重要规则。准则通过市场自律的方式进行自我规范，形成他律和自律的合力，有助于进一步提高我国人民币汇率形成机制的市场化程度、促进和规范外汇市场的发展，也是我国外汇市场规则与国际接轨的重要标志。`,
          `培训、研究引入同业监督和外部评估等措施持续推动准则的落实，打造平等竞争平台，避免劣币驱逐良币；三是监管机构将继续指导自律机制做好各项工作，并结合资本项目开放、汇率市场化改革、人民币国际化带来的机遇，继续推动外汇市场深化发展。`
        ],
        comments: [
          {
            avatar: require("../../assets/material/avatar.png"),
            name: "微信名称",
            comment:
              "监管机构将继续指导自律机制做好各项工作，并结合资本项目开放、汇率市场化改革、人民币国际化带来的机遇，继续推动外汇市场深化发展。"
          },
          {
            avatar: require("../../assets/material/avatar.png"),
            name: "微信名称",
            comment:
              "监管机构将继续指导自律机制做好各项工作，并结合资本项目开放、汇率市场化改革、人民币国际化带来的机遇，继续推动外汇市场深化发展。"
          }
        ]
      },
      commentTxt: ""
    };
  }
};
</script>

<style lang="less">
#historyList {
  .content {
    padding: 40px;
    background: #f8ffef;
    border-bottom: 1px solid #999; /*no*/
    margin-bottom: 30px;
    .title {
      line-height: 70px;
      font-size: 48px;
      text-align: center;
    }
    .data {
      height: 76px;
      display: flex;
      justify-content: flex-end;
      align-items: cente;
      // height: 33px;
      font-size: 28px;
      color: #999;
      margin-top: 25px;
      & > span {
        display: flex;
        align-items: center;
        margin-left: 30px;
        img {
          width: 58px;
          height: 30px;
          margin-right: 8px;
        }
      }
      i {
        font-size: 38px;
        margin-right: 8px;
      }
    }
    .alumb {
      position: relative;
      .bg {
        width: 1000px;
        height: 500px;
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
      }
    }
    .article {
      margin-top: 45px;
      p {
        text-indent: 2em;
        font-size: 36px;
        line-height: 60px;        
        color: #4c4c4c;
      }
    }
  }
  .comments {
    border-top: 1px solid #999; /*no*/
    background: #f8ffef;
    .list {
      width: 100%;
      height: 220 px;
      border-bottom: 1px dashed #999; /*no*/
      padding: 28px 40px 28px 32px;
      display: flex;
      align-items: center;
      &:nth-last-child(2) {
        border: none;
      }
      .avatar {
        margin-right: 50px;
        img {
          width: 115px;
          height: 116px;
        }
        span {
          font-size: 32px;
          color: #8d8d8d;
        }
      }
      .comment {
        width: 827px;
        p {
          font-size: 32px;
          color: #4c4c4c;
        }
      }
    }
    .textarea {
      padding: 0 40px 30px;
      width: 100%;
      textarea {
        width: 100%;
        height: 188px;
        resize: none;
        border-radius: 12px;
        overflow: hidden;
        border: solid 4px #e4e4e4;
        font-size: 35px;
        padding: 28px 30px;
      }
      .submit {
        width: 100%;
        height: 138px;
        background-image: linear-gradient(#3fa209, #3fa209),
          linear-gradient(45deg, #41924f 0%, #38be4f 100%);
        font-size: 60px;
        color: #fffffe;
        text-align: center;
        line-height: 138px;
        margin-top: 38px;
      }
    }
  }
}
</style>
