<template>
  <footer>
    <ul>
      <li>
        <router-link to="/">
          <i class="iconfont icon-home"></i>
          <span>首页</span>
        </router-link>
      </li>
      <li>
        <router-link to="/category">
          <i class="iconfont icon-category"></i>
          <span>分类</span>
        </router-link>
      </li>
      <li>
        <router-link to="/trolley">
          <i class="iconfont icon-gouwuche"></i>
          <span>购物车</span>
        </router-link>
      </li>
      <li>
        <router-link to="/user">
          <i class="iconfont icon-user_pre"></i>
          <span>我的</span>
        </router-link>
      </li>
    </ul>
  </footer>
</template>
<style lang="less" scoped>
@import url('../assets/icon-font/iconfont.css');
footer {
  position: fixed;
  bottom: 0;
  left: 50%;
  width: 7.5rem;
  transform: translateX(-50%);
  & > ul {
    display: flex;
    justify-content: space-around;
    background: white;
    padding: 0.1rem 0;
    & > li {
      flex: 1;
      list-style: none;
      & > a {
        color: #7b7b7b;
        text-decoration: none;
        text-align: center;
        & > i {
          display: block;
          font-size: 0.6rem;
        }
        & > span {
          display: block;
        }
        font-size: 0.25rem;
      }
      & > a.router-link-exact-active {
        color: rgb(255, 52, 86);
      }
    }
  }
}
</style>
