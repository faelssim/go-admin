import Vue from 'vue'

Vue.filter('phone',function(value){
    if(typeof value!='string'||!value)
        return value;
    else{
        return `${value.substring(0,3)}****${value.substring(7)}`;
    }
})