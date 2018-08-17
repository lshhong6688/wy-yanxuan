<template>
    <div class="profile-container">
      <div class="header">
        <div class="house" @click="$router.replace('/home')">
          <i class="iconfont icon-shouye"></i>
        </div>
        <h2>网易严选</h2>
        <div class="header-icon">
          <span>
              <i class="iconfont icon-sousuo"></i>
            </span>
          <span @click="$router.replace('/shopcart')">
              <i class="iconfont icon-gouwuche"></i>
            </span>
        </div>
      </div>
      <div class="prf-content">
        <div class="content">
          <div class="logo-img">
            <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="yx">
          </div>
          <div class="login-types">
            <div class="login">
              <i class="iconfont icon-shouji"></i>
              <span>手机号码登录</span>
            </div>
            <div class="login">
              <i class="iconfont icon-youjian"></i>
              <span>邮箱账号登录</span>
            </div>
            <div class="register">
              <span>手机号快速注册</span>
              <i class="iconfont icon-jiantou"></i>
            </div>
          </div>
        </div>
        <div class="chat-utils">
          <div class="weixin">
            <i class="iconfont icon-weixin"></i>
            <span>微信</span>
          </div>
          <div class="QQ">
            <i class="iconfont icon-qq"></i>
            <span>QQ</span>
          </div>
          <div class="weibo">
            <i class="iconfont icon-weibo"></i>
            <span>微博</span>
          </div>

        </div>
      </div>

    </div>
</template>

<script>
  export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .profile-container
    width 100%
    height 100%
    .header
      width 100%
      height 0.88rem
      box-sizing border-box
      padding 0 0.16rem 0 0.24rem
      display flex
      align-items center
      background #FAFAFA
      position relative
      top 0
      z-index 20
      bottom-border-1px(#DADADA)
      .house
        .icon-shouye
          font-size 0.5rem
      h2
        position absolute
        top 0
        bottom 0
        left 0
        right 0
        margin auto
        width 1.72rem
        height 0.54rem
        font-size 0.4rem
      .header-icon
        width 1.48rem
        height 0.64rem
        margin-left 5.09rem
        span
          display inline-block
          width 0.64rem
          height 0.64rem
          text-align center
          line-height 0.64rem
          i
            font-size 0.45rem

    .prf-content
      width 100%
      height 12.46rem
      background #F2F5F4
      position relative
      .content
        width 100%
        display flex
        flex-direction column
        align-items center
        .logo-img
          width 100%
          margin  1.6rem 0
          transform translateX(25%)
          >img
            display block
            width 2.68rem
            height 0.9rem

        .login-types
          width 100%
          margin-bottom 2.06rem
          box-sizing border-box
          padding 0 0.4rem
          .login
            width 6.7rem
            height 0.94rem
            text-align center
            line-height 0.94rem
            margin-bottom 0.32rem
            border 0.01rem solid #B4282D
            &:nth-child(1)
              color #ffffff
              background #B4282D
            &:nth-child(2)
              color #B4282D
            .iconfont
              font-size 0.32rem
            span
              display inline-block
              font-size 0.32rem
          .register
            width 6.7rem
            display flex
            align-items center
            font-size 0.28rem
            justify-content center

      .chat-utils
        position absolute
        bottom 1rem
        width 100%
        display: flex
        justify-content center
        align-items center
        .weixin,.QQ,.weibo
          width 1.86rem
          font-size 0.32rem
          padding 0 0.4rem
          box-sizing border-box
          border-right 0.01rem solid #CCCECD
          &:last-child
            border-right 0
          span
            display inline-block

</style>
