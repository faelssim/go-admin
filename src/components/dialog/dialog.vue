<template>
    <div class="g-dialog" ref="dialog">
    </div>
</template>
<script>
export default {
    name:'g-dialog',
    mounted(){
        const _cnode=new this.node({
            el:document.createElement('div')
        });
        this.$refs.dialog.appendChild(_cnode.$el);
    }
}
</script>
<style lang="less" scoped>
    .g-dialog{
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,.5);
        position: fixed;
        top:0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
