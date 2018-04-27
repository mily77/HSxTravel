<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swipe-img" :src="item.imgUrl" alt="去哪儿门票" style="opacity: 1;">
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination', // 出现小圆点
        loop: true
      },
      swiperList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/5a/c905d7879e288802.jpg_640x200_36a02c62.jpg'
      }, {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/d3/b7a5b50ae4303802.jpg_640x200_21c33b0e.jpg'
      }]
    }
  }
}
</script>
<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active
      background : #ffffff
  .wrapper
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom : 31.25%
    background : #eeeeee
  .swipe-img
      width: 100%
</style>
