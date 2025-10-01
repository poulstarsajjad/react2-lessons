import { Link } from "react-router-dom";
import Container from "../container/Container";


function Navbar() {

    const navs = [
        {
            name: "Home",
            link: "/"
        },
        {
            name: "Blogs",
            link: "/blogs"
        },
        {
            name: "Create Blog",
            link: "/createBlog"
        },
        {
            name: "About",
            link: "/about"
        }
    ]
  return (
    <Container>
        <div className="h-30 flex justify-between">
            <ul className="flex items-center gap-20">
                {
                    navs.map((nav)=>(
                        <li className="text-2xl font-medium cursor-pointer transition duration-300 hover:text-blue-500" key={nav.name}>
                            <Link to={nav.link}>{nav.name}</Link> 
                        </li>
                    ))
                }
            </ul>
            <img src="logo.jpg" alt="" />
        </div>
    </Container>
    
  )
}

export default Navbar;


