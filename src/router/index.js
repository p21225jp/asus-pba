import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Cate from '@/components/Cate/Cate'
import Goods from '@/components/Goods/Goods'
Vue.use(Router)

export default new Router({
  linkActiveClass : 'active',
  linkExactActiveClass: 'active',	
  routes: [
  	{
      path:'/',
      redirect:'/index'
    },
    {
      path:'/index',
      component:Index
    },
    {
      path:'/cate',
      component:Cate
    },
    {
      path:'/goods/:id',
      component:Goods
    }
  ]
})
