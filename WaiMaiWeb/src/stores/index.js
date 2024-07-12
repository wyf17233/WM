import { defineStore } from 'pinia'
export const useCartListStore = defineStore('cartList', {
    state: () => {
        return {
            cartList: [],//选中商品
            isDelete: true,//确定底部组件的展示
            orderList: [],//单次订单
            userAddress: [
                //初始值
                {
                    id: 1001,
                    name: "王逸飞",
                    tel: "18951326690",
                    province: "江苏省",
                    city: "南通市",
                    county: "启东市",
                    addressDetail: "吕四港镇",
                    isDefault: true,
                    areaCode: "226241"
                },
                {
                    id: 1002,
                    name: "网利",
                    tel: "13115293071",
                    province: "江苏省",
                    city: "南通市",
                    county: "启东市",
                    addressDetail: "吕四港镇",
                    isDefault: false,
                    areaCode: "226241"
                },
            ],//用户数据
            orderListEnd: [],//所有订单
        }
    },
    // 也可以这样定义
    // state: () => ({ count: 0 })
    actions: {
        addCart(value) {
            this.cartList = value
        },
        changeDelete() {
            this.isDelete = !this.isDelete
        },
        delete(value) {
            this.cartList = value
        },
        pay(value) {
            this.orderList = value
        },
        orderListEd() {
            this.orderListEnd = this.orderListEnd.concat(this.orderList)
        },
        addAddress(value) {
            //修改默认地址
            this.userAddress.map(item => {
                if (value.isDefault) {
                    item.isDefault = false
                }
            })
            value.id = this.userAddress[this.userAddress.length - 1].id + 1
            this.userAddress.push(value)
        },
        editAddress(value) {
            this.userAddress = this.userAddress.map(item => {
                // if (value.isDefault) {
                //     item.isDefault = false //该变动会刷新当前页面,使的原本做出改动的页面回到最初时
                // }
                // if (item.id === value.id) {
                //     console.log(value);
                //     return value
                // } else {
                //     return item
                // }

                if (item.id === value.id) {
                    return value; // 当id匹配时，返回更新后的value
                } else {
                    if (value.isDefault) {
                        item.isDefault = false; // 将所有的item的isDefault设为false
                    }
                    return item; // 其他情况返回原始的item
                }
            })
        },
        deleteAddress(value) {
            this.userAddress = this.userAddress.filter((i) => {
                return value.id !== i.id;
            })
            if (value.isDefault) {
                if (this.userAddress.length === 0) {
                    return
                }
                this.userAddress[0].isDefault = true
            }
        }
    },
})