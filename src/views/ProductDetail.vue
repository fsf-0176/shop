<template>
  <div class="ProdcutDetail">
    <head-nav title="商品详情" />
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
      <div class="img"></div>
    </div>
  </div>
</template>
<script>
import HeadNav from '../component/HeadNav.vue'
import Slide from '../component/Slide.vue'
export default {
  components: { Slide, HeadNav },
  name: 'ProductDetail'
}
</script>
<style lang="less" scoped>
.ProdcutDetail {
  min-height: 100%;
  background: rgb(250, 250, 250);
  & > .detail {
    padding: 0.4rem 0.3rem;
    background: white;
    margin-top: 0.2rem;
    img {
      max-width: 100%;
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
