<template>
  <header>
    <div class="back iconfont icon-zuo"></div>
    <div class="title">{{ title }}</div>
    <div></div>
  </header>
</template>
<script>
export default {
  name: 'HeadNav',
  props: {
    title: {
      type: String,
      default: '标题'
    }
  }
}
</script>
<style lang="less" scoped>
header {
  position: relative;
  text-align: center;
  color: #313131;
  background: white;
  height: 1rem;
  line-height: 1rem;
  & > .back {
    position: absolute;
    left: 0;
    top: 0;
    font-size: 0.4rem;
    padding: 0 0.3rem;
    height: 100%;
  }
  & > .title {
    font-size: 0.4rem;
  }
}
</style>
