// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import AboutView from '@/views/AboutView.vue';
import WeaTher from '@/views/WeaTher.vue';
import NotFuond from '@/views/NotFuond.vue';
import PostList from '@/views/posts/PostList.vue';
import PostView from '@/views/posts/PostView.vue';
import PostCreator from '@/views/posts/PostCreator.vue';
import PostEdit from '@/views/posts/PostEdit.vue';
import Playground from '@/views/nested/Playground.vue';
import PlayLunch from '@/views/nested/PlayLunch.vue';
import PlayTodo from '@/views/nested/PlayTodo.vue';
import PlayHome from '@/views/nested/PlayHome.vue';

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
    path: '/weather',
    name: 'weather',
    component: WeaTher,
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
    props: true,
    //props: route => ({ id: parseInt(route.params.id) }),
  },
  {
    path: '/posts/:id/edit',
    name: 'Edit',
    component: PostEdit,
    // props: route => ({ id: parseInt(route.params.id) }),
  },
  {
    path: '/post/Create',
    name: 'Creator',
    component: PostCreator,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFuond,
  },
  {
    path: '/nested',
    name: 'Playground',
    component: Playground,
    children: [
      {
        path: '',
        name: 'PlayHome',
        component: PlayHome,
      },
      {
        path: 'one',
        name: 'workOne',
        component: PlayLunch,
      },
      {
        path: 'two',
        name: 'workTwo',
        component: PlayTodo,
      },
    ],
  },
];
const router = createRouter({
  history: createWebHistory('/'),
  routes,
});

export default router;
