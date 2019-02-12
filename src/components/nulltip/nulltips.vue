<template>
    <div class="null-tip">
        <i v-if="icon"></i>
        <slot v-else></slot>
        <p>{{text}}</p>
        <m-button
            color="#59c9a5"
            font-color="#fff"
            style="margin-top:2rem;"
            v-tap="doEvent"
        >{{btnText}}</m-button>
    </div>
</template>
<script>
export default {
    props:{
        text:{
            default:'空空如也~~',
        },
        btnText:{default:'去逛逛'},
        icon:String
    },
    methods:{
        doEvent(){
            this.$emit('click');
            console.log(6)
        }
    }
}
</script>
<style lang="less" scoped>
    .null-tip{
        .flex-column-center;
        display: inline-flex;
        p{
            margin-top: 1.8rem;
            font-size: 1.6rem;
            color: @font-color-4;
        }
        // position: relative;
        // top:50%;
        // left: 50%;
        // transform: translateX(-50%) translateY(-50%);
    }
</style>
