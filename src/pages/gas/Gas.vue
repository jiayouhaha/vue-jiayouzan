<template>
    <div class="gas-wrapper" >
        <div v-show="isFirstLoadFinished"></div>
        <loading-box :isActive="isActiveLoadingFlag"></loading-box>
    </div>
</template>

<script>
  import {swiper,swiperSlide} from 'vue-awesome-swiper';
  var bannerArr=[
    {
      display: 1,
      id: 1,
      link: "http://www.baidu.com",
      thumb_url: "http://jiayouzan.oss-cn-hangzhou.aliyuncs.com/21e830f5a03f9d45b055977ceb8099f9.png",
      title: "哈哈哈1"
    },
    {
      display: 1,
      id: 2,
      link: "http://www.baidu.com",
      thumb_url: "http://jiayouzan.oss-cn-hangzhou.aliyuncs.com/21e830f5a03f9d45b055977ceb8099f9.png",
      title: "哈哈哈2"
    },
    {
      display: 1,
      id: 3,
      link: "http://www.baidu.com",
      thumb_url: "http://jiayouzan.oss-cn-hangzhou.aliyuncs.com/21e830f5a03f9d45b055977ceb8099f9.png",
      title: "哈哈哈3"
    }
  ];
  var stationArr=[];
  export default {
    name: 'gas',
    data:function () {
      return {
          swiperOptions:{
              notNextTick: true,
              autoplay: true,
              grabCursor : true,
              setWrapperSize :true,
              autoHeight: true,
              paginationType:"bullets",
              paginationClickable :true,
              pagination: {
                  el: '.swiper-pagination'
              }
          },
          bannerArr:bannerArr,
          isFirstLoadFinished:false,
          isActiveLoadingFlag:true
      }
    },
    components: {
      'swiper':swiper,
      'swiper-slide':swiperSlide
    },
    computed: {
        swiper:function() {
          return this.$refs.mySwiper.swiper
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  @import "../../assets/style/swiper.min.css";

h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.swiper-slide{
  height: 300px;
}
</style>
