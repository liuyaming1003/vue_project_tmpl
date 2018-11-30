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
        <Container>
            <p v-for="n in 20">{{n}}</p>
            <router-link class="ft-item" active-class="router-active" to="/page-one">
                页面1
            </router-link>
        </Container>
    </div>
</template>

//样式
<style lang="scss" scoped>
    .container{
        background: gray;
    }

</style>

<script type="text/javascript">
    import NavHeader from '../components/nav-header';
    import Container from '../components/container';
    export default {
        name: 'home', //组件名称
        //组件声明
        components:{
            NavHeader,
            Container,
        },
        //数据
        data(){
            return{

            }
        },

        //创建之前
        beforeCreate(){
            //添加到缓冲机制中
            this.$store.dispatch('pushKeepAlive', 'home');
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