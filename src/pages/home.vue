/*
 * 首页
 * @Date    : 2017-03-11 12:15:39
 * @Author  : liuym (liuyaming1003@gmail.com)
 * @Version : V1.0
 *
 */

<template>
    <div class="page">
        <nav-header title="首页" :showLeft="false" :showRight="false"></nav-header>
        <div class="container">
        </div>
    </div>
</template>

//样式
<style lang="scss" scoped>

</style>

<script type="text/javascript">
    import NavHeader from '../components/nav-header';
    export default {
        name: 'home', //组件名称
        //组件声明
        components:{
            NavHeader,
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
            // this.dispatch('pushKeepAlive', 'home');
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