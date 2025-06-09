import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: () => import('../views/dashboard/index.vue'),
    },
    {
      path:'/cancel',
      children:[
        {
          path:'',
          name:'cancel.index',
          component:()=>import('../views/cancel/index.vue')
        },
      ]
    },
    {
      path:'/courier',
      children:[
        {
          path:'',
          name:'courier.index',
          component:()=>import('../views/courier/index.vue')
        },
        {
          path:':id/show',
          name:'courier.show',
          component:()=>import('../views/courier/detail.vue')
        },
      ]
    },
  ],
})

export default router
