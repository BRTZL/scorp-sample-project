import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/Home.vue";
import ContactUs from "../views/ContactUs.vue";
import Account from "../views/Account.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/contact-us",
    name: "contactUs",
    component: ContactUs,
  },
  {
    path: "/account",
    name: "account",
    component: Account,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});


export default router;
