<template>
    <div class="home-wrapper" >
        <div v-show="isFirstLoadFinished">
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
                    <span class="item-title" v-html="item.title"></span>
                </a>
            </div>
            <div class="top-gas-station margin">
                <top-gas-station :stationInfo="stationData" ref="topGasStation" @startNav="onNav">

                </top-gas-station>
            </div>
            <div class="shopping-mall-container">
                <div class="shopping-title-box">
                    <div class="title">
                        <span class="line"></span>
                        <div class="title-txt">热卖商品</div>
                        <span class="line"></span>
                    </div>
                </div>
                <div class="commodity-big-box">
                    <div class="commodity-box">
                        <a v-for="item in goodsArr" :href="item.link" class="commodity-show-plate">
                            <div class="commodity-img-box">
                                <img :src="item.thumb" alt="">
                            </div>
                            <div class="commodity-msg-box">
                                <div class="commodity-details">{{item.title}}</div>
                                <div class="commodity-operation">
                                    <span class="commodity-price"><span class="commodity-price-icon">￥</span>{{item.maxprice}}</span>
                                    <span class="commodity-purchase">购买</span>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="commodity-load-but-box" @click="getMoreGoods">
                    <button v-if="!goodsPageInfo.loadedAll" class="commodity-load-but">加载更多</button>
                    <button v-else class="commodity-load-but disabled">已全部加载</button>
                </div>
            </div>
            <div class="addOil" @click="addOil">加油</div>
        </div>

        <loading-box :isActive="isActiveLoadingFlag"></loading-box>
        <div id="global-tips" :class="{show:globalTipsInfo.flag}"><label>{{globalTipsInfo.tips}}</label></div>
    </div>
</template>

<script>
        /*图片*/

        import fast1 from 'assets/images/home/park.png'
        import fast2 from 'assets/images/home/search.png'
        import fast3 from 'assets/images/home/activity2.png'
        import fast4 from 'assets/images/home/insurance.png'

        import {Home} from 'js/pages/home/home.js'
        let home = new Home();

        import {swiper,swiperSlide} from 'vue-awesome-swiper';

        import topGasStation from '../../components/top-gas-station.vue';

        import loadingBox from '../../components/loading-box.vue';

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
                title: '<span style="color:red">保险</span>',
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
                    fastLinkArr:fastLinkArr,
                    stationData:{
                        name:'武汉测试加油站',
                        location:'湖北省武汉市珞瑜路123号'
                    },
                    goodsPageInfo:{
                        size:10,
                        index:1,
                        loadedAll:false
                    },
                    isFirstLoadFinished:false,
                    isActiveLoadingFlag:true,
                    goodsArr:[],
                    bannerArr:[],
                    globalTipsInfo:{
                        flag:false,
                        tips:''
                    }
                }
            },

            mounted: function () {
                this.$nextTick(function () {
                    let options={
                        goodsPageInfo:this.goodsPageInfo
                    };
                    home.getData(options,(res) => {
                        this.isFirstLoadFinished = true;
                        this.isActiveLoadingFlag = false;
                        this.goodsPageInfo.index++;
                        this.goodsArr = res[0].data;
                        this.bannerArr = res[1].data;
                    });
                });
            },


            components: {
                'swiper':swiper,
                'swiper-slide':swiperSlide,
                'top-gas-station':topGasStation,
                'loading-box':loadingBox
            },

            methods:{
                getMoreGoods:function(event){
                    if(this.goodsPageInfo.loadedAll){
                        return;
                    }
                    this.isActiveLoadingFlag = true;
                    home.getBannerData(this.goodsPageInfo,(flag,res) => {
                        if(flag) {
                            this.isActiveLoadingFlag = false;
                            var newData = res.data;
                            if (newData.length == 0 || this.goodsPageInfo.index == 5) {
                                this.goodsPageInfo.loadedAll = true;
                                this.globalTipsInfo.flag = true;
                                this.globalTipsInfo.tips = '数据加载完毕';
                            } else {
                                this.goodsPageInfo.index++;
                                this.goodsArr = this.goodsArr.concat(res.data);
                            }
                        }else{
                            //todo 添加一个公用的错误提示框
                            console.log(res);
                        }
                    });
                },

                // 父组件调用子组件的方法 测试
                addOil:function(){
                    this.$refs.topGasStation.payNow("父组件请求加油");
                },

                // 子组件调用父组件的方法 测试
                onNav:function(info){
                    alert('导航吗？'+info);
                }
            }
        }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
    @import "../../assets/style/swiper.min.css";
    @import "../../assets/style/scss/home.sass";

</style>
