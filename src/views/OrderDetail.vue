<template>
  <div class="orderDetail">
    <head-nav title="订单详情" />
    <div class="unpaid">
      <span>
        <i class="iconfont icon-fukuan"></i>
        待支付
      </span>
      <span>23小时51分45秒后自动关闭</span>
    </div>
    <div class="address">
      <i class="iconfont icon-dizhi"></i>
      <div>
        <p>大哥 1234564567</p>
        <p class="dizhi">北京市北京市东城区天安门</p>
      </div>
    </div>
    <div class="productInfo">
      <p>商品信息</p>
      <div class="product">
        <router-link to="/product-list">
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
        </router-link>
      </div>
    </div>
    <div class="total">
      <ul>
        <li>
          <span>商品总价</span>
          <span class="money">¥1234.3</span>
        </li>
        <li>
          <span>快递</span>
          <span class="money">¥25</span>
        </li>
        <li>
          <div class="input">
            <span>备注</span>
            <input type="text" placeholder="亲爱的买家，请在这里输入备注" />
          </div>
        </li>
        <li>
          <span></span>
          <div>
            合计：
            <span class="price">¥1234</span>
          </div>
        </li>
      </ul>
    </div>
    <div class="number">
      <p><span>订单编号：</span>123156486412456</p>
      <p><span>创建时间：</span>2021-03-05 17:53:59</p>
    </div>
    <div class="sub">
      <span>取消订单</span>
      <span>继续支付</span>
    </div>
  </div>
</template>
<script>
import HeadNav from '../component/HeadNav'
export default {
  name: 'OrderDetail',
  components: { HeadNav }
}
</script>
<style lang="less" scoped>
.orderDetail {
  .sub {
    position: fixed;
    left: 50%;
    bottom: 0;
    width: 7.5rem;
    transform: translateX(-50%);
    span{
        display: inline-block;
        width: 40%;
        text-align: center;
        height: 1.3rem;
        background:rgb(242, 242, 242);
        line-height: 1.3rem;
        font-size: .32rem;
        color: #a9a9a9;
    }
    span:last-child{
        width: 60%;
        background: rgb(255, 52, 86);
        color: white;
    }
  }
  .number {
    background: white;
    margin-top: 0.2rem;
    padding: 0.2rem;
    p {
      line-height: 2;
      color: #585858;
      span {
        color: #8e8e8e;
        display: inline-block;
        margin-right: 0.2rem;
      }
    }
  }
  .total {
    margin-top: 0.2rem;
    ul {
      padding: 0 0.15rem;
      background: white;
    }
    li {
      padding: 0.3rem 0.15rem;
      display: flex;
      justify-content: space-between;
      border-bottom: 0.01rem solid #ccc;
      & > div.input {
        span {
          width: 1rem;
        }
        input {
          border: none;
          height: 0.5rem;
          font-size: 0.3rem;
          width: 5.9rem;
          outline: none;
        }
        display: flex;
        align-items: center;
      }
      .money {
        color: #8e8e8e;
      }
      .price {
        color: rgb(255, 52, 86);
        font-weight: bold;
      }
    }
    li:last-child {
      border-bottom: none;
    }
  }
  .productInfo {
    & > p {
      padding: 0.3rem;
      border-bottom: 0.01rem solid #ccc;
    }
    background: white;
    margin-top: 0.2rem;
    color: gray;
  }
  .product > a {
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
      background: rgb(250, 250, 250);
    }
  }
  .address {
    line-height: 1.6;
    i {
      font-size: 0.5rem;
      padding: 0.2rem;
    }
    .dizhi {
      color: #8e8e8e;
    }
    display: flex;
    align-items: center;
    padding: 0.2rem;
    background: white;
  }
  .unpaid {
    i {
      font-size: 0.5rem;
      margin-right: 0.1rem;
    }
    span {
      display: flex;
      align-items: center;
    }
    background: rgb(84, 73, 110);
    color: white;
    padding: 0.5rem 0.3rem;
    display: flex;
    justify-content: space-between;
  }
  min-height: 100%;
  background: rgb(250, 250, 250);
  padding-bottom: 1.3rem;
  box-sizing: border-box;
}
</style>
