import { createRouter, createWebHashHistory } from "vue-router"
import routes from "./route"
const router = createRouter({
    history: createWebHashHistory(),
    routes
})
router.beforeEach((to, from, next) => {
    if (to.meta.isAuth) {
        if (localStorage.isLogin === "login") {
            next()
        } else {
            next("/login")
            showToast("请先登录")
        }
    } else {
        next()
    }
})
export default router