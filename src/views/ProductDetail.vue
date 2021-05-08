<template>
  <div class="ProdcutDetail">
    <head-nav title="商品详情" :fixed="true" />
    <slide />
    <div class="shareBox">
      <div class="title">
        <h4>{{ detailData.name }}</h4>
        <p>{{ detailData.goods_brief }}</p>
      </div>
      <div class="share">
        <i class="iconfont icon-fenxiang"></i>
        分享
      </div>
    </div>
    <div class="num">
      <div class="money">¥{{ detailData.min_retail_price }}</div>
      <div class="inventory">
        <span>库存{{ detailData.goods_number }}</span>
        <span>已售{{ detailData.sell_volume }}{{ detailData.goods_unit }}</span>
      </div>
    </div>
    <div class="select" @click="showPanel">
      <div class="selectNum">已选择：1{{ detailData.goods_unit }}</div>
      <i class="iconfont icon-you"></i>
    </div>
    <div class="detail">
      <div class="text">商品详情</div>
      <div class="img" v-html="detailData.goods_desc"></div>
    </div>
    <div class="playNav">
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
    <div :class="['mask', isClose ? 'active' : '']" @click="hidePanel"></div>
    <div :class="['panel', isClose ? 'active' : '']">
      <div class="info">
        <div class="product">
          <div class="p">
            <div class="img">
              <img :src="detailData.list_pic_url" alt="" />
            </div>
            <div class="text">
              <p>
                零售价：<span>{{ detailData.min_retail_price }}元</span>
              </p>
              <p>请选择规格和数量</p>
            </div>
          </div>
          <div class="close" @click="hidePanel">
            <i class="iconfont icon-jia"></i>
          </div>
        </div>
        <div class="sku">
          <p>规格</p>
          <div class="skuList">
            <span
              @click="sku(item.id)"
              :ref="'sku' + item.id"
              v-for="item of detailData.spe"
              :key="item.id"
              >{{ item.value }}</span
            >
          </div>
        </div>
        <div class="sku">
          <p>库存</p>
          {{ detailData.goods_number }}
        </div>
        <div class="sku">
          <p>数量</p>
          <div class="num">
            <span class="iconfont icon-jian" @click="subtract"></span>
            <span class="input"
              ><input type="text" @blur="result" v-model="number"
            /></span>
            <span class="iconfont icon-jia" @click="add"></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import HeadNav from '../component/HeadNav.vue'
import Slide from '../component/Slide.vue'
export default {
  components: { Slide, HeadNav },
  name: 'ProductDetail',
  data() {
    return {
      images: [],
      isClose: false,
      number: 1
    }
  },
  computed: {
    ...mapState('index', {
      detailData: (state) => state.goodsDetail[0]
    })
  },
  created() {
    const id = this.$route.params.id
    this.$store.dispatch('index/goodsDetail', { id })
  },
  methods: {
    sku(id) {
      const el = this.$refs['sku' + id]
      el.classList.value.split(' ').includes('active')
      el.classList.add('active')
      el.classList.add('active1')
    },
    result() {
      // 失去焦点后计算结果
      this.number = parseInt(this.number) || 1
    },
    subtract() {
      // 数量减少
      this.number = --this.number || 1
    },
    add() {
      // 数量增加
      console.log(111)
      this.number = ++this.number
    },
    showPanel() {
      // 显示属性面板
      this.isClose = true
      document.body.style.overflow = 'hidden'
    },
    hidePanel() {
      // 隐藏属性面板
      this.isClose = false
      document.body.style.overflow = 'auto'
    }
  }
}
</script>
<style lang="less">
.ProdcutDetail {
  .mask {
    position: fixed;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
    width: 7.5rem;
    background: black;
    opacity: 0;
    height: 100%;
    transition: 0.5s;
    pointer-events: none;
  }
  .mask.active {
    opacity: 0.5;
    pointer-events: all;
  }
  .panel.active {
    transform: translate(-50%, 0%);
  }
  .panel {
    background: white;
    padding: 0.2rem 0.2rem 0.5rem;
    border-top: 1px solid #ccc;
    position: fixed;
    left: 50%;
    bottom: 1.5rem;
    width: 7.5rem;
    transition: 0.5s;
    transform: translate(-50%, 100%);
    box-sizing: border-box;
    .sku {
      .num {
        display: flex;
        span {
          display: block;
          border: 1px solid #ccc;
          height: 0.8rem;
          width: 1rem;
          text-align: center;
          line-height: 0.8rem;
          font-size: 0.3rem;
        }
        .input {
          width: 1.2rem;
          height: 0.8rem;
          input {
            width: 100%;
            height: 90%;
            font-size: 0.3rem;
            border: none;
            text-align: center;
            outline: none;
          }
        }
      }
      p {
        padding: 0.3rem 0;
        font-size: 0.32rem;
      }
      .skuList {
        span {
          display: inline-block;
          padding: 0.1rem 0.3rem;
          margin-right: 0.3rem;
          border: 0.01rem solid #ccc;
        }
        span.active {
          border: 0.01rem solid rgb(255, 52, 86);
          color: rgb(255, 52, 86);
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
      .close {
        width: 0.8rem;
        height: 0.8rem;
        display: flex;
        justify-content: flex-end;
        i {
          font-size: 0.5rem;
          transform: rotate(45deg);
          display: block;
          font-weight: bold;
          color: #8e8e8e;
          margin-right: 0.1rem;
        }
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
    left: 50%;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    width: 7.5rem;
    z-index: 1;
    transform: translateX(-50%);
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
