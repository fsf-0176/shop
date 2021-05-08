<template>
  <wrap>
    <search
      :pos="{ type: 'absolute', padding: 0, radius: 0 }"
      text="Home Search"
    />
    <slide />
    <classify />
    <div class="home main padding-bottom">
      <div class="wrap" v-for="key of list" :key="key.id">
        <div class="classifyImg">
          <img :src="key.banner" alt="" />
          <span>{{ key.name }}</span>
        </div>
        <ul class="pro_list">
          <li v-for="item of key.data" :key="item.id">
            <router-link
              class="pic"
              :to="{ name: 'ProductDetail', params: { id: item.id } }"
            >
              <img :src="item.https_pic_url" />
            </router-link>
            <router-link :to="{ name: 'ProductDetail', params: { id: 123 } }">
              <p>{{ item.name }}</p>
              <span>¥ {{ item.min_retail_price }}</span>
            </router-link>
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
import Search from '../component/Search'
import { mapState } from 'vuex'

export default {
  name: 'Home',
  components: { Slide, Classify, Wrap, Search },
  computed: {
    ...mapState('index', {
      categoryIds: (state) => {
        const list = []
        state.category.forEach((item) => {
          list.push(item.id)
        })
        return list
      },
      category: (state) => state.category,
      list: (state) => state.goods
    })
  },
  watch: {
    categoryIds(val) {
      this.$store.dispatch('index/goods', val)
    }
  }
}
</script>
<style lang="less">
#app {
  padding-top: 0.852rem;
}
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
        color: #313131;
        line-height: 2;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
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
  & > li:nth-child(3n) .pic,
  & > li:nth-child(3n) a {
    padding: 0 0.1rem;
  }
}
.classifyImg {
  margin: 0.3rem 0;
  border-radius: 0.15rem;
  position: relative;
  display: flex;
  overflow: hidden;
  & > img {
    max-width: 100%;
  }
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
