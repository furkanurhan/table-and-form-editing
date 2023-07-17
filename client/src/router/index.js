import { createRouter, createWebHistory } from 'vue-router'
import CarList from '../views/CarList.vue'
import CarEdit from '../views/CarEdit.vue'

const routes = [
  {
    path: '/',
    name: 'CarList',
    component: CarList,
  },
  {
    path: '/edit/:id',
    name: 'CarEdit',
    component: CarEdit,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
