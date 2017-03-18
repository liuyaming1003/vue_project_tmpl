/*
 * 首页1
 * @Date    : 2017-03-11 12:15:39
 * @Author  : liuym (liuyaming1003@gmail.com)
 * @Version : V1.0
 *
 */

<template>
    <div class="page">
        <nav-header title="页面1" :showRight="false" ></nav-header>
        <container >
            <p v-for="n in 20">{{n}}</p>
            <router-link class="ft-item" active-class="router-active" to="/page-two">
                页面2
            </router-link>
            <input />
        </container>
    </div>
</template>

//样式
<style lang="scss" scoped>
    .container{
        background: #ccc;
    }
</style>

<script type="text/javascript">
    import NavHeader from '../components/nav-header';
    import Container from '../components/container';
    export default {
        name: 'page-one', //组件名称
        //组件声明
        components:{
            NavHeader,
            Container
        },
        //数据
        data(){
            return{

            }
        },
        //监听
        watch (){
            
        },
        //计算
        computed (){

        },
        //页面第一次加载完成
        mounted(){
            //this.(function () {
                // 代码保证 this. 在 document 中
            // })
        },

        //创建之前
        beforeCreate(){
            //添加到缓冲机制中
            this.$store.dispatch('pushKeepAlive', 'page-one');
        },

        //页面创建时
        created(){

        },

        //方法
        methods (){

        },
        //组件从缓冲中使用会出发
        activated(){
            console.log('home activated',);
        },
    }
</script>