import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Cookies from "js-cookies";
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta:{
      Home:"/",
     
    },
    children:[
      {
        path: '/',
        name: 'home',
        component: () => import( '../components/HomeL.vue'),
        meta:{
          Home:"/",
          Shouye:"后台首页"
        },
        redirect: '/home1',
        children:[
          {
            path: '/home1',
            name: 'Homel1',
            component: () => import( '../components/Homel1.vue'),
            meta:{
              Home:"/",
              Shouye:"后台首页",
              title: '基础设置',
              Gaoliang:"/home1"
            },
            
          },
          {
            path: '/homel2',
            name: 'Homel2',
            component: () => import( '../components/Homel2.vue'),
            meta:{
              Home:"/",
              Shouye:"后台首页",
              title: '物流设置',
              Gaoliang:"/homel2"
              
            },
          },
          {
            path: '/homel3',
            name: 'Homel3',
            component: () => import( '../components/Homel3.vue'),
            meta:{
              Home:"/",
              Shouye:"后台首页",
              title: '管理员管理',
              Gaoliang:"/homel3"
             
            },
          },
          {
            path: '/homel4',
            name: 'Homel4',
            component: () => import( '../components/Homel4.vue'),
            meta:{
              Home:"/",
              Shouye:"后台首页",
              title: '交易设置',
              Gaoliang:"/homel4"
            },
          },
        ]
      },
      {
        path: '/mall',
        name: 'home',
        component: () => import( '../components/Mall.vue'),
        meta:{
          Home:"/mall"
        },
        redirect:"/mall1",
        children:[
          {
            path: '/mall1',
            name: 'Homel1',
            component: () => import( '../components/Mall/Mall1.vue'),
            meta:{
              Home:"/mall",
              Shouye:"后台商品",
              title: '商品1',
              Gaoliang:"/mall1"
            },
            
          },
          {
            path: '/mall2',
            name: 'Mall2',
            component: () => import( '../components/Mall/Mall2.vue'),
            meta:{
              Home:"/mall",
              Shouye:"后台商品",
              title: '商品2',
              Gaoliang:"/mall2"
              
            },
          },
          {
            path: '/mall3',
            name: 'Mall3',
            component: () => import( '../components/Mall/Mall3.vue'),
            meta:{
              Home:"/mall",
              Shouye:"后台商品",
              title: '商品3',
              Gaoliang:"/mall3"
             
            },
          },
          {
            path: '/mall4',
            name: 'Mall4',
            component: () => import( '../components/Mall/Mall4.vue'),
            meta:{
              Home:"/mall",
              Shouye:"后台商品",
              title: '商品4',
              Gaoliang:"/mall4"
            },
          },
        ]
      },
      {
        path: '/dingdan',
        name: 'Dingdan',
        component: () => import( '../components/Dingdan.vue'),
        meta:{
          Home:"/dingdan"
        },
        redirect:"/dingdan1",
        children:[
          {
            path: '/dingdan1',
            name: 'Dingdan',
            component: () => import( '../components/Dingdan/Dingdan1.vue'),
            meta:{
              Home:"/dingdan",
              Shouye:"后台订单",
              title: '叮当1',
              Gaoliang:"/dingdan1"
            },
            
          },
          {
            path: '/dingdan2',
            name: 'Dingdan2',
            component: () => import( '../components/Dingdan/Dingdan2.vue'),
            meta:{
              Home:"/dingdan",
              Shouye:"后台订单",
              title: '订单2',
              Gaoliang:"/dingdan2"
              
            },
          },
          {
            path: '/dingdan3',
            name: 'Mall3',
            component: () => import( '../components/Dingdan/Dingdan3.vue'),
            meta:{
              Home:"/dingdan",
              Shouye:"后台订单",
              title: '订单3',
              Gaoliang:"/dingdan3"
             
            },
          },
          {
            path: '/dingdan4',
            name: 'Dingdan',
            component: () => import( '../components/Dingdan/Dingdan4.vue'),
            meta:{
              Home:"/dingdan",
              Shouye:"后台订单",
              title: '订单4',
              Gaoliang:"/dingdan4"
            },
          },
        ]
      },
      {
        path: '/huiyuan',
        name: 'Huiyuan',
        component: () => import( '../components/Huiyuan.vue'),
        meta:{
          Home:"/huiyuan"
        },
      },
      {
        path: '/shezhi',
        name: 'Shezhi',
        component: () => import( '../components/Shezhi.vue'),
        meta:{
          Home:"/shezhi"
        },
      }
    ]
    
  },
  {
    path: '/about',
    name: 'About',
    component: () => import( '../views/About.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import( '../views/Login.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to,from,next)=>{
    let Token = Cookies.getItem("token");
    if(to.path == "/login"){
      next();
    }else if(Token){
      next();
    }else{
      next("/login")
    }
})
export default router
