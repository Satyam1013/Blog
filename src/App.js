import "./App.css";
import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Card,
  Collapse,
} from "@material-tailwind/react";

export default function App() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Pages
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Account
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Blocks
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Docs
        </a>
      </Typography>
    </ul>
  );

  return (
    <>
      <Navbar className="sticky inset-0 z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4">
        <div className="flex items-center justify-between text-blue-gray-900">
          <img className="w-14 md:w-20 lg:w-28" src="logo.png" alt="logo" />
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            <Button
              variant="gradient"
              size="sm"
              className="hidden lg:inline-block"
            >
              <span>Sign In</span>
            </Button>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <Collapse open={openNav}>
          {navList}
          <Button variant="gradient" size="sm" fullWidth className="mb-2">
            <span>Buy Now</span>
          </Button>
        </Collapse>
      </Navbar>
      <div className="mx-auto max-w-screen-md py-12">
        <h1 className="text-center text-3xl md:text-6xl lg:text-8xl py-5 -mt-10 md:-mt-16 mb-10 font-extralight text-[#3da8da]">
          Create a blog worth sharing
        </h1>
        <h1 className="w-4/5 text-md text-center m-auto -mt-10 mb-10 text-[#3da8da]">
          Get a full suite of intuitive design features and powerful marketing
          tools to create a unique blog that leaves a lasting impression.
        </h1>
        <div className="m-auto justify-center flex mb-10">
        <button className="bg-white hover:bg-gray-100 font-semibold py-2 px-4 border border-gray-400 rounded-full shadow justify-center m-auto text-[#3da8da]">
          Start Blogging
        </button>
        </div>
        
        <Card className="mb-12 overflow-hidden">
          <img
            alt="poster"
            className="md:h-[32rem] w-full md:object-cover md:object-center"
            src="https://static.wixstatic.com/media/0784b1_7c171ccfee9c478982bfa6208247a648~mv2.jpg/v1/fill/w_1899,h_893,al_t,q_85,usm_0.66_1.00_0.01,enc_auto/0784b1_7c171ccfee9c478982bfa6208247a648~mv2.jpg"
          />
        </Card>
        <h1 className="text-5xl -mt-20 mb-10 font-bold">
        The powerful infrastructure behind your blog
        </h1>
        <div className="container m-auto grid grid-cols-3 gap-4">
          <div>
            <h1 className="font-bold">Secure platform</h1>
            <p>Our world class experts and enterprise-grade security system work 24/7 so your audiences' information will always be kept safe and secure.</p>
          </div>
          <div>
            <h1 className="font-bold">Reliable hosting</h1>
            <p>With free website hosting on a worldwide CDN, your site is automatically backed up and will be able to handle any situation - from traffic spikes to outages - so you’ll always be up and running.</p>
          </div>
          <div>
            <h1 className="font-bold">Faster loading</h1>
            <p>We have a performance-first culture, meaning our priority is providing the best user experience for you and your visitors, with faster loading sites that perform great on any device.</p>
          </div>

        </div>
      </div>
    </>
  );
}