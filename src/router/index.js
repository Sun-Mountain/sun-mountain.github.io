import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProjectsView from '../views/ProjectsView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'homePage',
      component: HomeView,
      meta: { showBackLink: false }
    },
    {
      path: '/projects',
      name: 'projects',
      component: ProjectsView
    },
  ]
})

export default router
