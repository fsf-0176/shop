<template>
  <header>
    <div class="back iconfont icon-zuo" @click="go"></div>
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
  },
  methods: {
    go() {
      this.$router.back(-1)
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
//   border-bottom: .01rem solid #efefef;
  box-sizing: border-box;
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
