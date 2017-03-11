
const COMMON_PUSH_KEEPALIVE = 'COMMON_PUSH_KEEPALIVE'; // 添加缓存
const COMMON_POP_KEEPALIVE = 'COMMON_POP_KEEPALIVE'; // 删除缓存
const COMMON_ROOT_KEEPALIVE = 'COMMON_ROOT_KEEPALIVE'; // 清除缓存
const COMMON_AT_NAME_KEEPALIVE = 'COMMON_AT_NAME_KEEPALIVE'; //跳到指定页面
const COMMON_PUSH_POP_ANIMATION = 'COMMON_PUSH_POP_ANIMATION'; //页面跳转动画
const COMMON_BACK_MARK = 'COMMON_BACK_MARK'; //点击了返回


const state = {
    //记录需要保持的视图, add liuym
    keepArray: [],
    //页面跳转动画标识
    pageAnimation:{
        enter:'', //进入动画
        leave:'', //退出动画
    },
    backMark: false, // 是否点击了返回按钮
}

const actions = {
    pushKeepAlive({commit}, type){ // add liuym
        commit(COMMON_PUSH_KEEPALIVE,type);
    },
    popKeepAlive({commit}, type){
        commit(COMMON_POP_KEEPALIVE,type);
    },
    popRootKeepAlive({commit}, type){
        commit(COMMON_ROOT_KEEPALIVE,type);   
    },
    popKeepAliveAtName({commit}, type){
        commit(COMMON_AT_NAME_KEEPALIVE,type);    
    },
    setPageAnimation({commit}, type){
        commit(COMMON_PUSH_POP_ANIMATION, type);
    },
    setBackMark({commit}, type){
        commit(COMMON_BACK_MARK, type);
    }
}

const mutations = {
    [COMMON_PUSH_KEEPALIVE](state, type){
        state.keepArray.push(type);
    },
    [COMMON_POP_KEEPALIVE](state, type){
        state.keepArray.pop();

        state.backMark = true;
    },
    [COMMON_ROOT_KEEPALIVE](state, type){
        state.keepArray = [];

        state.backMark = true;
    },
    [COMMON_AT_NAME_KEEPALIVE](state, type){
        var index = state.keepArray.indexOf(type);
        if(index >= 0){
            state.keepArray.splice(index, state.keepArray.length);
        }

        //设置返回动画
        state.backMark = true;
    },
    [COMMON_PUSH_POP_ANIMATION](state, type){
        console.log('COMMON_PUSH_POP_ANIMATION', type);
        state.pageAnimation = type;
    },
    [COMMON_BACK_MARK](state, type){
        state.backMark = type;
    }
}

const getters = {
    keepArray: state => state.keepArray,
}

export default  {
    state,
    actions,
    mutations,
    getters
}
