import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from '@nuxt/ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _3ddf459c = () => interopDefault(import('..\\pages\\addVancany.vue' /* webpackChunkName: "pages/addVancany" */))
const _2441b366 = () => interopDefault(import('..\\pages\\adminSignup.vue' /* webpackChunkName: "pages/adminSignup" */))
const _60695b1e = () => interopDefault(import('..\\pages\\applyVacancy.vue' /* webpackChunkName: "pages/applyVacancy" */))
const _0cc3729e = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _bd59113c = () => interopDefault(import('..\\pages\\candidate.vue' /* webpackChunkName: "pages/candidate" */))
const _5df01923 = () => interopDefault(import('..\\pages\\candidateresponse.vue' /* webpackChunkName: "pages/candidateresponse" */))
const _6ff05d89 = () => interopDefault(import('..\\pages\\candidatevacancy.vue' /* webpackChunkName: "pages/candidatevacancy" */))
const _f48287a0 = () => interopDefault(import('..\\pages\\editVacancy.vue' /* webpackChunkName: "pages/editVacancy" */))
const _79742c70 = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _2ab080c7 = () => interopDefault(import('..\\pages\\notifications.vue' /* webpackChunkName: "pages/notifications" */))
const _5b813dd3 = () => interopDefault(import('..\\pages\\parentSignup.vue' /* webpackChunkName: "pages/parentSignup" */))
const _2c68059e = () => interopDefault(import('..\\pages\\payments.vue' /* webpackChunkName: "pages/payments" */))
const _4521b857 = () => interopDefault(import('..\\pages\\showAnswers.vue' /* webpackChunkName: "pages/showAnswers" */))
const _1c5d876e = () => interopDefault(import('..\\pages\\signup.vue' /* webpackChunkName: "pages/signup" */))
const _7db0d592 = () => interopDefault(import('..\\pages\\studentSignup.vue' /* webpackChunkName: "pages/studentSignup" */))
const _22f277bc = () => interopDefault(import('..\\pages\\user.vue' /* webpackChunkName: "pages/user" */))
const _4dcf9118 = () => interopDefault(import('..\\pages\\Vacancies.vue' /* webpackChunkName: "pages/Vacancies" */))
const _3cf161f5 = () => interopDefault(import('..\\pages\\GeneralViews\\NotFoundPage.vue' /* webpackChunkName: "pages/GeneralViews/NotFoundPage" */))

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
    component: _3ddf459c,
    name: "addVancany___en"
  }, {
    path: "/adminSignup",
    component: _2441b366,
    name: "adminSignup___en"
  }, {
    path: "/applyVacancy",
    component: _60695b1e,
    name: "applyVacancy___en"
  }, {
    path: "/ar",
    component: _0cc3729e,
    name: "index___ar"
  }, {
    path: "/candidate",
    component: _bd59113c,
    name: "candidate___en"
  }, {
    path: "/candidateresponse",
    component: _5df01923,
    name: "candidateresponse___en"
  }, {
    path: "/candidatevacancy",
    component: _6ff05d89,
    name: "candidatevacancy___en"
  }, {
    path: "/editVacancy",
    component: _f48287a0,
    name: "editVacancy___en"
  }, {
    path: "/login",
    component: _79742c70,
    name: "login___en"
  }, {
    path: "/notifications",
    component: _2ab080c7,
    name: "notifications___en"
  }, {
    path: "/parentSignup",
    component: _5b813dd3,
    name: "parentSignup___en"
  }, {
    path: "/payments",
    component: _2c68059e,
    name: "payments___en"
  }, {
    path: "/showAnswers",
    component: _4521b857,
    name: "showAnswers___en"
  }, {
    path: "/signup",
    component: _1c5d876e,
    name: "signup___en"
  }, {
    path: "/studentSignup",
    component: _7db0d592,
    name: "studentSignup___en"
  }, {
    path: "/user",
    component: _22f277bc,
    name: "user___en"
  }, {
    path: "/Vacancies",
    component: _4dcf9118,
    name: "Vacancies___en"
  }, {
    path: "/ar/addVancany",
    component: _3ddf459c,
    name: "addVancany___ar"
  }, {
    path: "/ar/adminSignup",
    component: _2441b366,
    name: "adminSignup___ar"
  }, {
    path: "/ar/applyVacancy",
    component: _60695b1e,
    name: "applyVacancy___ar"
  }, {
    path: "/ar/candidate",
    component: _bd59113c,
    name: "candidate___ar"
  }, {
    path: "/ar/candidateresponse",
    component: _5df01923,
    name: "candidateresponse___ar"
  }, {
    path: "/ar/candidatevacancy",
    component: _6ff05d89,
    name: "candidatevacancy___ar"
  }, {
    path: "/ar/editVacancy",
    component: _f48287a0,
    name: "editVacancy___ar"
  }, {
    path: "/ar/login",
    component: _79742c70,
    name: "login___ar"
  }, {
    path: "/ar/notifications",
    component: _2ab080c7,
    name: "notifications___ar"
  }, {
    path: "/ar/parentSignup",
    component: _5b813dd3,
    name: "parentSignup___ar"
  }, {
    path: "/ar/payments",
    component: _2c68059e,
    name: "payments___ar"
  }, {
    path: "/ar/showAnswers",
    component: _4521b857,
    name: "showAnswers___ar"
  }, {
    path: "/ar/signup",
    component: _1c5d876e,
    name: "signup___ar"
  }, {
    path: "/ar/studentSignup",
    component: _7db0d592,
    name: "studentSignup___ar"
  }, {
    path: "/ar/user",
    component: _22f277bc,
    name: "user___ar"
  }, {
    path: "/ar/Vacancies",
    component: _4dcf9118,
    name: "Vacancies___ar"
  }, {
    path: "/GeneralViews/NotFoundPage",
    component: _3cf161f5,
    name: "GeneralViews-NotFoundPage___en"
  }, {
    path: "/ar/GeneralViews/NotFoundPage",
    component: _3cf161f5,
    name: "GeneralViews-NotFoundPage___ar"
  }, {
    path: "/",
    component: _0cc3729e,
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
