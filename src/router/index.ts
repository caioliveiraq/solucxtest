import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/Home.vue';
import Drone from '../views/Drone.vue';
Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/drone/:id?',
    name: 'Drone',
    component: Drone,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
