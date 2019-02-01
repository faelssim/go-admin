<template>
    <div class="copy-right">{{text}}</div>
</template>
<script>
export default {
    props:{
        text:{
            default:'GO佳居服务热线：400-888-8888'
        }
    }
}
</script>
<style lang="less" scoped>
    .copy-right{
        width: 100%;
        padding: 1rem 0;
        text-align: center;
        font-size: 1.2rem;
        color: @font-color-4;
        background: @bg-color;
    }
</style>
