import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import SignUp from './components/SignUp/SignUp';
import LogIn from './components/LogIn/LogIn';



function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/signUp' element={<SignUp></SignUp>}></Route>
        <Route path='/login' element={<LogIn></LogIn>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
