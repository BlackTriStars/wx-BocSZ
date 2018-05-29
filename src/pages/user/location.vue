<template>
  <div id="location">
    <div class="banner">
      <img :src="{bannerImg}" alt="">
    </div>
    <div class="introduce">
      {{introduce}}
    </div>
    <div class="loc">
      <img :src="{locMap}" alt="">
    </div>
    <div class="traffic" v-for="(item, index) in traffic" :key="index">
      <div class="title">{{item.title}}</div>
      <div class="trafficBtn">
        <div class="btn" v-for="(btn,i) in item.btn" :key="i">{{btn}}</div>
      </div>
      <div class="map">{{item.map}}</div>
    </div>
    <div class="bottom"></div>
  </div>

</template>
<script>
export default {
  data() {
    return {
      location:{
        bannerImg: '',
        introduce: '',
        locMap: '',
        traffic:[
          {
            title: '',
            btn: [],
            map: ''
          },{
            title: '',
            btn: [],
            map: ''
          }
        ]
      }
    }
  },
  computed: {
    
  },
  components: {
    
  },
  mounted() {
    
  },
  methods: {
    
  }
}
</script>
<style lang='less' rel='stylesheet/less'>
  
</style>