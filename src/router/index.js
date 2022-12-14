// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import AboutView from '@/views/AboutView.vue';
import PostList from '@/views/posts/PostList.vue';
import PostView from '@/views/posts/PostView.vue';
import PostCreator from '@/views/posts/PostCreator.vue';
import PostEdit from '@/views/posts/PostEdit.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
  },
  {
    path: '/post',
    name: 'List',
    component: PostList,
  },
  {
    path: '/post/:id',
    name: 'View',
    component: PostView,
  },
  {
    path: '/post/edit',
    name: 'Edit',
    component: PostEdit,
  },
  {
    path: '/post/Create',
    name: 'Creator',
    component: PostCreator,
  },
];
const router = createRouter({
  history: createWebHistory('/'),
  routes,
});

export default router;
