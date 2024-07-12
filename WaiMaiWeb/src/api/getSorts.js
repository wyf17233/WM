import instance from "./instance.js"
const getBigSorts = () => {
    return instance.get("/takeAway/bigSort").then(resp => resp.data)
}
const getSmallSorts = () => {
    return instance.get("/takeAway/smallSort").then(resp=>resp.data)
}
export { getBigSorts ,getSmallSorts}