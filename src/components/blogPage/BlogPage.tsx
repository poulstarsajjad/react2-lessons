import { useParams } from "react-router-dom";
import Container from "../container/Container";
import { useEffect, useState } from "react";
import type { Iblogs } from "../../pages/blogs/Blogs";
import axios from "axios";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import Loading from "../loading/Loading";

function BlogPage() {

    const params = useParams();

    const [blogPage , setBlogPage] = useState<Partial<Iblogs>>({});

    const [isLoading , setIsLoading] = useState(false);

    useEffect(()=>{
        setIsLoading(true);
        axios.get(`http://localhost:8000/blogs/${params.id}`)
        .then((result)=> {
            setBlogPage(result.data);
            setIsLoading(false);
        })
    } , []);

  return (
    <div>
        <Navbar />
            {
                isLoading ? <Loading /> : (
                    <div>
                        <div className="bg-cover bg-center w-full h-[60vh] mb-30 flex justify-center relative"  style={{ backgroundImage: `url(${blogPage.image})` }}>
                            <div className="absolute inset-0 bg-black/30"></div>
                            <h1 className="text-5xl font-bold text-white flex justify-center items-center text-center leading-20 w-[50rem] relative">{blogPage.title}</h1>
                        </div>

                        <Container>
                            <div className="mb-30 leading-10">
                                <p>{blogPage.description}</p>
                            </div>
                        </Container>
                    </div>
                )
            }
        <Footer />
    </div>
  )
}

export default BlogPage;
