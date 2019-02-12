<template>
    <div
        class="flex-row-center m-radio"
        :class="{'m-radio-selected':!!value}"
        v-tap="doEvent"
    ><div></div></div>
</template>
<script>
export default {
    props:{
        value:{}
    },
    methods:{
        doEvent(){
            if(typeof this.value=='number'){
                this.$emit('input',this.value?0:1);
            }
            if(typeof this.value=='boolean'){
                this.$emit('input',this.value?false:true);
            }
        }
    }
}
</script>
<style lang="less" scoped>
    @size:2.5rem;
    .m-radio{
        width: @size;
        height: @size;
        box-sizing: border-box;
        border-radius: 50%;
        border: 1px solid #ccc;
        position: relative;
        flex-shrink: 0;
    }
    .m-radio-selected{
        border-color: @main-color;
        div{
            width: @size - 1.2rem;
            height: @size - 1.2rem;
            border-radius: 50%;
            background: @main-color;
        }
    }
</style>
