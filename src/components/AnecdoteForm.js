import { useDispatch } from 'react-redux'
import { appendBlog } from '../reducers/anecdoteReducer'
import anecdotesService from '../services/anecdotes'

const AnecdoteForm = () => {
    const dispatch = useDispatch()

    const newAnecdote = async (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        event.target.anecdote.value = ''
        const newBlog= await anecdotesService.newBlog(content)
        dispatch(appendBlog(newBlog))
    }
    return <>
        <h2>create new</h2>
        <form onSubmit={newAnecdote}>
            <div><input name='anecdote' /></div>
            <button type='submit'>create</button>
        </form>
    </>
}
export default AnecdoteForm