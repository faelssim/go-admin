<template>
    <div class="p-container">
        <div>
            <div class="p-header">
                <avatar padding="4"></avatar>
                <b>{{phone | phone}}</b>
                <i class="iconfont i-rili" v-tap="qd"></i>
            </div>
            <div class="nav">
                <ul class="nav-1 nav-1-border">
                    <li
                        v-for="item in nav1"
                        :key="item.label"
                    >
                        <div :style="{backgroundImage:'url('+item.icon+')'}">
                            <i v-if="item.isred"></i>
                        </div>
                        <span>{{item.label}}</span>
                        <span>{{item.value}}</span>
                    </li>
                </ul>
                <div class="nav-header">
                    <span>分期订单</span>
                    <a>查看全部订单></a>
                </div>
                <ul class="nav-1">
                    <li
                        v-for="item in nav2"
                        :key="item.label"
                    >
                        <i class="iconfont nav-icon" :class="item.icon"></i>
                        <span>{{item.label}}</span>
                        <span>{{item.value}}</span>
                    </li>
                </ul>
            </div>
            <div class="p-grid">
                <grid
                    icon-type="image"
                    :data="nav3"
                ></grid>
            </div>
            <img src="../../assets/p12.png" alt="" width="100%" style="display:block;">
            <copy-right></copy-right>
        </div>
        <g-footer></g-footer>
    </div>
</template>
<script>
import grid from '../../components/grid/grid'
import gFooter from '../../components/footer/footer'
export default {
    data(){
        return {
            phone:'13584833734',
            nav1:[
                {
                    label:'购物车',
                    icon:require('../../assets/p1.png'),
                    value:Math.ceil(Math.random()*10)
                },
                {
                    label:'预订单',
                    icon:require('../../assets/p2.png'),
                    value:Math.ceil(Math.random()*10)
                },
                {
                    label:'我的顾问',
                    icon:require('../../assets/p3.png'),
                    value:Math.ceil(Math.random()*10)
                },
                {
                    label:'优惠券',
                    icon:require('../../assets/p4.png'),
                    value:Math.ceil(Math.random()*10)
                },
                {
                    label:'消息',
                    icon:require('../../assets/p5.png'),
                    value:Math.ceil(Math.random()*10),
                    isred:true
                }
            ],
            nav2:[
                {
                    label:'未提交',
                    icon:'i-wenjian',
                    value:Math.ceil(Math.random()*10)
                },
                {
                    label:'审核中',
                    icon:'i-duihua',
                    value:Math.ceil(Math.random()*10)
                },
                {
                    label:'待放款',
                    icon:'i-qianbao1',
                    value:Math.ceil(Math.random()*10)
                },
                {
                    label:'已放款',
                    icon:'i-qianbao',
                    value:Math.ceil(Math.random()*10)
                },
                {
                    label:'未通过',
                    icon:'i-antdiconhuaban1fuben502',
                    value:Math.ceil(Math.random()*10)
                }
            ],
            nav3:[
                {
                    label:'我的关注',
                    icon:require('../../assets/p6.png'),
                    click:this.openPage
                },
                {
                    label:'评论/留言',
                    icon:require('../../assets/p7.png')
                },
                {
                    label:'我的钱包',
                    icon:require('../../assets/p8.png')
                },
                {
                    label:'我的认证',
                    icon:require('../../assets/p9.png'),
                    click:this.openPage
                },
                {
                    label:'我的客服',
                    icon:require('../../assets/p10.png')
                },
                {
                    label:'我的足迹',
                    icon:require('../../assets/p11.png')
                }
            ]
        }
    },
    methods:{
        qd(){
            this.$router.push('/signIn');
        },
        openPage(obj){
            console.log(obj)
        }
    },
    mounted(){
        //console.log(process)
    },
    components:{
        grid,
        gFooter
    }
}
</script>
<style lang="less" scoped>
    .p-container{
        display: flex;
        flex-direction: column;
        >div:nth-child(1){
            flex-grow: 1;
            overflow-y: auto;
            -webkit-overflow-scrolling: touch;
        }
        >div:nth-child(2){
            flex-shrink: 0;
        }
    }
    .p-header{
        padding: 2.5rem 0;
        background: @main-color;
        display: flex;
        position: relative;
        .flex-column-center;
        b{
            font-size: 1.6rem;
            color: #fff;
            margin-top: 1.5rem;
            font-weight: bold;
        }
        >i{
            position: absolute;
            top:2.5rem;
            right: 2.5rem;
            color: #fff;
            font-size: 2rem;
        }
    }
    .nav{
        box-sizing: border-box;
        padding: 0 1rem;
        color: @font-color-3;
    }
    .nav-1{
        .flex-row-center;
        justify-content: space-around;
        li{
            .flex-column-center;
            display: inline-flex;
            padding: 1.5rem 0;
            div{
                .bg-img-cover;
                width: 3rem;
                height: 3rem;
                position: relative;
                i{
                    .red-pointer;
                    width: 1rem;
                    height: 1rem;
                    right: -0.5rem;
                }
            }
            span{
                font-size: 1.6rem;
                margin-top: 0.8rem;
                color: @font-color-3;
            }
            span+span{color: @font-color-4;}
        }
    }
    .nav-1-border{
        border-bottom: 0.1rem solid @border-color-2;
    }
    .nav-header{
        .flex-row-center;
        justify-content: space-between;
        border-bottom: 1px solid @border-color;
        padding: 1.5rem 0 1rem 0;
        span{font-size: 1.6rem;}
        a{color: @font-color-4;}
    }
    .nav-icon{font-size: 3rem;}
    .p-grid{
        width: 100%;
        border-top: 1rem solid #f7f7f7;
        border-bottom: 1rem solid #f7f7f7;
    }
</style>
