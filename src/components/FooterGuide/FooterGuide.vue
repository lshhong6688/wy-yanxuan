<template>
  <footer class="footer_guide border-1px">
    <div  class="guide_item" @click="goTo('/home')" :class="{on:$route.path ==='/home'}">
    <span class="item_icon">
      <i class="iconfont icon-shouye"></i>
    </span>
      <span>首页</span>
    </div>
    <div class="guide_item" @click="goTo('/shiwu')" :class="{on:$route.path ==='/shiwu'}">
    <span class="item_icon">
      <i class="iconfont icon-fangkuang"></i>
    </span>
      <span>识物</span>
    </div>
    <div  class="guide_item" @click="goTo('/category')" :class="{on:$route.path ==='/category'}">
    <span class="item_icon">
      <i class="iconfont icon-iconset0497"></i>
    </span>
      <span>分类</span>
    </div>
    <div  class="guide_item" @click="goTo('/shopcart')" :class="{on:$route.path ==='/shopcart'}">
    <span class="item_icon">
      <i class="iconfont icon-gouwuche"></i>
    </span>
      <span>购物车</span>
    </div>
    <div class="guide_item" @click="goTo('/profile')" :class="{on:$route.path ==='/profile'}">
    <span class="item_icon">
      <i class="iconfont icon-gerenzhongxin"></i>
    </span>
      <span>个人</span>
    </div>
  </footer>
</template>

<script>
  export default {

    methods:{
      goTo(path){
        this.$router.replace(path)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .footer_guide
    top-border-1px(#e4e4e4)
    justify-content space-around
    flex-flow row nowrap
    -webkit-box-align center
    align-items center
    position fixed
    z-index 5
    left 0
    bottom 0
    width 100%
    height 0.98rem
    background-color #fafafa
    display flex
    .guide_item
      position relative
      text-align center
      &.on
        color #B4282D
      .iconfont
        display inline-block
        vertical-align middle
        width .4rem
        height .4rem
        font-size .4rem
      span
        display block
        margin-top .07rem
        font-size 0.24rem
        line-height 0.4rem


</style>
