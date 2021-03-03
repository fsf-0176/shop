<template>
  <div class="category">
    <search text="Catergory Search" />
    <div class="wrap">
      <div class="menus">
        <ul>
          <li class="active">
            <a href="#"> 全部 </a>
          </li>
          <li>
            <a href="#"> 居家 </a>
          </li>
          <li>
            <a href="#"> 餐厨 </a>
          </li>
          <li>
            <a href="#"> 配件 </a>
          </li>
          <li>
            <a href="#"> 杂货 </a>
          </li>
          <li>
            <a href="#"> 志趣 </a>
          </li>
        </ul>
      </div>
      <div class="product"></div>
    </div>
    <navbar />
  </div>
</template>
<script>
import Navbar from '../component/Navbar'
import Search from '../component/Search'
export default {
  name: 'Category',
  components: { Navbar, Search }
}
</script>
<style lang="less" scoped>
.wrap {
  padding: 1.25rem 0.2rem 0;
  display: flex;
  .menus {
    position: fixed;
    left: 0;
    top: 1.25rem;
    background: rgb(250, 250, 250);
    width: 2rem;
    height: calc(100% - 2.45rem);
    li {
      a {
        font-size: 0.32rem;
        display: block;
        padding: 0.3rem 0;
        text-align: center;
      }
    }
    li.active {
      background: white;
      & > a {
        color: rgb(255, 52, 86);
        transform: scale(1.1);
      }
    }
  }
  .product {
    flex: 7;
  }
}
</style>
