// src/router/index.ts
import { createRouter, createWebHistory } from 'vue-router';
import Login from '../views/Login.vue';
import SignUp from '../views/Signup.vue';
import Dashboard from '../views/Dashboard.vue'; // Import Dashboard component

const routes = [
  {
    path: '/',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: { requiresAuth: true } // Add meta field to indicate authentication requirement
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
