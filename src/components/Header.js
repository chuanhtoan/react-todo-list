import {TextField, Button} from '@material-ui/core'

const Header = () => {
    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>React Todo List</h1>
            <form className='form-control' noValidate autoComplete="off">
                <TextField className='form-input' id="standard-basic" label="Standard" />
                <Button variant="contained" color="primary">
                    Add
                </Button>
            </form>
        </div>
    )
}

export default Header
