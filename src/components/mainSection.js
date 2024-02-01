import React from "react";
import Me from "../images/me.PNG";
export default function MainSection() {
  return (
    // --- main section

    <div className="relative flex  flex-col overflow-hidden rounded-xl  bg-clip-border text-sky-600 shadow-md     w-9/12   h-veryHigh   ml-36 mt-24">
      <div className=" flex justify-between">
        <div className="p-6 ">
          <h1 className="block font-sans text-5xl md:font-bold  antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
            Hello!
          </h1>
          <p className="text-3xl mt-4">
            {" "}
            welcome to my profile page! <br />
            I'm Hema Dlawar, a software engineer who loves web development.
            <br /> I'm good at picking up new things quickly. I enjoy staying
            updated on the latest trends in web development.
            <br /> Learning is my thing, and I'm always eager to tackle new
            topics
          </p>
          <button>my resume</button>
        </div>

        {/** portfolio picture */}

        <div className="relative overflow-hidden text-sky-600bg-transparent rounded-none shadow-none bg-clip-border w-custom h-custom mt-14 mr-10">
          <img
            src={Me}
            alt="ui/ux review check"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div></div>
    </div>
  );
}
