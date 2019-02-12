<template>
    <div
        class="m-text ellipsisrows"
        :style="{fontSize:size+'rem',lineHeight:lineHeight+'rem',webkitLineClamp:line,color:color}"
    ><slot></slot></div>
</template>
<script>
export default {
    props:{
        size:{default:1.4},
        line:{default:1},
        color:{default:'#333'}
    },
    data(){
        return {
          lineHeight:0  
        }
    },
    mounted(){
        this.lineHeight=parseFloat(this.size)+0.6;
        console.log(this.lineHeight)
    }
}
</script>
<style lang="less" scoped>
    .ellipsisrows{
        overflow:hidden; 
        text-overflow:ellipsis;
        display:-webkit-box; 
        box-orient:vertical;
        -webkit-box-orient:vertical;
    }
</style>
