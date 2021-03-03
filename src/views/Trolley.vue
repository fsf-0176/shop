<template>
  <div class="trolley">
    <div class="noItems">
      <i class="iconfont icon-gouwuche"></i>
      <p>车里什么都没有,快去买一点吧</p>
      <a href="#">去逛逛</a>
    </div>
    <navbar />
  </div>
</template>
<script>
import Navbar from '../component/Navbar'
export default {
  name: 'Trolley',
  components: { Navbar }
}
</script>
<style lang="less" scoped>
.trolley {
  height: 100%;
  background: rgb(250, 250, 250);
  & > .noItems {
    text-align: center;
    color: #ccc;
    i {
      font-size: 2rem;
    }
    p {
      font-size: 0.32rem;
    }
    a {
      font-size: 0.3rem;
      display: block;
      background: rgb(255, 52, 93);
      width: 3.5rem;
      margin: 0.5rem auto;
      padding: 0.3rem .4rem;
      border-radius: 0.2rem;
      color: white;
    }
  }
}
</style>
