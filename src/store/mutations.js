//mutations模块

import {
  DATA,
  CAROUSEL,
  HOMEDATAS,
  SHIWUDATAS,
  CATEGORYDATAS
} from './mutation-types'

export default {
  [DATA](state,{datas}){
    state.datas = datas

  },
  [CAROUSEL](state,{carousels}){
    state.carousels = carousels
  },
  [HOMEDATAS](state,{homedatas}){
    state.homedatas = homedatas
    // console.log(homedatas);
  },
  [SHIWUDATAS](state,{shiwudatas}){
    state.shiwudatas = shiwudatas
    // console.log(shiwudatas);
  },
   [CATEGORYDATAS](state,{categorydatas}){
    state.categorydatas = categorydatas
    console.log(categorydatas);
  },

}






