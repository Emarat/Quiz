import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import SignUp from './components/SignUp/SignUp';



function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/signUp' element={<SignUp></SignUp>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
