import React from "react";

export default function MainSection() {
  return (
    // --- main section

    <div className="relative flex  flex-col overflow-hidden rounded-xl  bg-clip-border text-gray-50 shadow-md    bg-slate-600 w-9/12  h-custom   ml-36 mt-24">
      <div className=" flex justify-between">
        <div className="p-6 ">
          <h4 className="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
            UI/UX Review Check
          </h4>
          <p className="block mt-3 font-sans text-xl antialiased font-normal leading-relaxed text-gray-50  ">
            hello my name is hema dlawar i'm 22 years old ... regards
          </p>
        </div>

        {/** portfolio picture */}

        <div className="relative  overflow-hidden text-gray-50 bg-transparent rounded-none shadow-none bg-clip-border  w-custom    ">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80"
            alt="ui/ux review check"
            className="  "
          />
        </div>
      </div>
    </div>
  );
}
