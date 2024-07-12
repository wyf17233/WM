import Mock from "mockjs"
import { result } from "./datas"
let bigSortDatas = result.bigSortDatas
let smallSortDatas = result.smallSortDatas
let navList = result.navList
//拦截请求
Mock.mock(/^\/takeAway\/bigSort/, 'get', {
    code: 0,
    msg: "",
    data: bigSortDatas
}
)
Mock.mock(/^\/takeAway\/smallSort/,'get',{
    code:0,
    msg:"",
    data:smallSortDatas
})
Mock.mock(/^\/takeAway\/getNavList/,'get',()=>{
    // let tab = (url.split("?"))[1].split("=")[1]
    return {
        code:0,
        msg:'',
        data:navList
    }
})