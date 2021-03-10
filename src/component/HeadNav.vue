<template>
  <header :class="fixed ? 'fixed' : ''">
    <div class="back iconfont icon-zuo" @click="go"></div>
    <div class="title">{{ title }}</div>
  </header>
</template>
<script>
export default {
  name: 'HeadNav',
  props: {
    title: {
      type: String,
      default: '标题'
    },
    fixed: {
      type: Boolean,
      default: false
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
header.fixed {
  position: fixed;
  z-index: 1;
  width: 7.5rem;
  top: 0;
  left: 50%;
  transform: translateX(-50%);

}
</style>
