import { useEffect, useState } from "react";
import BlogsItem from "../../components/blogsItem/BlogsItem";
import Container from "../../components/container/Container";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import axios from "axios";
import { Link } from "react-router-dom";
import Loading from "../../components/loading/Loading";

export interface Iblogs{
  id: number | string;
  title: string;
  description: string;
  image: string
}

function Blogs() {

  const [blogs , setBlogs] = useState<Iblogs[]>([]);
  const [isLoading , setIsLoading] = useState(false);

  useEffect(()=>{
    setIsLoading(true);
    axios.get("http://localhost:8000/blogs")
    .then((result)=> {
      setBlogs(result.data);
      setIsLoading(false);
    })
  } , []);

  return (
    <div>
        <Navbar />

        <div className="bg-[url('/header3.jpg')] bg-cover bg-center w-full h-[60vh] flex justify-center relative">
         <div className="absolute inset-0 bg-black/30"></div>
          <div className="flex flex-col justify-center items-center relative">
                <h1 className="text-7xl font-bold text-white text-center">Blogs</h1>
                <p className="text-white text-center pt-10 font-medium text-lg">
                    Senectus et netus et malesuada fames ac turpis egestas. Sed libero enim sed faucibus turpis in eu.
                    <br />
                    Pharetra diam sit amet nisl suscipit adipiscing bibendum est.
                </p>
          </div>
        </div>

        <Container>
          <div className="grid grid-cols-2 justify-between gap-10 mt-20 mb-30">
            {
              isLoading ? <Loading /> : (
                blogs.map((blog)=>(
                  <Link key={blog.id} to={`/blogs/${blog.id}`}>
                    <BlogsItem {...blog} />
                  </Link>
              ))
              )
            }
          </div>
        </Container>

        <Footer />
    </div>
  )
}

export default Blogs;


//npx json-server --watch data/db.json --port 8000
//npm i json-server