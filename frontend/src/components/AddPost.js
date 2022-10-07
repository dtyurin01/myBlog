import * as React from "react";
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import ReactMde from "react-mde";
import * as Showdown from "showdown";
import "react-mde/lib/styles/css/react-mde-all.css";

const converter = new Showdown.Converter({
    tables: true,
    simplifiedAutoLink: true,
    strikethrough: true,
    tasklists: true
  });

export default function AddPost () {
    const [value, setValue] = React.useState("**Hello world!!!**");
    const [selectedTab, setSelectedTab] = React.useState("write");
    return(
        <div className="addingPost container mt-3" style={{}}>
            <Paper style={{padding: 30}}>
                <Button variant="outlined" size="large">Загрузити прев'ю</Button>
                <br/>
                <br/>
                <TextField placeholder="Заголовок статті..." fullWidth/>
                <TextField  variant="standard" placeholder="Теги" fullWidth /> 
                <div className="mt-3">
                <ReactMde
                    value={value}
                    onChange={setValue}
                    selectedTab={selectedTab}
                    onTabChange={setSelectedTab}
                    generateMarkdownPreview={markdown =>
                    Promise.resolve(converter.makeHtml(markdown))}
                />  
                </div>
                <div className="mt-3">
                    <Button size="large" variant="contained">
                    Опубліковати
                    </Button>
                    <a href="/">
                    <Button size="large">Відмінити</Button>
                    </a>
                </div>               
            </Paper>
        </div>
    )
};