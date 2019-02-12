<template>
   <div class="container">
       <div class="c-title">以下认证用于保障您的账户安全</div>
       <ul>
           <li @click="openCert('/certification/face')">
               <div class="c-item">
                   <img src="../../../assets/rz1.png" alt="">
                   <div>
                       <p>人脸识别</p>
                       <p>您最安全、最独特的验证方式</p>
                   </div>
               </div>
               <div class="c-btn">去识别</div>
           </li>
           <li>
               <div class="c-item">
                   <img src="../../../assets/rz2.png" alt="">
                   <div>
                       <p>实名认证</p>
                       <p>您最安全、最独特的验证方式</p>
                   </div>
               </div>
               <div class="c-btn">去认证</div>
           </li>
           <li @click="openCert('/certification/phone')">
               <div class="c-item">
                   <img src="../../../assets/rz3.png" alt="">
                   <div>
                       <p>手机绑定</p>
                       <p>您最安全、最独特的验证方式</p>
                   </div>
               </div>
               <div class="c-btn">去修改</div>
           </li>
           <li>
               <div class="c-item">
                   <img src="../../../assets/rz4.png" alt="">
                   <div>
                       <p>邮箱绑定</p>
                       <p>您最安全、最独特的验证方式</p>
                   </div>
               </div>
               <div class="c-btn">去修改</div>
           </li>
       </ul>
   </div>
</template>
<script>
export default {
    data(){
        return {
           
        }
    },
    methods:{
        openCert(path){
            this.$router.push(path);
        }
    },
    mounted(){
        this.$store.commit('setNavigationBarTitle','我的认证');
    }
}
</script>
<style lang="less" scoped>
    .container{
        width: 100%;
        .flex-column-center;
        ul{
            flex-grow: 1;
            width: 100%;
            li{
                width: 100%;
                .flex-row-center;
                box-sizing: border-box;
                padding: 1.5rem 1rem;
                border-bottom: 1px solid @border-color;

                .c-btn{
                    padding: .5rem 1rem;
                    border-radius: 3rem;
                    border: 1px solid @font-color-4;
                    color: @font-color-4;
                }
                .c-item{
                    flex-grow: 1;
                    .flex-row-center;
                    img{
                        flex-shrink: 0;
                        width: 4rem;
                    }
                    >div{
                        flex-grow: 1;
                        .flex-column-center;
                        align-items: flex-start;
                        margin-left: 1rem;
                        font-size: 1.6rem;
                        color: @font-color-2;
                        p:nth-child(1){
                            font-size: 1.7rem;
                            color:@font-color-1;
                            margin-bottom: 1rem;
                        }
                    }
                }
            }
        }
    }
    .c-title{
        width: 100%;
        background: @bg-color;
        box-sizing: border-box;
        padding: 1.5rem 1rem;
        color: @font-color-3;
        flex-shrink: 0;
    }
</style>
