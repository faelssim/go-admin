<template>
    <div class="swiperout">
        <div style="flex-shrink:0;">
            <slot></slot>
        </div>
        <div class="flex-row-center s-o-btn">删除</div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="less" scoped>
    .swiperout{
        width: auto;
        display: flex;
        flex-wrap: nowrap;
        transform: translateX(0);
        .s-o-btn{
            height: inherit;
            width: 5rem;
            background: red;
            flex-shrink:0;
            color:#fff;
        }
    }
</style>
