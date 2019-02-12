<template>
    <div class="container">
        <!-- <nulltip text="购物车还是空的">
            <img src="../../assets/gwc.png" width="100"/>
        </nulltip> -->
        <div class="list-view">
            <ul>
                <li v-for="row in List">
                    <div class="c-item flex-row-center c-item-top">
                        <m-radio v-model="row.selected"></m-radio>
                        <m-text
                            style="margin-left:1rem;"
                            size="1.7"
                        >{{row.shopname}}</m-text>
                    </div>
                    <swiper-out
                        v-for="item in row.spList"
                    >
                        <div class="c-item flex-row-center c-item-bottom" :style="{width:itemWidth+'px'}">
                            <m-radio v-model="item.selected"></m-radio>
                            <div class="flex-row-center c-item-right">
                                <m-image
                                    src="http://img2.imgtn.bdimg.com/it/u=2713163987,728294973&fm=11&gp=0.jpg"
                                ></m-image>
                                <div class="flex-column-center c-item-body">
                                    <m-text size="1.7">{{item.name}}</m-text>
                                    <m-text color="#999">{{item.bz}}</m-text>
                                    <div>
                                        sd
                                    </div>
                                </div>
                            </div>
                        </div>
                    </swiper-out>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import swiperOut from '../../components/swiperout/swiperout'
export default {
    data(){
        return {
            itemWidth:0,
            List:[
                {
                    shopname:'FIND 芬迪',
                    selected:0,
                    spList:[
                        {
                            selected:0,
                            name:'MADISON现代简约客厅沙发MADISON现代简约客厅沙发',
                            bz:'深灰色三位',
                            sl:1,
                            zdj:5480,
                            zgj:6400,
                            img:''
                        }
                    ]
                }
            ]
        }
    },
    mounted(){
        this.$store.commit('setNavigationBarTitle','购物车');
        this.itemWidth=this.$util.winWidth;
    },
    components:{
        swiperOut
    }
}
</script>
<style lang="less" scoped>
    .list-view{
        width: 100%;
        height: 100%;
        ul,li{width: 100%;}
        li{
            height: auto;
            .c-item{
                height: auto;
                box-sizing: border-box;
                padding: 1rem;
            }
            .c-item-top{
                width: 100%;
                justify-content: flex-start;
            }
            .c-item-bottom{
                justify-content: flex-start;
                padding: 0 1rem;
                .c-item-right{
                    flex-grow: 1;
                    margin-left: 1rem;
                    justify-content: flex-start;
                    border-top: 1px solid @bg-color;
                    .c-item-body{
                        flex-grow: 1;
                        margin-left: 1rem;
                        align-items: flex-start;
                    }
                }
            }
        }
    }
</style>
