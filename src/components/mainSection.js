import React from "react";
import Me from "../images/me.PNG";
export default function MainSection() {
  return (
    // --- main section

    <div className="relative flex  flex-col overflow-hidden rounded-xl  bg-clip-border text-sky-600 shadow-md     w-9/12   h-veryHigh   ml-36 mt-24">
      <div className=" flex justify-between">
        <div className="p-6 ">
          <h4 className="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
            UI/UX Review Check
          </h4>
          <p className="block mt-3 font-sans text-xl antialiased font-normal leading-relaxed text-sky-600 ">
            hello my name is hema dlawar i'm 22 years old ... regards
          </p>
        </div>
        <div>
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
    </div>
  );
}
