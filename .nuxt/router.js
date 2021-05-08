import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from '@nuxt/ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _2755bb87 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _10b8d957 = () => interopDefault(import('..\\pages\\file.vue' /* webpackChunkName: "pages/file" */))
const _1e0542c4 = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _b62e80c6 = () => interopDefault(import('..\\pages\\notifications.vue' /* webpackChunkName: "pages/notifications" */))
const _ff0a6786 = () => interopDefault(import('..\\pages\\parentSignup.vue' /* webpackChunkName: "pages/parentSignup" */))
const _446d5908 = () => interopDefault(import('..\\pages\\payments.vue' /* webpackChunkName: "pages/payments" */))
const _ce3096a6 = () => interopDefault(import('..\\pages\\showAnswers.vue' /* webpackChunkName: "pages/showAnswers" */))
const _7b086233 = () => interopDefault(import('..\\pages\\signup.vue' /* webpackChunkName: "pages/signup" */))
const _102dd730 = () => interopDefault(import('..\\pages\\studentSignup.vue' /* webpackChunkName: "pages/studentSignup" */))
const _b8172242 = () => interopDefault(import('..\\pages\\GeneralViews\\NotFoundPage.vue' /* webpackChunkName: "pages/GeneralViews/NotFoundPage" */))

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
    path: "/ar",
    component: _2755bb87,
    name: "index___ar"
  }, {
    path: "/file",
    component: _10b8d957,
    name: "file___en"
  }, {
    path: "/login",
    component: _1e0542c4,
    name: "login___en"
  }, {
    path: "/notifications",
    component: _b62e80c6,
    name: "notifications___en"
  }, {
    path: "/parentSignup",
    component: _ff0a6786,
    name: "parentSignup___en"
  }, {
    path: "/payments",
    component: _446d5908,
    name: "payments___en"
  }, {
    path: "/showAnswers",
    component: _ce3096a6,
    name: "showAnswers___en"
  }, {
    path: "/signup",
    component: _7b086233,
    name: "signup___en"
  }, {
    path: "/studentSignup",
    component: _102dd730,
    name: "studentSignup___en"
  }, {
    path: "/ar/file",
    component: _10b8d957,
    name: "file___ar"
  }, {
    path: "/ar/login",
    component: _1e0542c4,
    name: "login___ar"
  }, {
    path: "/ar/notifications",
    component: _b62e80c6,
    name: "notifications___ar"
  }, {
    path: "/ar/parentSignup",
    component: _ff0a6786,
    name: "parentSignup___ar"
  }, {
    path: "/ar/payments",
    component: _446d5908,
    name: "payments___ar"
  }, {
    path: "/ar/showAnswers",
    component: _ce3096a6,
    name: "showAnswers___ar"
  }, {
    path: "/ar/signup",
    component: _7b086233,
    name: "signup___ar"
  }, {
    path: "/ar/studentSignup",
    component: _102dd730,
    name: "studentSignup___ar"
  }, {
    path: "/GeneralViews/NotFoundPage",
    component: _b8172242,
    name: "GeneralViews-NotFoundPage___en"
  }, {
    path: "/ar/GeneralViews/NotFoundPage",
    component: _b8172242,
    name: "GeneralViews-NotFoundPage___ar"
  }, {
    path: "/",
    component: _2755bb87,
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
