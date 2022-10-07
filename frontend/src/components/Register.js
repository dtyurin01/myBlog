import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';


export default function Register(){
    return(
        <div className="container">
            <Paper className='root'>
                <Typography className="title" variant='h5'>Створення акаунту</Typography>
                <div className='avatar'>
                    <Avatar sx={{width:100, height:100}}/>
                </div>
                <TextField className='field' label="Повне ім'я" fullWidth />
                <TextField className='field' label="E-Mail" fullWidth />
                <TextField className='field' label="Пароль" fullWidth />
                <Button size="large" variant="contained" fullWidth>
                    Зареєструватись
                </Button>
            </Paper>
        </div>
    )
}