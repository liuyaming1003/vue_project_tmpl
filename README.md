# vue_project_tmpl

# use vue keep-alive
```
<keep-alive :include="keepAlive">
    <router-view></router-view>
</keep-alive>
```
通过store修改 keepAlive的值来控制是否缓存页面，当然每个页面都需要设置name属性

在每一个页面调用pushKeepAlive方法
```
beforeCreate(){
    //添加到缓冲机制中
    this.$store.dispatch('pushKeepAlive', 'home');
},
```