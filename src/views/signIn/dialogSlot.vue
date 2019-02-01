<template>
    <div class="g-s-score">
        <div>
            <span>+<span>{{score[day]}}积分</span></span>
            <p>已连续签到{{day}}天</p>
            <ul class="scope-item">
                <li v-for="(item,index) in score" :class="{selected:index<day}">
                    {{item}}
                    <img src="../../assets/hg.png" v-if="index==score.length-1"/>
                </li>
            </ul>
        </div>
        <div></div>
        <!-- <img src="../../assets/p14.png" alt=""> -->
    </div>
</template>
<script>
export default {
    data(){
        return {
            day:4,
            score:[2,3,4,5,6,8,10]
        }
    }
}
</script>
<style lang="less" scoped>
    ul,li{list-style: none;}
    .g-s-score{
        width: 90%;
        height: auto;
        background: #fff;
        border-radius: 1rem;
        position: relative;
        >div:nth-child(1){
            padding-top: 4rem;
            .flex-column-center;
            span{
                font-size: 2rem;
                color: @main-color;
                span{
                    font-size: 3rem;
                    font-weight: 100;
                }
            }
            p{
                color: @font-color-4;
                font-size: 1.6rem;
                margin-top: 1rem;
            }
            .scope-item{
                .flex-row-center;
                padding: 2rem 0;
                li{
                    width: 3rem;
                    height: 3rem;
                    border-radius: 50%;
                    border: 1px solid #e2e4e6;
                    color: #ccc;
                    background: #f7f6f9;
                    text-align: center;
                    line-height: 3rem;
                    font-size: 1.4rem;
                    margin-left: 1rem;
                    position: relative;
                    img{
                        width: 3rem;
                        position: absolute;
                        top:-15px;
                        right:-5px;
                    }
                }
                li:nth-child(1){
                    margin-left: 0;
                }
                li:nth-child(n+2){
                    &:before{
                        content:'';
                        width: 1rem;
                        height: 1px;
                        background: #e2e4e6;
                        position: absolute;
                        left: -1rem;
                        top:1.5rem;
                    }
                }
                .selected{
                    border-color:#ff9900;
                    color:#ff9900;
                    &:before{
                        background: #ff9900 !important;
                    }
                }
            }
        }
        >div:nth-child(2){
            .flex-row-center;
            background: #f2f2f2;
            padding: 2rem 0;
            border-bottom-left-radius: 1rem;
            border-bottom-right-radius: 1rem;
        }
        img{
            width: 4rem;
            position: absolute;
            top:-5rem;
        }
    }
</style>
