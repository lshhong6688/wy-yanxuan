import Vue from 'vue'
import Router from 'vue-router'

// import InterPage from '../pages/InterPage/InterPage.vue'
import Home from '../pages/Home/Home.vue'
import ShiWu from '../pages/ShiWu/ShiWu.vue'
import Category from '../pages/Category/Category.vue'
import ShopCart from '../pages/ShopCart/ShopCart.vue'
import Profile from '../pages/Profile/Profile.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    // {
    //   path: '/interpage',
    //   component: InterPage
    // },
    {
      path: '/home',
      component: Home,
      meta:{
        showFoot:true
      }
    },
    {
      path: '/shiwu',
      component: ShiWu,
      meta:{
        showFoot:true
      }
    },
    {
      path: '/category',
      component: Category,
      meta:{
        showFoot:true
      }
    },
    {
      path: '/shopcart',
      component: ShopCart,
      meta:{
        showFoot:true
      }
    },
     {
      path: '/profile',
      component: Profile
    },
    {
      path: '/',
      redirect:'/home'
    },

  ]
})
