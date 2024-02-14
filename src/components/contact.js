import { useState } from "react";

function Contact() {
  const [animating, setAnimating] = useState(false);
  const [showApp, setShowApp] = useState(false);

  const submitPhase1 = 1100;
  const submitPhase2 = 400;
  const logoutPhase1 = 800;

  function ripple(e) {
    // Ripple logic here
  }

  function handleLoginSubmit(e) {
    if (animating) return;
    setAnimating(true);
    ripple(e);
    setTimeout(() => {
      setAnimating(false);
      setShowApp(true);
    }, submitPhase1);
  }

  function handleLogout(e) {
    if (animating) return;
    // Logout logic here
  }

  return (
    <div className="cont h-screen bg-cover overflow-auto">
      <div className="demo absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 overflow-hidden">
        <div
          className={`login relative h-full bg-gradient-to-b from-purple-300 to-black transition-opacity transition-transform ${
            showApp
              ? "inactive opacity-0 scale-110"
              : "active opacity-100 scale-100"
          }`}
        >
          <div className="login__check absolute top-16 left-52 w-56 h-12 bg-white transform origin-bottom-left rotate-45">
            <div className="before absolute left-0 bottom-full w-10 h-20 bg-white shadow-inner"></div>
          </div>
          <div className="login__form absolute top-1/2 left-0 w-full h-1/2 px-6 text-center transform -translate-y-1/2">
            {/* Rest of the login form */}
            <button
              type="button"
              className={`login__submit relative w-full h-16 mt-20 text-white bg-pink-500 text-lg rounded-full cursor-pointer overflow-hidden transition-width transition-font-size ${
                animating ? "processing w-16" : "w-full"
              }`}
              onClick={handleLoginSubmit}
            >
              Sign in
              <span
                className={`after absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 border-2 border-white border-dotted rounded-full opacity-0 ${
                  animating ? "animate-spin" : ""
                }`}
              ></span>
            </button>
          </div>
        </div>
        {/* App component */}
        {showApp && (
          <div className="app absolute top-0 left-0 w-full h-full opacity-100 transition-opacity transition-transform scale-100">
            {/* App component content */}
            <div
              className="app__logout absolute bottom-12 right-12 w-24 h-24 mr-[-12px] mb-[-12px] bg-pink-600 text-white text-4xl flex items-center justify-center rounded-full cursor-pointer transition-all"
              onClick={handleLogout}
            >
              <svg className="app__logout-icon w-12 h-12" viewBox="0 0 20 20">
                <path d="M6,3 a8,8 0 1,0 8,0 M10,0 10,12" />
              </svg>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Contact;
