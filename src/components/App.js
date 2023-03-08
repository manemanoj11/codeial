import { useEffect, useState } from 'react';
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';

import { getPosts } from '../api';
// import { Home,Login } from '../pages';
import Login from '../pages/Login';
import Home from '../pages/Home'
import { Loader,Navbar } from './'; 

const About =()=>{
  return <h1>About</h1>
}

const UserInfo=()=>{
  return <h1>User</h1>
}

const Page404 =()=>{
  return <h1>404</h1>
}

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await getPosts();

      if (response.success) {
        setPosts(response.data.posts);
      }

      setLoading(false);
    };

    fetchPosts();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="App">
     
      <Router>
      <Navbar />
        <Routes>
        <Route exact element={<Home posts={posts}/>} path="/">  </Route>
          {/* <Home posts={posts} /> */}
       
          <Route exact element={<Login posts={posts}/>} path="/login">  </Route>
          <Route exact element={<About posts={posts}/>} path="/about">  </Route>
          <Route exact element={<UserInfo posts={posts}/>} path="/User">  </Route>
          {/* <Route > <Page404 /> </Route> */}
        {/* <Route exact path="/login">
          <Login />
        </Route>

        <Route exact path="/about">
          <About />
        </Route>

        <Route exact path="/user/asdasd">
          <UserInfo />
        </Route>

        <Route>
          <Page404 />
        </Route> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
