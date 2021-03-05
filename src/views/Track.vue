<template>
  <div class="track">
    <div class="wrap">
      <div class="time">今天</div>
      <ul class="list">
        <li>
          <span class="del iconfont icon-shanchu"></span>
          <a href="#">
            <div class="img">
              <img
                src="https://githttps.hiolabs.com/5b7c1d0a-a12f-48e5-9487-efb1a81a6864"
              />
            </div>
            <div class="text">
              <h4>支付测试兼打赏</h4>
              <p>开源不易请打赏</p>
              <span>¥ 0.5</span>
            </div>
          </a>
        </li>
        <li>
          <span class="del iconfont icon-shanchu"></span>
          <a href="#">
            <div class="img">
              <img
                src="https://githttps.hiolabs.com/5b7c1d0a-a12f-48e5-9487-efb1a81a6864"
              />
            </div>
            <div class="text">
              <h4>支付测试兼打赏</h4>
              <p>开源不易请打赏</p>
              <span>¥ 0.5</span>
            </div>
          </a>
        </li>
      </ul>
    </div>
    <div class="wrap">
      <div class="time">2021-3-1</div>
      <ul class="list">
        <li>
          <span class="del iconfont icon-shanchu"></span>
          <a href="#">
            <div class="img">
              <img
                src="https://githttps.hiolabs.com/5b7c1d0a-a12f-48e5-9487-efb1a81a6864"
              />
            </div>
            <div class="text">
              <h4>支付测试兼打赏</h4>
              <p>开源不易请打赏</p>
              <span>¥ 0.5</span>
            </div>
          </a>
        </li>
        <li>
          <span class="del iconfont icon-shanchu"></span>
          <a href="#">
            <div class="img">
              <img
                src="https://githttps.hiolabs.com/5b7c1d0a-a12f-48e5-9487-efb1a81a6864"
              />
            </div>
            <div class="text">
              <h4>支付测试兼打赏</h4>
              <p>开源不易请打赏</p>
              <span>¥ 0.5</span>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<style lang="less" scoped>
.track {
  height: 100%;
  background: rgb(250, 250, 250);
  .list {
    display: flex;
    flex-wrap: wrap;
    & > li {
      width: 50%;
      box-sizing: border-box;
      background: white;
      border: .01rem solid rgb(231, 231, 231);
      padding: 0rem 0.2rem;
      position: relative;
      & > .del {
        position: absolute;
        font-size: 0.4rem;
        padding: 0.28rem;
        right: 0;
        top: 0;
        color: #b4b4b4;
      }
      a {
        font-size: 0.3rem;
        img {
          max-width: 100%;
        }
        h4 {
          margin: 0;
          font-weight: 500;
        }
        .text {
          p {
            font-size: 0.25rem;
            color: #b4b4b4;
            margin: 0.1rem 0;
          }
          span {
            color: rgb(255, 52, 93);
            padding-bottom: 0.1rem;
            display: block;
          }
        }
      }
    }
  }
}
.time {
  font-size: 0.35rem;
  color: #313131;
  text-align: center;
  padding: 0.3rem;
}
</style>
