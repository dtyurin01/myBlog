import express from "express";
import mongoose from 'mongoose'
import multer from 'multer'
import {registerValidation, loginValidation} from './validations/auth.js'
import checkAuth from './utils/checkAuth.js'
import {register,login,getMe} from './controllers/UserController.js'
import {create, getAll, getOne, remove, update} from './controllers/PostController.js'
import {postCreateValidation} from './validations/post.js'
import handleValidationErrors from "./utils/handleValidationErrors.js";

mongoose
.connect('mongodb+srv://dima:www123@cluster0.x7jyb.mongodb.net/blog?retryWrites=true&w=majority')
.then(()=>{ 
    console.log('db is ok')
}).catch((err) => console.log('db dead', err))
const app = express();

const storage = multer.diskStorage({
    destination: (_, __, cb) => {
      if (!fs.existsSync('uploads')) {
        fs.mkdirSync('uploads');
      }
      cb(null, 'uploads');
    },
    filename: (_, file, cb) => {
      cb(null, file.originalname);
    },
  });
const upload  = multer({storage})

app.use(express.json());
app.use('/uploads', express.static('uploads'));

app.post('/auth/register', registerValidation, handleValidationErrors, register)
app.post('/auth/login', loginValidation, handleValidationErrors, login)
app.get('/auth/me', checkAuth, getMe)
app.post('/upload', checkAuth, upload.single('image'), (req, res) => {
    res.json({
      url: `/uploads/${req.file.originalname}`,
    });
  })

app.post('/posts',checkAuth, postCreateValidation, create)
app.get('/posts', getAll)
app.get('/posts/:id', getOne)
app.delete('/posts/:id', checkAuth, remove)
app.patch('/posts/:id', checkAuth, update)


app.listen(4444, err =>{
    if(err) {
        return console.log(err);
    }
    console.log('server OK');
})
