<template>
  <div class="search" :style="{ position: pos.type, padding: pos.padding }">
    <router-link to="/search" :style="{ 'border-radius': pos.radius }">
      <i class="iconfont icon-sousuo"></i>
      {{ text }}
    </router-link>
  </div>
</template>
<script>
export default {
  name: 'Search',
  props: {
    pos: {
      type: Object,
      default: () => ({
        type: 'fixed',
        padding: '0.25rem',
        radius: '0.5rem'
      })
    },
    text: {
      type: String,
      default: '搜索'
    }
  }
}
</script>
<style lang="less" scoped>
.search {
  padding: 0.25rem;
  position: fixed;
  width: 7.5rem;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
  z-index: 2;
  background: white;
  box-sizing: border-box;
  & > a {
    background: rgb(249, 249, 249);
    display: flex;
    justify-content: center;
    align-items: center;
    color: #cccccc;
    border-radius: 0.5rem;
    padding: 0.2rem 0;
    & > i {
      font-size: 0.4rem;
      margin-right: 0.15rem;
    }
  }
  font-size: 0.35rem;
}
</style>
