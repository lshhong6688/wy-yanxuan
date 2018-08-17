<template>
    <div class="shiwu-container">
      <div class="shiwu-header">
        <div class="house">
          <i class="iconfont icon-shouye"></i>
        </div>
        <h2>网易严选</h2>
        <div class="header-icon">
          <span>
              <i class="iconfont icon-sousuo"></i>
            </span>
          <span>
              <i class="iconfont icon-gouwuche"></i>
            </span>
        </div>
      </div>
      <div class="shiwu-content">
        <div class="loop">
          <div class="swiper-container" >
            <div class="swiper-wrapper" v-if="shiwudatas.banners">
              <div class="swiper-slide" v-for="(item,index) in shiwudatas.banners" :key="index">
                <img :src="item.picUrl" alt="x">
                <div class="text-des">
                  <span>{{item.subTitle}}</span>
                  <span>{{item.title}}</span>
                  <span>{{item.desc}}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="small-loop">
          <ul class=" scroll-container">
            <li v-for="(item,index) in shiwudatas.column" :key="index">
             <div class="imgContainer">
               <span class=" article-count">{{item.articleCount}}</span>
               <img :src="item.picUrl" alt="x">
               <span class="loop-title">{{item.title}}</span>
             </div>
           </li>
          </ul>
        </div>
        <Split/>
        <!--为你推荐-->
        <div class="yanxuan">
          <div class="yanxuan-title">
            <h2>为你推荐</h2>
          </div>
          <div class="img-text">
            <div class="pic">
              <span>严选推荐</span>
              <img src="http://yanxuan.nosdn.127.net/9c16d0d118f00d9db00fa6414aea0487.jpg?imageView&quality=75" alt="">
            </div>
            <div class="topicInfo">
              <div class="des-price">
                <span>严选恋爱博物馆</span>
                <span>9.9元起</span>
              </div>
              <span>40款恋爱小甜饼高甜来袭！</span>
            </div>
          </div>
          <div class="minorPosItem">
            <div class="left-text">
              <div class="icon-text">
                <img src="http://yanxuan.nosdn.127.net/256d81aa757b7c91c1fc7d87de5fb968.jpg?imageView&quality=75&thumbnail=48y48" alt="">
                <span>海外组：太阳</span>
              </div>
              <span class="methods">除甲醛，这些小妙招来帮你</span>
              <div class="detail-text">
                <span>甲醛这种空气污染物，在日常生活中无处不在。无论是人造木地板、家具，还是地毯、窗帘，都会在8~15年内缓慢的释放甲醛。尤其在高温天气下，甲醛的挥发速度比平时高出2、3倍，哪怕是住了好几年的房子、开的车子也会在无形中散发甲醛。想要解决这个大难题？我这里有几个小妙招可以帮你～</span>
              </div>
            </div>
            <div class="right-img">
              <img src="//yanxuan.nosdn.127.net/090812aac6166918f945edbaa8032509.jpg?imageView&quality=75" alt="">
              <span>挑款师推荐</span>
            </div>
          </div>
          <div class="minorPosItem">
            <div class="left-text">
              <div class="icon-text">
                <img src="http://yanxuan.nosdn.127.net/275bdc66f4d3f841c8879933f2593a27.png?imageView&quality=75&thumbnail=48y48" alt="">
                <span>饮食组：肉肉</span>
              </div>
              <span class="methods">半价吃到鲜爽小龙虾</span>
              <div class="detail-text">
                <span>7、8月的小龙虾肥美正当时，各个肉质饱满，细腻弹牙，吃起来一个接一个的，根本停不住。作为从不标题党的严选挑款师，我这次给大家带来了一个超大惊喜——8月20号之前，买一盒小龙虾只要加上9.9元，就能再得一盒，只要差不多一半的价格就能把2大盒小龙虾带回家。</span>
              </div>
            </div>
            <div class="right-img">
              <img src="http://yanxuan.nosdn.127.net/64360c9a450908a76411b5db9eb1efd9.jpg?imageView&quality=75" alt="">
              <span>挑款师推荐</span>
            </div>
          </div>
          <div class="img-text">
            <div class="pic">
              <span>严选推荐</span>
              <img src="http://yanxuan.nosdn.127.net/9c16d0d118f00d9db00fa6414aea0487.jpg?imageView&quality=75" alt="">
            </div>
            <div class="topicInfo">
              <div class="des-price">
                <span>严选恋爱博物馆</span>
                <span>9.9元起</span>
              </div>
              <span>40款恋爱小甜饼高甜来袭！</span>
            </div>
          </div>
          <div class="minorPosItem">
            <div class="left-text">
              <div class="icon-text">
                <img src="http://yanxuan.nosdn.127.net/256d81aa757b7c91c1fc7d87de5fb968.jpg?imageView&quality=75&thumbnail=48y48" alt="">
                <span>海外组：太阳</span>
              </div>
              <span class="methods">除甲醛，这些小妙招来帮你</span>
              <div class="detail-text">
                <span>甲醛这种空气污染物，在日常生活中无处不在。无论是人造木地板、家具，还是地毯、窗帘，都会在8~15年内缓慢的释放甲醛。尤其在高温天气下，甲醛的挥发速度比平时高出2、3倍，哪怕是住了好几年的房子、开的车子也会在无形中散发甲醛。想要解决这个大难题？我这里有几个小妙招可以帮你～</span>
              </div>
            </div>
            <div class="right-img">
              <img src="//yanxuan.nosdn.127.net/090812aac6166918f945edbaa8032509.jpg?imageView&quality=75" alt="">
              <span>挑款师推荐</span>
            </div>
          </div>
          <div class="minorPosItem">
            <div class="left-text">
              <div class="icon-text">
                <img src="http://yanxuan.nosdn.127.net/275bdc66f4d3f841c8879933f2593a27.png?imageView&quality=75&thumbnail=48y48" alt="">
                <span>饮食组：肉肉</span>
              </div>
              <span class="methods">半价吃到鲜爽小龙虾</span>
              <div class="detail-text">
                <span>7、8月的小龙虾肥美正当时，各个肉质饱满，细腻弹牙，吃起来一个接一个的，根本停不住。作为从不标题党的严选挑款师，我这次给大家带来了一个超大惊喜——8月20号之前，买一盒小龙虾只要加上9.9元，就能再得一盒，只要差不多一半的价格就能把2大盒小龙虾带回家。</span>
              </div>
            </div>
            <div class="right-img">
              <img src="http://yanxuan.nosdn.127.net/64360c9a450908a76411b5db9eb1efd9.jpg?imageView&quality=75" alt="">
              <span>挑款师推荐</span>
            </div>
          </div>
        </div>
        <Split/>
        <!--十点一刻-->
        <div class="yanxuan">
          <div class="yanxuan-title">
            <h2>十点一刻</h2>
          </div>
          <div class="time-container">
            <div class="today-theme">
              <div class="wraper">
                <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/tenFifteen-2a1d0ea11b.png" alt="">
                <div class="all-content">
                  <h5>今日话题</h5>
                  <div class="about-title">
                    <span>你有哪些租房经历</span>
                    <span>聊聊你用过的租房神器</span>
                  </div>
                  <div class=" renting-content">
                    <div class="participator">
                      <div class="icon-images">
                        <img src="http://yanxuan.nosdn.127.net/e5ee812b0101ac5d1ddacd659b0fe562.jpg?imageView&thumbnail=48y48" alt="">
                        <img src="http://yanxuan.nosdn.127.net/e5ee812b0101ac5d1ddacd659b0fe562.jpg?imageView&thumbnail=48y48" alt="">
                        <img src="http://yanxuan.nosdn.127.net/e5ee812b0101ac5d1ddacd659b0fe562.jpg?imageView&thumbnail=48y48" alt="">
                      </div>
                      <div class="more-title">
                        <i class="iconfont icon-more"></i>
                        <span>523人参与话题</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="wraper">
                <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/tenFifteen-2a1d0ea11b.png" alt="">
                <div class="all-content">
                  <h5>今日话题</h5>
                  <div class="about-title">
                    <span>你有哪些租房经历</span>
                    <span>聊聊你用过的租房神器</span>
                  </div>
                  <div class=" renting-content">
                    <div class="participator">
                      <div class="icon-images">
                        <img src="http://yanxuan.nosdn.127.net/e5ee812b0101ac5d1ddacd659b0fe562.jpg?imageView&thumbnail=48y48" alt="">
                        <img src="http://yanxuan.nosdn.127.net/e5ee812b0101ac5d1ddacd659b0fe562.jpg?imageView&thumbnail=48y48" alt="">
                        <img src="http://yanxuan.nosdn.127.net/e5ee812b0101ac5d1ddacd659b0fe562.jpg?imageView&thumbnail=48y48" alt="">
                      </div>
                      <div class="more-title">
                        <i class="iconfont icon-more"></i>
                        <span>523人参与话题</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Split/>
        <!--严选甄品-->
        <div class="yanxuan">
          <div class="yanxuan-title">
            <h2>严选甄品</h2>
          </div>
          <div class="img-text">
            <div class="pic">
              <span>严选推荐</span>
              <img src="http://yanxuan.nosdn.127.net/9c16d0d118f00d9db00fa6414aea0487.jpg?imageView&quality=75" alt="">
            </div>
            <div class="topicInfo">
              <div class="des-price">
                <span>严选按摩神器大公开</span>
              </div>
            </div>
          </div>
          <div class="minorPosItem">
            <div class="left-text left-text2">
              <span class="methods methods2" >出门旅行，登机箱也要颜值在线</span>
            </div>
            <div class="right-img">
              <img src="http://yanxuan.nosdn.127.net/64fab0052566aa73e5b990f21577e3fe.jpg?imageView&quality=75" alt="">
              <span>出口商品</span>
            </div>
          </div>
          <div class="minorPosItem">
            <div class="left-text left-text2">
              <span class="methods methods2">出门旅行，登机箱也要颜值在线</span>
            </div>
            <div class="right-img">
              <img src="http://yanxuan.nosdn.127.net/64fab0052566aa73e5b990f21577e3fe.jpg?imageView&quality=75" alt="">
              <span>出口商品</span>
            </div>
          </div>
        </div>
        <!--严选LOOK-->
        <Split/>
        <div class="yanxuan look">
          <div class="yanxuan-title">
            <h2>严选LOOK</h2>
          </div>
          <div class="bigcontainer">
            <div class="big-img">
              <ul>
                <li>
                  <img src="http://yanxuan.nosdn.127.net/e8a843968c44f0598aedc62c138d6d2a.jpg?imageView&quality=75" />
                </li>
                <li>
                  <img src="//yanxuan.nosdn.127.net/d020805d44beccf0275232c96bc37845.jpg?imageView&quality=75"/>
                </li>
              </ul>
            </div>
            <div class="comment">
              <div class="buyer">
                <img src="http://yanxuan.nosdn.127.net/acaf8aa84ebcc9193225ad63a194f9de.jpg?imageView&quality=75&thumbnail=48y48" alt="">
                <span>eiffel_colin</span>
              </div>
              <span class="color">樱花粉，超级美的颜色！</span>
            </div>
          </div>
        </div>

        <div class="exploreMore">
          <div class="line-title">
            <div class="wonderful">更多精彩</div>
            <div class="line"></div>
          </div>
          <div class="imgsShow">
            <div class="showContainer" v-for="(item,index) in shiwudatas.findMore" :key="index">
              <div class="pic-container">
                <div class="item-pic " :class="{hasSmallPic: item.picList}">
                  <img :src="item.itemPicUrl" >
                </div>
                <div class="picList" v-if="item.picList">
                  <img :src="item.picList[0]">
                  <img :src="item.picList[1]">
                </div>
              </div>
              <span class="descriptions">{{item.title}}</span>
            </div>
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

    computed:{
      ...mapState(["shiwudatas"])
    },
    mounted(){
      this.$store.dispatch('getShiWuData',()=>{
        this.$nextTick(()=>{
          new Swiper('.swiper-container', {
            loop: true,
            spaceBetween: 10,
            slidesPerView: 1.1,
            centeredSlides: true,
          })
          new BScroll(".small-loop",{
            click:true,
            scrollX:true
          })
          new BScroll(".time-container",{
            click:true,
            scrollX:true
          })
          new BScroll(".big-img",{
            click:true,
            scrollX:true
          })

        })
      })
    },

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
.shiwu-container
  width 100%
  height 100%
  .shiwu-header
    bottom-border-1px(#DADADA)
    width 100%
    height 0.88rem
    box-sizing border-box
    padding 0 0.16rem 0 0.24rem
    display flex
    align-items center
    background #FAFAFA
    position fixed
    top 0
    z-index 20

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

  .shiwu-content
    overflow: hidden
    margin-top 0.88rem
    width 100%
    .loop
      width 100%
      box-sizing border-box
      padding 0.24rem 0
      .swiper-container
        /*width 6.9rem*/
        padding 0 .3rem
        height 3.85rem
        margin 0
        .swiper-wrapper
          height 100%
          .swiper-slide
            width 6.7rem
            height 100%
            border-radius 10%
            position relative
            img
              display block
              width 100%
              height 100%

           .text-des
              position absolute
              top 0
              bottom 0
              left 0
              right 0
              margin auto
              width 4.66rem
              height 1.98rem
              background #F7F6F3
              display: flex
              flex-direction column
              justify-content center
              align-items center
              z-index 2
              span
                &:nth-child(1)
                  font-size 0.24rem
                  color #AEADAC
                &:nth-child(2)
                  font-size 0.4rem
                  margin 0.16rem 0
                  color #555454
                &:nth-child(3)
                  font-size 0.28rem
                  color #999796
    .small-loop
      width 100%
      height 2.86rem
      box-sizing border-box
      padding 0.32rem 0 0.28rem
      margin-left 0.3rem
      margin-bottom 0.2rem
      overflow hidden
      .scroll-container
        height 2.26rem
        display inline-flex
        flex-flow row nowrap
        li
          width 1.64rem
          flex-shrink 0
          margin-right .4rem
          .imgContainer
            width 1.64rem
            margin-right 0.24rem
            margin-bottom 0.22rem
            position relative
            img
              width 1.64rem
              height 1.64rem
            .article-count
              position absolute
              top 0
              right 0.1rem
              width 90%
              background-color #BABABA
              text-align right
              margin 0 auto
              font-size 0.24rem
              color #fff
            .loop-title
              display block
              font-size 0.28rem
              text-align center
              line-height 0.28rem
              white-space nowrap
              overflow hidden
              text-overflow ellipsis
              color #3F3F3F
    .yanxuan
      width 100%
      box-sizing border-box
      padding 0 0.3rem 0.4rem
      margin-bottom 0.2rem
      background #fff
      .yanxuan-title
        width 6.9rem
        height 1.2rem
        text-align center
        line-height 1.2rem
        background #fff
        h2
          font-size 0.32rem

      .img-text
        width 6.9rem
        margin-bottom 0.3rem
        border 0.01rem solid #d9d9d9
        .pic
          width 6.88rem
          height 3.86rem
          position relative
          span
            width 1.30rem
            height 0.36rem
            display block
            font-size 0.24rem
            position absolute
            top 0.1rem
            left 0.1rem
            background #fff
            border-radius 2rem
            text-align center
            line-height 0.36rem
            border 0.01rem solid #d9d9d9
          img
            display block
            width 6.88rem
            height 3.86rem
        .topicInfo
          width 6.88rem
          height 1.86rem
          box-sizing border-box
          padding 0.24rem 0.2rem 0.67rem
          .des-price
            display flex
            justify-content space-around
            margin-bottom 0.2rem
            span
              color #333333
              font-size 0.4rem
              display inline-block
              &:nth-child(2)
                text-align right
          span
            width 6.48rem
            height 0.33rem
            color #9C9C9C
            display block
            font-size 0.28rem
            text-align left
            line-height 0.33rem

      .minorPosItem
        width 6.9rem
        margin-bottom 0.3rem
        border 0.01rem solid #d9d9d9
        display flex
        justify-content space-between
        .left-text
          width 4.08rem
          height 2.72rem
          box-sizing border-box
          padding 0 0.3rem 0 0.2rem
          display flex
          flex-direction column
          justify-content left
          .icon-text
            width 3..58rem
            margin-top 0.4rem
            margin-bottom 0.25rem
            vertical-align middle
            img
              width 0.46rem
              height 0.46rem
              border-radius 50%
              border 0.01rem solid #d9d9d9
            span
              display inline-block
              font-size 0.24rem
              width 1.5rem
              margin-left 0.08rem
          .methods
            width 3.28rem
            font-size 0.3rem
            margin-right 0.3rem
            white-space nowrap
            overflow hidden
            text-overflow ellipsis
            margin-bottom 0.14rem
          .detail-text
            width 3.58rem
            >span
              font-size 0.24rem
              line-height 1.5
              color #7f7f7f
              display  -webkit-box
              -webkit-line-clamp 2
              -webkit-box-orient vertical
              overflow hidden
              text-overflow ellipsis
        .left-text2
          width 4.08rem
          height 2.72rem
          box-sizing border-box
          padding 0 0.3rem 0 0.2rem
          display flex
          flex-direction column
          justify-content center
          align-items center
          .methods
            margin-right 0.3rem
            font-size 0.32rem
            white-space nowrap
            overflow hidden
            text-overflow ellipsis
        .right-img
          width 2.8rem
          height 2.72rem
          position relative
          img
            width 100%
            height 100%
          span
            width 1.54rem
            height 0.36rem
            display block
            font-size 0.24rem
            position absolute
            top 0.1rem
            left 0.1rem
            background #fff
            border-radius 2rem
            text-align center
            line-height 0.36rem
            border 0.01rem solid #d9d9d9
      .today-theme
        display inline-flex
        .wraper
          width 6.9rem
          height 4.11rem
          box-sizing border-box
          padding 0.38rem 0.4rem 0.79rem 0
          position relative
          img
            width 6rem
            height 4.2rem
            display block
            transform translate(0,-0.3rem)
          .all-content
            position absolute
            top 0
            bottom 0
            left 0
            right 0
            margin auto 0
            width 5rem
            height 2.94rem
            display flex
            flex-direction column
            align-items center
            h5
              width 100%
              height 0.28rem
              margin-bottom 0.4rem
              text-align center
              line-height 0.28rem
              font-size 0.24rem
              color #949494
            .about-title
              height 0.84rem
              width 100%
              display flex
              flex-direction column
              justify-content center
              align-items center
              span
                display block
                font-size 0.28rem
                margin-bottom 0.14rem
                &:nth-child(1)
                  font-size 0.36rem
            .renting-content
              position absolute
              bottom 0
              width 100%
              .participator
                height 0.48rem
                border 0.01rem #D9D9D9
                display flex
                position relative
                .icon-images
                  margin-left 0.8rem
                  width 1.44rem
                  display flex
                  img
                    width 0.48rem
                    height 0.48rem
                    border-radius 50%
                    transform translateY(5%)
                    font-size 0
                    display block
                .more-title
                  margin-right 0.4rem
                  position absolute
                  top 0
                  bottom 0
                  left auto
                  right 0
                  span
                    display inline-block
                    text-align center
                    line-height 0.48rem
                    font-size 0.24rem
                    margin-left 0.16rem
                  .icon-more
                    display inline-block
                    width 0.48rem
                    height 0.48rem
                    border-radius 50%
                    background #D9D9D9
                    transform translateY(0.05rem)
                    color white
                    font-size 0.5rem
                    text-align center
                    line-height 0.48rem

    .look
      padding 0
      .bigcontainer
        height 9.36rem
        .big-img
          height 7.5rem
          display flex
          ul
            display flex
            li
              width 7.5rem
              height 7.5rem
              img
                width 100%
                height 100%
                display block
        .comment
          width 100%
          height 1.86rem
          box-sizing border-box
          padding 0.24rem 0.3rem 0.46rem
          display flex
          flex-direction column
          justify-content left
          .buyer
            width 6.9rem
            display flex
            img
              width 0.48rem
              height 0.48rem
              border-radius 50%
              border 0.01rem solid whitesmoke
            span
              display inline-block
              font-size 0.28rem
              text-align center
              line-height 0.48rem
              width 1.14rem
              margin-left 0.08rem
          .color
            display inline-block
            font-size 0.28rem
            text-align left
            line-height 0.44rem
            margin-top 0.12rem



    .exploreMore
      width 100%
      box-sizing border-box
      padding 0 0.3rem 0.4rem
      margin-bottom 0.2rem
      background #F4F4F4
      .line-title
        width 6.9rem
        height 1.2rem
        text-align center
        line-height 1.2rem
        display flex
        flex-direction column
        justify-content center
        align-items center
        .wonderful
          width 1.5rem
          height 0.33rem
          margin 0 0.24rem
          text-align center
          line-height 0.33rem
          background #F4F4F4
          font-size 0.28rem
          z-index 1
        .line
          transform translateY(-0.2rem)
          width 6.9rem
          height 0.02rem
          background-color #DADADA

      .imgsShow
        width 6.90rem
        display flex
        flex-direction column
        justify-content center
        align-items center
        .showContainer
          height 4.98rem
          box-sizing border-box
          padding 0.24rem
          margin-bottom 0.3rem
          background #ffffff
          display flex
          flex-direction column
          .pic-container
            width 6.42rem
            height 4.98rem
            position relative
            .item-pic
              width 6.42rem
              height 3.60rem
              >img
                width 100%
                height 3.60rem
            .hasSmallPic
              width 4.6rem
              height 3.60rem
            .picList
              position absolute
              top 0
              right 0
              width 1.78rem
              height 3.60rem
              >img
                width 1.78rem
                height 1.78rem
          .descriptions
            width 6.42rem
            height 0.9rem
            white-space nowrap
            overflow hidden
            text-overflow ellipsis
            padding 0.28rem 0
            box-sizing border-box
</style>
