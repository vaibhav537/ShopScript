import { useSession, signIn, signOut } from "next-auth/react";
import { Comfortaa } from "next/font/google";
import Nav from "@/components/Nav";
import { useState } from "react";

const comfortaa = Comfortaa({ subsets: ["latin"] });

const Layout = ({ children }) => {
  const { data: session } = useSession();
  const [showNav, setShowNav] = useState(false);

  if (!session) {
    return (
      <div className="bg-slate-800 dev w-screen flex items-center h-screen">
        <div className="text-center w-full">
          <button
            onClick={() => signIn("google")}
            className="bg-white px-4 py-1 rounded-lg"
          >
            Sign In with Google
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`bg-slate-800 overflow-hidden min-h-screen  text-slate-300   ${comfortaa.className}   select-none`}
    >
      <div className="flex md:hidden">
        <button
          onClick={() => setShowNav(!showNav)}
          className="bg-slate-600 text-black rounded-r-lg pl-3 pr-2 hover:text-white transition-all duration-500 hover:bg-slate-700 mt-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
            />
          </svg>
        </button>
        <div className="flex gap-4 text-lg mt-3 ml-10">
          <img src="MainLogo.png" alt="..." className="w-6 h-6 invert " />
          <span>ShopScript Admin</span>
        </div>
      </div>
      <div className={`flex`}>
        <Nav show={showNav} />
        <div className="bg-slate-600 overflow-hidden mt-2 mr-2 flex-grow rounded-lg p-4 mb-2">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
