@<template>
  <div class="index">
    <div class="topNav">
      <div class="swiper">
        <div class="searchWrap">
          <search @afterInput="search"></search>
        </div>
      </div>
      <div class="navList">
        <ul>
          <li v-for="(nav, index) in navList" :key="index">
            <img :src="require('../assets/index/'+nav.img+'.png')" alt="">
            <span>{{nav.content}}</span>
          </li>
        </ul>
      </div>
    </div>
    <section>
      <ul>
        <li class="main" v-for="(main,index) in mainList" :key="index">
          <div class="topLine">
            <div class="title">
              <img class="icon" :src="require('../assets/index/' + main.topLine.img + '.png')" alt="">
              {{main.topLine.title}}
            </div>
            <span class="more">
              查看更多 >
            </span>
          </div>
          <div class="mainItem" v-for="(item,idx) in main.main" :key="idx">
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
          img:'nav-study'
        },
        {
          content:'实用工具',
          img:'nav-tools'
        },
        {
          content:'培训计划',
          img:'nav-plan'
        },
        {
          content:'问卷调查',
          img:'nav-research'
        }
      ],
      mainList:[
        {
          topLine:{
            img: 'title-new',
            title: '最新课程'
          },
          main:[
            {
              img:'index-img1',
              content: '理财新法规'
            },{
              img:'index-img1',
              content: '理财新法规'
            },
          ]
        },
        {
          topLine:{
            img: 'title-hot',
            title: '热门推荐'
          },
          main:[
            {
              img:'index-img2',
              content: '企业文化'
            },{
              img:'index-img3',
              content: '开发新客户'
            },
          ]
        },
        {
          topLine:{
            img: 'title-information',
            title: '培训动态'
          },
          main:[
            {
              img:'index-img4',
              content: '提升团队凝聚力培训'
            },{
              img:'index-img5',
              content: '销售培训'
            },
          ]
        },
        {
          topLine:{
            img: 'title-history',
            title: '往期回顾'
          },
          main:[
            {
              img:'index-img6',
              content: '提升团队凝聚力培训'
            },{
              img:'index-img7',
              content: '销售培训'
            },
          ]
        },
      ]
    }
  },
  components:{
    search
  },
  methods:{
    search(a){
      console.log(a)
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
        .searchWrap{
          position: absolute;
          width: 100%;
          padding: 34px 30px 0;
          top: 0;
          left: 0;
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
  }
</style>

