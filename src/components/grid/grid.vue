<template>
    <table
        class="grid"
        border="0"
        cellpadding="5"
    >
        <tr
            v-for="row in Math.ceil(data.length/size)"
        >
            <td
                v-for="cell in data.slice((row-1)*size,row*size)"
                @click="doCellEvent(cell)"
            >
                <img :src="cell.icon" alt="" v-if="iconType=='image'">
                <div>{{cell.label}}</div>
            </td>
            <td
                v-for="other in calcOtherSum"
                v-if="row==Math.ceil(data.length/size)"
            ></td>
        </tr>
    </table>
</template>
<script>
export default {
    props:{
        iconType:{default:'icon'},//图表类型 image/icon
        size:{default:4},
        data:{required:true},//网格数据
    },
    methods:{
        doCellEvent(cell){
            if(typeof cell.click=='function'){
                cell.click.call(this,cell);
            }
        }
    },
    mounted(){
        //console.log(this.data)
    },
    computed:{
        calcOtherSum(){
            return Math.ceil(this.data.length/this.size)*this.size-this.data.length;
        }
    }
}
</script>
<style lang="less" scoped>
    .grid{
        width: 100%;
        border-top: 1px solid @border-color;
        td{
            box-sizing: border-box;
            border-left: 1px solid @border-color;
            border-bottom: 1px solid @border-color;
            box-sizing: border-box;
            padding: 1rem;
            text-align: center;
            img{
                width: 60%;
                display: block;
                margin: 0 auto;
            }
            div{
                font-size: 1.5rem;
                margin-top: 1rem;
            }
        }
        tr td:nth-child(1){border-left: none;}
    }
</style>
