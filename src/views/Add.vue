<template>
  <div class="add">
    <head-nav title="新增地址" />
    <ul class="write">
      <li>
        <i class="iconfont icon-xingming"></i>
        <div class="box">
          <input type="text" placeholder="姓名" />
        </div>
      </li>
      <li>
        <i class="iconfont icon-phone"></i>
        <div class="box">
          <input type="text" placeholder="手机号码" />
        </div>
      </li>
      <li>
        <i class="iconfont icon-dizhi"></i>
        <div class="box">
          <input type="text" placeholder="选择省份、城市、区县" />
          <i class="iconfont icon-you"></i>
        </div>
      </li>
      <li>
        <i class="iconfont icon-dizhi"></i>
        <div class="box">
          <input type="text" placeholder="详细地址" />
        </div>
      </li>
    </ul>
    <div class="setDefatult">
      <label for="set-default">设为默认地址</label>
      <input type="checkbox" id="set-default" class="iconfont" />
    </div>
    <div class="save">保存</div>
    <div class="select">
      <v-distpicker type="mobile" />
    </div>
  </div>
</template>
<script>
import HeadNav from '../component/HeadNav.vue'
import VDistpicker from 'v-distpicker'
export default {
  components: { HeadNav, VDistpicker },
  name: 'Add'
}
</script>
<style lang="less" scoped>
.add {
  min-height: 100%;
  background: rgb(250, 250, 250);
  .save {
    width: 7.1rem;
    height: 1rem;
    color: white;
    text-align: center;
    line-height: 1rem;
    background: #ff3456;
    margin: 0.2rem auto 0;
    border-radius: 0.15rem;
  }
  .write {
    background: white;
    width: 7.1rem;
    margin: 0.2rem auto 0;
    padding-left: 0.2rem;
    box-shadow: 0px 0px 20px -6px #00000038;
    border-radius: 0.15rem;
    li {
      display: flex;
      align-items: center;
      & > i {
        font-size: 0.5rem;
        width: 0.6rem;
        margin-right: 0.1rem;
        text-align: center;
      }
      .box {
        width: 6.2rem;
        height: 1.2rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0.2rem 0.2rem 0.2rem 0;
        border-bottom: 0.01rem solid #ccc;
        input {
          font-size: 0.3rem;
          width: 100%;
          height: 100%;
          border: none;
          outline: none;
        }
        & > i {
          font-size: 0.35rem;
        }
      }
    }
    li:last-child .box {
      border-bottom: none;
    }
  }
  .setDefatult {
    background: white;
    width: 7.1rem;
    margin: 0.2rem auto 0;
    padding: 0 0.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0px 0px 20px -6px #00000038;
    border-radius: 0.15rem;
    label {
      width: 100%;
      height: 100%;
      padding: 0.4rem 0;
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
}
</style>
