webpackJsonp([2,5],{

/***/ 19:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(35)

var Component = __webpack_require__(7)(
  /* script */
  __webpack_require__(32),
  /* template */
  __webpack_require__(38),
  /* scopeId */
  "data-v-49f1693b",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 21:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)();
// imports


// module
exports.push([module.i, ".header[data-v-4c5440d0]{height:44px;line-height:44px;box-sizing:border-box;padding:0 10px;background:#ff3e33;color:#fff;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.is-fixed[data-v-4c5440d0]{top:0;right:0;left:0;position:fixed;z-index:999}.header .is-left[data-v-4c5440d0]{-ms-flex:2;flex:2;text-align:left}.header .is-left img[data-v-4c5440d0]{width:21px;vertical-align:middle;display:inline-block}.is-center[data-v-4c5440d0]{-ms-flex:8;flex:8;font-size:17px;text-align:center}.header .is-right[data-v-4c5440d0]{-ms-flex:2;flex:2;text-align:right}.header .is-right img[data-v-4c5440d0]{width:25px;vertical-align:middle;display:inline-block}", "", {"version":3,"sources":["/Users/liuym/Project/github/liuym/vue_project_tmpl/src/components/nav-header.vue"],"names":[],"mappings":"AACA,yBACE,YAAa,AACb,iBAAkB,AAClB,sBAAuB,AACvB,eAA2B,AAC3B,mBAAoB,AACpB,WAAY,AACZ,oBAAqB,AACrB,aAAc,AACd,sBAAuB,AACnB,kBAAoB,CACzB,AACD,2BACE,MAAO,AACP,QAAS,AACT,OAAQ,AACR,eAAgB,AAChB,WAAa,CACd,AACD,kCACE,WAAY,AACR,OAAQ,AACZ,eAAiB,CAClB,AACD,sCACI,WAAY,AACZ,sBAAuB,AACvB,oBAAsB,CACzB,AACD,4BACE,WAAY,AACR,OAAQ,AACZ,eAAgB,AAChB,iBAAmB,CACpB,AACD,mCACE,WAAY,AACR,OAAQ,AACZ,gBAAkB,CACnB,AACD,uCACI,WAAY,AACZ,sBAAuB,AACvB,oBAAsB,CACzB","file":"nav-header.vue","sourcesContent":["\n.header[data-v-4c5440d0] {\n  height: 44px;\n  line-height: 44px;\n  box-sizing: border-box;\n  padding: 0px 10px 0px 10px;\n  background: #ff3e33;\n  color: #fff;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n      align-items: center;\n}\n.is-fixed[data-v-4c5440d0] {\n  top: 0;\n  right: 0;\n  left: 0;\n  position: fixed;\n  z-index: 999;\n}\n.header .is-left[data-v-4c5440d0] {\n  -ms-flex: 2;\n      flex: 2;\n  text-align: left;\n}\n.header .is-left img[data-v-4c5440d0] {\n    width: 21px;\n    vertical-align: middle;\n    display: inline-block;\n}\n.is-center[data-v-4c5440d0] {\n  -ms-flex: 8;\n      flex: 8;\n  font-size: 17px;\n  text-align: center;\n}\n.header .is-right[data-v-4c5440d0] {\n  -ms-flex: 2;\n      flex: 2;\n  text-align: right;\n}\n.header .is-right img[data-v-4c5440d0] {\n    width: 25px;\n    vertical-align: middle;\n    display: inline-block;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 22:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
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
//

/* harmony default export */ __webpack_exports__["default"] = {
    props: {
        customClass: { //自定义样式
            type: String,
            default: 'custom-header'
        },
        showHeader: { //是否显示导航条
            type: Boolean,
            default: true
        },
        title: String, //导航条文本
        showLeft: { //是否显示左边按钮
            type: Boolean,
            default: true
        },
        leftFunc: { //左边按钮触发函数，默认返回上一页
            type: Function
        },
        showCenter: { //是否显示中间
            type: Boolean,
            default: true
        },
        showRight: { //是否显示右边
            type: Boolean,
            default: true
        },
        rightFunc: { //右边触发函数，默认返回首页
            type: Function
        },
        isKeepAlive: { //是否换成页面，默认缓存
            type: Boolean,
            default: true
        }

    },
    //数据
    data() {
        return {};
    },
    //监听
    watch: {},
    //计算
    computed: {},
    //方法
    methods: {
        back() {
            if (typeof this.leftFunc === 'function') {
                this.leftFunc();
            } else {
                this.$router.back();

                //返回时删除缓存
                if (this.isKeepAlive) {
                    this.$store.dispatch('popKeepAlive');
                }

                this.$store.dispatch('setBackMark', true);

                this.$store.dispatch('setPageAnimation', {
                    enter: 'page-animated fadeInLeft',
                    leave: 'page-animated fadeOutRight'
                });
                console.log("back");
            }
        },

        home() {
            if (typeof this.rightFunc === 'function') {
                this.rightFunc();
            } else {
                console.log("home");
                //跳回首页时清除缓存
                this.$store.dispatch('popRootKeepAlive');
                this.$router.replace('/home');

                this.$store.dispatch('setPageAnimation', {
                    enter: 'page-animated fadeInLeft',
                    leave: 'page-animated fadeOutRight'
                });
            }
        }
    },
    created() {
        this.$on("dealloc", function () {
            console.log("dealloc");
            this.$destroy();
        });
    }
};

/***/ }),

/***/ 23:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(21);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(18)("4adddb3d", content, true);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/.0.26.4@css-loader/index.js?{\"minimize\":true,\"sourceMap\":true}!../../node_modules/vue-loader/lib/style-rewriter.js?{\"id\":\"data-v-4c5440d0\",\"scoped\":true,\"hasInlineConfig\":true}!../../node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./nav-header.vue", function() {
     var newContent = require("!!../../node_modules/.0.26.4@css-loader/index.js?{\"minimize\":true,\"sourceMap\":true}!../../node_modules/vue-loader/lib/style-rewriter.js?{\"id\":\"data-v-4c5440d0\",\"scoped\":true,\"hasInlineConfig\":true}!../../node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./nav-header.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 24:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAMAAADyHTlpAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpiZWY1ZDc3Ny1mZmYwLWQ4NDYtOWIyOS01M2U3YTU3ODEwZGQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RUVCMkRGRUFGRTJBMTFFNkE3M0ZBMUVCQzkyRDhGQzciIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RUVCMkRGRTlGRTJBMTFFNkE3M0ZBMUVCQzkyRDhGQzciIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6YmYyNzJmNmYtYjVhMy1jODQ3LTg2ZWYtMGVlZTY2MWY4NTc0IiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6YzBhMGQ4YmEtZjRiNS0xMWU2LThhZDUtYTYyYWYyYzdkY2E5Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+ibqj8wAAAAZQTFRF////////VXz1bAAAAAJ0Uk5T/wDltzBKAAAAeklEQVR42uzVORKAMAxDUeX+lwbClkBi689Qovp1tmWVZ1RT3tFYjqwmMqeyqWwqm8aypYlsaCZvmsqL5vKkhjyoI3dqyUo9uVFTrtSVHYxlT/98FzJYsi5kCclqk4MhZ0iOm1QGKSJSb6Q0SRWTgidvgzyj4MUtAgwApMIEHR8K4iAAAAAASUVORK5CYII="

/***/ }),

/***/ 25:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAwCAYAAAC8NUKEAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpiZWY1ZDc3Ny1mZmYwLWQ4NDYtOWIyOS01M2U3YTU3ODEwZGQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MjA0Q0E3RkEwMEFBMTFFN0FCMjlEQjg1RUEyRTA2NkQiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MjA0Q0E3RjkwMEFBMTFFN0FCMjlEQjg1RUEyRTA2NkQiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NjY2NzEwODQtYjdlYi1mYTRlLThlNjktNjM4YTgxMzI1ZDYzIiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6YzkwMTY3ZjUtN2ExNi0xMWU2LTkzYmQtZjlmZDc1MDYwOWJkIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Pjz7NwAAAhpJREFUeNrsmj1IAzEUx3sKfg2KRQUXV1ftKm5OQosufk8uTg5+gELF1dFVHFzVwUUQ3BQ7OVhQsBQEq1sVtFUUVNT4P4hwlOold++lR7kHvy3J5ZeXhneXWkKISLVEDePYCZACefAE3kAGTLA90c4MA/PgW/wdSY7ncomoRDLoMqoiLEKVFCEXqrQIqVAQRMiETIkcmhAyIbIo269wC5kSiZgQMinCLmRahFWIQ2RBcTxyIVMinaCdW4hbZBRcOdpcgBEuIS6RWrD+T/s1YFELcYg0gD2FfhtSmkyIWqQZHGmUMNugjkqIUqQDpD3UZAegiUKISqQLZH0UmSegxa+Qc0JzHkW6wQ1B1ZyW2fUs9Nsx7vLO/pdID8gLusjKLOsKTTlljj2I9IGCoI9bmW0doYxTJqcpMgBeBV/cgV4NoTenzL6GSFx25o4i6FcUOnfKxMqs9HcZkTHwIcyFPadBFyF7nsOlp1lMZugapECiRGQafArz8S4X8Xcek+ASvIBTMKRbNc8qnnZcYS/iDEXVvCyCEfZiLv03V0vhFiBo1wRWJW4BquJKY1yunhtRsEWaMuJt9gDaNNpHZZ9AbjNLs/1jkDPjRUiEB0AoE6x4qSaZmvAACH8zoYxZmZzGeM/M8y36ldnVeNg+o4h9UKz6/e9MKzhTvFGOerhW3HQZ9x7syC9CEb8vZyaiUVbQ9eDLsV0LOoP8CDAAYG9l5jR+iEgAAAAASUVORK5CYII="

/***/ }),

/***/ 26:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(23)

var Component = __webpack_require__(7)(
  /* script */
  __webpack_require__(22),
  /* template */
  __webpack_require__(27),
  /* scopeId */
  "data-v-4c5440d0",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 27:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.showHeader) ? _c('div', {
    staticClass: "header",
    class: [_vm.customClass]
  }, [_c('div', {
    staticClass: "is-left"
  }, [(_vm.showLeft) ? _c('img', {
    attrs: {
      "src": __webpack_require__(24),
      "alt": ""
    },
    on: {
      "click": _vm.back
    }
  }) : _vm._e(), _vm._v(" "), _vm._t("left")], 2), _vm._v(" "), _c('div', {
    staticClass: "is-center"
  }, [(_vm.showCenter) ? _c('div', [_vm._v(_vm._s(_vm.title))]) : _vm._e(), _vm._v(" "), _vm._t("center")], 2), _vm._v(" "), _c('div', {
    staticClass: "is-right"
  }, [(_vm.showRight) ? _c('img', {
    attrs: {
      "src": __webpack_require__(25),
      "alt": ""
    },
    on: {
      "click": _vm.home
    }
  }) : _vm._e(), _vm._v(" "), _vm._t("right")], 2)]) : _vm._e()
},staticRenderFns: []}

/***/ }),

/***/ 29:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)();
// imports


// module
exports.push([module.i, ".container[data-v-49f1693b]{background:#ccc}", "", {"version":3,"sources":["/Users/liuym/Project/github/liuym/vue_project_tmpl/src/pages/page-one.vue"],"names":[],"mappings":"AACA,4BACE,eAAiB,CAClB","file":"page-one.vue","sourcesContent":["\n.container[data-v-49f1693b] {\n  background: #ccc;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_nav_header__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_nav_header___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_nav_header__);
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
//


/* harmony default export */ __webpack_exports__["default"] = {
    name: 'page-one', //组件名称
    //组件声明
    components: {
        NavHeader: __WEBPACK_IMPORTED_MODULE_0__components_nav_header___default.a
    },
    //数据
    data() {
        return {};
    },
    //监听
    watch() {},
    //计算
    computed() {},
    //页面第一次加载完成
    mounted() {
        //this.(function () {
        // 代码保证 this. 在 document 中
        // })
    },

    //创建之前
    beforeCreate() {
        //添加到缓冲机制中
        this.$store.dispatch('pushKeepAlive', 'page-one');
    },

    //页面创建时
    created() {},

    //方法
    methods() {},
    //组件从缓冲中使用会出发
    activated() {
        console.log('home activated');
    }
};

/***/ }),

/***/ 35:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(29);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(18)("0e50ee90", content, true);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/.0.26.4@css-loader/index.js?{\"minimize\":true,\"sourceMap\":true}!../../node_modules/vue-loader/lib/style-rewriter.js?{\"id\":\"data-v-49f1693b\",\"scoped\":true,\"hasInlineConfig\":true}!../../node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./page-one.vue", function() {
     var newContent = require("!!../../node_modules/.0.26.4@css-loader/index.js?{\"minimize\":true,\"sourceMap\":true}!../../node_modules/vue-loader/lib/style-rewriter.js?{\"id\":\"data-v-49f1693b\",\"scoped\":true,\"hasInlineConfig\":true}!../../node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./page-one.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 38:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "page"
  }, [_c('nav-header', {
    attrs: {
      "title": "页面1",
      "showRight": false
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "container"
  }, [_c('router-link', {
    staticClass: "ft-item",
    attrs: {
      "active-class": "router-active",
      "to": "/page-two"
    }
  }, [_vm._v("\n        页面2\n    ")]), _vm._v(" "), _c('input')], 1)], 1)
},staticRenderFns: []}

/***/ })

});
//# sourceMappingURL=2.21f64c7ef52af8fa1d27.js.map