<template>
  <div class="UserInfo">
    <head-nav title="设置" />
    <ul>
      <li>
        <i class="iconfont icon-xingming"></i>
        <input type="text" placeholder="真实姓名" />
      </li>
      <li>
        <i class="iconfont icon-phone"></i>
        <input type="text" placeholder="手机号码" />
      </li>
    </ul>
    <button class="active">保存</button>
  </div>
</template>
<script>
import HeadNav from '../component/HeadNav.vue'
export default {
  components: { HeadNav },
  name: 'UserInfo'
}
</script>
<style lang="less" scoped>
.UserInfo {
  min-height: 100%;
  background: rgb(250, 250, 250);
  ul > li {
    padding: 0.2rem;
    border-top: 0.01rem solid #ccc;
    display: flex;
    align-items: center;
    background: white;
    i {
      width: 0.7rem;
      font-size: 0.5rem;
    }
    input {
      height: 100%;
      font-size: 0.3rem;
      border: none;
      display: block;
      outline: none;
      width: 6.8rem;
    }
  }
  button {
    width: 7.1rem;
    margin: 0.2rem auto;
    display: block;
    background: rgb(187, 187, 187);
    font-size: 0.3rem;
    padding: 0.3rem;
    border: none;
    border-radius: 0.1rem;
    color: white;
  }
  button.active {
    background: rgb(255, 52, 86);
  }
}
</style>
