import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Blog from './components/Blog';
import Services from './components/Services';
import About from './components/About';
import SingleBlog from './components/SingleBlog';
import NotFound from './components/NotFound';
import Post from './components/Post';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="w-8/12 m-auto">
          <Routes>
              <Route path="/" exact element={<Home/>} />
              <Route path="/blog" exact element={<Blog/>} />
              <Route path="/blog/:id" element={<SingleBlog/>} />
              <Route path="/services" element={<Services/>} />
              <Route path="/about" element={<About/>} />
              <Route path="/post" exact element={<Post/>} />
              <Route path="*" element={<NotFound/>} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;

function Home(){
  return (
    <div className="App">
      <h1>Home Section</h1>
    </div>
  );
}