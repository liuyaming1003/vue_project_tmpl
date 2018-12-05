/*
 * 导航条
 * @Date    : 2017-03-06 14:32:00
 * @Author  : liuym (liuyaming1003@gmail.com)
 * @Version : V1.0
 *
 */

<template>
    <div class="header" v-if="showHeader" v-bind:class="[customClass]">
        <div class="is-left">
            <img v-if="showLeft" @click="back" src='../assets/icon/icon-goback.png' alt='' />
            <slot name="left" ></slot>
        </div>
        <div class="is-center">
            <div v-if="showCenter">{{title}}</div>
            <slot name="center"></slot>
        </div>
        <div class="is-right">
            <img v-if="showRight" @click="home" src="../assets/icon/icon-home.png" alt='' />
            <slot name="right"></slot>
        </div>
    </div>
</template>

//样式
<style lang="scss" scoped>
    .header {
        height: 44px;
        line-height: 44px;
        box-sizing: border-box;
        padding: 0px 10px 0px 10px;
        background: #4bb9f8;
        color: #fff;
        display: flex;

        align-items:center;
    }

    .is-fixed {
        top: 0;
        right: 0;
        left: 0;
        position: fixed;
        z-index: 999;
    }
    .header {
        .is-left {
            flex: 2;
            text-align: left;

            img{
                width: 21px;
                vertical-align: middle;
                display: inline-block;
            }
        }
    }
    .is-center {
        flex: 8;
        font-size: 17px;
        text-align: center;
    }
    .header {
        .is-right {
            flex: 2;
            text-align: right;

            img{
                width: 25px;
                vertical-align: middle;
                display: inline-block;
            }

        }
    }
    
</style>

<script type="text/javascript">
    export default {
        props:{
            customClass:{ //自定义样式
                type:String,
                default:'custom-header',
            },
            showHeader:{ //是否显示导航条
                type:Boolean,
                default:true,
            },
            title:String, //导航条文本
            showLeft:{    //是否显示左边按钮
                type:Boolean,
                default:true,
            },
            leftFunc:{    //左边按钮触发函数，默认返回上一页
                type: Function,
            },
            showCenter:{  //是否显示中间
                type:Boolean,
                default:true,
            },
            showRight:{  //是否显示右边
                type:Boolean,
                default:true,
            },
            rightFunc:{ //右边触发函数，默认返回首页
                type: Function,
            },
            isKeepAlive:{ //是否换成页面，默认缓存
                type:Boolean,
                default: true,
            }

        },
        //数据
        data(){
            return{

            }
        },
        //监听
        watch:{

        },
        //计算
        computed:{

        },
        //方法
        methods:{
            back(){
                if(typeof this.leftFunc === 'function'){
                    this.leftFunc();
                }else{
                    this.$router.back();

                    //返回时删除缓存
                    if(this.isKeepAlive){
                        this.$store.dispatch('popKeepAlive');
                    }

                    this.$store.dispatch('setBackMark', true);

                    this.$store.dispatch('setPageAnimation',{
                        enter:'page-animated fadeInLeft',
                        leave:'page-animated fadeOutRight'
                    });
                    console.log("back");
                }
            },

            home(){
                if(typeof this.rightFunc === 'function'){
                    this.rightFunc();
                }else{
                    console.log("home");
                    //跳回首页时清除缓存
                    this.$store.dispatch('popRootKeepAlive');
                    this.$router.replace('/home');

                    this.$store.dispatch('setPageAnimation',{
                        enter:'page-animated fadeInLeft',
                        leave:'page-animated fadeOutRight'
                    });
                }
            }
        },
        created(){
            this.$on("dealloc", function(){
                console.log("dealloc");
                this.$destroy();
            });
        }
    }
</script>
