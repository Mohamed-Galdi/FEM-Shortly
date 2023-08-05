import { useState } from "react";
function Layout(props) {
  const [mobileMenu, setMobileMenu] = useState(false);
  const toggelMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <>
      <div className="font-shortly">
        {/* --------------------------------------------- Header -------------------------------------- */}

        <header className="mx-auto max-w-screen-lg font-shortly text-base pt-8 text-shortly_grayishViolet bg-white mb-40 md:h-fit h-screen  ">
          {/* --------------------------------------------- NavBar  -------------------------------------- */}
          <nav className=" flex justify-between f-fit items-center">
            <div className="flex justify-center gap-12">
              <img className="md:ms-0 ms-10" src="images/logo.svg" alt="logo" />
              <ul className=" gap-6 font-bold  md:flex hidden  ">
                <li className="hover:text-shortly_VeryDarkBlue hover:cursor-pointer">
                  Features
                </li>
                <li className="hover:text-shortly_VeryDarkBlue hover:cursor-pointer">
                  Pricing
                </li>
                <li className="hover:text-shortly_VeryDarkBlue hover:cursor-pointer">
                  Resources
                </li>
              </ul>
            </div>
            <div className="md:flex hidden gap-6 font-bold">
              <button className="hover:text-shortly_VeryDarkViolet">
                Login
              </button>
              <button className=" bg-shortly_pr_cyan rounded-3xl text-white px-4 py-2 hover:bg-shortly_pr_cyan/[0.6]">
                Sign up
              </button>
            </div>
            <div
              className="md:hidden block me-10 hover:cursor-pointer"
              onClick={toggelMobileMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="2em"
                viewBox="0 0 448 512"
                style={{ fill: "#96a0b0" }}
              >
                <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
              </svg>
            </div>
          </nav>
          {/* --------------------------------------------- Mobile menu  -------------------------------------- */}

          <div
            className={`${
              mobileMenu ? "absolute" : "hidden"
            } md:hidden flex flex-col justify-center gap-10 items-center  font-bold font-shortly text-white  w-5/6 rounded-xl py-6 top-20 bg-shortly_pr_darkViolet z-50 mx-10 $`}
          >
            <ul className="flex flex-col gap-8 text-center border-b-2 border-shortly_ntrl_gray w-4/5 py-4">
              <li className="hover:text-shortly_pr_cyan hover:cursor-pointer">
                Features
              </li>
              <li className="hover:text-shortly_pr_cyan hover:cursor-pointer">
                Pricing
              </li>
              <li className="hover:text-shortly_pr_cyan hover:cursor-pointer">
                Resources
              </li>
            </ul>
            <div className="flex flex-col gap-4 text-center w-4/5 ">
              <button className="hover:border hover:border-shortly_pr_cyan hover:rounded-2xl py-2 border border-shortly_pr_darkViolet">
                Login
              </button>
              <button className="bg-shortly_pr_cyan hover:bg-shortly_pr_cyan/[0.7] py-2 rounded-3xl">
                Sign Up
              </button>
            </div>
          </div>

          {/* --------------------------------------------- Hero  -------------------------------------- */}
          <div className=" flex md:flex-row md:gap-0 gap-8 flex-col justify-between mt-16 h-[400px] ">
            <div className="flex flex-col justify-center items-start w- gap-6">
              <h1 className="md:text-6xl font-extrabold md:w-full w-4/5 md:text-start text-center mx-auto text-5xl text-shortly_VeryDarkBlue ">
                More than just shorter links
              </h1>
              <p className="md:w-full w-4/5 md:text-start text-center mx-auto">
                Build your brand’s recognition and get detailed insights on how
                your links are performing.
              </p>
              <button className="mx-auto md:mx-0 text-bold text-white bg-shortly_pr_cyan hover:bg-shortly_pr_cyan/[0.7] hover:cursor-pointer py-2 px-6 rounded-3xl">
                Get Started
              </button>
            </div>
            <div className="flex justify-center items-center  order-first md:order-last md:overflow-visible overflow-x-clip  ">
              <img
                src="images/illustration-working.svg"
                alt="illustration"
                className="relative md:-right-[150px] md:w-[1000px] w-5/6    "
              />
            </div>
          </div>
        </header>
        {/* --------------------------------------------- Main -------------------------------------- */}

        <main className="bg-[#eff1f7] ">
          {/* --------------------------------------------- Shorter  -------------------------------------- */}
          <div className="mx-auto max-w-screen-lg">{props.children}</div>

          {/* --------------------------------------------- Statics  -------------------------------------- */}
          <div className="mx-auto  max-w-screen-lg md:py-20 pt-12 md:gap-2 gap-4  flex flex-col items-center ">
            <h2 className=" text-4xl font-extrabold text-shortly_VeryDarkBlue">
              {" "}
              Advanced Statistics
            </h2>
            <p className="md:block hidden text-center text-lg text-shortly_grayishViolet font-medium md:mx-0 mx-10">
              {" "}
              Track how your links are performing across the web with our
              <br />
              advanced statistics dashboard.
            </p>
            <p className="md:hidden block text-center md:text-lg text-2xl text-shortly_grayishViolet font-medium md:mx-0 mx-10">
              {" "}
              Track how your links are performing
              <br />
              across the web with our advanced
              <br />
              statistics dashboard.
            </p>
            {/* --------------------------------------------- Cards horizental line (desktop)   -------------------------------------- */}
            <div className="h-2 w-full relative top-60  bg-shortly_pr_cyan md:block hidden"></div>

            {/* --------------------------------------------- Cards   -------------------------------------- */}
            <div className="flex">
              {/* --------------------------------------------- Cards vertical line (mobile) -------------------------------------- */}
              <div className="h-screen w-3  relative  left-1/2 top-12 block  bg-shortly_pr_cyan md:hidden  "></div>
              <div className="flex md:flex-row flex-col gap-6 justify-between relative md:-top-0  h-fit">
                <div className="md:w-1/3 z-10 mx-10 md:mx-0">
                  <div className="bg-shortly_pr_darkViolet p-5 rounded-full text-center w-[75px] relative md:left-8 left-[calc(50%-37.5px)] -bottom-10  ">
                    <img src="images/icon-brand-recognition.svg" alt="" />
                  </div>
                  <div className="bg-white p-5 rounded-md ">
                    <h3 className="mt-8 mb-4 font-extrabold text-lg font-shortly">
                      {" "}
                      Brand Recognition
                    </h3>
                    <p className=" text-shortly_grayishViolet font-medium">
                      Boost your brand recognition with each click. Generic
                      links don’t mean a thing. Branded links help instil
                      confidence in your content.
                    </p>
                  </div>
                </div>

                <div className="md:w-1/3 z-10 mx-10 md:mx-0 relative md:top-12 ">
                  <div className="bg-shortly_pr_darkViolet p-5 rounded-full text-center w-[75px] relative md:left-8 left-[calc(50%-37.5px)] -bottom-10  ">
                    <img src="images/icon-detailed-records.svg" alt="" />
                  </div>
                  <div className="bg-white p-5 rounded-md ">
                    <h3 className="mt-8 mb-4 font-extrabold text-lg font-shortly">
                      {" "}
                      Detailed Records
                    </h3>
                    <p className=" text-shortly_grayishViolet font-medium">
                      Gain insights into who is clicking your links. Knowing
                      when and where people engage with your content helps
                      inform better decisions.
                    </p>
                  </div>
                </div>

                <div className="md:w-1/3 z-10 mx-10 md:mx-0 relative md:top-24 ">
                  <div className="bg-shortly_pr_darkViolet p-5 rounded-full text-center w-[75px] relative md:left-8 left-[calc(50%-37.5px)] -bottom-10  ">
                    <img src="images/icon-fully-customizable.svg" alt="" />
                  </div>
                  <div className="bg-white p-5 rounded-md ">
                    <h3 className="mt-8 mb-4 font-extrabold text-lg font-shortly">
                      {" "}
                      Fully Customizable
                    </h3>
                    <p className=" text-shortly_grayishViolet font-medium">
                      Improve brand awareness and content discoverability
                      through customizable links, supercharging audience
                      engagement.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* --------------------------------------------- Boost Your Link   -------------------------------------- */}

          <div
            className=" mt-20 bg-shortly_pr_darkViolet h-[250px] bg-cover bg-center w-full flex flex-col justify-center gap-4 items-center  "
            style={{
              backgroundImage: "url('images/bg-boost-desktop.svg')",
            }}
          >
            <h2 className="text-white font-shortly md:text-5xl text-4xl font-bold">
              {" "}
              Boost your links today{" "}
            </h2>
            <botton className="bg-shortly_pr_cyan hover:bg-shortly_pr_cyan/[0.7] text-lg text-white font-bold px-6 py-2 rounded-3xl hover:cursor-pointer">
              {" "}
              Get Started
            </botton>
          </div>
        </main>
        {/* --------------------------------------------- Footer   -------------------------------------- */}
        <div className="bg-shortly_VeryDarkViolet ">
          <div className="flex md:flex-row flex-col justify-between items-center md:gap-0 gap-12 mx-auto max-w-screen-lg py-12 ">
            {/* --------------------------------------------- LOGO   -------------------------------------- */}
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="121" height="33">
                <path
                  fill="#fff"
                  d="M16.715 7.932c-.068-.09-.306-.26-.714-.51s-.918-.51-1.53-.782-1.281-.51-2.006-.714a8.005 8.005 0 00-2.176-.306c-1.995 0-2.992.669-2.992 2.006 0 .408.107.748.323 1.02.215.272.532.516.952.731.419.215.946.414 1.58.595l1.406.393.805.219c1.156.317 2.198.663 3.128 1.037.929.374 1.717.839 2.363 1.394a5.647 5.647 0 011.496 2.023c.35.793.527 1.745.527 2.856 0 1.36-.255 2.51-.765 3.451-.51.94-1.185 1.7-2.023 2.278-.84.578-1.802.997-2.89 1.258-1.088.26-2.21.391-3.366.391a19.68 19.68 0 01-5.44-.799c-.884-.26-1.74-.572-2.567-.935A14.358 14.358 0 01.53 22.28l2.448-4.862c.09.113.385.329.884.646.498.317 1.116.635 1.853.952.736.317 1.558.6 2.465.85.906.25 1.824.374 2.754.374 1.972 0 2.958-.6 2.958-1.802 0-.453-.148-.827-.442-1.122-.295-.295-.703-.561-1.224-.799a12.455 12.455 0 00-1.504-.56l-1.702-.495-.976-.288c-1.111-.34-2.074-.708-2.89-1.105-.816-.397-1.49-.856-2.023-1.377a5.003 5.003 0 01-1.19-1.802c-.261-.68-.391-1.473-.391-2.38 0-1.27.238-2.391.714-3.366a7.266 7.266 0 011.938-2.465 8.435 8.435 0 012.839-1.513c1.076-.34 2.215-.51 3.417-.51.838 0 1.666.08 2.482.238.816.159 1.598.363 2.346.612.748.25 1.445.533 2.09.85.647.317 1.242.635 1.786.952l-2.448 4.624zM40.139 25h-5.44V14.97c0-1.156-.227-2.006-.68-2.55-.454-.544-1.077-.816-1.87-.816-.318 0-.663.074-1.037.221a4.173 4.173 0 00-1.088.646 5.827 5.827 0 00-.97 1.003 4.4 4.4 0 00-.68 1.292V25h-5.44V.18h5.44v9.962a6.786 6.786 0 012.602-2.465c1.076-.578 2.26-.867 3.553-.867 1.201 0 2.17.21 2.907.629.736.42 1.303.952 1.7 1.598.396.646.663 1.371.799 2.176.136.805.204 1.592.204 2.363V25zm12.34.34c-1.519 0-2.873-.25-4.063-.748-1.19-.499-2.193-1.173-3.01-2.023a8.54 8.54 0 01-1.852-2.958 9.97 9.97 0 01-.63-3.519c0-1.224.21-2.397.63-3.519a8.54 8.54 0 011.853-2.958c.816-.85 1.819-1.53 3.009-2.04s2.544-.765 4.063-.765c1.519 0 2.867.255 4.046.765 1.179.51 2.176 1.19 2.992 2.04a8.754 8.754 0 011.87 2.958 9.736 9.736 0 01.646 3.519 9.97 9.97 0 01-.63 3.519 8.54 8.54 0 01-1.852 2.958c-.816.85-1.82 1.524-3.01 2.023-1.19.499-2.543.748-4.062.748zM48.5 16.092c0 1.405.374 2.533 1.122 3.383.748.85 1.7 1.275 2.856 1.275a3.59 3.59 0 001.564-.34c.476-.227.89-.544 1.24-.952a4.57 4.57 0 00.834-1.479 5.632 5.632 0 00.306-1.887c0-1.405-.374-2.533-1.122-3.383-.748-.85-1.689-1.275-2.822-1.275a3.702 3.702 0 00-2.84 1.292 4.57 4.57 0 00-.832 1.479 5.632 5.632 0 00-.306 1.887zm27.776-4.284c-1.315.023-2.505.238-3.57.646-1.065.408-1.836 1.02-2.312 1.836V25h-5.44V7.15h4.998v3.604c.612-1.201 1.4-2.142 2.363-2.822.963-.68 1.989-1.031 3.077-1.054h.544c.113 0 .227.011.34.034v4.896zm14.074 12.24a21.71 21.71 0 01-2.567.884c-.963.272-1.932.408-2.907.408-.68 0-1.32-.085-1.92-.255a4.286 4.286 0 01-1.582-.816c-.453-.374-.81-.867-1.07-1.479-.262-.612-.392-1.349-.392-2.21v-9.316h-2.278V7.15h2.278V1.472h5.44V7.15h3.638v4.114h-3.638v7.446c0 .59.147 1.014.442 1.275.295.26.669.391 1.122.391.408 0 .827-.068 1.258-.204.43-.136.805-.283 1.122-.442l1.054 4.318zM92.627.18h5.44v18.462c0 1.36.578 2.04 1.734 2.04.272 0 .572-.04.901-.119.329-.08.63-.198.901-.357l.714 4.08c-.68.317-1.462.567-2.346.748-.884.181-1.711.272-2.482.272-1.564 0-2.765-.408-3.604-1.224-.839-.816-1.258-1.995-1.258-3.536V.18zm11.456 27.506c.454.159.879.272 1.275.34a6.4 6.4 0 001.071.102c.658 0 1.168-.227 1.53-.68.363-.453.692-1.27.986-2.448l-6.8-17.85h5.61l4.148 13.192 3.57-13.192h5.1l-6.8 20.74a7.106 7.106 0 01-2.55 3.587c-1.224.918-2.674 1.377-4.352 1.377a8.17 8.17 0 01-1.377-.119 7.516 7.516 0 01-1.41-.391v-4.658z"
                />
              </svg>
            </div>
            {/* --------------------------------------------- Pages   -------------------------------------- */}
            <div className="flex text-white md:justify-around md:flex-row md:items-start text-center md:text-start md:gap-0 gap-6 items-center flex-col  w-1/2">
              <div>
                <h4 className="font-bold text-xl mb-4 ">Features</h4>
                <ul className="flex flex-col gap-2 text-normal text-shortly_grayishViolet ">
                  <li className="hover:text-shortly_pr_cyan hover:cursor-pointer">
                    Link Shortening
                  </li>
                  <li className="hover:text-shortly_pr_cyan hover:cursor-pointer">
                    Branded Links
                  </li>
                  <li className="hover:text-shortly_pr_cyan hover:cursor-pointer">
                    Analytics
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-xl mb-4 ">Resources</h4>
                <ul className="flex flex-col gap-2 text-normal text-shortly_grayishViolet ">
                  <li className="hover:text-shortly_pr_cyan hover:cursor-pointer">
                    Blog
                  </li>
                  <li className="hover:text-shortly_pr_cyan hover:cursor-pointer">
                    Developers
                  </li>
                  <li className="hover:text-shortly_pr_cyan hover:cursor-pointer">
                    Support
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-xl mb-4 ">Company</h4>
                <ul className="flex flex-col gap-2 text-normal text-shortly_grayishViolet ">
                  <li className="hover:text-shortly_pr_cyan hover:cursor-pointer">
                    About
                  </li>
                  <li className="hover:text-shortly_pr_cyan hover:cursor-pointer">
                    Our Team
                  </li>
                  <li className="hover:text-shortly_pr_cyan hover:cursor-pointer">
                    Careers
                  </li>
                  <li className="hover:text-shortly_pr_cyan hover:cursor-pointer">
                    Contact
                  </li>
                </ul>
              </div>
            </div>
            {/* --------------------------------------------- Social Links   -------------------------------------- */}
            <div className="flex justify-around items-center w-1/6 md:gap-0 gap-8">
              <a href="http://galdi.dev" target="_blank" className="group hover:cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 576 512"
                >
                  <path
                    className="group-hover:fill-shortly_pr_cyan "
                    fill="#FFF"
                    d="M528 160V416c0 8.8-7.2 16-16 16H320c0-44.2-35.8-80-80-80H176c-44.2 0-80 35.8-80 80H64c-8.8 0-16-7.2-16-16V160H528zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM272 256a64 64 0 1 0 -128 0 64 64 0 1 0 128 0zm104-48c-13.3 0-24 10.7-24 24s10.7 24 24 24h80c13.3 0 24-10.7 24-24s-10.7-24-24-24H376zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24h80c13.3 0 24-10.7 24-24s-10.7-24-24-24H376z"
                  />
                </svg>
              </a>
              <a
                href="https://github.com/Mohamed-Galdi/"
                target="_blank"
                className="group hover:cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 496 512"
                >
                  <path
                    className="group-hover:fill-shortly_pr_cyan "
                    fill="#FFF"
                    d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                  />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/mohamed-galdi/" target="_blank"
                className="group hover:cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="#FFF"
                    className="group-hover:fill-shortly_pr_cyan "
                    d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
                  />
                </svg>
              </a>
              <a
                href="https://twitter.com/GaldiMohamed"
                target="_blank"
                className="group hover:cursor-pointer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="20">
                  <path
                    className="group-hover:fill-shortly_pr_cyan "
                    fill="#FFF"
                    d="M24 2.557a9.83 9.83 0 01-2.828.775A4.932 4.932 0 0023.337.608a9.864 9.864 0 01-3.127 1.195A4.916 4.916 0 0016.616.248c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 011.671 1.149a4.93 4.93 0 001.523 6.574 4.903 4.903 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.928 4.928 0 004.6 3.419A9.9 9.9 0 010 17.54a13.94 13.94 0 007.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0024 2.557z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Layout;
