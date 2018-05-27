<template>
  <div>
    <div class="banner" @click="handleBannerClick">
    <img class="banner-img" src="//img1.qunarzz.com/sight/p0/1412/4b/632fe62f622b9b112cdf9f3b80ce8f78.water.jpg_600x330_ff9705d1.jpg" alt="">
    <div class="banner-info">
      <div class="banner-title">
        深圳欢乐谷(AAAAA景区)
      </div>
      <div class="banner-number">
        <span class="iconfont banner-icon">&#xe692;</span>
        39
      </div>
    </div>
    <common-gallary
        :imgs="imgs"
        v-show="showGallary"
        @close="handleGallaryClose"
      ></common-gallary>
  </div>
  </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
export default {
  name: 'DetailBanner',
  data () {
    return {
      showGallary: false,
      imgs: ['http://img1.qunarzz.com/sight/p0/1508/ca/4b627c0f2d6c7834280a630101e02edb.water.jpg_r_800x800_f798b6ac.jpg', 'http://img1.qunarzz.com/sight/p0/1501/b6/b6ff667d5ed40895.water.jpg_r_800x800_b74d8f6c.jpg']
    }
  },
  methods: {
    handleBannerClick () {
      this.showGallary = true
    },
    handleGallaryClose () {
      this.showGallary = false
    }
  },
  components: {
    CommonGallary
  }
}
</script>

<style lang="stylus" scoped>
  .banner
    position : relative
    overflow : hidden
    height : 0
    padding-bottom : 55%
    .banner-img
      width : 100%
    .banner-info
      position : absolute
      left : 0
      display :flex
      right : 0
      bottom : 0
      line-height : .6rem
      color : #ffffff
      background-image : linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
      .banner-title
        flex : 1
        font-size : .32rem
        padding : 0 .2rem
      .banner-number
        padding : 0 .4rem
        height : .32rem
        line-height : .32rem
        margin-top : .14rem
        border-radius : .2rem
        background : rgba(0, 0, 0, .8)
        font-size : .24rem
        .banner-icon
          font-size : .24rem
</style>
