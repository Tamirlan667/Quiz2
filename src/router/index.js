// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/HomeLess.vue";
import UserDetails from "../components/UserDetails.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/user/:id",
    name: "UserDetails",
    component: UserDetails,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
