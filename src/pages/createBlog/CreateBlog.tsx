import { useState } from "react";
import Container from "../../components/container/Container";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import { Toaster, toast } from "react-hot-toast";

function CreateBlog() {
        
    const [title , setTitle] = useState('');
    const [description , setDescription] = useState('');
    const [image , setImage] = useState<string>('');

    const handleCreateBlog = async ()=>{
        const response = await fetch("http://localhost:8000/blogs" , {
            method: "POST",
            body: JSON.stringify({
                "id": Math.floor(Math.random() * 100).toString(),
                "title": title,
                "description": description,
                "image": image
            })
        });

        if(response.ok){
            toast.success("Blog submit successfully");
            setTitle("");
            setDescription("");
            setImage("");
        }
        else{
            toast.error("Blog not submit");
        }
    };

    
  return (
    <div>
      <Navbar />
      <div className="bg-[url('/header4.jpg')] bg-cover bg-center w-full h-[60vh] mb-30 flex justify-center relative">
            <div className="absolute inset-0 bg-black/30"></div>
            <div className="flex flex-col justify-center items-center relative">
                <h1 className="text-7xl font-bold text-white text-center">Create Blog</h1>
                <p className="text-white text-center pt-10 font-medium text-lg">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis,
                    <br />
                    pulvinar dapibus leo.
                </p>
            </div>
        </div>

        <Container>
            <div className="flex flex-col items-center gap-10 mb-30">
                <input type="text" className="bg-cyan-100 w-full h-15 rounded text-xl p-4 outline-none focus:bg-orange-100" value={title} onChange={(e)=> setTitle(e.target.value)}  placeholder="Enter Blog Title" />
                <input type="text" className="bg-cyan-100 w-full h-15 rounded text-xl p-4 outline-none focus:bg-orange-100" value={image} onChange={(e)=> setImage(e.target.value)} placeholder="Enter Image Link" />
                <textarea className="bg-cyan-100 w-full h-[15rem] rounded text-xl p-4 outline-none focus:bg-orange-100" value={description} onChange={(e)=> setDescription(e.target.value)} placeholder="Enter Blog Description"></textarea>
                <button onClick={handleCreateBlog} className="text-2xl font-medium bg-cyan-700 py-5 px-10 rounded text-cyan-100 cursor-pointer w-full transition duration-300 hover:bg-cyan-100 hover:text-cyan-700">Create Blog</button>
            </div>
        </Container>
         <Toaster position="top-right" reverseOrder={false} />
        <Footer />
    </div>
  )
}

export default CreateBlog;


//npm i react-hot-toast