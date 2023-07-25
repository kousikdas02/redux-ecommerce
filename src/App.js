import './Global.scss';
import './App.css';
import Home from './pages/Home/Home';

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AddProduct from './Components/AddProduct/AddProduct';
import SignIn from './auth/SignIn/SignIn';
import SignUp from './auth/SignUp/SignUp';
function App() {
  return (
    <>
      <Router>
        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
