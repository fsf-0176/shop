<template>
  <div class="productList">
    <head-nav title="商品列表" />
    <ul>
      <li>
        <a href="#">
          <div class="img">
            <img
              src="https://githttps.hiolabs.com/5b7c1d0a-a12f-48e5-9487-efb1a81a6864"
            />
          </div>
          <div class="text">
            <h4>海洋之心永生花</h4>
            <span>黑色</span>
            <p>
              <span>¥89</span>
              <span>x 2</span>
            </p>
          </div>
        </a>
      </li>
      <li>
        <a href="#">
          <div class="img">
            <img
              src="https://githttps.hiolabs.com/5b7c1d0a-a12f-48e5-9487-efb1a81a6864"
            />
          </div>
          <div class="text">
            <h4>海洋之心永生花</h4>
            <span>黑色</span>
            <p>
              <span>¥89</span>
              <span>x 2</span>
            </p>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
import HeadNav from '../component/HeadNav.vue'
export default {
  components: { HeadNav },
  name: 'ProductList'
}
</script>
<style lang="less" scoped>
.productList {
  min-height: 100%;
  background: rgb(250, 250, 250);
  & > ul {
    margin-top: 0.2rem;
    & > li {
      background: white;
      padding-left: 0.2rem;
      & > a {
        display: flex;
        padding: 0.2rem;
        padding-left: 0;
        border-bottom: 0.01rem solid #e6e6e6;
        & > .text {
          width: 5.1rem;
          padding-left: 0.2rem;
          box-sizing: border-box;
          h4 {
            margin: 0.2rem 0 0;
            font-size: 0.32rem;
            font-weight: 500;
          }
          span {
            color: #a9a8a8;
            margin: 0.1rem 0;
            display: inline-block;
          }
          p {
            display: flex;
            justify-content: space-between;
            margin-top: 0.1rem;
            span {
              color: gray;
            }
          }
        }
      }
      .img {
        width: 2rem;
        background: rgb(250, 250, 250);
        img {
          max-width: 100%;
        }
      }
      &:last-child > a{
          border-bottom: none;
      }
    }
  }
}
</style>
