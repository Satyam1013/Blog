import React from "react";
import {
  Card,
} from "@material-tailwind/react";

export default function Home() {

  return (
    <>
      
      <div className="mx-auto max-w-screen-md py-12">
        <h1 className="text-center text-3xl md:text-6xl lg:text-8xl py-5 -mt-10 md:-mt-16 mb-10 font-extralight text-[#3da8da]">
          Create a blog worth sharing
        </h1>
        <h1 className="w-4/5 text-md text-center m-auto -mt-10 mb-10 text-[#3da8da] ">
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
