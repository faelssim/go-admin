<template>
    <div class="flex-column-center">
        <img src="../../../assets/rl1.png" alt="" width="30%">
        <h2>刷个脸呗</h2>
        <p>请选择光线充足，浅色背景的环境拍照，请拍摄脸部正面照片，摘掉眼镜和帽子，面部占整张照片。</p>
        <ul class="flex-row-center u-tip">
            <li class="flex-column-center">
                <div class="bg-img-cover"></div>
                <p>光线充足</p>
                <p>正对手机</p>
            </li>
            <li class="flex-column-center">
                <div class="bg-img-cover"></div>
                <p>不要在昏暗或</p>
                <p>逆光下扫描</p>
            </li>
            <li class="flex-column-center">
                <div class="bg-img-cover"></div>
                <p>不要斜视</p>
                <p>手机</p>
            </li>
        </ul>
        <m-button
            size="large"
            color="#59c9a5"
            font-color="#fff"
            button-type="code"
            bind-phone="13584833734"
            style="width:80%;margin-top:10rem;"
        >开始识别</m-button>
    </div>
</template>
<script>
export default {
    methods:{
        test(){
            console.log(5678)
        }
    },
    mounted(){
        this.$store.commit('setNavigationBarTitle','人脸识别');
    }
}
</script>
<style lang="less" scoped>
    h2{
        font-size: 2.2rem;
        margin: 2rem 0;
    }
    h2+p{
        color: @font-color-2;
        line-height: 2rem;
        font-size: 1.6rem;
        width: 90%;
        margin-bottom: 4rem;
    }
    .u-tip{
        ///justify-content: space-between;
        li{
            width: auto;
            div{
                width: 10rem;
                height: 10rem;
                border-radius: 50%;
                border: 1px solid @bg-color;
                margin-bottom: 1rem;
            }
            p{
                line-height: 1.8rem;
                color: @font-color-2;
            }
        }
        li:nth-child(1){
            div{background-image: url('../../../assets/rl2.png')}
        }
        li:nth-child(2){
            margin: 0 2rem;
            div{background-image: url('../../../assets/rl3.png')}
        }
        li:nth-child(3){
            div{background-image: url('../../../assets/rl4.png')}
        }
    }
</style>
