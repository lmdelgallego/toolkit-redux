import { useState } from "react";
import { useGetTodoQuery, useGetTodosQuery } from "./store/apis"


export const TodoApp = () => {

  const [todoId, setTodoId] = useState(1);

  // const { data: todos = [], isLoading } = useGetTodosQuery();
  const { data: todo, isLoading } = useGetTodoQuery(todoId);

  const nextTodo = () => {
    setTodoId(todoId + 1);
  }

  const prevTodo = () => {
    if( todoId > 1 ) {
      setTodoId(todoId - 1);
    }
  }


  return (
    <>
      <h1>Todo - RTK Query</h1>
      <hr />
      <h4>isLoading: { isLoading ? 'True' : 'False'}</h4>
      <pre style={{
        textAlign: 'left',
        fontSize: '1.2rem',
        background: '#eee',
        padding: '1rem',
        borderRadius: '5px',
        color: 'black'
      }}>{
        JSON.stringify(todo, null, 2)
      }</pre>
      <button onClick={prevTodo} > {'<-'} </button>
      <button onClick={nextTodo}> {'->'} </button>

      {/* <ul style={
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
      </ul> */}

    </>
  )
}
