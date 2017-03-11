webpackJsonp([3,5],[
/* 0 */,
/* 1 */,
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(13);



__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]);

var routers = new __WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]({
    routes: [{
        path: '/',
        component: resolve => {
            __webpack_require__.e/* require */(0).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(8)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
        }
    }, {
        path: '/home',
        component: resolve => {
            __webpack_require__.e/* require */(0/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(8)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
        }
    }, {
        path: '/page-one',
        component: resolve => {
            __webpack_require__.e/* require */(2).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(19)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
        }
    }, {
        path: '/page-two',
        component: resolve => {
            __webpack_require__.e/* require */(1).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(20)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
        }
    }]
});

routers.beforeEach((to, from, next) => {
    //处理动画
    function changedPageAnimation(to, store) {
        if (store.state.header.backMark == true) {
            store.dispatch("setPageAnimation", {
                enter: 'page-animated fadeInLeft',
                leave: 'page-animated fadeOutRight'
            });
            store.dispatch("setBackMark", false);
        } else {
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
                enter: 'page-animated fadeInRight',
                leave: 'page-animated fadeOutLeft'
            });
            // }
        }
    }

    var store = routers.app.$store;
    if (typeof store === 'undefined') {} else {
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

/* harmony default export */ __webpack_exports__["a"] = routers;

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_header__ = __webpack_require__(10);




__WEBPACK_IMPORTED_MODULE_1_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_0_vuex__["b" /* default */]);

const store = new __WEBPACK_IMPORTED_MODULE_0_vuex__["b" /* default */].Store({
    modules: {
        header: __WEBPACK_IMPORTED_MODULE_2__modules_header__["a" /* default */]
    }
});

/* harmony default export */ __webpack_exports__["a"] = store;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 5 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(11)

var Component = __webpack_require__(7)(
  /* script */
  __webpack_require__(9),
  /* template */
  __webpack_require__(12),
  /* scopeId */
  "data-v-59eb5bee",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 7 */,
/* 8 */,
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(1);
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = {
    name: 'app',
    computed: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_vuex__["a" /* mapState */])({
        keepAlive: function (state) {
            console.log("keepArray", state.header.keepArray + "");
            return state.header.keepArray + "";
        },
        enterAnimation: function (state) {
            console.log('enter', state.header.pageAnimation.enter);
            return state.header.pageAnimation.enter;
        },
        leaveAnimation: function (state) {
            console.log('leave', state.header.pageAnimation.leave);
            return state.header.pageAnimation.leave;
        }
    })
};

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

const COMMON_PUSH_KEEPALIVE = 'COMMON_PUSH_KEEPALIVE'; // 添加缓存
const COMMON_POP_KEEPALIVE = 'COMMON_POP_KEEPALIVE'; // 删除缓存
const COMMON_ROOT_KEEPALIVE = 'COMMON_ROOT_KEEPALIVE'; // 清除缓存
const COMMON_AT_NAME_KEEPALIVE = 'COMMON_AT_NAME_KEEPALIVE'; //跳到指定页面
const COMMON_PUSH_POP_ANIMATION = 'COMMON_PUSH_POP_ANIMATION'; //页面跳转动画
const COMMON_BACK_MARK = 'COMMON_BACK_MARK'; //点击了返回


const state = {
    //记录需要保持的视图, add liuym
    keepArray: [],
    //页面跳转动画标识
    pageAnimation: {
        enter: '', //进入动画
        leave: '' },
    backMark: false };

const actions = {
    pushKeepAlive({ commit }, type) {
        // add liuym
        commit(COMMON_PUSH_KEEPALIVE, type);
    },
    popKeepAlive({ commit }, type) {
        commit(COMMON_POP_KEEPALIVE, type);
    },
    popRootKeepAlive({ commit }, type) {
        commit(COMMON_ROOT_KEEPALIVE, type);
    },
    popKeepAliveAtName({ commit }, type) {
        commit(COMMON_AT_NAME_KEEPALIVE, type);
    },
    setPageAnimation({ commit }, type) {
        commit(COMMON_PUSH_POP_ANIMATION, type);
    },
    setBackMark({ commit }, type) {
        commit(COMMON_BACK_MARK, type);
    }
};

const mutations = {
    [COMMON_PUSH_KEEPALIVE](state, type) {
        state.keepArray.push(type);
    },
    [COMMON_POP_KEEPALIVE](state, type) {
        state.keepArray.pop();

        state.backMark = true;
    },
    [COMMON_ROOT_KEEPALIVE](state, type) {
        state.keepArray = [];

        state.backMark = true;
    },
    [COMMON_AT_NAME_KEEPALIVE](state, type) {
        var index = state.keepArray.indexOf(type);
        if (index >= 0) {
            state.keepArray.splice(index, state.keepArray.length);
        }

        //设置返回动画
        state.backMark = true;
    },
    [COMMON_PUSH_POP_ANIMATION](state, type) {
        console.log('COMMON_PUSH_POP_ANIMATION', type);
        state.pageAnimation = type;
    },
    [COMMON_BACK_MARK](state, type) {
        state.backMark = type;
    }
};

const getters = {
    keepArray: state => state.keepArray
};

/* harmony default export */ __webpack_exports__["a"] = {
    state,
    actions,
    mutations,
    getters
};

/***/ }),
/* 11 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "app"
    }
  }, [_c('transition', {
    attrs: {
      "enter-active-class": _vm.enterAnimation,
      "leave-active-class": _vm.leaveAnimation
    }
  }, [_c('keep-alive', {
    attrs: {
      "include": _vm.keepAlive
    }
  }, [_c('router-view')], 1)], 1)], 1)
},staticRenderFns: []}

/***/ }),
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__App__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router_index__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store_store__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__assets_css_main_scss__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__assets_css_main_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__assets_css_main_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__assets_css_page_animation_scss__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__assets_css_page_animation_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__assets_css_page_animation_scss__);







new __WEBPACK_IMPORTED_MODULE_0_vue___default.a({
  el: '#app',
  store: __WEBPACK_IMPORTED_MODULE_3__store_store__["a" /* default */],
  router: __WEBPACK_IMPORTED_MODULE_2__router_index__["a" /* default */],
  template: '<App/>',
  components: { App: __WEBPACK_IMPORTED_MODULE_1__App___default.a }
});

/***/ })
],[16]);
//# sourceMappingURL=app.23f82c38504f19f2872d.js.map