import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import HomeContent from './components/MainContents/HomeContent/HomeContent';
import { Route, Routes } from 'react-router-dom';
import AddPages from './components/MainContents/AddPages/AddPages';
import Blogs from './components/MainContents/Blogs/Blogs';
import Media from './components/MainContents/Media/Media';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Sidebar></Sidebar>
      <Routes>
        <Route path='/' element={<HomeContent></HomeContent>}></Route>
        <Route path='/dashboard' element={<HomeContent></HomeContent>}></Route>
        <Route path='/pages' element={<AddPages></AddPages>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/media' element={<Media></Media>}></Route>
      </Routes>
    </div>
  );
}

export default App;
