
<template>
  <footer class="flex-row flex-ar footer">
    <div> <img class="img1" src="http://chuang-saas.oss-cn-hangzhou.aliyuncs.com/upload/image/20181120/a84eedb7382b4076b8ab8f33185e298c.png" alt="" />
      <span class="active">课程</span>
    </div>
    <router-link to="/mine" tag="div">
      <img class="img2" src="http://chuang-saas.oss-cn-hangzhou.aliyuncs.com/upload/image/20181120/546e1e77c55f42ffa314148c04258337.png" alt="" />
      <span>我的</span>
    </router-link>
  </footer>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>

<style lang='less' scoped>
.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 999;
  width: 100%;
  height: 100px;
  background: #fff;
  border-top: 2px solid #c8c8c8;
  padding-top: 8px;
  text-align: center;
  box-sizing: border-box;
  display: flex;
}
.footer div {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.footer .img1 {
  display: block;
  height: 33px;
  width: 40px;
  //margin-bottom: 8px;
}
.footer .img2 {
  display: block;
  height: 40px;
  width: 34px;
  //margin-bottom: 8px;
}
.footer span {
  color: #989898;
}
.footer span.active {
  color: rgba(250, 74, 74, 1);
}
</style>
