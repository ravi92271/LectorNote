import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="flex flex-row items-center justify-between px-22 py-7 font-primary">
      <Link to="/homepage" className="text-white text-xl font-semibold">
        LectorNote
      </Link>
      <nav className="flex gap-6 text-white items-center">
        <Link to="/homepage" className="hover:scale-110 transition">
          Home
        </Link>
        <Link to="/contact" className="hover:scale-110 transition">
          Contact Us
        </Link>
        <Link to="/login" className="text-black hover:scale-105 transition">
          <button className="bg-white rounded-md px-7 py-1 cursor-pointer">
            Login
          </button>
        </Link>
      </nav>
    </header>
  );
}

//add a condition to the login s.t. when you enter information, you have "Hello _____!"
