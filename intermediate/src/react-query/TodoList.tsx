import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { Todo } from '../services/todoService'

const TodoList = () => {
  const fetch = () =>
    axios
      .get<Todo[]>('https://jsonplaceholder.typicode.com/todos')
      .then((res) => res.data)

  const { data: todos } = useQuery({
    queryKey: ['todos'],
    queryFn: fetch,
  })

  // if (error) return <p>{error}</p>

  return (
    <ul className='list-group'>
      {todos?.map((todo) => (
        <li key={todo.id} className='list-group-item'>
          {todo.title}
        </li>
      ))}
    </ul>
  )
}

export default TodoList
