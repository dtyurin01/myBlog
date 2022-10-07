
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

export default function Login(){
    return(
        <div className="container">
            <Paper className="root">
                <Typography className="title" variant="h5">Ввійти в аккаунт</Typography>
                <TextField label="E-Mail" className="field" error helperText="Невірно вказана пошта" fullWidth/>
                <TextField className="field" label="Пароль" fullWidth />
                <Button size="large" variant="contained" fullWidth>
                    Ввійти
                </Button>
            </Paper>
        </div>
    )
}