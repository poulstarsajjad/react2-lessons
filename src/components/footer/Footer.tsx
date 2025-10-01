import Container from "../container/Container";

function Footer() {
  return (
    <div className="bg-[url('/5555555555.jpg')] bg-cover bg-center w-full h-[25rem] relative">
        <Container>
            <div className="flex text-white justify-between items-center gap-2 py-15">
                <div>
                    <h3 className="text-xl font-bold mb-4">About Us</h3>
                    <p>
                        About Organization
                        <br />
                        Our Journeys
                        <br />
                        Our Partners
                    </p>
                </div>
                <div>
                    <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                    <p>
                        Introduction
                        <br />
                        Organisation Team
                        <br />
                        Press Enquiries
                    </p>
                </div>
                <div>
                    <h3 className="text-xl font-bold mb-4">Important Links</h3>
                    <p>
                    Privacy Policy
                    <br />
                    Cookies Policy
                    <br />
                    Terms & Conditions
                    </p>
                </div>
                <div className="flex flex-col">
                    <div className="flex items-center gap-3">
                        <span>
                            <svg fill="#ffffff" width="40px" height="40px" viewBox="0 0 24 24" data-name="Layer 1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><title></title><path d="M12,2a8,8,0,0,0-8,8c0,5.4,7,11.5,7.35,11.76l.65.56.65-.56C13,21.5,20,15.4,20,10A8,8,0,0,0,12,2Zm0,12a4,4,0,1,1,4-4A4,4,0,0,1,12,14Z"></path><circle cx="12" cy="10" r="2"></circle></g></svg>
                        </span>
                        <h3 className="flex flex-col">
                            <span className="text-lg font-medium">Address:</span>
                            <span>Street Name, NY 38954</span>
                        </h3>
                    </div>

                    <div className="flex items-center my-10 gap-3">
                        <span>
                            <svg fill="#ffffff" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="40px" height="40px" viewBox="0 0 512 512" enableBackground="new 0 0 512 512" xmlSpace="preserve"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M256,0C114.609,0,0,114.609,0,256s114.609,256,256,256s256-114.609,256-256S397.391,0,256,0z M256,472 c-119.297,0-216-96.703-216-216S136.703,40,256,40s216,96.703,216,216S375.297,472,256,472z"></path> <path d="M327.125,383.969c5.703,0.016,56.875-37.828,56.875-42.656s-57.266-40.906-62.219-40.906s-21.578,19.938-26.062,22.156 c-4.5,2.219-32.5,1.422-63.703-29.781c-31.219-31.188-41.875-67.109-41.875-72.75s26.031-23.062,26.75-27.156 S182.578,128,176.891,128S128,180.5,128,184.875s3.953,60.656,75.219,131.906S321.422,383.938,327.125,383.969z"></path> </g></svg>
                        </span>
                        <h3 className="flex flex-col">
                            <span className="text-lg font-medium">Phone:</span>
                            <span>578-393-4937</span>
                        </h3>
                    </div>

                    <div className="flex items-center gap-3">
                        <span>
                            <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 18H12.01M11 6H13M9.2 21H14.8C15.9201 21 16.4802 21 16.908 20.782C17.2843 20.5903 17.5903 20.2843 17.782 19.908C18 19.4802 18 18.9201 18 17.8V6.2C18 5.0799 18 4.51984 17.782 4.09202C17.5903 3.71569 17.2843 3.40973 16.908 3.21799C16.4802 3 15.9201 3 14.8 3H9.2C8.0799 3 7.51984 3 7.09202 3.21799C6.71569 3.40973 6.40973 3.71569 6.21799 4.09202C6 4.51984 6 5.07989 6 6.2V17.8C6 18.9201 6 19.4802 6.21799 19.908C6.40973 20.2843 6.71569 20.5903 7.09202 20.782C7.51984 21 8.07989 21 9.2 21Z" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                        </span>
                        <h3 className="flex flex-col">
                            <span className="text-lg font-medium">Mobile:</span>
                            <span>578-393-4937</span>
                        </h3>
                    </div>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Footer;
