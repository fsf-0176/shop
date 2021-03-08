<template>
  <div class="order">
    <head-nav title="我的订单" />
    <ul class="tabs">
      <li>
        <a href="#"> <span>全部</span> </a>
      </li>
      <li>
        <a href="#" class="active"> <span>待付款</span> </a>
      </li>
      <li>
        <a href="#"><span> 待发货</span> </a>
      </li>
      <li>
        <a href="#"> <span>待收货</span> </a>
      </li>
    </ul>
    <!-- <div class="notOrder">
      <i class="iconfont icon-meiyoudingdan"></i>
      <p>您目前没有相关订单</p>
      <router-link to="/">马上去逛逛</router-link>
    </div> -->
    <div class="nonePayment">
      <ul>
        <li>
          <router-link to="/order-detail">
            <div class="head">
              <div class="time">2021-03-05 11:56:32</div>
              <div class="status">待付款</div>
            </div>
            <div class="product">
              <ul>
                <li>
                  <img
                    src="https://githttps.hiolabs.com/5b7c1d0a-a12f-48e5-9487-efb1a81a6864"
                  />
                </li>
                <li>
                  <img
                    src="https://githttps.hiolabs.com/5b7c1d0a-a12f-48e5-9487-efb1a81a6864"
                  />
                </li>
                <li>
                  <img
                    src="https://githttps.hiolabs.com/5b7c1d0a-a12f-48e5-9487-efb1a81a6864"
                  />
                </li>
                <li>
                  <img
                    src="https://githttps.hiolabs.com/5b7c1d0a-a12f-48e5-9487-efb1a81a6864"
                  />
                </li>
              </ul>
              <span>
                共8件
                <i class="iconfont icon-you"></i>
              </span>
            </div>
            <div class="total">总价:<span>¥12346.1（含运费¥ 52）</span></div>
            <div class="result">
              <a href="#">继续支付</a>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import HeadNav from '../component/HeadNav'
export default {
  name: 'Order',
  components: { HeadNav }
}
</script>
<style lang="less" scoped>
.order {
  background: rgb(250, 250, 250);
  min-height: 100%;
  position: relative;
  .result {
    display: flex;
    justify-content: flex-end;
    padding: 0.3rem;
    background: white;
    a {
      display: block;
      padding: 0.1rem 0.3rem;
      background: rgb(255, 52, 86);
      color: white;
      border-radius: 0.1rem;
      font-size: 0.28rem;
    }
  }
  .total {
    display: flex;
    justify-content: flex-end;
    background: white;
    padding: 0.3rem;
    border-top: 0.01rem solid rgba(204, 204, 204, 0.6);
    border-bottom: 0.01rem solid rgba(204, 204, 204, 0.6);
    color: #9e9e9e;
    span {
      color: #313131;
    }
  }
  .product {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #9e9e9e;
    padding-right: 0.2rem;
    & > span > i {
      font-size: 0.3rem;
      margin-left: 0.1rem;
    }
    & > ul {
      display: flex;
      li {
        padding: 0.15rem 0 0.15rem 0.15rem;
      }
    }
    img {
      width: 1.2rem;
      height: 1.2rem;
      background: white;
    }
  }
  .nonePayment {
    .head {
      display: flex;
      background: white;
      justify-content: space-between;
      padding: 0.3rem;
    }
    .status {
      color: #ff3456;
    }
    & > ul > li {
      margin-top: 0.2rem;
    }
  }
  & > .notOrder {
    text-align: center;
    color: #d4d4d4;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    & > i {
      font-size: 1.5rem;
      display: block;
      padding-bottom: 0.3rem;
    }
    & > a {
      display: block;
      width: 3rem;
      margin: auto;
      border-radius: 0.1rem;
      padding: 0.3rem;
      color: white;
      font-weight: bold;
      margin-top: 0.3rem;
      background: #ff3456;
    }
  }
}
.tabs {
  display: flex;
  justify-content: space-between;
  padding-bottom: 0.15rem;
  border-bottom: 0.01rem solid #ccc;
  background: white;
  & > li {
    flex: 1;
    text-align: center;
    box-sizing: border-box;
    a {
      display: block;
      span {
        padding: 0.2rem 0;
        display: inline-block;
      }
    }
    a.active span {
      color: rgb(255, 52, 86);
      position: relative;
    }
    a.active span::before {
      content: '';
      background: rgb(255, 52, 86);
      left: 50%;
      bottom: 0;
      width: 100%;
      height: 0.05rem;
      transform: translateX(-50%);
      position: absolute;
    }
  }
}
</style>
