import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from '@nuxt/ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _69608dfb = () => interopDefault(import('..\\pages\\addVancany.vue' /* webpackChunkName: "pages/addVancany" */))
const _68e976e7 = () => interopDefault(import('..\\pages\\adminSignup.vue' /* webpackChunkName: "pages/adminSignup" */))
const _9e8bf086 = () => interopDefault(import('..\\pages\\applyVacancy.vue' /* webpackChunkName: "pages/applyVacancy" */))
const _3a3afef2 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _58682723 = () => interopDefault(import('..\\pages\\candidate.vue' /* webpackChunkName: "pages/candidate" */))
const _507d77e4 = () => interopDefault(import('..\\pages\\candidateresponse.vue' /* webpackChunkName: "pages/candidateresponse" */))
const _ce68bab0 = () => interopDefault(import('..\\pages\\candidatevacancy.vue' /* webpackChunkName: "pages/candidatevacancy" */))
const _6b33009e = () => interopDefault(import('..\\pages\\editVacancy.vue' /* webpackChunkName: "pages/editVacancy" */))
const _03e2a209 = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _37152ff0 = () => interopDefault(import('..\\pages\\notifications.vue' /* webpackChunkName: "pages/notifications" */))
const _a85c2b1c = () => interopDefault(import('..\\pages\\parentSignup.vue' /* webpackChunkName: "pages/parentSignup" */))
const _ec6d0850 = () => interopDefault(import('..\\pages\\showAnswers.vue' /* webpackChunkName: "pages/showAnswers" */))
const _7668e7b0 = () => interopDefault(import('..\\pages\\signup.vue' /* webpackChunkName: "pages/signup" */))
const _3775bcd3 = () => interopDefault(import('..\\pages\\studentSignup.vue' /* webpackChunkName: "pages/studentSignup" */))
const _8ca5994a = () => interopDefault(import('..\\pages\\user.vue' /* webpackChunkName: "pages/user" */))
const _04e440d9 = () => interopDefault(import('..\\pages\\Vacancies.vue' /* webpackChunkName: "pages/Vacancies" */))
const _0827e758 = () => interopDefault(import('..\\pages\\GeneralViews\\NotFoundPage.vue' /* webpackChunkName: "pages/GeneralViews/NotFoundPage" */))

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
    component: _69608dfb,
    name: "addVancany___en"
  }, {
    path: "/adminSignup",
    component: _68e976e7,
    name: "adminSignup___en"
  }, {
    path: "/applyVacancy",
    component: _9e8bf086,
    name: "applyVacancy___en"
  }, {
    path: "/ar",
    component: _3a3afef2,
    name: "index___ar"
  }, {
    path: "/candidate",
    component: _58682723,
    name: "candidate___en"
  }, {
    path: "/candidateresponse",
    component: _507d77e4,
    name: "candidateresponse___en"
  }, {
    path: "/candidatevacancy",
    component: _ce68bab0,
    name: "candidatevacancy___en"
  }, {
    path: "/editVacancy",
    component: _6b33009e,
    name: "editVacancy___en"
  }, {
    path: "/login",
    component: _03e2a209,
    name: "login___en"
  }, {
    path: "/notifications",
    component: _37152ff0,
    name: "notifications___en"
  }, {
    path: "/parentSignup",
    component: _a85c2b1c,
    name: "parentSignup___en"
  }, {
    path: "/showAnswers",
    component: _ec6d0850,
    name: "showAnswers___en"
  }, {
    path: "/signup",
    component: _7668e7b0,
    name: "signup___en"
  }, {
    path: "/studentSignup",
    component: _3775bcd3,
    name: "studentSignup___en"
  }, {
    path: "/user",
    component: _8ca5994a,
    name: "user___en"
  }, {
    path: "/Vacancies",
    component: _04e440d9,
    name: "Vacancies___en"
  }, {
    path: "/ar/addVancany",
    component: _69608dfb,
    name: "addVancany___ar"
  }, {
    path: "/ar/adminSignup",
    component: _68e976e7,
    name: "adminSignup___ar"
  }, {
    path: "/ar/applyVacancy",
    component: _9e8bf086,
    name: "applyVacancy___ar"
  }, {
    path: "/ar/candidate",
    component: _58682723,
    name: "candidate___ar"
  }, {
    path: "/ar/candidateresponse",
    component: _507d77e4,
    name: "candidateresponse___ar"
  }, {
    path: "/ar/candidatevacancy",
    component: _ce68bab0,
    name: "candidatevacancy___ar"
  }, {
    path: "/ar/editVacancy",
    component: _6b33009e,
    name: "editVacancy___ar"
  }, {
    path: "/ar/login",
    component: _03e2a209,
    name: "login___ar"
  }, {
    path: "/ar/notifications",
    component: _37152ff0,
    name: "notifications___ar"
  }, {
    path: "/ar/parentSignup",
    component: _a85c2b1c,
    name: "parentSignup___ar"
  }, {
    path: "/ar/showAnswers",
    component: _ec6d0850,
    name: "showAnswers___ar"
  }, {
    path: "/ar/signup",
    component: _7668e7b0,
    name: "signup___ar"
  }, {
    path: "/ar/studentSignup",
    component: _3775bcd3,
    name: "studentSignup___ar"
  }, {
    path: "/ar/user",
    component: _8ca5994a,
    name: "user___ar"
  }, {
    path: "/ar/Vacancies",
    component: _04e440d9,
    name: "Vacancies___ar"
  }, {
    path: "/GeneralViews/NotFoundPage",
    component: _0827e758,
    name: "GeneralViews-NotFoundPage___en"
  }, {
    path: "/ar/GeneralViews/NotFoundPage",
    component: _0827e758,
    name: "GeneralViews-NotFoundPage___ar"
  }, {
    path: "/",
    component: _3a3afef2,
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
