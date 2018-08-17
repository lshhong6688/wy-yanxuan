<template>
  <div class="home">
    <div class="home-header">
      <div class="logo">
        <h2>网易严选</h2>
        <div class="search">
          <span>
            <i class="iconfont icon-sousuo"></i>
          </span>
          <span>搜索商品, 共11778款好物</span>
        </div>
      </div>
      <div class="header-nav">
        <ul class="nav-list" >
          <li :class="{active:activeIndex === index}"  v-for="(data,index) in datas" :key="index" @click="navToggle(index)">{{data.name}}</li>
        </ul>
      </div>
    </div>
    <div class="home-content">
      <!--轮播-->
      <div class="content-one">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(carousel,index) in carousels" :key="index">
              <img :src="carousel.picUrl"/>
            </div>
          </div>
          <!-- 如果需要分页器 -->
          <div class="swiper-pagination" ></div>
        </div>
        <!--售后服务-->
        <div class="shop-service">
          <ul class="service-list">
            <li v-for="(item,index) in homedatas.policyDescList" :key="index">
              <i class="iconfont icon-correct" ></i>
              <span>
                {{item.desc}}
              </span>
            </li>
          </ul>
        </div>
      </div>
      <Split/>
      <!--厂家直销-->
      <div class="content-two">
        <div class="hd">
          <h3>品牌制造商直供</h3>
          <span>
            <i class="iconfont icon-rightarrow"></i>
          </span>
        </div>
        <div class="show-goods">
          <ul class="goods-list">
            <li>
              <img src="http://yanxuan.nosdn.127.net/e57c3fb16c4633c292d8c0e7cb053a6f.png?imageView&thumbnail=355x0&quality=65" alt="">
              <div class="good-tail">
                <span>CK制造商</span>
                <span>25元起</span>
                <span>上新</span>
              </div>
            </li>
            <li>
              <img src="http://yanxuan.nosdn.127.net/cc056d931b009298769d65b94175d696.png?imageView&thumbnail=355x0&quality=65" alt="">
              <div class="good-tail">
                <span>CK制造商</span>
                <span>209元起</span>
                <span>上新</span>
              </div>
            </li>
            <li>
              <img src="http://yanxuan.nosdn.127.net/5e2f6d68ca4cf25b18d6573eafa2a4d4.png?imageView&thumbnail=355x0&quality=65" alt="">
              <div class="good-tail">
                <span>海外制造商</span>
                <span>9.9元起</span>
                <span>上新</span>
              </div>
            </li>
            <li>
              <img src="http://yanxuan.nosdn.127.net/7f55f337f98a198ac3d629847171d5d2.png?imageView&thumbnail=355x0&quality=65" alt="">
              <div class="good-tail">
                <span>Ralph Lauren制造商</span>
                <span>19元起</span>
                <span>上新</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <Split/>
      <!--新品首发-->
      <div class="content-three-four">
        <div class="new-goods blue">
          <h3>新品首发</h3>
          <div class="see-more">
            <span>查看全部</span>
            <i class="iconfont icon-jiantou"></i>
          </div>
        </div>
        <div class="goods-detail">
          <ul>
            <li class="item-detail" v-for="(newItemList ,index) in homedatas.newItemLists" :key="index">
              <div class="good-img">
                <img :src="newItemList.primaryPicUrl" alt="flowers">
              </div>
              <div class="detail">
                <div class="qixi" v-if="isShow">
                  <p>七夕推荐</p>
                  <p>七夕礼物价</p>
                </div>
                <div class="hope">
                  <span>{{newItemList.name}}</span>
                  <span>{{newItemList.simpleDesc}}</span>
                </div>
                <p class="price">¥{{newItemList.retailPrice}}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <Split/>
      <!--人气推荐-->
      <div class="content-three-four ">
        <div class="new-goods org">
          <h4>人气推荐 · 好物精选</h4>
          <div class="see-more all" >
            <span >查看全部</span>
            <i class="iconfont icon-jiantou jiantou"></i>
          </div>
        </div>
        <div class="goods-detail other-detail" >
          <ul>
            <li class="item-detail" v-for="(topicList,index) in homedatas.topicLists" :key="index">
              <div class="good-img">
                <img :src="topicList.itemPicUrl" alt="flowers">
              </div>
              <div class="detail">
                <div class="hope">
                  <span>{{topicList.title}}</span>
                  <span>{{topicList.subtitle}}</span>
                </div>
                <p class="price">¥{{topicList.priceInfo}}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <Split/>
      <!--限时购-->
      <div class="time-container">
        <div class="limit-time">
          <span>严选限时购</span>
          <div class="time">
            <span>00</span>
            <span>:</span>
            <span>00</span>
            <span>:</span>
            <span>00</span>
          </div>
          <div class="next">
            <span>下一场</span>
            <span>10:00</span>
            <span>开始</span>
          </div>
        </div>
        <div class="show-img">
          <img src="http://yanxuan.nosdn.127.net/2f2c1e633c491d3042b191956939aadf.png?imageView&quality=85&thumbnail=330x330" alt="jiu">
          <div class="discount">
            <span>¥388</span>
            <span>¥478</span>
          </div>
        </div>
      </div>
      <Split/>
      <!--福利社-->
      <div class="welfare">
        <img src="http://yanxuan.nosdn.127.net/a3ea2d1108c94c7dece05eddf95f6df5.jpg" alt="welfare">
      </div>
      <Split/>
      <!--专题-->
      <div class="title-select">
        <div class="ts">
          <span>专题精选</span>
          <span>
            <i class="iconfont icon-rightarrow"></i>
          </span>
        </div>
        <div class="img-detail">
          <ul class="img-items">
            <li v-for="(selecteList,index) in homedatas.selecteLists">
              <img :src="selecteList.imgUrl" alt="x">
              <div class="description">
                <span>{{selecteList.name}}</span>
                <span>{{selecteList.description}}</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <Split/>
      <!--各类好物-->
      <div class="good-types"  v-for="(cateList,index) in homedatas.cateLists" :key="index">
        <h3 class="theme">{{cateList.name}}好物</h3>
        <ul class=" types">
          <li class="products" v-for="(itemList, index) in cateList.itemLists" :key="index">
            <div class="product">
              <div class="color-select">
                <p>4</p>
                <p>色</p>
                <p>可</p>
                <p>选</p>
              </div>
              <img :src="itemList.listPicUrl" alt="jiaju">
              <span>{{itemList.name}}</span>
            </div>
            <div class="price-detail">
              <span>{{itemList.simpleDesc}}</span>
              <span>¥{{itemList.retailPrice}}</span>
            </div>
          </li>
        </ul>
      </div>
      <Split/>
    <div class="liwu"><i class="iconfont icon-liwu1"></i></div>
    <div class="top-arrow"><i class="iconfont icon-jiantou-copy-copy-copy"></i></div>
    <div class="bottom">
        <div class="button">
          <button>下载APP</button>
          <button>电脑版</button>
        </div>
        <div class="company">
          <span>网易公司版权所有 © 1997-</span>
          <span>2018</span>
          <br>
          <span>食品经营许可证：JY13301080111719</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  export default {
    data(){
      return{
        isShow:true,
        activeIndex:0
      }
    },
    computed:{
      ...mapState(['datas','carousels','homedatas']),

    },
    mounted(){
      this.$store.dispatch('getData',()=>{
        this.$nextTick(()=>{
          this._initScroll()
        })
      })


      this.$store.dispatch('getCarousel',()=>{
        this.$nextTick(()=>{
          new Swiper('.swiper-container', {
            loop: true,
            autoplay: {
              autoplay:true,
              delay:2000
            },
            pagination: {
              el: '.swiper-pagination',
            }
          })
        })
      })

      this.$store.dispatch('getHomeData',()=> {
        this.$nextTick(() => {
          this._initScroll()
        })
      })

    },
    methods:{
      navToggle(activeIndex){
        this.activeIndex = activeIndex
      },

      _initScroll(){
        new BScroll('.header-nav',{
          click:true,
          scrollX: true
        })

        new BScroll('.goods-detail',{
          click:true,
          scrollX: true
        })
        new BScroll('.other-detail',{
          click:true,
          scrollX: true
        })

        new BScroll('.img-detail',{
          click:true,
          scrollX: true
        })

      }
    },
    components:{

    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .home
    width 100%
    position relative
    background-color #F4F4F4
    .home-header
      width 100%
      height 1.48rem
      position fixed
      background-color #fff
      z-index 20
      .logo
        /*height 0.88rem*/
        box-sizing border-box
        padding 0.16rem 0.3rem
        display flex
        flex-flow row nowrap
        -webkit-box-align center
        align-items center
        h2
          width 1.38rem
          height 0.4rem
          font-size 0.34rem
          margin-right 0.2rem
        .search
          width 5.32rem
          height 0.56rem
          text-align center
          line-height 0.56rem
          background-color #ededed
          border-radius 0.1rem
          color #666
          .iconfont
            font-size 0.28rem
      .header-nav
        height 0.6rem
        padding 0 0.3rem
        display flex
        bottom-border-1px(#DADADA)
        .nav-list
          display flex
          align-items center
          >li
            width 0.88rem
            color #333
            height 0.6rem
            margin  0 0.3rem
            box-sizing border-box
            font-size 0.28rem
            text-align center
            line-height 0.6rem
            &.active
              padding: 0 0 0.12rem 0;
              border-bottom: 0.01rem solid #b4282d;
              color: #b4282d;


  .home-content
      overflow: hidden
      width 100%
      margin-top 1.5rem
      position absolute
      background #fff
      z-index 5
      /*部分一*/
      .content-one
        width 100%
        height 4.72rem
        .swiper-container
          width 100%
          height 4rem
          .swiper-wrapper
            width 100%
            height 100%
            img
              width 100%
              height 100%
          .swiper-pagination
            >span
              width 15px
              height 1px

        .shop-service
          width 100%
          height 0.72rem
          .service-list
            box-sizing border-box
            height 100%
            width 100%
            padding 0 0.3rem
            display flex
            align-items center

            >li
              width 2.28rem
              height 0.36rem
              font-size 0.26rem
              text-align left
              line-height 0.36rem
              >.icon-correct
                width 0.32rem
                height 0.32rem
                color #E3ADAE
              >span
                height 0.32rem
                width 1.44rem

      /*部分二*/
      .content-two
        width 100%
        height 5.86rem
        background #fff
        margin-bottom 0.12rem
        .hd
          width 100%
          height 1.1rem
          text-align center
          line-height 1.1rem
          display flex
          justify-content center
          align-items center
          h3
            font-size 0.32rem
            height 0.48rem
            /*text-align center*/
            line-height 0.48rem
          >span .icon-rightarrow
            width 0.3rem
            height 0.3rem
            margin-left 0.1rem
        .show-goods
          height 4.76rem
          box-sizing border-box
          padding-bottom 0.08rem
          >ul
            height 4.68rem
            margin 0 0.16rem
            >li
              width 3.55rem
              height 2.36rem
              float left
              background-color #f4f4f4
              position relative

              &:nth-child(1),&:nth-child(3)
                margin-right 0.08rem
                margin-bottom 0.08rem
              &:nth-child(2),&:nth-child(4)
                margin-bottom 0.08rem
              >img
                width 100%
                height 100%
              >div
                position absolute
                top 0
                left 0
                width 3.55rem
                height 1.35rem
                padding 0.2rem 0 0 0.2rem
                box-sizing border-box
                span
                  display block
                  &:nth-child(2)
                    margin 0.15rem 0
                  &:nth-child(3)
                    border 0.01rem solid #CABCA1
                    color #CABCA1
                    width 0.64rem
      .content-three-four
        width 100%
        height 7.72rem
        background #fff
        .new-goods
          width 100%
          height 2.26rem
          display flex
          flex-direction column
          justify-content center
          align-items center
          margin-bottom 0.32rem
        .blue
          background #F1F7FD
          h3
            text-align center
            font-size .35rem
            color #8BA0B6
          .see-more
            width 2.4rem
            height 0.56rem
            text-align center
            line-height 0.56rem
            margin  0.16rem 0.4rem 0
            background #D8E5F1
            color #8BA0B6
        .org
          background #FEF7E3
          h4
            text-align center
            font-size .35rem
            color #CFBF9F
          .all
            color #CFBF9F
            background #F4E9CB
            width 2.4rem
            height 0.56rem
            text-align center
            line-height 0.56rem
            margin  0.16rem 0.4rem 0
            span>.icon-jiantou
              display inline-block

        .goods-detail
          width 100%
          height 4.8rem
          display flex
          >ul
            height 4.6rem
            display flex
            justify-content space-around
            .item-detail
              width:2.80rem
              height 4.60rem
              margin-left 0.3rem
              display flex
              flex-direction column
              .good-img
                width 2.80rem
                height 2.80rem
                margin-bottom 0.2rem
                background #F4F4F4
                img
                  width 100%
                  height 100%
              .detail
                height 1.2rem
                .qixi
                  width 100%
                  height 0.3rem
                  margin-bottom 0.16rem
                  padding-left: 0.1rem
                  display flex
                  justify-content space-around
                  align-items center
                  >p
                    width 1.2rem
                    height 0.3rem
                    font-size 0.15rem
                    text-align center
                    line-height 0.3rem
                    color #fff
                    &:nth-child(1)
                      background #E5686D
                    &:nth-child(2)
                      background #F49321
                .hope
                  width 2.80rem
                  height 0.7rem
                  padding 0 0.1rem
                  margin-bottom 0.09rem

                  span
                    display block
                    height 0.31rem
                    font-size 0.3rem
                    margin 0.2rem 0.05rem
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                .price
                  display block
                  font-size 0.28rem
                  margin 0.3rem 0.2rem
                  color #D48386

      .time-container
        width 100%
        height 3.8rem
        box-sizing border-box
        padding .3rem 0.4rem 0.3rem 0.56rem
        display flex
        justify-content space-around
        .limit-time
          display flex
          flex-direction column
          width 3.34rem
          height 3.2rem
          padding-top 0.8rem
          box-sizing border-box
          >span
            font-size 0.32rem
            letter-spacing 0.2rem
          .time
            margin 0.24rem 0 0.4rem 0
            >span
              &:nth-child(2),&:nth-child(4)
                display inline-block
                width 0.2rem
                height 0.45rem
                text-align center
                line-height 0.45rem
                font-size 0.32rem
              &:nth-child(1),&:nth-child(3),&:nth-child(5)
                display inline-block
                width 0.62rem
                height 0.56rem
                text-align center
                line-height 0.56rem
                font-size 0.32rem
                color #fff
                background #444444
        .show-img
          position relative
          width 3.2rem
          height 3.2rem
          img
            width 3.2rem
            height 3.2rem
          .discount
            position absolute
            right 0
            bottom 0
            width 0.96rem
            height 0.96rem
            background #F49423
            border-radius 50%
            display flex
            flex-direction column
            justify-content center
            align-items center
            >span
              font-size 0.28rem
              color #fff
              position relative
              &:nth-child(2)
                &::after
                  width 0.7rem
                  height 0.02rem
                  content ''
                  background  #fff
                  left  0
                  bottom 0
                  top 0.13rem
                  position absolute


      .welfare
        width 100%
        height 3rem
        img
          width 100%
          height 100%
      .title-select
        width 100%
        height 5.63rem
        background #fff
        .ts
          width 100%
          height 1.1rem
          display flex
          justify-content center
          align-items center
          font-size 0.32rem
          >span>.icon-rightarrow
            display inline-block
            margin-left 0.1rem
        .img-detail
          display flex
          height 4.53rem
          /*box-sizing border-box*/
          .img-items
            display flex
            justify-content space-between
            margin  0 0.3rem 0.36rem
            height 4.17rem
            >li
              width 5.75rem
              height 100%
              margin-right 0.21rem
              img
                width 100%
                height 3.22rem
              .description
                width 100%
                height 0.77rem
                margin-top 0.16rem
                display flex
                flex-direction column
                font-size 0.28rem
                span
                  &:nth-child(2)
                    margin-top 0.16rem
                    white-space:nowrap
                    text-overflow:ellipsis
                    overflow:hidden
      .good-types
        width 100%
        background #fff
        .theme
          width 100%
          height 1.2rem
          font-size 0.32rem
          color #333
          text-align center
          line-height 1.2rem
        .types
          width 100%
          clearFix()
          .products
            width 3.75rem
            height 5.37rem
            box-sizing border-box
            padding 0 0.1rem 0.33rem 0.2rem
            display flex
            flex-direction column
            float left
            .product
              width 3.45rem
              height 4.14rem
              background-color #F4F4F4
              position relative
              img
                display:block
                width 100%
                height 3.45rem
              >span
                display block
                font-size 0.24rem
                color #9F8A60
                box-sizing border-box
                padding 0.2rem 0.1rem
                background #F1ECE2
                white-space:nowrap
                text-overflow:ellipsis
                overflow:hidden
              .color-select
                width 0.32rem
                left 0
                top 0
                color #9F8A60
                box-sizing border-box
                padding 0.12rem 0
                margin 0.1rem 0 0 0.1rem
                text-align center
                position absolute
                border 0.005rem solid #9F8A60
                >p
                  font-size 0.24rem
                  line-height 0.24rem
              .more-detail
                width 100%
                height 100%
                box-sizing border-box
                padding 1.28rem 0
                text-align center
                >span
                  display block
                  &:nth-child(1)
                    font-size 0.3rem
                    line-height 0.3rem
                    margin-bottom 0.6rem
                  &:nth-child(2)
                    .icon-jiantouyou
                      font-size 0.8rem
                      line-height 0.8rem
            .price-detail
              width 100%
              margin-top 0.1rem
              span
                display inline-block
                width 3.4rem
                font-size 0.28rem
                white-space:nowrap
                text-overflow:ellipsis
                overflow:hidden
                &:nth-child(2)
                  margin-top 0.1rem
                  font-size 0.32rem
                  color #CE7376

      .liwu
        width 1.12rem
        height 0.8rem
        position fixed
        right 0
        bottom 2.3rem
        background-color #F5F5F5
        border 0.01rem solid #F0F0F0
        border-radius 50% 0 0 50%
        .icon-liwu1
          font-size 0.6rem
          display flex
          justify-content center
          align-items center
          color #B4282D
          transform translateY(0.1rem)
      .top-arrow
        width 0.82rem
        height 0.82rem
        position fixed
        right 0.2rem
        bottom 1.2rem
        border-radius 50%
        background-color #F5F5F5
        border 0.01rem solid #F0F0F0

        .icon-jiantou-copy-copy-copy
          font-size 0.6rem
          display flex
          justify-content center
          align-items center
          color #AEAEAE
          transform translateY(0.1rem)
      .bottom
        width 100%
        height 2.44rem
        box-sizing border-box
        padding 0.54rem 0.2rem 0.28rem
        background #414141
        margin-bottom 0.98rem
        .button
          width 7.1rem
          height 0.62rem
          display flex
          justify-content center
          >button
            width 1.72rem
            background #414141
            height 0.62rem
            color #fff
            border 0.01rem solid #bbb
            &:nth-child(1)
              margin-right 0.6rem
        .company
          margin-top 0.36rem
          width 7.1rem
          height 0.64rem
          >span
            display block
            line-height 0.35rem
            text-align center
            color floralwhite
            &:nth-child(1),&:nth-child(2)
              display inline-block
              transform translateX(1.2rem)
</style>
