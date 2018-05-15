<template>
<div class="live">
    <div class="banner"></div>
    <div class="content">
        <div class="header"></div>
        <ul>
            <li><i>01</i>    新一代手机培训平台APP端初始化设置指南</li>
            <li><i>02</i>    中银学习APP首次使用指南</li>
            <li><i>03</i>    中银学习APP下载链接</li>
        </ul>
        <p>点击列表查看详情</p>
    </div>
</div>
</template>

<script>
export default {};
</script>

<style lang="less">
.live {
  position: relative;
  .banner {
    position: absolute;
    top: 0;
    height: 568px;
    width: 100%;
    background-image: url("../../assets/tools/banner.png");
    background-size: 100% 100%;
    z-index: 1;
  }
  .content {
    position: absolute;
    top: 533px;
    height: 64vh;
    width: 100%;
    background-image: url("../../assets/tools/background.png");
    background-size: 100% 105%;
    .header {
        position: relative;
        width: 592px;
        height: 125px;
        margin: 70px auto 50px;
        background-image: url("../../assets/tools/app-live.png");
        background-size: 100% 100%;
    }
    p {
        padding-top: 90px;
        text-align: center;
        font-size: 34px;
        position: absolute;
        bottom: 144px;
        width: 100%;
        background-image: url("../../assets/tools/hand.png");
        background-size: 5%;
        background-position: 50% 0;
        background-repeat: no-repeat;
    }
    ul {
        width: 67%;
        margin: 0 auto;
        li {
            height:  160px;
            font-size: 35px;
            width: 100%;
            padding: 55px 4% 0 15%;
            position: relative;
            i {
                position: absolute;
                width: 94px;
                height: 94px;
                top: 50%;
                left: 0;
                transform: translateY(-50%);
                -webkit-transform: translateY(-50%);
                background-image: url("../../assets/tools/list.png");
                background-size: 100% 100%;
                line-height: 94px;
                text-align: center;
                color: #fff;
                font-style: normal;

            }
        }
        li:nth-child(2) {
            border-top: 2px dotted #eeb944;
            border-bottom: 2px dotted #eeb944;
        }
    }
  }
}
</style>