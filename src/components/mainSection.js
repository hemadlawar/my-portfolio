import React from "react";
import Me from "../images/me.PNG";
import { useState } from "react";
import Modal from "./modal";

export default function MainSection() {
  const [showModal, setShowModal] = useState(false);

  const eventHandling = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="container mx-auto px-4">
      <div className="relative flex flex-col overflow-hidden rounded-xl bg-clip-border text-sky-600 shadow-md w-full md:w-9/12 h-veryHigh mx-auto mt-8 md:ml-0 md:mt-24">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="p-6">
            <h1 className="block font-sans text-4xl md:text-5xl font-bold antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              Hello!
            </h1>
            <p className="text-xl md:text-3xl mt-4">
              Welcome to my profile page! <br />
              I'm Hema Dlawar, a software engineer who loves web development.
              <br /> I'm good at picking up new things quickly. I enjoy staying
              updated on the latest trends in web development.
              <br /> Learning is my thing, and I'm always eager to tackle new
              topics
            </p>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-8 md:mt-12 md:w-56 md:h-12"
              onClick={eventHandling}
            >
              View my Resume
            </button>
          </div>

          {/** portfolio picture */}
          <div className="relative overflow-hidden text-sky-600 bg-transparent rounded-none shadow-none bg-clip-border w-full md:w-custom h-custom mt-8 md:mt-14 md:mr-10">
            <img
              src={Me}
              alt="ui/ux review check"
              className="w-full h-full object-cover"
            />
          </div>
          <div></div>
        </div>
      </div>
      {showModal && <Modal showModal={showModal} setShowModal={setShowModal} />}
    </div>
  );
}
