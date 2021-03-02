<template>
  <div class="slide" ref="slide">
    <ul>
      <li v-for="item of images" :key="item.id">
        <a href="#">
          <img :src="item.thumb" alt="" />
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
  name: 'Slide',
  data () {
    return {
      images: [
        {
          id: 1,
          thumb: require('../assets/images/slide1.jpg')
        },
        {
          id: 2,
          thumb: require('../assets/images/slide1.jpg')
        },
        {
          id: 3,
          thumb: require('../assets/images/slide1.jpg')
        },
        {
          id: 4,
          thumb: require('../assets/images/slide1.jpg')
        }
      ]
    }
  },
  mounted () {
    console.log(BScroll)
    const bs = new BScroll(this.$refs.slide, {
      scrollX: true,
      scrollY: false,
      mouseWheel: true,
      momentum: false,
      slide: {
        loop: true
      }
    })
    console.log(bs)
  }
}
</script>
<style lang="less" scoped>
li {
  list-style: none;
  flex-shrink: 0;
  height: 4rem;
}
ul {
  padding: 0;
  margin: 0;
  display: flex;
  height: 4rem;
}
img {
  width: 100%;
}
.slide {
  overflow: hidden;
  width: 100%;
  max-height: 4rem;
}
</style>
