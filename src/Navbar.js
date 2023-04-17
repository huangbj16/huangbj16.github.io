import { Outlet, Link } from "react-router-dom";

export default function Navbar() {
  return (
      <div>
        <nav className="fixed top-0 left-0 w-full bg-white shadow-sm px-8 md:px-20 lg:px-40 py-4 flex justify-between items-center z-50">
            <Link to="/"><h1 className="font-burtons text-lg">Per aspera ad astra</h1></Link>
            <ul className="flex items-center">
                <Link className="px-4 py-2 bg-gradient-to-r from-cyan-500 text- to-teal-500 bg-blue-300 rounded-md ml-8 text-white" to="/aboutme">About Me</Link>
                <Link className="px-4 py-2 bg-gradient-to-r from-cyan-500 text- to-teal-500 bg-blue-300 rounded-md ml-8 text-white" to="/portfolio">Portfolio</Link>
                <a className="px-4 py-2 bg-gradient-to-r from-cyan-500 text- to-teal-500 bg-blue-300 rounded-md ml-8 text-white" href="https://huangbj16.github.io/cv/cv_BingjianHuang.pdf">CV</a>
                <Link className="px-4 py-2 bg-gradient-to-r from-cyan-500 text- to-teal-500 bg-blue-300 rounded-md ml-8 text-white" to="/ideas">Ideas</Link>
            </ul>
        </nav>
      </div>
  );
}
