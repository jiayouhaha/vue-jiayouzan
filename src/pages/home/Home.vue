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
        <div class="fast-link-container">
            <a v-for="item in fastLinkArr" :href="item.link" class="item">
                <div class="item-img">
                    <img :src="item.img">
                </div>
                <span class="item-title">{{item.title}}</span>
            </a>
        </div>
        <div class="top-gas-station">
            <top-gas-station :stationInfo="stationData"></top-gas-station>
        </div>
    </div>
</template>

<script>

    /*图片*/
    import banner1 from 'assets/images/home/banner@1.png'
    import banner2 from 'assets/images/home/banner@2.png'
    import banner3 from 'assets/images/home/banner@3.jpeg'

    import fast1 from 'assets/images/home/park.png'
    import fast2 from 'assets/images/home/search.png'
    import fast3 from 'assets/images/home/activity2.png'
    import fast4 from 'assets/images/home/insurance.png'

    import {swiper,swiperSlide} from 'vue-awesome-swiper';

    import topGasStation from '../../components/top-gas-station.vue';

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

    var fastLinkArr=[
        {
            title: '停车',
            link:'http://www.tnar.cn/park_weixin/toquery.do?a=ce9b41b20ef97fb9db829c4c1f0ae674&c=ce9b41b20ef97fb9db829c4c1f0ae674',
            img:fast1
        },
        {
            title: '违章代缴',
            link:'http://www.tnar.cn/park_weixin/toquery.do?a=ce9b41b20ef97fb9db829c4c1f0ae674&c=ce9b41b20ef97fb9db829c4c1f0ae674',
            img:fast2
        },
        {
            title: '活动',
            link:'http://www.tnar.cn/park_weixin/toquery.do?a=ce9b41b20ef97fb9db829c4c1f0ae674&c=ce9b41b20ef97fb9db829c4c1f0ae674',
            img:fast3
        },
        {
            title: '保险',
            link:'http://www.tnar.cn/park_weixin/toquery.do?a=ce9b41b20ef97fb9db829c4c1f0ae674&c=ce9b41b20ef97fb9db829c4c1f0ae674',
            img:fast4
        }
    ];

    export default {
        name: 'home',
        data: function () {
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
                fastLinkArr:fastLinkArr,
                stationData:{
                    name:'武汉测试加油站',
                    location:'湖北省武汉市珞瑜路123号'
                }

            }
        },
        components: {
            'swiper':swiper,
            'swiper-slide':swiperSlide,
            'top-gas-station':topGasStation
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
    @import "../../assets/style/swiper.min.css";
    @import "../../assets/style/scss/home.sass";

</style>
