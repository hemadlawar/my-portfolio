import React from "react";

export default function MainSection() {
  return (
    <div className="relative flex  flex-col overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-md ml-8 mt-10  w-11/12 bg-slate-600 ">
      <div className="relative m-0 overflow-hidden text-gray-700 bg-transparent rounded-none shadow-none bg-clip-border">
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80"
          alt="ui/ux review check"
        />
      </div>

      <div className="p-6">
        <h4 className="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
          UI/UX Review Check
        </h4>
        <p className="block mt-3 font-sans text-xl antialiased font-normal leading-relaxed text-gray-700">
          hello my name is hema dlawar i'm 22 years old ... regards
        </p>
      </div>
      <div className="flex items-center justify-between p-6 ">
        <div className="flex items-center -space-x-3">
          <img
            alt="natali craig"
            src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1061&amp;q=80"
            className="relative inline-block h-9 w-9 !rounded-full  border-2 border-white object-cover object-center hover:z-10"
          />
          <img
            alt="Tania Andrew"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
            className="relative inline-block h-9 w-9 !rounded-full  border-2 border-white object-cover object-center hover:z-10"
          />
        </div>
        <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
          January 1u9
        </p>
      </div>
    </div>
  );
}
