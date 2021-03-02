<template>
  <router-view />
</template>

<style lang="less">
@import './assets/css/style.less';
</style>
<script>
export default {
  name: 'App',
  mounted () {
    window.onresize = this.resize
    this.resize()
  },
  methods: {
    resize () {
      document.documentElement.style.fontSize = document.documentElement.clientWidth / 7.5 + 'px'
    }
  }
}
</script>
