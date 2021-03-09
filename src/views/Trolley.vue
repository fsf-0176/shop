<template>
  <div class="trolley">
    <!-- <div class="noItems">
      <i class="iconfont icon-gouwuche"></i>
      <p>车里什么都没有,快去买一点吧</p>
      <a href="#">去逛逛</a>
    </div> -->
    <ul class="torlleyList">
      <li>
        <span>
          <input type="checkbox" class="iconfont" />
        </span>
        <div class="info">
          <div class="img">
            <a href="">
              <img
                src="https://githttps.hiolabs.com/5b7c1d0a-a12f-48e5-9487-efb1a81a6864"
                alt=""
              />
            </a>
          </div>
          <div class="text">
            <h3>支付测试兼打赏</h3>
            <p>一根葱</p>
            <div class="price">
              <span class="money">¥ 1314</span>
              <div class="num">
                <span class="iconfont icon-jian"></span>
                <span class="number">1</span>
                <span class="add iconfont icon-jia"></span>
              </div>
            </div>
          </div>
        </div>
      </li>
      <li>
        <span>
          <input type="checkbox" class="iconfont" />
        </span>
        <div class="info">
          <div class="img">
            <a href="">
              <img
                src="https://githttps.hiolabs.com/5b7c1d0a-a12f-48e5-9487-efb1a81a6864"
                alt=""
              />
            </a>
          </div>
          <div class="text">
            <h3>支付测试兼打赏</h3>
            <p>一根葱</p>
            <div class="price">
              <span class="money">¥ 1314</span>
              <div class="num">
                <span class="iconfont icon-jian"></span>
                <span class="number">1</span>
                <span class="add iconfont icon-jia"></span>
              </div>
            </div>
          </div>
        </div>
      </li>
      <li>
        <span>
          <input type="checkbox" class="iconfont" />
        </span>
        <div class="info">
          <div class="img">
            <a href="">
              <img
                src="https://githttps.hiolabs.com/5b7c1d0a-a12f-48e5-9487-efb1a81a6864"
                alt=""
              />
            </a>
          </div>
          <div class="text">
            <h3>支付测试兼打赏</h3>
            <p>一根葱</p>
            <div class="price">
              <span class="money">¥ 1314</span>
              <div class="num">
                <span class="iconfont icon-jian"></span>
                <span class="number">1</span>
                <span class="add iconfont icon-jia"></span>
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
    <div class="result">
      <div class="total">
        <input type="checkbox" class="iconfont" />
        全选(4)
        <span>合计：¥13354</span>
      </div>
      <div class="toResult">去结算</div>
    </div>
    <navbar />
  </div>
</template>
<script>
import Navbar from '../component/Navbar'
export default {
  name: 'Trolley',
  components: { Navbar }
}
</script>
<style lang="less" scoped>
.trolley {
  height: 100%;
  background: rgb(250, 250, 250);
  padding-bottom: 3rem;
  & > .result {
    position: fixed;
    display: flex;
    font-size: 0.32rem;
    left: 50%;
    bottom: 1.2rem;
    transform: translateX(-50%);
    z-index: 1;
    input {
      margin-right: 0.2rem;
    }
    & > .total {
      display: flex;
      align-items: center;
      padding: 0.3rem 0.3rem 0.3rem 0.1rem;
      background: white;
      width: 4.8rem;
      box-sizing: border-box;
      border-top: 0.01rem solid #ccc;
      border-bottom: 0.01rem solid #ccc;
      & > span {
        margin-left: 0.4rem;
        color: rgb(255, 52, 93);
      }
    }
    & > .toResult {
      width: 2.7rem;
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
      background: rgb(255, 52, 93);
    }
  }
  input[type='checkbox'] {
    width: 0.5rem;
    height: 0.5rem;
    background-color: #fff;
    -webkit-appearance: none;
    border: 1px solid #c9c9c9;
    border-radius: 100%;
    outline: none;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  input[type='checkbox']:checked::after {
    content: '\e509';
    font-size: 0.5rem;
    color: white;
  }
  input[type='checkbox']:checked {
    background: rgb(255, 52, 93);
    border-color: transparent;
  }
  & > .torlleyList {
    & > li:last-child {
      & > .info {
        border: none;
      }
    }
    li {
      background: white;
      display: flex;
      padding: 0 0 0 0.2rem;
      img {
        max-width: 100%;
      }
      & > span {
        width: 0.8rem;
        display: flex;
        align-items: center;
        justify-content: center;
        transform: translateX(-0.1rem);
      }
      & > .info {
        display: flex;
        font-size: 0.3rem;
        width: 6.5rem;
        padding: 0.3rem 0.2rem 0.3rem 0;
        border-bottom: 0.01rem solid #ccc;
        & > .img {
          margin-right: 0.2rem;
          & > a {
            display: block;
          }
          width: 2rem;
          background: rgb(250, 250, 250);
        }
        & > .text {
          width: 4.3rem;
          & > h3 {
            font-size: 0.32rem;
            font-weight: inherit;
            margin: 0.1rem 0;
            color: #313131;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: normal;
          }
          & > p {
            color: #ccc;
            margin: 0.3rem 0 0.2rem;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: normal;
          }
          & > .price {
            display: inline-flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 0.1rem;
            width: 100%;
            & > .money {
              color: rgb(255, 52, 93);
            }
            & > .num {
              display: flex;
              & > span {
                width: 0.5rem;
                height: 0.5rem;
                border: 1px solid #ccc;
                border-radius: 100%;
                font-size: 0.3rem;
                display: flex;
                align-items: center;
                justify-content: center;
              }
              & > span.add {
                background: rgb(255, 52, 93);
                color: white;
              }
              & > span.number {
                width: 0.5rem;
                border: none;
              }
            }
          }
        }
      }
    }
  }
  & > .noItems {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    color: #ccc;
    i {
      font-size: 2rem;
    }
    p {
      font-size: 0.32rem;
    }
    a {
      font-size: 0.3rem;
      display: block;
      background: rgb(255, 52, 93);
      width: 3.5rem;
      margin: 0.5rem auto;
      padding: 0.3rem 0.4rem;
      border-radius: 0.2rem;
      color: white;
    }
  }
}
</style>
