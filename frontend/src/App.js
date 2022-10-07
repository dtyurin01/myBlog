import { Home } from "./components/Home";
import Navbar from "./components/Navbar";
import './index.scss';
import FullPost from './components/FullPost'
import AddPost from './components/AddPost'
import Login from './components/Login'
import Register from './components/Register'
 
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      {/* <FullPost/> */}
      {/* <AddPost/> */}
      {/* <Login/> */}
      {/* <Register/> */}
    </div>
  )
}

export default App;
