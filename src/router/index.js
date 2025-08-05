import { createRouter, createWebHistory } from 'vue-router';
import FrontendPage from '../views/FrontendPage.vue';
import AdminPage from '../views/AdminPage.vue';

const routes = [
  {
    path: '/',
    name: 'FrontendPage',
    component: FrontendPage
  },
  {
    path: '/admin',
    name: 'AdminPage',
    component: AdminPage
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;