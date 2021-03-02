<template>
  <wrap>
    <slide />
    <classify />
    <div class="home main">
      <div class="wrap">
        <div class="classifyImg">
          <img src="../assets/images/type1.jpg" alt="" />
          <span>居家</span>
        </div>
        <ul class="pro_list">
          <li>
            <a class="pic" href="#">
              <img
                src="https://githttps.hiolabs.com/5b7c1d0a-a12f-48e5-9487-efb1a81a6864"
              />
            </a>
            <a href="#">
              <p>支付测试兼打赏</p>
              <span>¥ 0.5</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </wrap>
</template>

<script>
import Slide from '../component/Slide'
import Classify from '../component/Classify'
import Wrap from '../component/Wrap'
export default {
  name: 'Home',
  components: { Slide, Classify, Wrap },
  data () {
    return {
      categoryList: []
    }
  },
  created () {
    const data = []
    const dataItem = {}
    const names = [
      { type: 'type', name: '居家' },
      { type: 'type', name: '餐厨' },
      { type: 'type', name: '配件' },
      { type: 'type', name: '杂货' },
      { type: 'type', name: '志趣' }
    ]
    names.forEach(item => {
      for (let i = 0; i < 6; i++) {
        dataItem[i] = {
          name: item.name,
          src: 'https://githttps.hiolabs.com/5b7c1d0a-a12f-48e5-9487-efb1a81a6864',
          title: '支付测试兼打赏',
          money: '0.5',
          banner: 'http://nos.netease.com/yanxuan/a0c91ae573079830743dec6ee08f5841.jpg'
        }
      }
    })
    for (let i = 0; i < 5; i++) {
      data.push(dataItem)
    }
    console.log(data)
  }
}
</script>
<style lang="less">
.pro_list {
  display: flex;
  flex-wrap: wrap;
  & > li {
    box-sizing: border-box;
    padding-right: 0.2rem;
    width: 33%;
    margin-bottom: 0.3rem;
    img {
      max-width: 100%;
    }
    a {
      display: block;
      font-size: 0.25rem;
      text-decoration: none;
      p {
        color: #1f1f1f;
        line-height: 2;
      }
      span {
        color: rgb(255, 52, 86);
      }
    }

    a.pic {
      background: rgb(249, 249, 249);
    }
  }
  & > li:nth-child(3n) {
    padding-right: 0;
  }
  & > li:nth-child(3n) .pic {
    padding: 0 0.1rem;
  }
}
.classifyImg {
  margin: 0.3rem 0;
  border-radius: 0.15rem;
  position: relative;
  display: flex;
  overflow: hidden;
}
.classifyImg > span {
  position: absolute;
  left: 0;
  right: 0;
  background: rgba(97, 96, 96, 0.3);
  font-size: 0.4rem;
  color: white;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
