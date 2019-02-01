import Vue from 'vue'

Vue.directive('tap',{
    inserted(el,binding,vnode){
        el.addEventListener('touchend',function(){
            if(typeof binding.value!='function'){
                console.error('当前指令绑定的值不是一个function.')
            }else{
                binding.value.apply(this);
            }
        });
    }
});