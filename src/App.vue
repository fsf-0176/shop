<template>
  <router-view />
</template>

<style lang="less">
@import './assets/css/style.less';
</style>
<script>
export default {
  name: 'App',
  mounted() {
    window.onresize = this.resize
    this.resize()
  },
  methods: {
    resize() {
      const el = document.documentElement
      const fs = el.clientWidth / 7.5
      el.style.fontSize = (fs > 100 ? 100 : fs) + 'px'
    }
  }
}
</script>
