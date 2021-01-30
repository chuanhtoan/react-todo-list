import CheckIcon from '@material-ui/icons/Check';
import EditIcon from '@material-ui/icons/Edit';
import ClearIcon from '@material-ui/icons/Clear';

const Todo = () => {
    return (
        <div className='Todo'>
            <h2>Todo</h2>
            <div>
                <button className='btn btn-check'><CheckIcon /></button>
                <button className='btn btn-edit'><EditIcon /></button>
                <button className='btn btn-clear'><ClearIcon /></button>
            </div>
        </div>
    )
}

export default Todo
