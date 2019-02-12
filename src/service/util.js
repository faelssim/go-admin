import {Toast} from 'cube-ui';
const util={
    winWidth:0,
    winHeight:0,
    test(type,value,tips=true){
        let flag=true;
        let msg='';
        if(type=='phone'){
            if(value==''){
                flag=false;
                msg='手机号不可为空';
            }else if(!/^1[0-9]{10}$/.test(value)){
                flag=false;
                msg='手机号格式有误';
            }else{
                flag=true;
                msg='';
            }
        }
        if(tips&&!flag){
            const toast = Toast.$create({
                time: 1000,
                mask:true,
                maskClosable:false,
                type:'warn',
                txt: msg
            });
            toast.show();
        }
        return flag;
        //...
    }
}
export default util;