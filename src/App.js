import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import AnecdoteFilter from './components/AnecdoteFilter'
import Notification from './components/Notification'
import { setBlogs } from './reducers/anecdoteReducer'
import { useEffect } from 'react'
import anecdotesService from './services/anecdotes'
import { useDispatch } from 'react-redux'
const App = () => {
  const dispatch=useDispatch()
  useEffect(()=>{
    anecdotesService.getAll().then(blogs=>dispatch(setBlogs(blogs)))
  },[dispatch])
  return (
    <div>
      <AnecdoteFilter />
      <h2>Anecdotes</h2>
      <Notification />
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  )
}

export default App