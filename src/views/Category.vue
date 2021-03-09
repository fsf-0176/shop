<template>
  <div class="category">
    <search text="Catergory Search" />
    <div class="wrap">
      <div class="menus">
        <ul>
          <li>
            <a href="#"> 全部 </a>
          </li>
          <li class="active">
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
      <div class="product">
        <div class="banner">
          <img
            src="http://nos.netease.com/yanxuan/f0d0e1a542e2095861b42bf789d948ce.jpg"
          />
          <span>居家</span>
        </div>
        <ul class="pro_list">
          <li>
            <a href="" class="pic">
              <img
                src="https://githttps.hiolabs.com/5b7c1d0a-a12f-48e5-9487-efb1a81a6864"
              />
            </a>
            <a href="#">
              <p>云端沙发组合</p>
              <span>¥ 3999</span>
            </a>
          </li>
          <li>
            <a href="" class="pic">
              <img
                src="https://githttps.hiolabs.com/5b7c1d0a-a12f-48e5-9487-efb1a81a6864"
              />
            </a>
            <a href="#">
              <p>云端沙发组合</p>
              <span>¥ 3999</span>
            </a>
          </li>
          <li>
            <a href="" class="pic">
              <img
                src="https://githttps.hiolabs.com/5b7c1d0a-a12f-48e5-9487-efb1a81a6864"
              />
            </a>
            <a href="#">
              <p>云端沙发组合</p>
              <span>¥ 3999</span>
            </a>
          </li>
          <li>
            <a href="" class="pic">
              <img
                src="https://githttps.hiolabs.com/5b7c1d0a-a12f-48e5-9487-efb1a81a6864"
              />
            </a>
            <a href="#">
              <p>云端沙发组合</p>
              <span>¥ 3999</span>
            </a>
          </li>
          <li>
            <a href="" class="pic">
              <img
                src="https://githttps.hiolabs.com/5b7c1d0a-a12f-48e5-9487-efb1a81a6864"
              />
            </a>
            <a href="#">
              <p>云端沙发组合</p>
              <span>¥ 3999</span>
            </a>
          </li>
          <li>
            <a href="" class="pic">
              <img
                src="https://githttps.hiolabs.com/5b7c1d0a-a12f-48e5-9487-efb1a81a6864"
              />
            </a>
            <a href="#">
              <p>云端沙发组合</p>
              <span>¥ 3999</span>
            </a>
          </li>
          <li>
            <a href="" class="pic">
              <img
                src="https://githttps.hiolabs.com/5b7c1d0a-a12f-48e5-9487-efb1a81a6864"
              />
            </a>
            <a href="#">
              <p>云端沙发组合</p>
              <span>¥ 3999</span>
            </a>
          </li>
          <li>
            <a href="" class="pic">
              <img
                src="https://githttps.hiolabs.com/5b7c1d0a-a12f-48e5-9487-efb1a81a6864"
              />
            </a>
            <a href="#">
              <p>云端沙发组合</p>
              <span>¥ 3999</span>
            </a>
          </li>
          <li>
            <a href="" class="pic">
              <img
                src="https://githttps.hiolabs.com/5b7c1d0a-a12f-48e5-9487-efb1a81a6864"
              />
            </a>
            <a href="#">
              <p>云端沙发组合</p>
              <span>¥ 3999</span>
            </a>
          </li>
        </ul>
        <div class="bottomText">- 这是底线了 -</div>
      </div>
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
.bottomText {
  font-size: 0.3rem;
  text-align: center;
  color: #ccc;
}
.wrap {
  padding: 1.35rem 0.2rem 0;
  display: flex;
  justify-content: flex-end;
  .menus {
    position: fixed;
    left: 50%;
    top: 1.35rem;
    width: 7.5rem;
    height: calc(100% - 2.45rem);
    transform: translateX(-50%);
    z-index: -1;
    ul {
      background: rgb(250, 250, 250);
      width: 1.6rem;
      height: 100%;
    }
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
    width: 5.4rem;
    padding-bottom: 1.5rem;
    & > .pro_list > li {
      width: 50%;
      padding: 0 0.1rem;
    }
    & > .pro_list > li:nth-child(odd) {
      padding-left: 0;
    }

    & > .pro_list > li:nth-child(3n) {
      padding-right: 0.1rem;
    }
    & > .pro_list > li:nth-child(even) {
      padding-right: 0;
    }
    & .pro_list > li:nth-child(3n) .pic {
      padding: 0;
    }
    & > .pro_list {
      padding-top: 0.2rem;
    }
    & > .banner {
      overflow: hidden;
      position: relative;
      border-radius: 0.15rem;
      img {
        display: block;
      }
      & > span {
        position: absolute;
        left: 0;
        top: 0;
        background: rgba(0, 0, 0, 0.28);
        width: 100%;
        height: 100%;
        color: white;
        font-size: 0.4rem;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
}
</style>
