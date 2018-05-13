<template>
<div class="tools">
    <div class="banner"></div>
    <div class="content">
        <ul>
            <li></li>
            <li></li>
            <li></li>
        </ul>
        <p>点击列表查看详情</p>
    </div>
</div>
</template>

<script>
export default {};
</script>

<style lang="less">
.tools {
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
    ul {
        margin-top: 65px;
        li {
            height:  154px;
            width: 84%;
            margin: 0 auto 77px;
            background-size: 100% 100%;

        }
        li:nth-child(1) {
            background-image: url("../../assets/tools/app.png");
        }
        li:nth-child(2) {
            background-image: url("../../assets/tools/live.png");
        }
        li:nth-child(3) {
            background-image: url("../../assets/tools/review.png");
        }
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
  }
}
</style>