/*
 * container 组件
 * @Date    : 2017-03-18 11:01:48
 * @Author  : liuym (liuyaming1003@gmail.com)
 * @Version : V1.0
 *
 */

<template>
    <div class="container">
        <slot></slot>
    </div>
</template>

//样式
<style lang="scss" scoped>

</style>

<script type="text/javascript">
    export default {
        name: 'container',
        data(){
            return{
                scrollTop: 0,
            }
        },
        //组件从缓冲中使用会出发
        activated(){
            console.log('container activated',);
            this.$el.scrollTop =  this.scrollTop; 
        },

        deactivated(){
            console.log('container deactivated',);
            this.scrollTop = this.$el.scrollTop;
        },
    }
</script>