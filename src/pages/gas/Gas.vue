<template>
  <div>
    <div style="font-size: 30px;color: red;">gas</div>
    <swiper :options="swiperOptions" ref="mySwiper">
    <swiper-slide>I'm Slide 1</swiper-slide>
    <swiper-slide>I'm Slide 2</swiper-slide>
    <swiper-slide>I'm Slide 3</swiper-slide>
    <swiper-slide>I'm Slide 4</swiper-slide>
    <swiper-slide>I'm Slide 5</swiper-slide>
    <swiper-slide>I'm Slide 6</swiper-slide>
    <swiper-slide>I'm Slide 7</swiper-slide>

    <div class="swiper-pagination"  slot="pagination"></div>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
    <div class="swiper-scrollbar"   slot="scrollbar"></div>
  </swiper>
  </div>
</template>

<script>
  import {swiper,swiperSlide} from 'vue-awesome-swiper';

  var bannerArr=[{
    display: 1,
    id: 3,
    link: "http://www.baidu.com",
    thumb_url: "http://jiayouzan.oss-cn-hangzhou.aliyuncs.com/21e830f5a03f9d45b055977ceb8099f9.png",
    title: "哈哈哈"
  }];
  var stationArr=[];
  export default {
    name: 'HelloWorld',
    data:function () {
      return {
        swiperOptions:{
          notNextTick: true,
          // swiper configs 所有的配置同swiper官方api配置
          autoplay: 3000,
          // direction : 'vertical',
          effect:"coverflow",
          grabCursor : true,
          setWrapperSize :true,
          // autoHeight: true,
          // paginationType:"bullets",
          pagination : '.swiper-pagination',
          paginationClickable :true,
          prevButton:'.swiper-button-prev',
          nextButton:'.swiper-button-next',
          // scrollbar:'.swiper-scrollbar',
          mousewheelControl : true,
          observeParents:true,
        }
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
