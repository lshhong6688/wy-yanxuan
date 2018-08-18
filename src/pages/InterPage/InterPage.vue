<template>
    <div class="inter_page">
      <div class="top_page">
        <img src="http://yanxuan.nosdn.127.net/53df1ead033706dcd7da9a91c8977b83.jpg" alt="">
        <img src="http://yanxuan.nosdn.127.net/143424244e87fb8eed45c6984c769a63.jpg" alt="">
      </div>
      <div class="bottom_page">
        <img src="http://yanxuan.nosdn.127.net/d600f8c56fc184e199aa389e09fb2ff9.jpg" alt="">
        <span class="inter_home" @click="$router.replace('/home')"></span>
      </div>
    </div>
</template>

<script>
  export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .inter_page
    width 100%
    height 13.34rem
    background-color #E3E3E2
    .top_page
      width 100%
      img
        width 100%
        height 3.86rem
        display block
    .bottom_page
      width 100%
      position relative
      img
        width 100%
        height 3.27rem
        display block
      .inter_home
        display block
        width 2.55rem
        height 0.3rem
        position absolute
        left 0
        right 0
        bottom 1.3rem
        margin auto

</style>
