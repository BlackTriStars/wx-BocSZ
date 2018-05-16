@<template>
  <div id="history">
  <!-- :on-refresh="refresh" -->
  <!-- refresh-layer-color="#4b8bf4" -->
  <scroller
    :on-infinite="infinite"
    loading-layer-color="#ec4949"
    class="scroller"
  >
    <div class="swiper">
      <swiper style="height: 100%" :options="swiperOption">
        <swiper-slide>
          <img src="../assets/material/banner.png" alt="">
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/material/banner.png" alt="">
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/material/banner.png" alt="">
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/material/banner.png" alt="">
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/material/banner.png" alt="">
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/material/banner.png" alt="">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
    <div class="main">
      <div class="item" v-for="(item,index) in list" :key="index"  @click="$router.push({name:'historyList'})">
        <div class="img">
          <img :src="item.img" alt="">
        </div>
        <div class="detail">
          <h4>{{item.title}}</h4>
          <p>{{item.content}}</p>
          <div class="data">
            <span v-for="(v,i) in item.data" :key="i">
              <i :class="'icon-'+v.name"></i>
              {{v.value}}
            </span>
          </div>
        </div>
      </div>
    </div>
  </scroller>
  </div>
</template>

<script>
export default {
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination"
        },
        loop: true,
        autoPlay: true
      },
      list: [
        {
          img: require("../assets/user/collection-0.png"),
          title: "企业文化",
          content:
            "近日，全国首场外汇市场准则培训在北京中国银行总行举办。中国银行副行长任德奇，外管局国际收支司司长.....",
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
          ]
        },
        {
          img: require("../assets/user/collection-1.png"),
          title: "规则制度",
          content:
            "近日，全国首场外汇市场准则培训在北京中国银行总行举办。中国银行副行长任德奇，外管局国际收支司司长.....",
          data: [
            {
              value: 56,
              name: "num"
            },
            {
              value: 36,
              name: "like"
            },
            {
              value: 16,
              name: "wechat"
            }
          ]
        },
        {
          img: require("../assets/user/collection-2.png"),
          title: "法律法规",
          content:
            "近日，全国首场外汇市场准则培训在北京中国银行总行举办。中国银行副行长任德奇，外管局国际收支司司长.....",
          data: [
            {
              value: 56,
              name: "num"
            },
            {
              value: 36,
              name: "like"
            },
            {
              value: 16,
              name: "wechat"
            }
          ]
        },
      ],// 数据渲染
      temp: [
        {
          img: "/static/img/collection-0.png",
          title: "企业文化",
          content:
            "近日，全国首场外汇市场准则培训在北京中国银行总行举办。中国银行副行长任德奇，外管局国际收支司司长.....",
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
          ]
        },
        {
          img: "/static/img/collection-1.png",
          title: "规则制度",
          content:
            "近日，全国首场外汇市场准则培训在北京中国银行总行举办。中国银行副行长任德奇，外管局国际收支司司长.....",
          data: [
            {
              value: 56,
              name: "num"
            },
            {
              value: 36,
              name: "like"
            },
            {
              value: 16,
              name: "wechat"
            }
          ]
        },
        {
          img: "/static/img/collection-2.png",
          title: "法律法规",
          content:
            "近日，全国首场外汇市场准则培训在北京中国银行总行举办。中国银行副行长任德奇，外管局国际收支司司长.....",
          data: [
            {
              value: 56,
              name: "num"
            },
            {
              value: 36,
              name: "like"
            },
            {
              value: 16,
              name: "wechat"
            }
          ]
        }
      ],
      total: 0,// 数据总数
      showNum: 3, //  默认显示数量 
    };
  },
  async mounted() {
    let responseJson = await fetch("../../static/test.json");
    let res = await responseJson.json();
    if (res.code === "0000") {
      this.list = res.data.list;
      this.total = res.data.total;
    }
  },
  methods: {
    infinite(done) {
              console.log('infinite called..')
      let dataLength = this.list.length;
      let total = this.total;
      if(total < this.showNum){
        done()
        return;
      }
      if (this.list.length>=this.total) {
        setTimeout(() => {
          done(true);
        }, 1500);
        return;
      }else{
        setTimeout(() => {
          this.list = this.list.concat(this.temp)
          done();
        }, 1500);
      }
      
      // setTimeout(() => {
      //   let start = this.bottom + 1;
      //   this.list.push(this.temp);
      //   this.bottom = this.bottom + 10;
      //   setTimeout(() => {
      //     done();
      //   });
      // }, 1500);
    }
  }
};
</script>

<style lang="less">
#history {
  min-height: 100%;
  width: 100%;
  background: #fff;
  position: relative;
  .loading-layer {
    background: #fff;
  }
  .swiper {
    .swiper-pagination {
      position: absolute;
      display: inline-block;
      bottom: 30px;
      right: 30px;
      width: auto !important;
      left: auto !important;
      .swiper-pagination-bullet {
        width: 26px;
        height: 26px;
        & + .swiper-pagination-bullet {
          margin-left: 18px;
        }
        &.swiper-pagination-bullet-active {
          background: #0181ca;
        }
      }
    }
  }
  .main {
    background: #fff;
    border: 1px solid transparent;
    padding: 0 40px;
    // height: 100vh;
    &.edit {
      padding-left: 110px;
    }
    .item {
      margin-top: 30px;
      height: 263px;
      width: 100%;
      border-bottom: 1px solid #999; /*no*/
      position: relative;
      &:last-child {
        border: none;
      }
      .img {
        float: left;
        margin-right: 30px;
        img {
          width: 374px;
          height: 235px;
        }
      }
      .detail {
        overflow: hidden;
        height: 100%;
        & > h4 {
          font-size: 32px;
          font-weight: bold;
          color: #333;
          margin-bottom: 20px;
        }
        & > p {
          color: #444;
          font-size: 30px;
        }
        .data {
          display: flex;
          justify-content: space-between;
          align-items: cente;
          height: 33px;
          font-size: 28px;
          color: #999;
          margin-top: 25px;
          & > span {
            display: flex;
            align-items: center;
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
      }
    }
  }
}
</style>
