import Home from '../views/home/index.vue'
import Cart from '../views/cart/index.vue'
import Mine from '../views/mine/index.vue'
import Order from '../views/order/index.vue'
import Store from "../views/store/index.vue"
import CreateOrder from "../views/createOrder/index.vue"
import Address from "../views/address/index.vue"
import AddressEdit from "../views/addressEdit/index.vue"
import UserInfoEdit from "../views/userInfoEdit/index.vue"
import Login from "../views/login/index.vue"
import Register from "../views/register/index.vue"
export default [
    {
        path: '/',
        component: Home
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/cart',
        component: Cart,
        meta: {
            isAuth: true
        }
    },
    {
        path: '/mine',
        component: Mine,
        meta: {
            isAuth: true
        }
    },
    {
        path: '/order',
        component: Order,
        //需要验证
        meta: {
            isAuth: true
        }
    },
    {
        path: '/store/:id',
        component: Store
    },
    {
        path: '/createOrder',
        component: CreateOrder,
        meta: {
            isAuth: true
        }
    },
    {
        path: '/address',
        component: Address,
        meta: {
            isAuth: true
        }
    },
    {
        path: '/addressEdit',
        component: AddressEdit,
        meta: {
            isAuth: true
        }
    },
    {
        path: '/userInfoEdit',
        component: UserInfoEdit,
        meta: {
            isAuth: true
        }
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/register',
        component: Register
    }
]
