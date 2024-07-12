import Mock, { Random } from "mockjs"
function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}
function randomColor() {
    let r = getRandom(0, 256)
    let g = getRandom(0, 256)
    let b = getRandom(0, 256)
    return `(${r},${g},${b})`
}
const icons = ["icon-waimai3", "icon-waimai4", "icon-waimai5", "icon-waimai6", "icon-waimaidingdan-01", "icon-tongchengwaimai", "icon-waimaicaipu", "icon-waimaidan", "icon-waimaipingtaizhilian"]
export const result = Mock.mock(
    {
        "bigSortDatas|5": [
            {
                "icon|1": icons,
                msg: "@cword(2,4)"
            }
        ],
        "smallSortDatas|10": [
            {
                "icon|1": icons,
                msg: "@cword(2,4)"
            }
        ],
        "navList|4": [
            {
                tab: "@cword(4)",
                "data|5-10": [
                    {
                        pic: function () {
                            return Mock.Random.image('80x80', randomColor(), randomColor(), 'png', Mock.Random.cword(2, 4));
                        },
                        title: "@cword(2,4)",
                        "sales|100-10000": 1,
                        "price|100-500": 1,
                        "label|2": ["@cword(2,4)"],
                        // 可加入children属性将home与store串联起来
                    }
                ]
            }
        ]
    })