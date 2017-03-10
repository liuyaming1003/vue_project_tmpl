// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index'

// Vue.use(Router)
// 0. 如果使用模块化机制编程，導入Vue和VueRouter，要调用 Vue.use(VueRouter)

// 1. 定义（路由）组件。
// 可以从其他文件 import 进来
// const Foo = { name:'foo', template: '<div>foo</div>' }
// const Bar = { name:'bar', template: '<div>bar</div>' }

// // 2. 定义路由
// // 每个路由应该映射一个组件。 其中"component" 可以是
// // 通过 Vue.extend() 创建的组件构造器，
// // 或者，只是一个组件配置对象。
// // 我们晚点再讨论嵌套路由。
// const routes = [
//   { path: '/foo', component: App },
//   { path: '/bar', component: Bar }
// ]

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
// const router = new Router({
//   routes // （缩写）相当于 routes: routes
// })

// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能
const app = new Vue({
  router
}).$mount('#router')

// import { Toast,Indicator,Loadmore, InfiniteScroll } from 'mint-ui';

// Vue.use(InfiniteScroll);

// /* eslint-disable no-new */
// // new Vue({
// //   el: '#app',
// //   router,
// //   template: '<App/>',
// //   components: { App }
// // })

// new Vue({
//     el:'#app',
//     data:{
//         message:'Hello Vue!',
//     }
// })

// var app2 = new Vue({
//     el:'#app-2',
//     data:{
//         message: 'You loaded this page on ' + new Date()
//     }
// })

// var app3 = new Vue({
//     el:'#app-3',
//     data:{
//         //参数
//         seen:true,
//     }
// })


// var app4 = new Vue({
//     el:'#app-4',
//     data:{
//         todos: [
//           { text: 'Learn JavaScript' },
//           { text: 'Learn Vue' },
//           { text: 'Build something awesome' }
//         ]
//     }
// })

// var app5 = new Vue({
//     el:'#app-5',
//     data:{
//         message: 'Hello Vue.js!'
//     },
//     methods: {
//         reverseMessage: function () {
//             this.message = this.message.split('').reverse().join('')
//         }
//     }
// })

// var app6 = new Vue({
//     el:'#app-6',
//     data:{
//         message:'Hello Vue!'
//     }
// })

// Vue.component('todo-item', {
//   props: ['todo2'],
//   template: '<li>{{ todo2.text }}</li>'
// })

// var app7 = new Vue({
//     el:'#app-7',
//     data:{
//         groceryList: [
//           { text: 'Vegetables' },
//           { text: 'Cheese' },
//           { text: 'Whatever else humans are supposed to eat' }
//         ]
//     }
// })

// var vm = new Vue({
//   el: '#example',
//   data: {
//     message: 'Hello'
//   },
//   computed: {
//     // a computed getter
//     reversedMessage: function () {
//       // `this` points to the vm instance
//       return this.message.split('').reverse().join('')
//     }
//   }
// })

// var vm2 = new Vue({
//   el: '#example1',
//   data: {
//     message: 'Hello'
//   },
//   methods: {
//     // a computed getter
//     reversedMessage: function () {
//       // `this` points to the vm instance
//       return this.message.split('').reverse().join('')
//     }
//   }
// })

// // var vm3 = new Vue({
// //   el: '#demo',
// //   data: {
// //     firstName: 'Foo',
// //     lastName: 'Bar',
// //     fullName: 'Foo Bar'
// //   },
// //   watch: {
// //     firstName: function (val) {
// //       this.fullName = val + ' ' + this.lastName
// //     },
// //     lastName: function (val) {
// //       this.fullName = this.firstName + ' ' + val
// //     }
// //   }
// // })

// var vm = new Vue({
//   el: '#demo',
//   data: {
//     firstName: 'Foo',
//     lastName: 'Bar'
//   },
//   computed: {
//     fullName: function () {
//       return this.firstName + ' ' + this.lastName
//     }
//   }
// })

// var Custom = Vue.extend({
//     template:"<p>{{firstName}} {{lastName}} aka {{alias}}</p>",
//     data: function () {
//     return {
//       firstName: 'Walter',
//       lastName: 'White',
//       alias: 'Heisenberg'
//     }
//   }
// })

// new Custom().$mount("#custom")



// var mintUI = new Vue({
//     el:'#mintUI',
//     data:{
//         title:'测试',
//         list:[1,2,3,4,5,6,7,8,10]
//     },
//     methods:{
//         toast:function(){
//             Toast({
//               message: '提示',
//               duration: 1000,
//               iconClass: 'icon icon-success'
//             });
//         },
//         indicator:function(){
//             Indicator.open({
//                 text: '加载中...',
//                 spinnerType: 'triple-bounce'
//             });
//             setTimeout(function() {
//                 Indicator.close();
//             }, 2000);
//         },

//         loadMore() {
//           this.loading = true;
//           setTimeout(() => {
//             let last = this.list[this.list.length - 1];
//             for (let i = 1; i <= 10; i++) {
//               this.list.push(last + i);
//             }
//             //this.loading = false;
//           }, 2500);
//         }

//     }
// })

// mintUI.title = '更新后'
// console.log("更新前 ", mintUI.title)
// Vue.nextTick(function(){
//     console.log("更新后 ", mintUI.title)
// })

// Vue.set(mintUI.data, "b", 2)









