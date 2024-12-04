import logo from "../assets/logo.png";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-start relative bg-black text-white py-3 px-3 ">
      <div className="logo">
        <Image src={logo} className="absolute" alt="Logo" width={35} height={35} />
      </div>
      <ul className="flex items-center gap-5">
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
      </ul>
    </nav>
  );
};

export default Navbar;
