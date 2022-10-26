import Vue from "vue";
import VueRouter from "vue-router";
import ErrorView from "@/views/GlobalView/ErrorView";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () =>
      import(/* webpackChunkName: "home" */ "@/views/GlobalView/HomeView.vue"),
  },
  {
    path: "/:catchAll(.*)",
    name: "ErrorPage",
    component: ErrorView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  // console.log(to);

  let AllTitle = `${process.env.VUE_APP_TITLE} | ${to.name}`;

  if (to.params.pageTitle) {
    AllTitle += ` | ${to.params.pageTitle}`;
  }

  document.title = AllTitle;

  // for not enter pages if else user login first

  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (localStorage.getItem("authToken")) {
      next();
    } else {
      next("/");
    }
  } else {
    next();
  }

  // for disallow user from back to login page after login

  if (to.meta.disallowAuthed && localStorage.getItem("authToken")) {
    return next({ path: "/" });
  }

  // next();
});

export default router;
