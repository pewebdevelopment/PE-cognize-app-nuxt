import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from '@nuxt/ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _3f923953 = () => interopDefault(import('..\\pages\\addVancany.vue' /* webpackChunkName: "pages/addVancany" */))
const _58ed368f = () => interopDefault(import('..\\pages\\adminSignup.vue' /* webpackChunkName: "pages/adminSignup" */))
const _7da385d6 = () => interopDefault(import('..\\pages\\applyVacancy.vue' /* webpackChunkName: "pages/applyVacancy" */))
const _69519c9a = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _8bb09e6a = () => interopDefault(import('..\\pages\\candidate.vue' /* webpackChunkName: "pages/candidate" */))
const _6f8cd98c = () => interopDefault(import('..\\pages\\candidateresponse.vue' /* webpackChunkName: "pages/candidateresponse" */))
const _3ef56c00 = () => interopDefault(import('..\\pages\\candidatevacancy.vue' /* webpackChunkName: "pages/candidatevacancy" */))
const _8b2b814e = () => interopDefault(import('..\\pages\\editVacancy.vue' /* webpackChunkName: "pages/editVacancy" */))
const _32f93fb1 = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _3af044a0 = () => interopDefault(import('..\\pages\\notifications.vue' /* webpackChunkName: "pages/notifications" */))
const _8773c06c = () => interopDefault(import('..\\pages\\parentSignup.vue' /* webpackChunkName: "pages/parentSignup" */))
const _3a3b09d6 = () => interopDefault(import('..\\pages\\payments.vue' /* webpackChunkName: "pages/payments" */))
const _79cd3b80 = () => interopDefault(import('..\\pages\\showAnswers.vue' /* webpackChunkName: "pages/showAnswers" */))
const _7888a380 = () => interopDefault(import('..\\pages\\signup.vue' /* webpackChunkName: "pages/signup" */))
const _3588327b = () => interopDefault(import('..\\pages\\studentSignup.vue' /* webpackChunkName: "pages/studentSignup" */))
const _580f7e9a = () => interopDefault(import('..\\pages\\user.vue' /* webpackChunkName: "pages/user" */))
const _66a3ca81 = () => interopDefault(import('..\\pages\\Vacancies.vue' /* webpackChunkName: "pages/Vacancies" */))
const _fc67f0a8 = () => interopDefault(import('..\\pages\\GeneralViews\\NotFoundPage.vue' /* webpackChunkName: "pages/GeneralViews/NotFoundPage" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'active',
  scrollBehavior,

  routes: [{
    path: "/addVancany",
    component: _3f923953,
    name: "addVancany___en"
  }, {
    path: "/adminSignup",
    component: _58ed368f,
    name: "adminSignup___en"
  }, {
    path: "/applyVacancy",
    component: _7da385d6,
    name: "applyVacancy___en"
  }, {
    path: "/ar",
    component: _69519c9a,
    name: "index___ar"
  }, {
    path: "/candidate",
    component: _8bb09e6a,
    name: "candidate___en"
  }, {
    path: "/candidateresponse",
    component: _6f8cd98c,
    name: "candidateresponse___en"
  }, {
    path: "/candidatevacancy",
    component: _3ef56c00,
    name: "candidatevacancy___en"
  }, {
    path: "/editVacancy",
    component: _8b2b814e,
    name: "editVacancy___en"
  }, {
    path: "/login",
    component: _32f93fb1,
    name: "login___en"
  }, {
    path: "/notifications",
    component: _3af044a0,
    name: "notifications___en"
  }, {
    path: "/parentSignup",
    component: _8773c06c,
    name: "parentSignup___en"
  }, {
    path: "/payments",
    component: _3a3b09d6,
    name: "payments___en"
  }, {
    path: "/showAnswers",
    component: _79cd3b80,
    name: "showAnswers___en"
  }, {
    path: "/signup",
    component: _7888a380,
    name: "signup___en"
  }, {
    path: "/studentSignup",
    component: _3588327b,
    name: "studentSignup___en"
  }, {
    path: "/user",
    component: _580f7e9a,
    name: "user___en"
  }, {
    path: "/Vacancies",
    component: _66a3ca81,
    name: "Vacancies___en"
  }, {
    path: "/ar/addVancany",
    component: _3f923953,
    name: "addVancany___ar"
  }, {
    path: "/ar/adminSignup",
    component: _58ed368f,
    name: "adminSignup___ar"
  }, {
    path: "/ar/applyVacancy",
    component: _7da385d6,
    name: "applyVacancy___ar"
  }, {
    path: "/ar/candidate",
    component: _8bb09e6a,
    name: "candidate___ar"
  }, {
    path: "/ar/candidateresponse",
    component: _6f8cd98c,
    name: "candidateresponse___ar"
  }, {
    path: "/ar/candidatevacancy",
    component: _3ef56c00,
    name: "candidatevacancy___ar"
  }, {
    path: "/ar/editVacancy",
    component: _8b2b814e,
    name: "editVacancy___ar"
  }, {
    path: "/ar/login",
    component: _32f93fb1,
    name: "login___ar"
  }, {
    path: "/ar/notifications",
    component: _3af044a0,
    name: "notifications___ar"
  }, {
    path: "/ar/parentSignup",
    component: _8773c06c,
    name: "parentSignup___ar"
  }, {
    path: "/ar/payments",
    component: _3a3b09d6,
    name: "payments___ar"
  }, {
    path: "/ar/showAnswers",
    component: _79cd3b80,
    name: "showAnswers___ar"
  }, {
    path: "/ar/signup",
    component: _7888a380,
    name: "signup___ar"
  }, {
    path: "/ar/studentSignup",
    component: _3588327b,
    name: "studentSignup___ar"
  }, {
    path: "/ar/user",
    component: _580f7e9a,
    name: "user___ar"
  }, {
    path: "/ar/Vacancies",
    component: _66a3ca81,
    name: "Vacancies___ar"
  }, {
    path: "/GeneralViews/NotFoundPage",
    component: _fc67f0a8,
    name: "GeneralViews-NotFoundPage___en"
  }, {
    path: "/ar/GeneralViews/NotFoundPage",
    component: _fc67f0a8,
    name: "GeneralViews-NotFoundPage___ar"
  }, {
    path: "/",
    component: _69519c9a,
    name: "index___en"
  }],

  fallback: false
}

function decodeObj(obj) {
  for (const key in obj) {
    if (typeof obj[key] === 'string') {
      obj[key] = decode(obj[key])
    }
  }
}

export function createRouter () {
  const router = new Router(routerOptions)

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    const r = resolve(to, current, append)
    if (r && r.resolved && r.resolved.query) {
      decodeObj(r.resolved.query)
    }
    return r
  }

  return router
}
