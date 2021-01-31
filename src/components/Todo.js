import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';

const Todo = ({ todo, deleteTodo, checkTodo }) => {
    const checkColor = todo.checked ? { color: 'gray' } : {}

    return (
        <div className='todo'>
            <h2 className={todo.checked && 'checked'}>{todo.todo}</h2>
            <div className='form-buttons'>
                <button 
                    className='btn btn-check'
                    onClick={e => checkTodo(todo.id)}
                >
                    <CheckIcon style={checkColor} />
                </button>
                <button 
                    className='btn btn-clear'
                    onClick={e => deleteTodo(todo.id)}
                >
                    <ClearIcon />
                </button>
            </div>
        </div>
    )
}

export default Todo
