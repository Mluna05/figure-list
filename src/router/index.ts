import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import PraticeDoublyLinkedList from "../views/PraticeDoublyLinkedList.vue";
import About from "../views/AboutView.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "PraticeDoublyLinkedList",
    component: PraticeDoublyLinkedList,
  },
  {
    path: "/about",
    name: "about",
    component: About,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
