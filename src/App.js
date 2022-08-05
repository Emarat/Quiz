import './App.css';
import app from './firebase.init';
import { getAuth } from "firebase/auth";
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import SignUp from './components/SignUp/SignUp';
import LogIn from './components/LogIn/LogIn';
import Home from './components/Home/Home';

const auth = getAuth(app);


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<LogIn></LogIn>}></Route>
        <Route path='/signUp' element={<SignUp></SignUp>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
