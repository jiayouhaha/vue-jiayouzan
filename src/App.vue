<template>
  <div id="app-container">
    <div id="menu-wrapper">
      <ul class="menu-tabs">

        <li class="tab-item"
            v-for="(item,index) in items"
            :class="{selected:currentIndex==index}"
            @click="selected(index)">
          <router-link :to="item.href">
            <span :class="[item.icon]"></span>
            <label class="item-txt" >{{item.txt}}</label>
          </router-link>
        </li>


        <!--<li class="tab-item" :class="{ selected:currentIndex==0}">-->
          <!--<router-link to="/home">-->
            <!--<span class="home-icon"></span>-->
            <!--<label class="item-txt" >首页</label>-->
          <!--</router-link>-->
        <!--</li>-->
        <!--<li class="tab-item" :class="{ selected:currentIndex==1}">-->
          <!--<router-link to="/gas">-->
            <!--<span class="gas-icon"></span>-->
            <!--<label class="item-txt" >加油</label>-->
          <!--</router-link>-->
        <!--</li>-->
        <!--<li class="tab-item" :class="{ selected:currentIndex==2}">-->
          <!--<router-link to="/car">-->
            <!--<span class="car-icon"></span>-->
            <!--<label class="item-txt">汽车服务</label>-->
          <!--</router-link>-->
        <!--</li>-->
        <!--<li class="tab-item" :class="{ selected:currentIndex==3}">-->
          <!--<router-link to="/my">-->
            <!--<span class="my-icon"></span>-->
            <!--<label class="item-txt">我</label>-->
          <!--</router-link>-->
        <!--</li>-->
      </ul>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>

  var arr=[
    {
      icon:'home-icon',
      txt:'首页',
      href:'home'
    },
    {
      icon:'gas-icon',
      txt:'加油',
      href:'gas'
    },{
      icon:'car-icon',
      txt:'汽车',
      href:'car'
    },
    {
      icon:'my-icon',
      txt:'我',
      href:'my'
    }
  ];

  export default {
    name: 'app',
    data: function () {
      return {
        items:arr,
        currentIndex:getCurrentIndex(this.$route.name)
      }
    },
    methods: {
      selected: function(index) {
        console.log(index);
        this.currentIndex = index;
      }
    }
  };

  function getCurrentIndex(name){
    for(var i=0;i<arr.length;i++){
      if(arr[i].href==name){
        return i;
      }
    }
  }
</script>

<style>
  @import "./assets/style/base.css";
  @import "./assets/style/menu.css";
  #menu-wrapper{
    height: 50px;
    background-color: #fff;
    margin: 0 auto;
    max-width: 700px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 9999;
    opacity: 1;
    display: inline-block;
    border-top:1px solid #dfdfdf;
  }
</style>
