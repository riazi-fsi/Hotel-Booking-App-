import React from 'react'

function Navbar() {
    const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="relative bg-slate-400 w-full flex flex-wrap justify-between  py-3  mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-black"
              href="#pablo"
            >
              RayHotel
            </a>
            <button
              className="text-black cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-black rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              click
              
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs font-bold leading-snug text-black hover:opacity-75"
                  href="/register"
                >
                  <i className="text-lg leading-lg text-black opacity-75"></i><span className="ml-2">Register</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs  font-bold leading-snug text-black hover:opacity-75"
                  href="/login"
                >
                  <i className=" text-lg leading-lg text-black opacity-75"></i><span className="ml-2">Login</span>
                </a>
              </li>
             
            </ul>
          </div>
        </div>
      </nav>
      </>
  )
}

export default Navbar