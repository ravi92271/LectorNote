import Header from "../global/header";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center">
        <TypeAnimation
          sequence={["Simplify your note-taking\nexperience"]}
          wrapper="h1"
          speed={30}
          className="text-white text-7xl font-primary font-extrabold py-8 whitespace-pre-line"
          repeat={0}
          cursor={false}
        />
        <h2 className="text-cool-toned-gray/70 justify-left text-2xl">
          Effortlessly convert your lecture notes into easily annotatable and
          shareable <br /> files compatible with Notability, GoodNotes, and
          more.
        </h2>
        <Link to="/upload" className="text-white hover:scale-105 transition ">
          <button className="text-lg rounded-xl bg-blue-400 px-4 py-2 mt-5 cursor-pointer">
            Upload PDF
          </button>
        </Link>
      </main>
    </>
  );
}

//Make sure when the typing animation happens, you dont have a shift