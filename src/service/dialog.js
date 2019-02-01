import Vue from 'vue'
import Dialog from '../components/dialog/dialog'

export const dialog={
    open(options,renderFun,component){
        const dg_construct=Vue.extend(Dialog);
        let node;
        if(options.type=='component'){
            node=Vue.extend(component);
        }
        if(options.type=='render'){
            node=Vue.component('',{
                render:renderFun
            });
        }

        const _D=new dg_construct({
            el:document.createElement('div'),
            data:{
                node:node
            }
        })
        options.target.appendChild(_D.$el)
    }
}
//export {dialog};