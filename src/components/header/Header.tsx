import Container from "../container/Container";

function Header() {
  return (
    <div className="bg-[url('/header.avif')] bg-cover bg-center w-full h-[57rem] mb-30">
      <Container>
        <h1 className="text-white text-8xl font-bold flex flex-col pt-50">
            <span>Explore the world</span>
            <span>with exciting people</span>
        </h1>
        <p className="flex flex-col text-white my-10">
            <span>Mi in nulla posuere sollicitudin aliquam ultrices sagittis. Egestas quis ipsum suspendisse ultrices</span>
            <span>gravida. Sed adipiscing diam donec adipiscing tristique risus nec feugiat in. Arcu risus quis varius</span>
            <span>quam quisque id diam. Aliquet enim tortor at auctor urna nunc id</span>
        </p>
        <button className="bg-black text-white text-lg px-10 py-4 rounded cursor-pointer transition duration-300 hover:bg-white hover:text-black">Start Now</button>

        <div className="grid grid-cols-3 text-white gap-10 pt-30">
            <div>
                <h1 className="text-4xl font-bold">01</h1>
                <h2 className="text-xl font-bold py-3">Choose the place and time</h2>
                <p>Ultricies tristique nulla aliquet tortor malesuada fames ac <span>turpis egestas sed tempus urna.</span></p>
            </div>
            <div>
                <h1 className="text-4xl font-bold">02</h1>
                <h2 className="text-xl font-bold py-3">Compound your team</h2>
                <p>Urna condimentum mattis pellentesque placerat vestibulum lectus mauris tortor condimentum.</p>
            </div>
            <div>
                <h1 className="text-4xl font-bold">03</h1>
                <h2 className="text-xl font-bold py-3">Start exloring the world</h2>
                <p>Auctor elit sed vulputate morbi tristique senectus et netus et malesuada fames ac turpis.</p>
            </div>
        </div>
      </Container>
    </div>
  )
}

export default Header;
