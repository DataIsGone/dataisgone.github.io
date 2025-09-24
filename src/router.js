import { createRouter, createWebHistory } from 'vue-router'
import AboutRoute from './components/routes/AboutRoute.vue'
import ProjectsRoute from './components/routes/ProjectsRoute.vue'
// import ResumeRoute from './components/routes/ResumeRoute.vue'

// for project page layout
import ProjectPageRoute from './components/routes/ProjectPageRoute.vue'

const routes = [
  { path: '/', component: ProjectsRoute },
  { path: '/projects', component: ProjectsRoute },
  // { path: '/resume', component: ResumeRoute },
  { path: '/about', component: AboutRoute },
  { path: '/project/', component: ProjectPageRoute },
  { path: '/:catchAll(.*)', component: ProjectsRoute },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router