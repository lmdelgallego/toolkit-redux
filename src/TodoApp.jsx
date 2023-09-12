import { useGetTodosQuery } from "./store/apis"


export const TodoApp = () => {

  const { data: todos = [], isLoading } = useGetTodosQuery();

  return (
    <>
      <h1>Todo - RTK Query</h1>
      <hr />
      <h4>isLoading: { isLoading ? 'True' : 'False'}</h4>
      <pre>...</pre>

      <ul style={
        {
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          listStyle: 'none',
          textAlign: 'left',
        }
      }>
        {todos?.map(todo => (
          <li key={todo.id}>
            <strong>{todo.completed ? 'DONE' : 'PENDING'} --- </strong>
            {todo.title}
          </li>
        ))}
      </ul>
      <button>Next Todo</button>
    </>
  )
}
