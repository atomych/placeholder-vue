import { createRouter, createWebHistory } from "vue-router";
import MainView from "../views/MainView.vue";

import HomePage from "../pages/HomePage.vue";
import UsersPage from "../pages/UsersPage.vue";
import PostsPage from "../pages/PostsPage.vue";
import CommentsPage from "../pages/CommentsPage.vue";

const routes = [
  {
    path: "/",
    name: "root",
    component: MainView,
    children: [
      {
        path: "home",
        name: "home",
        component: HomePage,
      },
      {
        path: "users",
        name: "users",
        component: UsersPage,
      },
      {
        path: "posts",
        name: "posts",
        component: PostsPage,
      },
      {
        path: "comments",
        name: "comments",
        component: CommentsPage,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
