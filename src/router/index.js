import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import H1 from '@/components/H1'
import H2 from '@/components/H2'
import params from '@/components/params'
import Error from '@/components/Error'
import temp from '@/components/temp'

Vue.use(Router)

export default new Router({
  mode: 'history',  //设置url的格式，两个值：history（常用）：正常格式，hash：无意义的字符排列
  routes: [
    // 单页面 多路由
    {
      path: '/',
      name: 'HelloWorld',
      components: {
        default:HelloWorld,
        left:H1,
        right:H2
      }
      // ,
      // //路由的钩子函数 路由文件内写法
      // beforeEnter:(to,from,next) => {
      //       console.log('I am coming');
      //       console.log(to);
      //       console.log(from);
      //       next({path:'/hi1'});  //false/true 不允许跳转/允许  next({path:'/hi1'});  跳转到指定路径
      // }
      // alias: '/home1'  //别名请不要用在path为’/’中，vue不支持这样使用
    },{
      path: '/gohome',
      // 重新定向路径
      redirect: '/'
    },
    {
      path: '/sissi',
      name: 'HelloWorld',
      components: {
        default:HelloWorld,
        left:H2,
        right:H1
      }
    },
    
    //  路由利用url传递参数
    {
      path: '/params/:newsId(\\d+)/:newsTitle',
      name: 'params name',
      component: params
    },
    {
      // 带参数的重新定向路径
      path: '/goparams/:newsId(\\d+)/:newsTitle',
      redirect: '/params/:newsId(\\d+)/:newsTitle'
    },{
      path:'/hi1',
      component:H1,
      alias:'/aliass'
    },
    {
      path: '*',   //404页面
      component: Error
    },
    {
      path: '/temp',
      component: temp
    }
  ]
})
