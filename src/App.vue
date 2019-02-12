<template>
  <div id="app">
    <div class="navigation" v-if="!!$store.state.navigationBarTitle">
      <i class="cubeic-back" @click="back"></i>
      {{$store.state.navigationBarTitle}}
    </div>
    <div class="router">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods:{
    back(){
      this.$router.go(-1);
    }
  },
  mounted(){
    this.$util.winWidth=document.body.offsetWidth;
    this.$util.winHeight=document.body.offsetHeight;
  }
}
</script>

<style>
#app {
  width:100%;
  max-width: 600px;
  height: 100%;
  margin: 0 auto;
  font-size: 1.4rem;
  display: flex;
  flex-direction: column;
  background: #fff;
}
.navigation{
  width: 100%;
  line-height: 5rem;
  text-align: center;
  position: relative;
  color: #333;
  border-bottom:1px solid #f9f9f9;
  flex-shrink: 0;
  font-size: 1.6rem;
}
.navigation i{
  position: absolute;
  top: 0;
  left: 1rem;
}
.router{
  flex-grow: 1;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  display: flex;
}
.router > div{
  flex-grow: 1;
  /* height: 100%; */
}
</style>
