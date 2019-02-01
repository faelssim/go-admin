<template>
    <div
        class="avatar"
        :class="size"
        :style="{padding:padding+'px'}"
    >
        <img :src="src||defaultImg" alt="">
    </div>
</template>
<script>
//backgroundImage:'url('+(src||defaultImg)+')'
export default {
    props:{
        size:{default:'middle'},
        padding:{default:0},
        src:{default:''},
        needUpload:{default:false}
    },
    data(){
        return {
            defaultImg:require('../../assets/mrtx.png')
        }
    }
}
</script>
<style lang="less" scoped>
    .avatar{
        .flex-column-center;
        display: inline-flex;
        border-radius: 50%;
        background: #fff;
        box-sizing: border-box;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
        img{
            width: 100%;
            height: 100%;
        }
    }
    .large{
        width: 10rem;
        height: 10rem;
    }
    .middle{
        width: 7rem;
        height: 7rem;
    }
    .mini{
        width: 3rem;
        height: 3rem;
    }
</style>
