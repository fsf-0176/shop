<template>
  <div class="about">
    <div class="user">
      <a href="#">
        <div class="left">
          <div class="avatar">
            <img src="../assets/images/default.jpg" alt="" />
          </div>
          <p>天青色等烟雨</p>
        </div>
        <i></i>
      </a>
    </div>
    <navbar />
  </div>
</template>
<script>
import Navbar from '../component/Navbar'
export default {
  name: 'About',
  components: {
    Navbar
  }
}
</script>
<style lang="less" scoped>
.about {
  min-height: 100%;
  box-sizing: border-box;
  background: rgb(250, 250, 250);
  .user {
    background: white;
    padding: 0.2rem;
    a {
      text-decoration: none;
      color: #313131;
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
