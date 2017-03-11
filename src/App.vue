<template>
  <div id="app">
      <transition 
          :enter-active-class="enterAnimation" 
          :leave-active-class="leaveAnimation"
      >
          <keep-alive :include="keepAlive">
            <router-view></router-view>
          </keep-alive>
      </transition>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    name: 'app',
    computed: mapState({
        keepAlive: function(state){
            console.log("keepArray", state.header.keepArray + "");
            return state.header.keepArray + "";
        },
        enterAnimation : function(state){
            console.log('enter', state.header.pageAnimation.enter)
            return state.header.pageAnimation.enter;
        },
        leaveAnimation : function(state){
            console.log('leave', state.header.pageAnimation.leave)
            return state.header.pageAnimation.leave;  
        }
    }),
}
</script>

<style scoped>
#app {
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;*/
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>
