import Todo from './Todo'

const Todos = ({ todos, deleteTodo, checkTodo }) => {
    return (
        <div>
            {todos.map((todo) => <Todo todo={todo} deleteTodo={deleteTodo} checkTodo={checkTodo} />)}
        </div>
    )
}

export default Todos
