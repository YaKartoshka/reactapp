import logo from './logo.svg';
import './App.css';
import Header from './Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './Main';
import Profile from './Profile';
import data from './data';
import Frineds from './Frineds';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<Main data={data.PostPage}/>}/>
          <Route path='/profile' element={<Profile data={data.ProfilePage}/>}/>
          {/* <Route path='/friends' element={<Frineds data={data.FriendsPage} />}/> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
