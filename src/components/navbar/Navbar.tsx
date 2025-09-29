import Container from "../container/Container";


function Navbar() {

    const navs = [
        {
            name: "Home",
            link: ""
        },
        {
            name: "Blog",
            link: ""
        },
        {
            name: "About",
            link: ""
        }
    ]
  return (
    <Container>
        <div className="h-30 flex justify-between">
            <ul className="flex items-center gap-20">
                {
                    navs.map((nav)=>(
                        <li className="text-2xl font-medium cursor-pointer hover:text-blue-500" key={nav.name}>{nav.name}</li>
                    ))
                }
            </ul>
            <img src="logo.jpg" alt="" />
        </div>
    </Container>
    
  )
}

export default Navbar;
