<template>
    <div class="sign-in">
        <div class="sign-in-top" :style="{backgroundImage:'url('+daily.picture+')'}">
            <div class="s-i-date">
                <div>每日画报</div>
                <div>
                    <b>{{daily.day}}</b>
                    <span>日</span>
                </div>
                <div>{{daily.year}}年{{daily.month}}月</div>
            </div>
            <i class="iconfont i-guanbi close"></i>
            <div class="s-i-group">
                <div><i class="iconfont i-dianpu" @click="showAlert"></i></div>
                <div><i class="iconfont i-fanhuiyou" @click="goBack"></i></div>
            </div>
        </div>
        <div class="sign-in-bottom" ref="bottom">
            <p>{{daily.context}}</p>
            <p>{{daily.dpname}}</p>
            <div class="s-i-btn">签到</div>
        </div>
    </div>
</template>
<script>
import {dialog} from '../../service/dialog'
import score from './dialogSlot'
export default {
    data(){
        return {
            daily:{
                picture:require('../../assets/p13.png'),
                context:'我喜欢就是最好的样式',
                dpname:'美克美家',
                year:2017,
                month:'06',
                day:23
            }
        }
    },
    methods:{
        goBack(){
            this.$router.go(-1);
        },
        showAlert() {
            dialog.open({
                type:'component',
                target:this.$refs.bottom
            },null,score);
        }
    },
    mounted(){
        
    }
}
</script>
<style lang="less" scoped>
    .sign-in{
        .flex-column-center;
        >div{
            width: 100%;
        }
        .sign-in-top{
            .bg-img-cover;
            flex-grow: 1;
            box-sizing: border-box;
            padding: 1.5rem;
            position: relative;
            .s-i-date{
                font-size: 2rem;
                color: #fff;
                border:1px solid #fff;
                display: inline-flex;
                flex-direction: column;
                >div{
                    padding: 0.5rem 1rem;
                }
                >div:nth-child(1){
                    font-size:1.5rem;
                    padding-top:1rem;
                    text-align:center;
                }
                >div:nth-child(2){
                    display: inline-flex;
                    align-items: flex-end;
                    justify-content: flex-end;
                    padding: 3.5rem 1rem 1rem 1rem;
                    b{
                        font-size: 5.5rem;
                        line-height: 3.5rem;
                    }
                }
                >div:nth-child(3){border-top: 1px solid #fff;}
            }
            .close{
                font-size:2rem;
                position: absolute;
                right: 1.5rem;
                top: 1.5rem;
                color: #fff;
            }
            .s-i-group{
                .flex-row-center;
                justify-content: flex-end;
                position: absolute;
                bottom: 1.5rem;
                right: 1.5rem;
                width: 100%;
                >div{
                    display: inline-flex;
                    padding: 0.5rem;
                    border-radius: 50%;
                    color: #fff;
                    border: 1px solid #fff;
                    margin-left: 2rem;
                    i{
                        font-size: 2.5rem;
                    }
                }
            }
        }
        .sign-in-bottom{
            .flex-column-center;
            flex-shrink: 0;
            height: 34%;
            background: @bg-color-2;
            color: #fff;
            p:nth-child(1){font-size: 2.5rem;}
            p:nth-child(2){font-size: 1.5rem;margin: 3% 0 10% 0;}
            .s-i-btn{
                width: 50%;
                line-height: 3.5rem;
                border: 1px solid #666;
                color: #666;
                text-align: center;
                font-size: 1.6rem;
                border-radius: 1.8rem;
            }
        }
    }
</style>
