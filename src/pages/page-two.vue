/*
 * 说明
 * @Date    : 2017-03-11 14:01:57
 * @Author  : liuym (liuyaming1003@gmail.com)
 * @Version : V1.0
 *
 */

<template>
    <div class="page">
        <nav-header title="页面2"></nav-header>
        <div class="container">
            <input />
        </div>
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
    export default {
        name: 'page-two', //组件名称
        //组件声明
        components:{
            NavHeader,
        },
        //数据
        data(){
            return{

            }
        },
        //页面第一次加载完成
        mounted(){
            this.$nextTick(function () {
                // 代码保证 this. 在 document 中
            })
        },

        //创建之前
        beforeCreate(){
            //添加到缓冲机制中
            this.$store.dispatch('pushKeepAlive', 'page-two');
        },
        //组件从缓冲中使用会出发
        activated(){
            console.log('page-two activated',);
        },
    }
</script>