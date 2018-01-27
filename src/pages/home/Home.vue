<template>
    <div class="home-wrapper">
        <div class="top-banner-container">
            <swiper :options="swiperOptions" ref="mySwiper">
                <swiper-slide v-for="item in bannerArr">
                    <a :href="item.link">
                        <img class="banner-bg" :src="item.thumb_url">
                    </a>
                </swiper-slide>
            </swiper>
            <div class="swiper-pagination"></div>
        </div>
    </div>
</template>

<script>
    import banner1 from 'assets/images/home/banner@1.jpg'
    import banner2 from 'assets/images/home/banner@2.jpg'
    import banner3 from 'assets/images/home/banner@3.jpeg'

    import {swiper,swiperSlide} from 'vue-awesome-swiper';
    var bannerArr=[
        {
            display: 1,
            id: 1,
            link: "http://www.baidu.com",
            thumb_url: banner1,
            title: "哈哈哈1"
        },
        {
            display: 1,
            id: 2,
            link: "http://www.baidu.com",
            thumb_url: banner2,
            title: "哈哈哈2"
        },
        {
            display: 1,
            id: 3,
            link: "http://www.baidu.com",
            thumb_url: banner3,
            title: "哈哈哈3"
        }
    ];
    export default {
        name: 'home',
        data: function () {
            return {
                swiperOptions:{
                    notNextTick: true,
                    autoplay: 2000,
                    grabCursor : true,
                    setWrapperSize :true,
                    autoHeight: true,
                    paginationType:"bullets",
                    paginationClickable :true,
                    pagination: {
                        el: '.swiper-pagination'
                    }
                },
                bannerArr:bannerArr
            }
        },
        components: {
            'swiper':swiper,
            'swiper-slide':swiperSlide
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
    @import "../../assets/style/swiper.min.css";
    @import "../../assets/style/scss/home.sass";

</style>
