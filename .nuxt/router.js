import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from '@nuxt/ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _005691bc = () => interopDefault(import('../pages/addVancany.vue' /* webpackChunkName: "pages/addVancany" */))
const _9e982974 = () => interopDefault(import('../pages/adminSignup.vue' /* webpackChunkName: "pages/adminSignup" */))
const _623e1f3e = () => interopDefault(import('../pages/applyVacancy.vue' /* webpackChunkName: "pages/applyVacancy" */))
const _768fe691 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _0ab22742 = () => interopDefault(import('../pages/candidate.vue' /* webpackChunkName: "pages/candidate" */))
const _0d10e903 = () => interopDefault(import('../pages/candidateresponse.vue' /* webpackChunkName: "pages/candidateresponse" */))
const _338611a9 = () => interopDefault(import('../pages/candidatevacancy.vue' /* webpackChunkName: "pages/candidatevacancy" */))
const _1230f410 = () => interopDefault(import('../pages/editVacancy.vue' /* webpackChunkName: "pages/editVacancy" */))
const _403789a8 = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _637440a7 = () => interopDefault(import('../pages/notifications.vue' /* webpackChunkName: "pages/notifications" */))
const _5d5601f3 = () => interopDefault(import('../pages/parentSignup.vue' /* webpackChunkName: "pages/parentSignup" */))
const _0683d9be = () => interopDefault(import('../pages/payments.vue' /* webpackChunkName: "pages/payments" */))
const _5cd81f92 = () => interopDefault(import('../pages/showAnswers.vue' /* webpackChunkName: "pages/showAnswers" */))
const _13139869 = () => interopDefault(import('../pages/signup.vue' /* webpackChunkName: "pages/signup" */))
const _9316d51c = () => interopDefault(import('../pages/studentSignup.vue' /* webpackChunkName: "pages/studentSignup" */))
const _99454848 = () => interopDefault(import('../pages/user.vue' /* webpackChunkName: "pages/user" */))
const _91a37e10 = () => interopDefault(import('../pages/Vacancies.vue' /* webpackChunkName: "pages/Vacancies" */))
const _65700a66 = () => interopDefault(import('../pages/GeneralViews/NotFoundPage.vue' /* webpackChunkName: "pages/GeneralViews/NotFoundPage" */))

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
    component: _005691bc,
    name: "addVancany___en"
  }, {
    path: "/adminSignup",
    component: _9e982974,
    name: "adminSignup___en"
  }, {
    path: "/applyVacancy",
    component: _623e1f3e,
    name: "applyVacancy___en"
  }, {
    path: "/ar",
    component: _768fe691,
    name: "index___ar"
  }, {
    path: "/candidate",
    component: _0ab22742,
    name: "candidate___en"
  }, {
    path: "/candidateresponse",
    component: _0d10e903,
    name: "candidateresponse___en"
  }, {
    path: "/candidatevacancy",
    component: _338611a9,
    name: "candidatevacancy___en"
  }, {
    path: "/editVacancy",
    component: _1230f410,
    name: "editVacancy___en"
  }, {
    path: "/login",
    component: _403789a8,
    name: "login___en"
  }, {
    path: "/notifications",
    component: _637440a7,
    name: "notifications___en"
  }, {
    path: "/parentSignup",
    component: _5d5601f3,
    name: "parentSignup___en"
  }, {
    path: "/payments",
    component: _0683d9be,
    name: "payments___en"
  }, {
    path: "/showAnswers",
    component: _5cd81f92,
    name: "showAnswers___en"
  }, {
    path: "/signup",
    component: _13139869,
    name: "signup___en"
  }, {
    path: "/studentSignup",
    component: _9316d51c,
    name: "studentSignup___en"
  }, {
    path: "/user",
    component: _99454848,
    name: "user___en"
  }, {
    path: "/Vacancies",
    component: _91a37e10,
    name: "Vacancies___en"
  }, {
    path: "/ar/addVancany",
    component: _005691bc,
    name: "addVancany___ar"
  }, {
    path: "/ar/adminSignup",
    component: _9e982974,
    name: "adminSignup___ar"
  }, {
    path: "/ar/applyVacancy",
    component: _623e1f3e,
    name: "applyVacancy___ar"
  }, {
    path: "/ar/candidate",
    component: _0ab22742,
    name: "candidate___ar"
  }, {
    path: "/ar/candidateresponse",
    component: _0d10e903,
    name: "candidateresponse___ar"
  }, {
    path: "/ar/candidatevacancy",
    component: _338611a9,
    name: "candidatevacancy___ar"
  }, {
    path: "/ar/editVacancy",
    component: _1230f410,
    name: "editVacancy___ar"
  }, {
    path: "/ar/login",
    component: _403789a8,
    name: "login___ar"
  }, {
    path: "/ar/notifications",
    component: _637440a7,
    name: "notifications___ar"
  }, {
    path: "/ar/parentSignup",
    component: _5d5601f3,
    name: "parentSignup___ar"
  }, {
    path: "/ar/payments",
    component: _0683d9be,
    name: "payments___ar"
  }, {
    path: "/ar/showAnswers",
    component: _5cd81f92,
    name: "showAnswers___ar"
  }, {
    path: "/ar/signup",
    component: _13139869,
    name: "signup___ar"
  }, {
    path: "/ar/studentSignup",
    component: _9316d51c,
    name: "studentSignup___ar"
  }, {
    path: "/ar/user",
    component: _99454848,
    name: "user___ar"
  }, {
    path: "/ar/Vacancies",
    component: _91a37e10,
    name: "Vacancies___ar"
  }, {
    path: "/GeneralViews/NotFoundPage",
    component: _65700a66,
    name: "GeneralViews-NotFoundPage___en"
  }, {
    path: "/ar/GeneralViews/NotFoundPage",
    component: _65700a66,
    name: "GeneralViews-NotFoundPage___ar"
  }, {
    path: "/",
    component: _768fe691,
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
