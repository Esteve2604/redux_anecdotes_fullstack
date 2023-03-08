import { createSlice } from '@reduxjs/toolkit'
const getId = () => (100000 * Math.random()).toFixed(0)

const anecdoteSlice = createSlice({
  name: 'anecdote',
  initialState: [],
  reducers: {
    addVote(state, action) {
      const updatedState = state.map(anecdote => anecdote.id === action.payload ? { ...anecdote, votes: anecdote.votes + 1 } : anecdote)
      return updatedState.sort((a, b) => b.votes - a.votes)
    },
    addAnecdote(state, action) {
      state.push({
        content: action.payload,
        id: getId(),
        votes: 0
      })
    },
    appendBlog(state, action){
      state.push(action.payload)
    },
    setBlogs(state, action){
      return action.payload
    }
  }
})




export const { addVote, addAnecdote, appendBlog, setBlogs } = anecdoteSlice.actions
export default anecdoteSlice.reducer