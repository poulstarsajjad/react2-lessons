import CardPopular from "../../components/cardPopular/CardPopular";
import Container from "../../components/container/Container";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";

function Home() {
  return (
    <div>
        <Navbar />
        <Header />
        <Container>
            <div>
                <div>
                    <p className="text-gray-700 font-medium">Where To Go</p>
                    <h1 className="text-5xl font-bold">Popular Destinations</h1>
                </div>
                <div className="mt-15">
                    <CardPopular />
                </div>

                <div className="flex justify-between gap-50 mb-30">
                    <div>
                        <h1 className="flex items-center text-2xl font-bold gap-7">
                            <span>
                                <svg fill="#000000" height="64px" width="64px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 297.00 297.00" xmlSpace="preserve" stroke="#000000" stroke-width="0.00297" transform="rotate(0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="3.564"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M7.766,266.397l74.854,16.736c5.367,1.2,9.759-2.318,9.759-7.818V70.089c0-5.5-4.392-10.981-9.759-12.182L12.101,42.14 c-2.938-0.658-6.024,0.057-8.378,1.942C1.37,45.967,0,48.818,0,51.834v204.87C0,261.355,3.227,265.383,7.766,266.397z"></path> <path d="M260.943,74.663c0-35.725-29.053-64.787-64.764-64.787s-64.764,29.063-64.764,64.787 c0,51.601,55.822,101.356,58.199,103.45c1.877,1.651,4.22,2.479,6.565,2.479s4.688-0.827,6.565-2.479 C205.122,176.02,260.943,126.264,260.943,74.663z M196.18,98.545c-13.092,0-23.743-10.713-23.743-23.882 c0-13.169,10.651-23.882,23.743-23.882c13.093,0,23.744,10.713,23.744,23.882C219.924,87.832,209.273,98.545,196.18,98.545z"></path> <path d="M284.9,286.885c0.717,0.161,1.443,0.239,2.166,0.239c2.236,0,4.433-0.756,6.211-2.181c2.354-1.886,3.723-4.737,3.723-7.752 V72.32c0-4.651-3.228-8.679-7.766-9.693l-15.941-3.564c1.017,5.045,1.558,10.261,1.558,15.601 c0,24.548-10.417,50.991-30.959,78.593c-15.006,20.163-30.264,33.804-31.959,35.297c-2.571,2.262-5.579,3.906-8.8,4.889v65.162 c0,5.5,4.392,10.982,9.759,12.182L284.9,286.885z"></path> <path d="M189.227,193.441c-3.222-0.983-6.23-2.629-8.804-4.893c-1.691-1.489-16.948-15.13-31.955-35.293 c-20.542-27.602-30.958-54.045-30.958-78.593c0-5.61,0.602-11.082,1.723-16.364c0,0-2.913,0.636-6.474,1.412 c-3.561,0.777-6.474,5.913-6.474,11.413v205.205c0,5.5,4.396,9.04,9.77,7.867l63.402-13.838c5.373-1.173,9.77-6.633,9.77-12.133 V193.441z"></path> </g> </g></svg>
                            </span>
                            <span>Ultricies Tristique Aliquet</span>
                        </h1>
                        <p>
                            Egestas quis ipsum suspendisse ultrices gravida. Sed adipiscing diam donec adipiscing tristique risus nec feugiat in. Arcu risus quis varius quam quisque id diam. Aliquet enim tortor at auctor urna nunc id.
                        </p>
                    </div>
                    <div>
                        <h1 className="flex items-center text-2xl font-bold gap-5">
                            <span>
                                <svg fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="64px" height="64px" viewBox="0 0 26.421 26.421" xmlSpace="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M17.255,7.527h-3.704c0.002,0.012,0.014,0.019,0.014,0.031v0.475c0,0.195-0.159,0.354-0.355,0.354 c-0.195,0-0.355-0.159-0.355-0.354V7.558c0-0.013,0.013-0.02,0.014-0.031H9.166c-0.523,0-1.37,0.247-1.813,0.528L4.582,9.82 v14.534c0,0.633,0.518,1.15,1.15,1.15h0.813v0.785c0,0.072,0.06,0.132,0.131,0.132h1.716c0.072,0,0.132-0.06,0.132-0.132v-0.785 h9.375v0.785c0,0.072,0.061,0.132,0.133,0.132h1.716c0.071,0,0.131-0.06,0.131-0.132v-0.785h0.813c0.633,0,1.149-0.518,1.149-1.15 V9.819L19.07,8.055C18.625,7.774,17.777,7.527,17.255,7.527z M12.854,9.102c0-0.197,0.16-0.356,0.355-0.356 c0.196,0,0.355,0.159,0.355,0.356v1.068c0,0.195-0.159,0.355-0.355,0.355c-0.195,0-0.355-0.16-0.355-0.355V9.102z M12.854,11.238 c0-0.196,0.16-0.356,0.355-0.356c0.196,0,0.355,0.16,0.355,0.356v1.067c0,0.197-0.159,0.356-0.355,0.356 c-0.195,0-0.355-0.159-0.355-0.356V11.238z M12.854,13.376c0-0.196,0.16-0.354,0.355-0.354c0.196,0,0.355,0.158,0.355,0.354v1.067 c0,0.197-0.159,0.354-0.355,0.354c-0.195,0-0.355-0.157-0.355-0.354V13.376z M14.006,16.066c0,0.44-0.357,0.797-0.797,0.797 s-0.797-0.355-0.797-0.797v-0.112c0-0.438,0.357-0.798,0.797-0.798s0.797,0.357,0.797,0.798V16.066z"></path> <path d="M20.688,2.493h-3.965L15.559,0h-4.7L9.695,2.493H5.73c-0.633,0-1.15,0.519-1.15,1.15v4.813l2.153-1.372 c0.625-0.396,1.692-0.707,2.431-0.707h8.091c0.738,0,1.806,0.311,2.431,0.707l2.152,1.371V3.643 C21.838,3.012,21.32,2.493,20.688,2.493z M10.859,1.268h4.7l0.854,1.226h-6.409L10.859,1.268z"></path> </g> </g> </g></svg>
                            </span>
                            <span>Semper Duis Attellus</span>
                        </h1>
                        <p>
                            Dignissim sodales ut eu sem integer. Odio pellentesque diam volutpat commodo sed egestas egestas. A arcu cursus vitae congue mauris rhoncus. Viverra mauris in aliquam sem fringilla ut morbi
                        </p>
                    </div>
                </div>
            </div>
        </Container>

        <div className="bg-[url('/background.jpg')] bg-cover bg-center bg-transparent w-full h-[40rem] mb-30 flex justify-between items-center px-50 gap-10">
            <div>
                <div>
                    <h1 className="text-5xl font-bold mb-7">Condimentum Mattis Pellentesque Dnibus Tortyga</h1>
                    <p>
                        Malesuada fames ac turpis egestas sed tempus urna et pharetra. Urna duis convallis convallis tellus id interdum velit laoreet id.
                    </p>
                    <p className="my-7">
                        Diam maecenas ultricies mi eget lobortis elementum tellus molestie odio pellentesque diam volutpat commodo sed egestas egestas.
                    </p>
                </div>
                <div className="flex items-center gap-5">
                    <div>
                        <img className="rounded-full w-18 h-18" src="/profile.png" alt="" />
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold">Amelia Simpsons</h3>
                        <p>Blogger / Nomad Traveler / Florida</p>
                    </div>
                </div>
            </div>

            <div className="relative">
                <img className="rounded-3xl w-[70rem] h-[25rem] " src="/vid.webp" alt="" />
                <span className="absolute top-[10.5rem] left-[40%] cursor-pointer">
                    <svg width="90px" height="90px" viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000" stroke-width="0.8399999999999999"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.288"></g><g id="SVGRepo_iconCarrier"> <path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="#ffffff"></path> <path d="M15.4137 13.059L10.6935 15.8458C9.93371 16.2944 9 15.7105 9 14.7868V9.21316C9 8.28947 9.93371 7.70561 10.6935 8.15419L15.4137 10.941C16.1954 11.4026 16.1954 12.5974 15.4137 13.059Z" fill="#ffffff"></path> </g></svg>
                </span>
            </div>
        </div>

        <div className="flex justify-between items-center gap-15 mx-50 mb-30">
            <div className="grid grid-cols-2 gap-7 w-1/2">
                <img src="/vac1.jpg" alt="" />
                <img src="/vac2.jpg" alt="" />
                <img src="/vac3.jpg" alt="" />
                <img src="/vac4.jpg" alt="" />
            </div>
            <div>
                <h1 className="text-4xl font-bold">Volutpat Lacus Laoreet Non Curabitur</h1>
                <p className="py-7">
                    Malesuada fames ac turpis egestas sed tempus urna et pharetra. Urna duis convallis convallis tellus id interdum velit laoreet id.
                </p>
                <p className="pb-7">
                    Diam maecenas ultricies mi eget lobortis elementum tellus molestie odio pellentesque diam volutpat commodo sed egestas egestas.
                </p>
                <button className="border-2 border-gray-400 px-10 py-4 font-medium transition duration-300 hover:bg-gray-400 hover:text-white cursor-pointer">Explore Now</button>
            </div>
        </div>

        <Footer />
    </div>
    
  )
}

export default Home;
