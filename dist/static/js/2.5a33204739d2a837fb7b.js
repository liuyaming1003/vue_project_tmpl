webpackJsonp([2,5],{38:function(t,e,i){i(54);var a=i(13)(i(51),i(57),"data-v-49f1693b",null);t.exports=a.exports},40:function(t,e,i){e=t.exports=i(36)(),e.push([t.i,".header[data-v-4c5440d0]{height:44px;line-height:44px;box-sizing:border-box;padding:0 10px;background:#ff3e33;color:#fff;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.is-fixed[data-v-4c5440d0]{top:0;right:0;left:0;position:fixed;z-index:999}.header .is-left[data-v-4c5440d0]{-ms-flex:2;flex:2;text-align:left}.header .is-left img[data-v-4c5440d0]{width:21px;vertical-align:middle;display:inline-block}.is-center[data-v-4c5440d0]{-ms-flex:8;flex:8;font-size:17px;text-align:center}.header .is-right[data-v-4c5440d0]{-ms-flex:2;flex:2;text-align:right}.header .is-right img[data-v-4c5440d0]{width:25px;vertical-align:middle;display:inline-block}",""])},41:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{customClass:{type:String,default:"custom-header"},showHeader:{type:Boolean,default:!0},title:String,showLeft:{type:Boolean,default:!0},leftFunc:{type:Function},showCenter:{type:Boolean,default:!0},showRight:{type:Boolean,default:!0},rightFunc:{type:Function},isKeepAlive:{type:Boolean,default:!0}},data:function(){return{}},watch:{},computed:{},methods:{back:function(){"function"==typeof this.leftFunc?this.leftFunc():(this.$router.back(),this.isKeepAlive&&this.$store.dispatch("popKeepAlive"),this.$store.dispatch("setBackMark",!0),this.$store.dispatch("setPageAnimation",{enter:"page-animated fadeInLeft",leave:"page-animated fadeOutRight"}))},home:function(){"function"==typeof this.rightFunc?this.rightFunc():(this.$store.dispatch("popRootKeepAlive"),this.$router.replace("/home"),this.$store.dispatch("setPageAnimation",{enter:"page-animated fadeInLeft",leave:"page-animated fadeOutRight"}))}},created:function(){this.$on("dealloc",function(){this.$destroy()})}}},42:function(t,e,i){var a=i(40);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);i(37)("d595e18e",a,!0)},43:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAMAAADyHTlpAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpiZWY1ZDc3Ny1mZmYwLWQ4NDYtOWIyOS01M2U3YTU3ODEwZGQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RUVCMkRGRUFGRTJBMTFFNkE3M0ZBMUVCQzkyRDhGQzciIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RUVCMkRGRTlGRTJBMTFFNkE3M0ZBMUVCQzkyRDhGQzciIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6YmYyNzJmNmYtYjVhMy1jODQ3LTg2ZWYtMGVlZTY2MWY4NTc0IiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6YzBhMGQ4YmEtZjRiNS0xMWU2LThhZDUtYTYyYWYyYzdkY2E5Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+ibqj8wAAAAZQTFRF////////VXz1bAAAAAJ0Uk5T/wDltzBKAAAAeklEQVR42uzVORKAMAxDUeX+lwbClkBi689Qovp1tmWVZ1RT3tFYjqwmMqeyqWwqm8aypYlsaCZvmsqL5vKkhjyoI3dqyUo9uVFTrtSVHYxlT/98FzJYsi5kCclqk4MhZ0iOm1QGKSJSb6Q0SRWTgidvgzyj4MUtAgwApMIEHR8K4iAAAAAASUVORK5CYII="},44:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAwCAYAAAC8NUKEAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpiZWY1ZDc3Ny1mZmYwLWQ4NDYtOWIyOS01M2U3YTU3ODEwZGQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MjA0Q0E3RkEwMEFBMTFFN0FCMjlEQjg1RUEyRTA2NkQiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MjA0Q0E3RjkwMEFBMTFFN0FCMjlEQjg1RUEyRTA2NkQiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NjY2NzEwODQtYjdlYi1mYTRlLThlNjktNjM4YTgxMzI1ZDYzIiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6YzkwMTY3ZjUtN2ExNi0xMWU2LTkzYmQtZjlmZDc1MDYwOWJkIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Pjz7NwAAAhpJREFUeNrsmj1IAzEUx3sKfg2KRQUXV1ftKm5OQosufk8uTg5+gELF1dFVHFzVwUUQ3BQ7OVhQsBQEq1sVtFUUVNT4P4hwlOold++lR7kHvy3J5ZeXhneXWkKISLVEDePYCZACefAE3kAGTLA90c4MA/PgW/wdSY7ncomoRDLoMqoiLEKVFCEXqrQIqVAQRMiETIkcmhAyIbIo269wC5kSiZgQMinCLmRahFWIQ2RBcTxyIVMinaCdW4hbZBRcOdpcgBEuIS6RWrD+T/s1YFELcYg0gD2FfhtSmkyIWqQZHGmUMNugjkqIUqQDpD3UZAegiUKISqQLZH0UmSegxa+Qc0JzHkW6wQ1B1ZyW2fUs9Nsx7vLO/pdID8gLusjKLOsKTTlljj2I9IGCoI9bmW0doYxTJqcpMgBeBV/cgV4NoTenzL6GSFx25o4i6FcUOnfKxMqs9HcZkTHwIcyFPadBFyF7nsOlp1lMZugapECiRGQafArz8S4X8Xcek+ASvIBTMKRbNc8qnnZcYS/iDEXVvCyCEfZiLv03V0vhFiBo1wRWJW4BquJKY1yunhtRsEWaMuJt9gDaNNpHZZ9AbjNLs/1jkDPjRUiEB0AoE6x4qSaZmvAACH8zoYxZmZzGeM/M8y36ldnVeNg+o4h9UKz6/e9MKzhTvFGOerhW3HQZ9x7syC9CEb8vZyaiUVbQ9eDLsV0LOoP8CDAAYG9l5jR+iEgAAAAASUVORK5CYII="},45:function(t,e,i){i(42);var a=i(13)(i(41),i(46),"data-v-4c5440d0",null);t.exports=a.exports},46:function(t,e,i){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.showHeader?a("div",{staticClass:"header",class:[t.customClass]},[a("div",{staticClass:"is-left"},[t.showLeft?a("img",{attrs:{src:i(43),alt:""},on:{click:t.back}}):t._e(),t._v(" "),t._t("left")],2),t._v(" "),a("div",{staticClass:"is-center"},[t.showCenter?a("div",[t._v(t._s(t.title))]):t._e(),t._v(" "),t._t("center")],2),t._v(" "),a("div",{staticClass:"is-right"},[t.showRight?a("img",{attrs:{src:i(44),alt:""},on:{click:t.home}}):t._e(),t._v(" "),t._t("right")],2)]):t._e()},staticRenderFns:[]}},48:function(t,e,i){e=t.exports=i(36)(),e.push([t.i,".container[data-v-49f1693b]{background:#ccc}",""])},51:function(t,e,i){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var c=i(45),n=a(c);e.default={name:"page-one",components:{NavHeader:n.default},data:function(){return{}},watch:function(){},computed:function(){},mounted:function(){},beforeCreate:function(){this.$store.dispatch("pushKeepAlive","page-one")},created:function(){},methods:function(){},activated:function(){}}},54:function(t,e,i){var a=i(48);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);i(37)("1598551c",a,!0)},57:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"page"},[i("nav-header",{attrs:{title:"页面1",showRight:!1}}),t._v(" "),i("div",{staticClass:"container"},[i("router-link",{staticClass:"ft-item",attrs:{"active-class":"router-active",to:"/page-two"}},[t._v("\n        页面2\n    ")]),t._v(" "),i("input")],1)],1)},staticRenderFns:[]}}});