import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store=new Vuex.Store({
    state:{
        navigationBarTitle:''
    },
    mutations:{
        setNavigationBarTitle(state,text){
            state.navigationBarTitle=text;
        }
    }
});
export default store;