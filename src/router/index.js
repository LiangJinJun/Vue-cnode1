import Vue from 'vue'
import VueRouter from 'vue-router'
import Article from '../components/Article'
import PostList from '../components/PostList'
import Userinfo from '../components/Userinfo'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'root',
    components:{
      main:PostList
    }
  },
  {
    path: '/topic/:id',
    name: 'post_content',
    components:{
      main:Article
    }
  },
  {
    path:'/userinfo/:name',
    name:'user_info',
    components:{
      main:Userinfo
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
