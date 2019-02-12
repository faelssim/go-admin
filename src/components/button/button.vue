<template>
    <div
        class="flex-row-center m-button"
        :class="{disabled:disabled,[size]:true}"
        :style="{backgroundColor:color,color:fontColor,borderColor:color=='#fff'?borderColor:'transparent'}"
        v-tap="doEvent"
    >
        <i class="iconfont i-loading" v-if="loading"></i>
        <slot v-if="buttonType=='none'"></slot>
        <span v-else>
            {{isSend?seconds+'s后重新获取':'获取验证码'}}
        </span>
    </div>
</template>
<script>
export default {
    props:{
        size:{default:'small'},
        color:{default:'#fff'},
        fontColor:{default:'#333'},
        borderColor:{default:'#ccc'},
        disabled:{default:false},
        loading:{defult:false},
        buttonType:{default:'none'},
        bindPhone:{default:''}
    },
    data(){
        return {
            seconds:59,
            isSend:false,
            interval:null
        }
    },
    methods:{
        doEvent(){
            if(this.buttonType!='none'){
                if(this.$util.test('phone',this.bindPhone)&&!this.isSend){
                    this.isSend=true;
                    this.interval=setInterval(()=>{
                        this.seconds--;
                        if(this.seconds<1){
                            clearInterval(this.interval);
                            this.seconds=59;
                            this.isSend=false;
                        }
                    },1000);
                    this.getCode();
                }
            }else{
                if(!this.disabled&&!this.loading){
                    this.$emit('click');
                }
            }
        },
        getCode(){
            console.log(this.bindPhone)
        }
    }
}
</script>
<style lang="less" scoped>
    @large:5rem;
    @small:3rem;
    @mini:2rem;
    .m-button{
        width: 100%;
        box-sizing: border-box;
        border-width: 1px;
        border-style: solid;
        i{
            margin-right: 0.5rem;
            animation: xz 1.2s linear infinite; 
            //nimation-fill-mode: forwards;
        }
    }
    .disabled{
        background-color: #ccc !important;
    }
    .small{
        height: 2rem;
        font-size: 1.8rem;
    }
    .large{
        height: @large;
        font-size: 1.8rem;
        border-top-left-radius: @large;
        border-top-right-radius: @large;
        border-bottom-left-radius: @large;
        border-bottom-right-radius: @large;
    }
    .small{
        height: @small;
        font-size: 1.2rem;
        border-top-left-radius: @small;
        border-top-right-radius: @small;
        border-bottom-left-radius: @small;
        border-bottom-right-radius: @small;
    }
    .mini{
        height: @mini;
        font-size: 1rem;
        border-top-left-radius: @mini;
        border-top-right-radius: @mini;
        border-bottom-left-radius: @mini;
        border-bottom-right-radius: @mini;
    }
    @keyframes xz{
        from{transform: rotateZ(0);}
        to{transform: rotateZ(360deg);}
    }
</style>
