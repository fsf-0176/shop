<template>
  <div class="ProdcutDetail">
    <head-nav title="商品详情" :fixed="true" />
    <slide />
    <div class="shareBox">
      <div class="title">
        <h4>母情节礼物-舒适安睡组合</h4>
        <p>安心舒适是最好的礼物</p>
      </div>
      <div class="share">
        <i class="iconfont icon-fenxiang"></i>
        分享
      </div>
    </div>
    <div class="num">
      <div class="money">¥999</div>
      <div class="inventory">
        <span>库存100</span>
        <span>已售1555份</span>
      </div>
    </div>
    <div class="select">
      <div class="selectNum">已选择：1套</div>
      <i class="iconfont icon-you"></i>
    </div>
    <div class="detail">
      <div class="text">商品详情</div>
      <div class="img">
        <img
          v-for="(item, index) of images"
          :key="item"
          :src="require('../assets/images/detail/' + (index + 1) + '.jpg')"
          alt=""
        />
      </div>
    </div>
    <div class="playNav" style="display: none">
      <div class="text">
        <a href="#">
          <i class="iconfont icon-home"></i>
          主页
        </a>
        <a href="#">
          <i class="iconfont icon-kefu"></i>
          客服
        </a>
        <a href="#">
          <i class="iconfont icon-gouwuche"></i>
          购物车
        </a>
      </div>
      <div class="btn">
        <span class="addCart">加入购物车</span>
        <span class="play">立即购买</span>
      </div>
    </div>
    <div class="panel">
      <div class="info">
        <div class="product">
          <div class="p">
            <div class="img">
              <img
                src="https://githttps.hiolabs.com/5b7c1d0a-a12f-48e5-9487-efb1a81a6864"
                alt=""
              />
            </div>
            <div class="text">
              <p>零售价：<span>0.5-999元</span></p>
              <p>请选择规格和数量</p>
            </div>
          </div>
          <div class="colse">
            <i class="iconfont icon-jia"></i>
          </div>
        </div>
        <div class="sku">
          <p>规格</p>
          <div class="skuList">
            <span>一根葱</span>
            <span>一个面包</span>
          </div>
        </div>
        <div class="sku">
          <p>库存</p>
          100
        </div>
        <div class="sku">
          <p>数量</p>
          <div class="num">
            <span class="iconfont icon-jian"></span>
            <span class="input"><input type="text" value="1"></span>
            <span class="iconfont icon-jia"></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import HeadNav from '../component/HeadNav.vue'
import Slide from '../component/Slide.vue'
export default {
  components: { Slide, HeadNav },
  name: 'ProductDetail',
  data() {
    return {
      images: []
    }
  },
  created() {
    const arr = []
    ;[...'.'.repeat(102)].forEach((k, i) => {
      arr.push(i + 1)
    })
    this.images = arr
  }
}
</script>
<style lang="less" scoped>
.ProdcutDetail {
  .panel {
    background: white;
    padding: 0.2rem;
    border-top: 1px solid #ccc;
    .sku{
      .num{
        display: flex;
        span{
          display: block;
          border: .01rem solid #ccc;
          height: .8rem;
          width: 1rem;
          text-align: center;
          line-height: .8rem;
          font-size: .3rem;
        }
        .input{
            width: 1.2rem;
            height: .8rem;
            input{
              width: 100%;
              height: 90%;
              font-size: .3rem;
              border: none;
              text-align: center;
              outline: none;
            }
          }
      }
      p{
        padding: .3rem 0;
        font-size: .32rem;
      }
      .skuList{
        span{
          display: inline-block;
          padding: .1rem .3rem;
          margin-right: .3rem;
          border: .01rem solid #ccc;
        }
      }
    }
    img {
      max-width: 100%;
    }
    .product {
      display: flex;
      justify-content: space-between;
      .text {
        p:first-child {
          padding: 0.1rem 0;
          span {
            color: rgb(255, 52, 86);
          }
        }
      }
      .colse i {
        font-size: 0.5rem;
        transform: rotate(45deg);
        display: block;
        font-weight: bold;
        color: #8e8e8e;
      }
      .img {
        width: 1.8rem;
        background: rgb(250, 250, 250);
        margin-right: 0.2rem;
      }
      .p {
        display: flex;
      }
    }
  }
  .playNav {
    background: rgb(250, 250, 250);
    height: 1.5rem;
    align-items: center;
    .text {
      display: flex;
      width: 3.5rem;
      height: 100%;
      a {
        flex: 1;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        align-content: center;
        font-size: 0.25rem;
      }
      i {
        display: flex;
        font-size: 0.5rem;
        width: 100%;
        justify-content: center;
        color: #8e8e8e;
      }
    }
    .btn {
      width: 4rem;
      display: flex;
      height: 100%;
      span {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
      }
      .addCart {
        background: rgb(248, 206, 80);
        width: 55%;
      }
      .play {
        width: 50%;
        background: rgb(255, 52, 86);
        color: white;
      }
    }
    position: fixed;
    left: 0;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    width: 7.5rem;
  }
  padding-top: 1rem;
  min-height: 100%;
  background: rgb(250, 250, 250);
  & > .detail {
    // padding: 0.4rem 0;
    background: white;
    margin-top: 0.2rem;
    .text {
      padding: 0.4rem 0.3rem;
    }
    .img {
      padding-bottom: 2.5rem;
    }
    img {
      max-width: 100%;
      display: block;
    }
  }
  & > .select {
    display: flex;
    padding: 0.3rem;
    justify-content: space-between;
    align-items: center;
    background: white;
    margin-top: 0.2rem;
    i {
      font-size: 0.3rem;
    }
  }
  & > .num {
    background: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.2rem 0.3rem;
    .money {
      color: rgb(255, 52, 86);
    }
    .inventory {
      color: #8e8e8e;
      display: flex;
      span {
        margin-left: 0.2rem;
      }
    }
  }
  & > .shareBox {
    background: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.3rem;
    border-bottom: 0.01rem solid #ccc;
    h4 {
      margin: 0;
      font-weight: 500;
    }
    p {
      color: #8e8e8e;
    }
    & > .share {
      color: #8e8e8e;
      i {
        font-size: 0.32rem;
        margin-right: 0.1rem;
      }
    }
  }
}
</style>
