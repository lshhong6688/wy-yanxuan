<template>
    <div class="cart-container">
      <div class="header">
        <h2>购物车</h2>
        <div class="take-ticket">
          <span>领劵</span>
        </div>
      </div>
      <div class="cart-content">
        <div class="shop-service">
          <span>30天无忧退货</span>
          <span>48小时快速退款</span>
          <span>满88元免邮费</span>
        </div>
        <div class="cart">
          <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-a8fe3f12e5.png" alt="">
          <span>去添加点什么吧</span>
          <div class="login" @click="$router.replace('/profile')">登录</div>
        </div>
      </div>
    </div>
</template>

<script>
  export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .cart-container
    width 100%
    height 100%
    .header
      width 100%
      height 0.88rem
      box-sizing border-box
      padding 0 0.15rem 0 0.15rem
      display flex
      align-items center
      background #FAFAFA
      position relative
      top 0
      bottom-border-1px(#DADADA)
      h2
        position absolute
        top 0
        bottom 0
        left 0
        right 0
        margin auto
        width 1.08rem
        height 0.87rem
        line-height 0.87rem
        font-size 0.35rem
      .take-ticket
        position absolute
        right 0.3rem
        width 0.87rem
        height 0.87rem
        text-align center
        line-height 0.87rem
        span
          display inline-block
          color red
          margin-right 0.2rem

    .cart-content
      width 100%
      height 12.44rem
      background #F4F4F4
      position relative
      .shop-service
        height 0.7rem

        display flex
        justify-content space-around
        align-items center
        span
          display inline-block
          text-align center
          line-height
          font-size 0.24rem
      .cart
        width 100%
        height 3rem
        position absolute
        top 0
        bottom 0
        lef 0
        right 0
        margin auto 0
        display flex
        flex-direction column
        justify-content center
        align-items center
        img
          display block
          width 2.48rem
          height 2.48rem
        span
          margin-bottom 0.5rem
          color #999999
        .login
          width 4.8rem
          height 0.92rem
          background #B4282D
          color white
          text-align center
          line-height 0.92rem
          font-size 0.32rem
          margin 0 1.35rem
</style>
