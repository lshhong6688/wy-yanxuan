
import ajax from './ajax'
//获取data数组的接口
export const reqData = () =>ajax('/data')
//获取轮播图数组接口
export const reqCarousel = () =>ajax('/carousel')
//获取home的数据接口
export const reqHomeData = ()=>ajax('/home')
//获取shiwu的数据接口
export const reqShiWuData = ()=>ajax('/shiwu')
//获取category的数据接口
export const reqCategoryData = ()=>ajax('/category')
