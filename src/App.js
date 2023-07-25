import './App.css';
import './Global.scss';
import Home from './Components/Home/Home';
import SignUp from './Components/SignUp/SignUp';
import SignIn from './Components/SignIn/SignIn';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
function App() {
  return (
    <>
      <Router>
        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
