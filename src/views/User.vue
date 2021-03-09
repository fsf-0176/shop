<template>
  <div class="about">
    <div class="user">
      <router-link to="/user-info">
        <div class="left">
          <div class="avatar">
            <img src="../assets/images/default.jpg" alt="" />
          </div>
          <p>天青色等烟雨</p>
        </div>
        <i class="iconfont icon-you"></i>
      </router-link>
    </div>
    <div class="myOrder">
      <div class="head">
        <router-link to="/order">
          <div class="left">
            <i></i>
            我的订单
          </div>
          <div class="right">
            查看全部订单
            <i class="iconfont icon-you"></i>
          </div>
        </router-link>
      </div>
      <div class="line">
        <i></i>
      </div>
      <ul class="status">
        <li>
          <a href="#">
            <i class="iconfont icon-fukuan"></i>
            <div>待付款</div>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="iconfont icon-fahuo"></i>
            <div>待发货</div>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="iconfont icon-ziyuan"></i>
            <div>待收货</div>
          </a>
        </li>
      </ul>
    </div>
    <ul class="address">
      <li class="top">
        <router-link to="/address" class="borderNone">
          <span>
            <i class="iconfont icon-dizhi"></i>
            地址管理
          </span>
          <i class="iconfont icon-you"></i>
        </router-link>
      </li>
      <li class="top">
        <router-link to="/track">
          <span>
            <i class="iconfont icon-zuji"></i>
            我的足迹
          </span>
          <i class="iconfont icon-you"></i>
        </router-link>
      </li>
      <li class="">
        <a href="#">
          <span>
            <i class="iconfont icon-kefu1"></i>
            联系客服
          </span>
          <i class="iconfont icon-you"></i>
        </a>
      </li>
      <li class="">
        <router-link to="/about">
          <span>
            <i class="iconfont icon-guanyuwomen1"></i>
            关于我们
          </span>
          <i class="iconfont icon-you"></i>
        </router-link>
      </li>
    </ul>
    <navbar />
  </div>
</template>
<script>
import Navbar from '../component/Navbar'
export default {
  name: 'User',
  components: {
    Navbar
  }
}
</script>
<style lang="less" scoped>
ul.address {
  & > li {
    background: white;
    padding: 0 0.2rem;
    & > a {
      display: flex;
      padding: 0.3rem 0;
      justify-content: space-between;
      align-items: center;
      font-size: 0.35rem;
      border-bottom: 1px solid #ccc;
    }

    i {
      font-size: 0.35rem;
    }
  }
  & > li:last-child a {
    border: none;
  }
  & > li a.borderNone {
    border: none;
  }
  & > li.top {
    margin-top: 0.25rem;
  }
}
.status {
  display: flex;
  justify-content: space-around;
  & > li {
    & > a {
      color: #313131;
      display: block;
      text-align: center;
      margin-top: 0.25rem;
      & > i {
        font-size: 0.8rem;
        padding-bottom: 0.1rem;
        display: inline-block;
      }
      font-size: 0.28rem;
    }
  }
}
.line {
  background: white;
  & > i {
    border-bottom: 0.01rem solid #ccc;
    display: block;
    width: 100%;
  }
}
.myOrder {
  background: white;
  margin: 0.25rem 0 0;
  padding: 0.3rem 0.2rem;
  & > .head {
    & > a {
      display: flex;
      font-size: 0.3rem;
      justify-content: space-between;
      margin-bottom: 0.25rem;
    }
    & > a > .left {
      display: flex;
      align-items: center;
      i {
        display: inline-block;
        width: 0.05rem;
        height: 65%;
        background: rgb(211, 54, 53);
        margin-right: 0.15rem;
      }
    }
    & > a > .right {
      display: flex;
      align-items: center;
      color: rgb(153, 153, 153);
      i {
        font-size: 0.32rem;
        display: block;
      }
    }
  }
}
.about {
  min-height: 100%;
  box-sizing: border-box;
  background: rgb(250, 250, 250);
  padding-bottom: 1.4rem;
  .user {
    background: white;
    padding: 0.2rem;
    a {
      display: flex;
      justify-content: space-between;
      align-items: center;
      text-decoration: none;
      color: #313131;
      & > i {
        font-size: 0.5rem;
        color: #313131;
      }
      .left {
        display: flex;
        align-items: center;
        p {
          padding-left: 0.1rem;
          font-size: 0.35rem;
        }
      }
    }
    & .avatar {
      & > img {
        width: 100%;
      }
      width: 1.5rem;
      height: 1.5rem;
      overflow: hidden;
      border-radius: 100%;
    }
  }
}
</style>
