import instance from "./instance.js"
const getNavList = () => {
    return instance.get("/takeAway/getNavList").then(resp => resp.data)
}
export { getNavList }