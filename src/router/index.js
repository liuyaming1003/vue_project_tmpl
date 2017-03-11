import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

var routers = new Router({
  routes: [
    {
        path: '/',
        component: (resolve) => {
            require(['../pages/home'], resolve)
        },
    },
    {
        path: '/home',
        component: (resolve) => {
            require(['../pages/home'], resolve)
        },
    },
    {
        path: '/page-one',
        component: (resolve) => {
            require(['../pages/page-one'], resolve)
        },
    },
    {
        path: '/page-two',
        component: (resolve) => {
            require(['../pages/page-two'], resolve)
        },
    }
  ]
});

routers.beforeEach((to, from, next) => {
    //处理动画
    function changedPageAnimation(to, store){
        if(store.state.header.backMark == true){
            store.dispatch("setPageAnimation", {
                enter:'page-animated fadeInLeft',
                leave:'page-animated fadeOutRight'
            });
            store.dispatch("setBackMark", false);
        }else{
            // if( to.path == '/' ||
            //     to.path == '/home' ||
            //     to.path == '/loan' ||
            //     to.path == '/withdraw' ||
            //     to.path == '/my-home'){
            //     store.dispatch("setPageAnimation", {
            //         enter:'',
            //         leave:''
            //     });
            // }else{
                store.dispatch("setPageAnimation", {
                    enter:'page-animated fadeInRight',
                    leave:'page-animated fadeOutLeft'
                }); 
            // }
        }
    }

    var store = routers.app.$store;
    if(typeof store === 'undefined'){

    }else{
        changedPageAnimation(to, store);
    }

    next();

    // console.log("beforeEach to", to);
    // console.log("beforeEach from", from);
    // console.log("beforeEach next", next);
    // if(window.localStorage.getItem('login_flag') == 'true') {
    //     console.log("已经登录，不需要跳转登录");
    //     next();
    // } else {
    //     //这里是未登录
    //     //再判断哪些页面不需要跳转登录
    //     if( to.path == '/home' ||
    //         to.path == '/' ||
    //         to.path == '/login' ||
    //         to.path == '/register' ||
    //         to.path == '/forget-password' ||
    //         to.path == '/my-home' ||
    //         to.path == '/home/all-function' ||
    //         to.path == '/success') {
    //         // "不需要登录的页面"
    //         next();
    //     }else{
    //         //需要判断状态
    //         // "需要登录的页面"
    //         next({path:'/login', query:{toPage:to.path}});
    //     }
    // }
});

export default routers;
