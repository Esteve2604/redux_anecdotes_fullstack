export const changeFilter = (filterName) => {
    return {
        type: filterName
    }
}
const filterReducer = (state = '', action) => {
    console.log('state now: ', state)
    console.log('action', action)
    return state
}
export default filterReducer