<template>
  <div id="app">
    <defaultLayout :header="headerShow" :footer="footerShow">
      <router-view></router-view>
    </defaultLayout>
  </div>
</template>

<script>
import defaultLayout from "@/components/layout/default.vue";
import { mapMutations } from "vuex";
export default {
  name: "App",
  data() {
    return {
      headerShow: false,
      footerShow: false,
      headerBgColor: "#0181ca"
    };
  },
  components: {
    defaultLayout
  },
  mounted() {
    this.checkoutPath(this.$route.name);
  },
  methods: {
    ...mapMutations(["changeHeader"]),
    // 根据当前url 给header设置不同颜色
    //  默认的颜色不用设置
    checkoutPath(name) {
      if (name === "index") {
        this.headerShow = false;
        this.footerShow = true;
      } else {
        this.headerShow = true;
        this.footerShow = true;
      }
      console.log(name);
      switch (name) {
        case "user":
          this.changeHeader({ title: "个人中心" });
          break;
        case "collection":
          this.changeHeader({ title: "培训资料", color: "#db3f40" });
          break;
        case "integral":
          this.changeHeader({ title: "我的积分" });
          break;
        case "myStudy":
          this.changeHeader({ title: "我的学习" });
          break;
        case "survey":
          this.changeHeader({ title: "问卷调研" });
          break;
        case "material":
          this.changeHeader({ title: "培训资料" });
          break;
        case "dynamic":
          this.changeHeader({ title: "培训动态", color:'#38be4f' });
          break;
        case "history":
          this.changeHeader({ title: "往期回顾", color:'#38be4f' });
          break;
        case "latestLesson":
          this.changeHeader({ title: "最新课程" });
          break;
        case "recommended":
          this.changeHeader({ title: "热门推荐" });
          case "tools":
          this.changeHeader({ title: "实用工具" });
          break;
          case "trainPlan":
          this.changeHeader({ title: "培训计划" });
          break;
          case "materialIndex":
          this.changeHeader({ title: "培训资料" });
          break;
        default:
          break;
      }
    }
  },
  watch: {
    $route(v) {
      console.log(v);
      this.checkoutPath(v.name);
    }
  }
};
</script>

<style>
@import "./styles/fonts/style.css";
html,
body,
#app {
  width: 100%;
  height: 100%;
  background: #ececec;
}
</style>
