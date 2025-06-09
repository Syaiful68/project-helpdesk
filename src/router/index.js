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
        {
          path:':id/show',
          name:'cancel.show',
          component:()=>import('../views/cancel/detail.vue')
        },
      ]
    }
  ],
})

export default router
