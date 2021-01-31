import {TextField, Button} from '@material-ui/core'

const Header = ({ addTodo ,input, setInput }) => {
    return (
        <div>
            <h1 className='form-title'>React Todo List</h1>
            <form 
                className='form-control' 
                noValidate autoComplete="off"
                onSubmit={(e) => addTodo(e)}
            >
                <TextField className='form-input' id="standard-basic" label="Input Task Name" value={input} onChange={(e) => setInput(e.target.value)} />
                <Button variant="contained" color="primary" type="submit" style={{ 
                    padding: '6px 24px', 
                    backgroundColor: '#7D18B4',
                }}>
                    Add
                </Button>
            </form>
        </div>
    )
}

export default Header
