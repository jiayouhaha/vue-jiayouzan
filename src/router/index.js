import Vue from 'vue'
import Router from 'vue-router'

import Home from 'pages/home/Home'
import Gas from 'pages/gas/Gas'
import Car from 'pages/car/Car'
import My from 'pages/my/My'

Vue.use(Router);

const routes = [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
        path: '/home',
        name: 'home',
        component: Home
    },
    {
        path: '/gas',
        name: 'gas',
        component: Gas
    },
    {
        path: '/car',
        name: 'car',
        component: Car
    },
    {
        path: '/my',
        name: 'my',
        component: My
    }
];

export default new Router({
    routes: routes
});
