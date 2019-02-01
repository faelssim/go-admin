<template>
  <div id="app">
    <div class="router">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
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
.router{
  height: 100%;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
}
.router > div{
  height: 100%;
}
</style>
