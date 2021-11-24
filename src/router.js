import {
  createWebHashHistory,
  createRouter,
} from 'vue-router';

import HomeRouter from './apps/home/router';
import ProfileRouter from './apps/profile/router';

const routes = [
  HomeRouter,
  ProfileRouter,
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;