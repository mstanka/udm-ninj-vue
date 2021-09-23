import { createRouter, createWebHistory } from 'vue-router';
import Home from './view/Home.vue';
import About from './view/About.vue';
import Jobs from './view/jobs/Jobs.vue';
import JobDetail from './view/jobs/JobDetail.vue';
import NotFound from './view/NotFound.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/jobs', name: 'Jobs', component: Jobs },
  { path: '/jobs/:id', name: 'JobDetail', component: JobDetail, props: true },
  //redirect
  { path: '/all-jobs', redirect: '/jobs' },
  //catchall 404
  { path: '/:catchAll(.*)', name: 'NotFound', component: NotFound },
  // for lazy loading
  // component: () => import('../views/About.vue)
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
