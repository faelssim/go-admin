<template>
    <div
        class="flex-row-center m-image"
        :style="{width:size+'rem',height:size+'rem'}"
    >
        <img :src="src" alt="">
    </div>
</template>
<script>
export default {
    props:{
        size:{default:10},
        src:String,
    }
}
</script>
<style lang="less" scoped>
    .m-image{

        img{
            max-width: 100%;
            max-height: 100%;
        }
    }
</style>
