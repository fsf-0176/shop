<template>
  <nav id="nav">
    <ul>
      <li v-for="item of category" :key="item.id">
        <a href="#">
          <img :src="item.icon_url" style="width: 0.7rem" alt="" />
          <span>{{ item.name }}</span>
        </a>
      </li>
    </ul>
  </nav>
</template>
<style lang="less" scoped>
@import url('../assets/icon-font/iconfont.css');
nav {
  width: 7.5rem;
  overflow: hidden;
}
ul {
  padding: 0;
  margin: 0;
  display: inline-flex;
  width: auto;
  li {
    list-style: none;
    width: 1.505rem;
    min-width: 1.501rem;
    text-align: center;
    margin-top: 0.2rem;
    & > a {
      color: rgb(49, 49, 49);
      text-decoration: none;
      i.iconfont {
        display: block;
        font-size: 0.8rem;
      }
      font-size: 0.3rem;
      line-height: 1.2;
      span {
        display: block;
      }
    }
  }
}
</style>
<script>
import { mapState } from 'vuex'
import BSscroll from 'better-scroll'
export default {
  name: 'Classify',
  mounted() {
    const bs = new BSscroll('#nav', {
      scrollX: true,
      scrollY: false
    })
  },
  computed: {
    ...mapState('index', {
      category: state => state.category
    })
  },
  created() {
    this.$store.dispatch('index/category')
  }
}
</script>
