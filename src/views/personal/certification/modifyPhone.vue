<template>
    <div class="flex-column-center m-phone">
        <div>
            <m-button font-color="#999" size="mini" style="width:7rem;">原手机号</m-button>
        </div>
        <h1>{{phone | phone}}</h1>
        <p>为了您的账户安全，更换新手机号需验证原手机号</p>
    </div>
</template>
<script>
export default {
    data(){
        return {
            phone:'13584833734'
        }
    },
    mounted(){
        this.$store.commit('setNavigationBarTitle','修改手机号');
    }
}
</script>
<style lang="less" scoped>
    .m-phone{
        box-sizing: border-box;
        justify-content: flex-start;
        padding-top: 10rem;
    }
    h1{
        font-weight: 500;
        font-size: 3rem;
        color: @font-color-3;
        margin: 1rem 0 3rem 0;
    }
    p{
        font-size: 1.6rem;
        color: @font-color-2;
    }
</style>
