import { useSelector, useDispatch } from 'react-redux'
import { addVote } from '../reducers/anecdoteReducer'
import { showAnecdote} from '../reducers/notificationReducer'
const AnecdoteList = () => {
    const dispatch = useDispatch()
    const anecdotes = useSelector(({filter, blogs})=>{
        return blogs.filter(blog => blog.content.includes(filter))
    })
    const vote = (anecdote) => {
        dispatch(addVote(anecdote.id))
        dispatch(showAnecdote(anecdote.content))
        setTimeout(()=>dispatch(showAnecdote('')),5000)
    }
    return <>
        {anecdotes.map(anecdote =>
            <div key={anecdote.id}>
                <div>
                    {anecdote.content}
                </div>
                <div>
                    has {anecdote.votes}
                    <button onClick={() => vote(anecdote)}>vote</button>
                </div>
            </div>
        )}
    </>
}
export default AnecdoteList