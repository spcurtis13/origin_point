// components/VerticalNavbar.js
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../public/OriginPoint_Logo.jpg'

const VerticalNavbar = () => {
  return (
    <div className="flex flex-col items-center w-64 h-screen shadow-md bg-white">
      <div className="p-4">
        <Image src={logo} alt="Logo" width={500} height={100} />
      </div>
      <nav className="flex flex-col space-y-3">
        <Link href="/app/profile" className="p-3 hover:bg-gray-100">Profile</Link>
        <Link href="/app/students" className="p-3 hover:bg-gray-100">Students</Link>
        <Link href="/app/mentors" className="p-3 hover:bg-gray-100">Mentors</Link>
      </nav>
    </div>
  );
};

export default VerticalNavbar;
