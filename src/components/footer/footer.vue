<template>
    <ul class="g-footer">
        <li
            v-for="item in navs"
            :key="item.icon"
        >
            <i class="iconfont" :class="item.icon"></i>
            <span>{{item.label}}</span>
            <div class="pointer" v-if="item.isRed"></div>
        </li>
    </ul>
</template>
<script>
export default {
    data(){
        return {
            navs:[
                {icon:'i-shouye',label:'首页',isRed:false},
                {icon:'i-gongsi',label:'商城',isRed:false},
                {icon:'i-faxian',label:'发现',isRed:false},
                {icon:'i-piggy-bank',label:'分期',isRed:false},
                {icon:'i-geren',label:'我的',isRed:true}
            ]
        }
    }
}
</script>
<style lang="less" scoped>
    .g-footer{
        width: 100%;
        height: auto;
        display: flex;
        align-items: center;
        justify-content: space-around;
        flex-shrink: 0;
        li{
            .flex-column-center;
            display: inline-flex;
            font-size: 1.5rem;
            padding: 1rem 0;
            position: relative;
            color: @font-color-2;
            i{
                font-size: 2.7rem;
                margin-bottom: 0.5rem;
            }
            .pointer{
                position: absolute;
                width: 1rem;
                height: 1rem;
                background: red;
                border-radius: 50%;
                top: 1rem;
                right: 0;
            }
        }
    }
</style>
