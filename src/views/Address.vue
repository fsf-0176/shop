<template>
  <div class="address">
    <head-nav title="收货地址" />
    <div class="list">
      <p>你的名字</p>
      <small>你的城市地址</small>
      <div class="tel">
        <p class="default">
          <span class="detail">详细地址</span>
          13800000000
        </p>
        <i class="iconfont icon-peijian"></i>
      </div>
    </div>
    <div class="list">
      <p>你的名字</p>
      <small>你的城市地址</small>
      <div class="tel">
        <p class="default">
          <span class="detail">详细地址</span>
          13800000000
        </p>
        <i class="iconfont icon-peijian"></i>
      </div>
    </div>
    <router-link class="add" to="/add">新增收货地址 </router-link>
  </div>
</template>
<script>
import HeadNav from '../component/HeadNav.vue'
export default {
  name: 'Address',
  components: { HeadNav },
  methods: {
    address(e) {
      const { area, city, province } = e
      console.log(area, city, province)
    }
  }
}
</script>
<style lang="less" scoped>
.address {
  min-height: 100%;
  background: rgb(250, 250, 250);
  padding-bottom: 1.3rem;
  .add {
    background: #ff3456;
    color: white;
    height: 1.3rem;
    width: 7.5rem;
    font-size: 0.32rem;
    text-align: center;
    line-height: 1.3rem;
    position: fixed;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
  }
  .list {
    background: white;
    width: 7.1rem;
    margin: 0.2rem auto 0;
    padding: 0.3rem 0.25rem;
    box-sizing: border-box;
    box-shadow: 0px 2px 37px -22px black;
    border-radius: 0.1rem;
    small {
      display: block;
      color: #8e8e8e;
      margin: 0.1rem 0 0.15rem;
    }
    .tel {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .detail {
        display: inline-block;
        margin-right: 0.1rem;
      }
      p.default::after {
        content: '默认';
        color: #ff3456;
        background: #ffc0cb78;
        display: inline-block;
        padding: 0.02rem 0.1rem;
        font-size: 0.23rem;
      }
      i {
        font-size: 0.4rem;
      }
    }
  }
}
</style>
