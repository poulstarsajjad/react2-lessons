import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Blogs from "./pages/blogs/Blogs";
import BlogPage from "./components/blogPage/BlogPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/about" element={<About />} />
      <Route path="/blogs/:id" element={<BlogPage />} />
    </Routes>
  )
}

export default App;
