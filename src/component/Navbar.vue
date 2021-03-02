<template>
  <footer>
    <ul>
      <li>
        <a href="#">
          <i class="iconfont icon-home"></i>
          <span>首页</span>
        </a>
      </li>
      <li>
        <a href="#">
          <i class="iconfont icon-feiji"></i>
          <span>分类</span>
        </a>
      </li>
      <li>
        <a href="#">
          <i class="iconfont icon-feiji"></i>
          <span>购物车</span>
        </a>
      </li>
      <li>
        <a href="#">
          <i class="iconfont icon-feiji"></i>
          <span>我的</span>
        </a>
      </li>
    </ul>
  </footer>
</template>
<style lang="less" scoped>
@import url('../assets/icon-font/iconfont.css');
footer{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 7.5rem;
    &>ul{
        display: flex;
        justify-content: space-around;
        &>li{
            list-style: none;
            &>a{
                color: #7b7b7b;
                text-decoration: none;
                text-align: center;
                &>i{
                    display: block;
                    font-size: .8rem;
                }
                &>span{
                    display: block;
                }
                font-size: .3rem;
            }
        }
    }
}
</style>
