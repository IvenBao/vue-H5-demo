<template>
    <div id="app">
        <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
        <router-view/>
    </div>
</template>

<style lang="scss">
html {
  min-height: 100%;
  background: #fff;
}
* {
  margin: 0;
  padding: 0;
  font-family: "PingFang SC", "Helvetica Neue", "STHeiti", "Microsoft Yahei",
    "微软雅黑", "Tahoma", "Simsun", "sans-serif";
  -webkit-text-size-adjust: none;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  max-width: 750px;
  min-height: 100vh;
  box-sizing: border-box;
  margin: 0 auto;
  overflow: hidden;
  overflow-y: scroll;
  font-family: "Helvetica Neue", Helvetica, Arial, "PingFang SC",
    "Hiragino Sans GB", "Heiti SC", "Microsoft YaHei", "WenQuanYi Micro Hei",
    sans-serif;
}
ul,
li {
  list-style: none; /* 去掉ul前面的符号 */
}
video {
  width: 100%;
}
.box img {
  width: 100%;
  display: block;
}
.hide {
  display: none !important;
}
</style>
