import Radio from './radio/radio';
import Button from './button/button';
import Avatar from './avatar/avatar';
import Nulltip from './nulltip/nulltips';
import Copyright from './copyright/copyright';
import Text from './text/text';
import Image from './image/image';

const _Radio={
    install:function(Vue){
        Vue.component('mRadio',Radio);
    }
}
const _Button={
    install:function(Vue){
        Vue.component('mButton',Button);
    }
}
const _Avatar={
    install:function(Vue){
        Vue.component('avatar',Avatar);
    }
}
const _Nulltip={
    install:function(Vue){
        Vue.component('nullTip',Nulltip);
    }
}
const _Copyright={
    install:function(Vue){
        Vue.component('copyRight',Copyright);
    }
}
const _Text={
    install:function(Vue){
        Vue.component('mText',Text);
    }
}
const _Image={
    install:function(Vue){
        Vue.component('mImage',Image);
    }
}

export {_Radio,_Avatar,_Button,_Nulltip,_Copyright,_Text,_Image};