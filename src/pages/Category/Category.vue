<template>
    <div class="categoryContainer">
      <div class="cate-header">
        <div class="cate-search">
          <span>
            <i class="iconfont icon-sousuo"></i>
          </span>
          <span>搜索商品, 共12188款好物</span>
        </div>
      </div>

      <div class="sidebar-container">
        <!--侧边导航-->
        <div class="sidebar">
          <div class="navbar">
            <ul class="cateNav">
              <li class="item " :class="{active:activeIndex === index}" v-for="(item,index) in categorydatas"
                  :key="index" @click="select(index)">{{item.name}}</li>
            </ul>
          </div>
        </div>
        <!--产品详情-->
        <div class="detail-container" v-if="categorydatas[activeIndex]">
          <div class="sidebar-detail">
            <div class="cate-pic">
              <img :src="categorydatas[activeIndex].bannerUrl" >
            </div>
            <div class="cate-product">
              <ul>
                <li class="good-item" v-for="(item,index) in categorydatas[activeIndex].subCateList" :key="index">
                  <img :src="item.wapBannerUrl" alt="">
                  <div class="pic-text">{{item.name}}</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import {mapState} from "vuex"
  import BScroll from 'better-scroll'
  export default {
    data(){
        return{
          activeIndex:0
        }
      },
    computed:{
      ...mapState(['categorydatas'])
    },
    mounted(){
      this.$store.dispatch('getCategoryData',()=>{
        this.$nextTick(()=>{
          this._initScroll()
        })
      })

    },
    methods:{
      select(selectIndex){
        this.activeIndex = selectIndex
      },
      _initScroll(){
        new BScroll('.navbar',{
          click:true,
        })
        // new BScroll('.detail-container',{
        //   click:true
        // })

      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .categoryContainer
    width 100%
    height 100%
    overflow hidden
    .cate-header
      bottom-border-1px(#DADADA)
      width 100%
      height 0.88rem
      position fixed
      padding 0 0.3rem
      box-sizing border-box
      background-color #fff
      z-index 50
      .cate-search
        width 6.9rem
        height 0.56rem
        text-align center
        line-height 0.56rem
        background-color #ededed
        border-radius 0.1rem
        color #666
        position absolute
        top 0
        bottom 0
        left 0
        right 0
        margin auto
        .iconfont
          font-size 0.28rem
    .sidebar-container
      width 100%
      .sidebar
        position fixed
        width 1.62rem
        border-right 0.01rem solid #E7E7E7
        .navbar
          width 100%
          height 12.46rem
          .cateNav
            box-sizing border-box
            padding 0.4rem 0 1.38rem
            .item
              width 100%
              height 0.5rem
              margin-bottom 0.4rem
              font-size 0.28rem
              line-height 0.5rem
              text-align center
              &.active
                border-left: 0.05rem solid #b4282d;
                color: #b4282d;
              &:last-child
                margin-bottom 0

      .sidebar-detail
        margin-top 0.88rem
        width 5.88rem
        height 12.46rem
        margin-left 1.62rem
        box-sizing border-box
        padding 0.3rem 0.3rem 0.21rem
        .cate-pic
          width 5.28rem
          height 1.92rem
          margin-bottom 0.32rem
          img
            width 100%
            height 100%
        .cate-product
          width 5.28rem
          ul
            width 100%
            display flex
            flex-flow row wrap
            justify-content space-between
            .good-item
              width 1.44rem
              height 2.16rem
              text-align center
              img
                width 1.44rem
                height 1.44rem
              .pic-text
                font-size .24rem
                color #333
                display -webkit-box
                -webkit-line-clamp 2
                -webkit-box-orient vertical
                overflow hidden
                text-overflow ellipsis

</style>
