<template>
  <div class="search">
    <head-nav title="搜索" />
    <div class="input">
      <div class="keyword">
        <i class="iconfont icon-sousuo"></i>
        <input type="text" placeholder="请输入关键词" />
        <span class="clear"><i class="iconfont icon-jia"></i></span>
      </div>
      <a href="#">取消</a>
    </div>
    <div hidden>
      <div class="history">
        <span>历史记录</span>
        <i class="iconfont icon-shanchu"></i>
      </div>
      <div class="historyContent">
        <span>记录1</span>
        <span>记录2记录2</span>
        <span>记录3的</span>
        <span>记录4公司</span>
        <span>记录5啊</span>
      </div>

      <div class="history">
        <span>热门搜索</span>
        <i></i>
      </div>
      <div class="historyContent">
        <span>记录1</span>
        <span>记录2记录2</span>
        <span>记录3的</span>
        <span>记录4公司</span>
        <span>记录5啊</span>
      </div>
    </div>
    <div class="product">
      <ul class="type">
        <li class="active">
          <a> 综合 </a>
        </li>
        <li class="">
          <a>
            价格
            <span>
              <i class="iconfont icon-you"></i>
              <i class="iconfont icon-you"></i>
            </span>
          </a>
        </li>
        <li>
          <a>
            销量
            <span>
              <i class="iconfont icon-you"></i>
              <i class="iconfont icon-you"></i>
            </span>
          </a>
        </li>
      </ul>
    </div>
    <ul class="result">
      <li>
        <a href="#">
          <div class="img">
            <img
              src="http://yanxuan.nosdn.127.net/337da7094c1df295ca0f0b8baa55b2d5.png"
            />
          </div>
          <div class="text">
            <p>云端沙发组合</p>
            <small>MUJI供应商携手打造</small>
            <div class="money">¥ 3659</div>
          </div>
        </a>
      </li>
      <li>
        <a href="#">
          <div class="img">
            <img
              src="http://yanxuan.nosdn.127.net/337da7094c1df295ca0f0b8baa55b2d5.png"
            />
          </div>
          <div class="text">
            <p>云端沙发组合</p>
            <small>MUJI供应商携手打造</small>
            <div class="money">¥ 3659</div>
          </div>
        </a>
      </li>
      <li>
        <a href="#">
          <div class="img">
            <img
              src="http://yanxuan.nosdn.127.net/337da7094c1df295ca0f0b8baa55b2d5.png"
            />
          </div>
          <div class="text">
            <p>云端沙发组合</p>
            <small>MUJI供应商携手打造</small>
            <div class="money">¥ 3659</div>
          </div>
        </a>
      </li>
    </ul>
    <div style="text-align:center;color:#e8e8e8">—— 到底了 ——</div>
  </div>
</template>
<script>
import HeadNav from '../component/HeadNav.vue'
export default {
  name: 'Search',
  components: { HeadNav }
}
</script>
<style lang="less" scoped>
.search {
  ul.result{
    display: flex;
    flex-wrap: wrap;
    padding: .2rem;
    li{
      width: 3.55rem;
      margin-bottom: .3rem;
      img{
        max-width: 100%;
        background: rgb(250,250,250);
      }
      .text{
        small{
          color: #8e8e8e;
        }
        .money{
          color: #ff3456;
        }
      }
    }
    li:nth-child(odd){
      padding-right: .1rem;
    }
    li:nth-child(even){
      padding-left: .1rem;
    }
  }
  .product {
    border-bottom: 0.01rem solid #e8e8e8;
    & > .type {
      display: flex;
      padding: 0.2rem 0;
      li {
        flex: 1;
        text-align: center;
        a {
          display: flex;
          justify-content: center;
          align-items: center;
          & > span {
            // margin-left: .05rem;
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
          }
          i {
            width: 100%;
            line-height: 0.8;
            font-weight: bold;
            font-size: 0.2rem;
          }
          i:first-child {
            transform: rotate(-90deg);
          }
          i:last-child {
            transform: rotate(90deg);
          }
        }
      }
      li.active {
        a {
          color: #ff3456;
          i {
            color: #8e8e8e;
          }
          i.active {
            color: rgb(161, 0, 0);
          }
        }
      }
    }
  }
  .input {
    padding: 0.2rem;
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    border-bottom: 0.01rem solid #e8e8e8;
    .keyword {
      background: rgb(250, 250, 250);
      padding: 0.2rem 0.1rem;
      width: 6.6rem;
      position: relative;
      & > .clear {
        position: absolute;
        right: 0.2rem;
        top: 50%;
        width: 0.4rem;
        transform: translateY(-50%);
        height: 0.4rem;
        line-height: 0.4rem;
        text-align: center;
        background: white;
        border-radius: 100%;
        opacity: 0;
        pointer-events: none;
        i {
          font-size: 0.3rem;
          transform: rotate(45deg);
          display: inline-block;
        }
      }
      & > .clear.active {
        opacity: 0.9;
        pointer-events: all;
      }
      & > i {
        font-size: 0.35rem;
        width: 0.5rem;
        text-align: center;
        padding-right: 0.1rem;
        display: inline-block;
        color: #8e8e8e;
      }
      input {
        font-size: 0.3rem;
        width: 5.25rem;
        border: none;
        background: transparent;
      }
    }
    & > a {
      width: 1rem;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      margin-right: 0.2rem;
    }
  }
  .history {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.2rem;
    color: #8e8e8e;
    i {
      font-size: 0.35rem;
    }
  }
  .bn {
    border: none;
  }
  .historyContent {
    display: flex;
    flex-wrap: wrap;
    padding: 0.2rem;
    span {
      padding: 0.1rem 0.25rem;
      margin: 0 0.15rem 0.15rem 0;
      border: 0.01rem solid #8e8e8e;
      color: #8e8e8e;
    }
  }
}
</style>
