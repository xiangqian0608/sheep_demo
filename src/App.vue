<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  mounted() {
    let device = navigator.userAgent.toLowerCase();
    if (/ipad|iphone|midp|rv:1.2.3.4|ucweb|android|windows ce|windows mobile/.test(device)) {
      //移动端
      this.$router.push('/mobileIndex')
    } else {
      //pc端
      this.$router.push('/')
    }
  }
}
</script>

<style lang="less">
* {
  padding: 0;
  margin: 0;
}

ul {
  display: inline-block;
}

ul li {
  list-style: none;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #313131;
  // text-align: center;
  // color: #2c3e50;
  // margin-top: 60px;
}
</style>
