<template>
  <div class="about">
    <head-nav title="关于我们" />
    <ul>
      <li>
        <b>APP名称</b>
        <p>开源商城</p>
      </li>
      <li>
        <p>开发者：天青色等烟雨</p>
        <p>微信：Sunshine_F_Z</p>
      </li>
      <li>
        <p>更多信息访问：fangsifa.com</p>
      </li>
    </ul>
  </div>
</template>
<script>
import HeadNav from '../component/HeadNav'
export default {
  name: 'About',
  components: { HeadNav }
}
</script>
<style lang="less" scoped>
b {
  margin: 0;
//   font-weight: 500;
  font-size: .32rem;
}
ul {
  font-size: 0.3rem;
  padding: .3rem;
  li{
      border-bottom: .01rem solid #ccc;
      padding: .3rem;
      line-height: 1.8;
  }
}
</style>
