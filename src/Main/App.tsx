import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Navbar from '../components/Navbar';
import Home from '../pages/Home/Home';
import ManagePost from '../pages/ManagePost/ManagePost';
import Posts from '../components/Post';
import SinglePost from '../components/SinglePost';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import PostAdd from '../PostComponents/PostAdd';
import PostUpdate from '../PostComponents/PostUpdate';
import PostList from '../PostComponents/PostList';

function App() {
  return (
      <div>
          <BrowserRouter>
              <Navbar />
              <Routes>
                  <Route path='/' element={<Home/> } />
                  <Route path='/ManagePost' element={<PostAdd /> } />
                  <Route path='/Posts' element={<PostList />} />
                  <Route path='/Posts/:id' element={<SinglePost />} />
                  <Route path='Posts/:id/update' element={<PostUpdate />} />
                  <Route path='Posts/add' element={<PostAdd /> } />
              </Routes>
          </BrowserRouter>
      </div>
  );
}

export default App;
