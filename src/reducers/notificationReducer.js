import { createSlice } from '@reduxjs/toolkit'
const notificationSlice = createSlice({
    name: 'notification',
    initialState: '',
    reducers: {
        showAnecdote(state, action){
            return action.payload
        }
    }
})
export const { showAnecdote } = notificationSlice.actions
export default notificationSlice.reducer