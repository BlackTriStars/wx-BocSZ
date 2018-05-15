@<template>
  <div class="index">
    <div class="topNav">
      <div class="swiper">
        <div class="searchWrap">
          <search @afterInput="search"></search>
        </div>
        <swiper style="height: 100%" :options="swiperOption">
          <swiper-slide>
            <img src="../assets/index/banner.png" alt="">
          </swiper-slide>
          <swiper-slide>
            <img src="../assets/index/banner.png" alt="">
          </swiper-slide>
          <swiper-slide>
            <img src="../assets/index/banner.png" alt="">
          </swiper-slide>
          <swiper-slide>
            <img src="../assets/index/banner.png" alt="">
          </swiper-slide>
          <swiper-slide>
            <img src="../assets/index/banner.png" alt="">
          </swiper-slide>
          <swiper-slide>
            <img src="../assets/index/banner.png" alt="">
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
      <div class="navList">
        <ul>
          <li v-for="(nav, index) in navList" :key="index" @click="go(nav.name)">
            <img :src="require('../assets/index/'+nav.img+'.png')" alt="">
            <span>{{nav.content}}</span>
          </li>
        </ul>
      </div>
    </div>
    <section>
      <ul>
        <li class="main clear" v-for="(main,index) in mainList" :key="index">
          <div class="topLine clear">
            <div class="title left" :style="{color:main.topLine.color}">
              <img class="icon" :src="require('../assets/index/' + main.topLine.img + '.png')" alt="">
              {{main.topLine.title}}
            </div>
            <span class="more right" @click="go(main.name)">
              查看更多 <i class="icon-more"></i>
            </span>
          </div>
          <div class="mainItem left" v-for="(item,idx) in main.main" :key="idx" @click="go(item.name)">
            <div class="item">
              <img :src="require('../assets/index/' + item.img + '.png')" alt="">
              <p class="desc">{{item.content}}</p>
            </div>
          </div>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import search from '@/components/common/search.vue'
export default {
  data(){
    return{
      navList:[
        {
          content:'我的学习',
          img:'nav-study',
          name: 'myStudy'
        },
        {
          content:'实用工具',
          img:'nav-tools',
          name: 'tools'          
        },
        {
          content:'培训计划',
          img:'nav-plan',
          name: 'trainPlan'          
        },
        {
          content:'问卷调查',
          img:'nav-research',
          name: 'survey'          
        }
      ],
      mainList:[
        {
          topLine:{
            img: 'title-new',
            title: '最新课程',
            color: '#0c6acc'
          },
          main:[
            {
              img:'index-img1',
              content: '理财新法规',
              name: 'material'
            },{
              img:'index-img1',
              content: '理财新法规',
              name: 'material'
            },
          ],
          name: 'latestLesson'
        },
        {
          topLine:{
            img: 'title-hot',
            title: '热门推荐',
            color: '#f0324a'
          },
          main:[
            {
              img:'index-img2',
              content: '企业文化',
              name: 'material'
            },{
              img:'index-img3',
              content: '开发新客户',
              name: 'material'
            },
          ],
          name: 'recommended'
        },
        {
          topLine:{
            img: 'title-information',
            title: '培训动态',
            color: '#09c6bb'
          },
          main:[
            {
              img:'index-img4',
              content: '提升团队凝聚力培训',
              name: 'dynamicList'
            },{
              img:'index-img5',
              content: '销售培训',
              name: 'dynamicList'
            },
          ],
          name: 'dynamic'
        },
        {
          topLine:{
            img: 'title-history',
            title: '往期回顾',
            color: '#ff5025'
          },
          main:[
            {
              img:'index-img6',
              content: '提升团队凝聚力培训',
              name: 'historyList'
            },{
              img:'index-img7',
              content: '销售培训',
              name: 'historyList'
            },
          ],
          name: 'history'
        },
      ],
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
        },
        loop: true,
        autoPlay: true
      }
    }
  },
  components:{
    search
  },
  methods:{
    search(a){
      console.log(a)
    },
    go(name){
      this.$router.push({name})
    }
  }
}
</script>

<style lang="less">
  .index{
    .topNav{
      .swiper{
        height: 500px;
        width: 100%;
        background: #ccc;
        position: relative;
        img{
          width: 100%;
          height: 100%;
        }
        .searchWrap{
          position: absolute;
          width: 100%;
          padding: 34px 30px 0;
          top: 0;
          left: 0;
          z-index: 999;
        }
        .swiper-pagination{
          position: absolute;
          display: inline-block;
          bottom: 30px;
          right: 30px;
          width: auto!important;
          left: auto!important;
          .swiper-pagination-bullet{
            width: 26px;
            height: 26px;
            &+.swiper-pagination-bullet{
              margin-left: 18px;
            }
            &.swiper-pagination-bullet-active{
              background: #91d9ff;
            }
          }
        }
      }
      .navList{
        padding: 0 30px;
        height: 289px;
        border-bottom: 1px solid #999;/*no*/
        background: #fff;
        ul{
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          li{
            flex: 1;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 30px 0 26px;
            font-size: 32px;
            color: #333;
            img{
              width: 188px;
              height: 188px;
              display: block;
              margin-bottom: 16px;
            }
          }
        }
      }
    }
    section{
      margin-top: 30px;
      border-top: 1px solid #999; /*no*/
      background: #fff;
      width: 100%;
      padding-top: 10px;
      .main{
        border-bottom: 1px solid #dcdcdc;/*no*/
        padding: 0 30px 44px;
        
        .topLine{
          height: 120px;
          width: 100%;
          line-height: 120px;
          .title{
            font-size: 48px;
            font-weight: bold;
            img{
              width: 60px;
              height: 60px;
              display: inline-block;
              transform: translateY(10px);
            }

          }
          .more{
            font-size: 32px;
            color: #999;
          }
        }
        .mainItem{
          &:nth-child(2n-1){
            float: right;
          }
          .item{
            width: 490px;
            border: 1px solid #dcdcdc;/*no*/
            img{
              width: 100%;
              display: block;
            }
            p{
              font-size: 36px;
              color: #333;
              line-height: 80px;
              text-align: center;
            }
          }
        }
      }
    }
  }
</style>

