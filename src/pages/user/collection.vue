@<template>
  <div id="collection">
    <div class="editWrap" v-show="!canEdit">
      <div class="btn" @click="canEdit = true">编辑</div>
    </div>
    <div class="main" :class="{edit:canEdit}">
      <div class="item" v-for="(item,index) in list" :key="index" >
        <div class="select" @click="select(index)" :class="{active: item.select}" v-show="canEdit">
          <i class="icon-checkbox"></i>
        </div>
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
    <div class="btnWrap" v-show="canEdit">
      <div class="delete" @click="del">
        <i class="icon-Delete">
          删除
        </i>
      </div>
      <div class="cancel" @click="canEdit= false;">
        <i class="icon-edit">
          取消
        </i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      list: [
        {
          img:require('../../assets/user/collection-0.png'),
          title:'企业文化',
          content:'近日，全国首场外汇市场准则培训在北京中国银行总行举办。中国银行副行长任德奇，外管局国际收支司司长.....',
          select: false,
          data:[
            {
              value: 56,
              name: 'num'
            },{
              value: 36,
              name: 'like'
            },{
              value: 16,
              name: 'wechat'
            }
          ]
        },{
          img:require('../../assets/user/collection-1.png'),
          title:'规则制度',
          content:'近日，全国首场外汇市场准则培训在北京中国银行总行举办。中国银行副行长任德奇，外管局国际收支司司长.....',
          select: false,
          data:[
            {
              value: 56,
              name: 'num'
            },{
              value: 36,
              name: 'like'
            },{
              value: 16,
              name: 'wechat'
            }
          ]
        },{
          img:require('../../assets/user/collection-2.png'),
          title:'法律法规',          
          content:'近日，全国首场外汇市场准则培训在北京中国银行总行举办。中国银行副行长任德奇，外管局国际收支司司长.....',
          select: false,
          data:[
            {
              value: 56,
              name: 'num'
            },{
              value: 36,
              name: 'like'
            },{
              value: 16,
              name: 'wechat'
            }
          ]
        },
      ],
      canEdit: false
    }
  },
  methods:{
    select(index){
      console.log(this.list[index].select)
      this.$set(this.list[index],'select',!this.list[index].select)
    },
    del(){
      this.list = this.list.filter(v=>!v.select);
      this.canEdit = false;
    }
  }
}
</script>

<style lang="less">
  #collection{
    width: 100%;
    height: 100%;
    background: #fff;
    &>.editWrap{
      width: 100%;
      height: 128px;
      padding: 29px 40px;
      background: #ececec;
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
      border: 1px solid transparent;
      padding: 0 40px;
      &.edit{
        padding-left: 110px;
      }
      .item{
        margin-top:30px;
        height: 263px;
        width: 100%;
        border-bottom: 1px solid #999;/*no*/
        position: relative;
        &:last-child{
          border: none;
        }
        .select{
          width: 50px;
          height: 50px;
          color: #fff;
          position: absolute;
          left: -75px;
          top: 50%;
          transform: translateY(-50%);
          border-radius: 50%;
          z-index: 999;
          border: 3px solid #898989;
          display: flex;
          justify-content: center;
          align-items: center;
          &.active{
            background: #f14d4f;
          border: 3px solid transparent;
          }
        }
        .img{
          float: left;
          margin-right: 30px;
          img{
            width: 374px;
            height: 235px;
            
            }
        }
        .detail{
          overflow: hidden;
          height: 100%;
          &>h4{
            font-size: 32px;
            font-weight: bold;
            color: #333;
            margin-bottom: 20px;
          }
          &>p{
            color: #444;
            font-size: 30px;
          }
          .data{
            display: flex;
            justify-content: space-between;
            align-items: cente;
            height: 33px;
            font-size: 28px;
            color: #999;
            margin-top: 25px;
            &>span{
              display: flex;
              align-items: center;
            }
            i{
              font-size: 38px;
              margin-right: 8px;
            }
          }
        }
      }
    }
    .btnWrap{
      padding: 0 40px;
      width: 100%;
      display: flex;
      margin-top: 46px;
      justify-content: space-between;
      &>div{
        width: 427px;
        height: 138px;
        background: #e94547;
        color: #fff;
        line-height: 138px;
        text-align: center;
        font-size: 60px;
      }
    }
  }
</style>
