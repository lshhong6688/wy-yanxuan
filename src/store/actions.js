//actions模块

import {
  reqData,
  reqCarousel,
  reqHomeData,
  reqShiWuData,
  reqCategoryData
} from '../api'
import {
  DATA,
  CAROUSEL,
  HOMEDATAS,
  SHIWUDATAS,
  CATEGORYDATAS
} from './mutation-types'

export default {
  //异步获取data的数据
  async getData({commit},cb){
    const result =await reqData()
    // console.log(result);
    if(result.code=== 0){
      const datas = result.data
      console.log(datas);
      commit(DATA,{datas})
      cb && cb()
    }
  },
  //异步获取轮播图的数据
  async getCarousel({commit},cb){
    const result = await reqCarousel()
    // console.log(result);
    if(result.code === 0){
      const carousels = result.focusList
      // console.log(carousels);
      commit(CAROUSEL,{carousels})
      cb && cb()
    }
  },
  //异步获取home页面的数据
  async getHomeData({commit},cb){
    const result = await reqHomeData()
    // console.log(result);
    if(result.code === 0){
      const homedatas = result.home
      // console.log(homedatas);
      commit(HOMEDATAS,{homedatas})
      cb && cb()
    }
  },
  //异步获识物页面的数据
  async getShiWuData({commit},cb){
    const result = await reqShiWuData()
    // console.log(result);
    if(result.code === 0){
      const shiwudatas = result.detail
      // console.log(shiwudatas);
      commit(SHIWUDATAS,{shiwudatas})

    }
    cb && cb()
  },
  //异步获取分类页面的数据
  async getCategoryData({commit},cb){
    const result = await reqCategoryData()
    if(result.code===0){
      const categorydatas = result.category
      // console.log(categorydatas);
      commit(CATEGORYDATAS,{categorydatas})
    }
    cb && cb()
  }

}




