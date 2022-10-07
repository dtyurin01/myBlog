import Card from './Card'
import Comments from './Comments'
import { TextField, Divider} from '@mui/material'

export default function FullPost(){
    return(
        <div className='container mt-3'>
            <Card/>
            <div className='mt-3'>
                <Comments/>
                <Divider orientation="horizontal" />
                <div className='p-2 typeComment'>
                    <div className="aboutComment">
                        <TextField label="Написати коментар" sx={{ bgcolor: 'background.paper'}} placeholder="Напишіть тут щось" fullWidth />
                        <button type="button" class="btn btn-primary mt-1">Відправити</button>
                    </div>
                </div>

            </div>
        </div>
    )
}